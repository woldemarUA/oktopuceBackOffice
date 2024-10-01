import importExportFeature from '@adminjs/import-export';

import { InterventionsModel } from '../entities/Interventions/InterventionsModel.mjs';
import { InterventionsQuestionsEquipmentModel } from '../entities/Interventions/InterventionsQuestionsEquipmentModel.mjs';
import { InterventionsQuestionsModel } from '../entities/Interventions/InterventionsQuestionsModel.mjs';
import { InterventionsQuestionTypesModel } from '../entities/Interventions/InterventionsQuestionTypesModel.mjs';
import { InterventionsTypesModel } from '../entities/Interventions/InterventionsTypesModel.mjs';

import { InterventionsDepQuestionsModel } from '../entities/Interventions/InterventionsDepQuestionsModel.mjs';
import { UsersModel } from '../entities/Users/UserModel.mjs';

//  components import
import { componentLoader } from '../../setUp/componentLoader.mjs';
import { Components } from '../../components/components.mjs';

import interventionsFormLayout from '../../formConfigs/interventionsFormLayout.mjs';
import interventionsShowLayout from '../../formConfigs/InterventionsShowLayout.mjs';

import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

import { getQuestions } from './actions/interventionsActions.mjs';

const interventionsNavigation = {
  name: 'Interventions',
};

export const InterventionsResource = async () => {
  return {
    resource: InterventionsModel,
    features: [importExportFeature({ componentLoader })],
    options: {
      navigation: interventionsNavigation,
      actions: {
        new: {
          layout: interventionsFormLayout,
          component: Components.EquipmentForm,
          after: async (response, request, context) => {
            const { record } = context;
            if (record.isValid() && record.id) {
              const parsedQuestions = JSON.parse(record.params['questions']);
              for (const question of parsedQuestions)
                await InterventionsQuestionsModel.create({
                  intervention_id: record.params.id,
                  question_type_id: question.id,
                  response: question.response,
                  parent_id: question.parent_id,
                });
            }
            return response;
          },
        },
        // goBack: {
        //   actionType: 'resource',
        //   icon: 'ChevronLeft',
        //   handler: async (request, response, context) => {
        //     // const { currentAdmin } = context;
        //     console.log('***********************');
        //     console.log(componentLoader);
        //     console.log('***********************');
        //     // const referer = request.headers.referer;
        //     const redirectUrl = '/';
        //     return {
        //       // record: context.record.toJSON(currentAdmin),
        //       redirectUrl: redirectUrl,
        //     };
        //   },
        //   component: false, // Disable the default component
        //   isVisible: true, // Ensure the action is visible in all views
        // },
        show: {
          layout: interventionsShowLayout,
        },
        edit: {
          layout: interventionsFormLayout,
          component: Components.EquipmentForm,
        },
      },

      listProperties: [
        'site_id',
        'technicien_id',
        'intervention_type_id',
        'intervention_date',
        'equipment_type_id',
      ],

      properties: {
        homeBtn: {
          components: {
            edit: Components.GoBackComponent,
          },
        },
        site_id: {
          isTitle: true,
          isRequired: true,
          components: {
            edit: Components.SingleSelect,
          },
          props: {
            label: 'Site?',
            tableName: 'sites',
            isVisible: true,
          },
        },
        technicien_id: {
          isTitle: true,
          isRequired: true,
          components: {
            edit: Components.SingleSelect,
          },
          props: {
            label: 'Technicien',
            tableName: 'users',
            isVisible: true,
            options: await UsersModel.getUserType(2),
          },
        },
        client_id: {
          isTitle: true,
          isRequired: true,
          components: {
            edit: Components.SingleSelect,
          },
          props: {
            label: 'Client',
            tableName: 'users',
            isVisible: true,
            options: [
              ...(await UsersModel.getUserType(1)),
              ...(await UsersModel.getUserType(5)),
            ],
          },
        },
        intervention_type_id: {
          isTitle: true,
          components: {
            edit: Components.SingleSelect,
          },
          props: {
            label: 'Intervention Type',
            tableName: 'intervention_types',
            isVisible: true,
          },
        },
        intervention_date: {
          components: {
            edit: Components.DateComp,
          },
          props: {
            label: "Date d'Intervention",
          },
        },

        intervention_type: {
          isRequired: true,
        },
        parametrage: {
          components: {
            edit: Components.ProductSelect,
            show: Components.ParametrageShowComponent,
          },
          props: {
            product: { table: 'clients', field: 'client_id', label: 'Client' },
            endroit: { table: 'sites', field: 'site_id', label: 'Site' },
            equipment: {
              table: 'equipments',
              field: 'equipment_id',
              label: 'Machine',
            },
          },
        },
        signature_client: {
          components: {
            edit: Components.SignatureComp,
            show: Components.ShowSignature,
          },
          props: {
            name: 'signature_client',
            label: 'Signature de Client',
          },
        },
        signature_technicien: {
          components: {
            edit: Components.SignatureComp,
            show: Components.ShowSignature,
          },
          props: {
            name: 'signature_technicien',
            label: 'Signature de Technicien',
          },
        },

        document_upload: {
          components: {
            edit: Components.FileUpload,
            show: Components.FileShow,
          },
          props: {
            name: 'document_upload',
            label: 'Ajout Document',
          },
        },
        intervention_questions: {
          components: {
            edit: Components.InterventionsQuestionsComponent,
            show: Components.InterventionQuestionsShow,
          },
        },
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const InterventionsDepQuestionsResource = async () => {
  return {
    resource: InterventionsDepQuestionsModel,
    features: [importExportFeature({ componentLoader })],

    options: {
      // navigation: interventionsNavigation,
      navigation: false,
      actions: {
        show: { isAccessible: false },
        getParentAll: {
          actionType: 'resource',
          isVisible: false,
          handler: async (request, response) => {
            try {
              const questions =
                await InterventionsDepQuestionsModel.getParentAll();
              return response.send({
                questions: [...questions],
              }); // Ensure it's an array for JSON serialization
            } catch (error) {
              return response.status(500).send({ error: error.message });
            }
          },
        },

        getDepQuestions: {
          actionType: 'resource',
          isVisible: false,
          handler: async (request, response) => {
            try {
              const { parent_q_id, child_q_id } = request.query;
              const questions =
                await InterventionsDepQuestionsModel.getDependentQuestions(
                  parent_q_id,
                  child_q_id
                );
              return response.send({
                questions: [...questions],
              }); // Ensure it's an array for JSON serialization
            } catch (error) {
              return response.status(500).send({ error: error.message });
            }
          },
        },
      },
    },
  };
};

export const InterventionsQuestionsEquipmentResource = () => {
  return {
    resource: InterventionsQuestionsEquipmentModel,
    options: {
      // navigation: interventionsNavigation,
      navigation: false,
      actions: {
        getInterventionQuestions: {
          actionType: 'resource',
          handler: async (request, response) => {
            try {
              const { intervention_type_id, equipment_type_id } = request.query;
              const questions =
                await InterventionsQuestionsEquipmentModel.getInterventionQuestions(
                  intervention_type_id,
                  equipment_type_id
                  // 3,
                  // 5
                );
              return response.send({
                questions: [...questions],
              }); // Ensure it's an array for JSON serialization
            } catch (error) {
              return response.status(500).send({ error: error.message });
            }
          },
          isVisible: false, // Optionally hide this action in the UI if not needed visibly
        },
      },
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const InterventionsQuestionsResource = () => {
  return {
    resource: InterventionsQuestionsModel,
    options: {
      // navigation: interventionsNavigation,
      navigation: false,
      actions: {
        getQuestions: {
          actionType: 'resource',
          handler: async (request, response) => {
            const { intervention_id } = request.query;
            try {
              const questions = await getQuestions(intervention_id);

              return response.send([...questions]); // Ensure it's an array for JSON serialization
            } catch (error) {
              return response.status(500).send({ error: error.message });
            }
          },
          isVisible: false, // Optionally hide this action in the UI if not needed visibly
        },
      },
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const InterventionsQuestionTypesResource = () => {
  return {
    resource: InterventionsQuestionTypesModel,
    options: {
      // navigation: interventionsNavigation,
      navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const InterventionsTypesResource = () => {
  return {
    resource: InterventionsTypesModel,
    options: {
      // navigation: interventionsNavigation,
      navigation: false,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};
