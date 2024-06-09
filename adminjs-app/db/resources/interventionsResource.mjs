import importExportFeature from '@adminjs/import-export';

import { InterventionsModel } from '../entities/Interventions/InterventionsModel.mjs';
import { InterventionsQuestionsEquipmentModel } from '../entities/Interventions/InterventionsQuestionsEquipmentModel.mjs';
import { InterventionsQuestionsModel } from '../entities/Interventions/InterventionsQuestionsModel.mjs';
import { InterventionsQuestionTypesModel } from '../entities/Interventions/InterventionsQuestionTypesModel.mjs';
import { InterventionsTypesModel } from '../entities/Interventions/InterventionsTypesModel.mjs';
import { UsersModel } from '../entities/Users/UserModel.mjs';

//  components import
import { componentLoader } from '../../setUp/componentLoader.mjs';
import { Components } from '../../components/components.mjs';

import interventionsFormLayout from '../../formConfigs/interventionsFormLayout.mjs';

import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const interventionsNavigation = {
  name: 'Interventions Configuration  ',
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
        },
        // new: {
        //   component: Components.InterventionsEditNew,
        // },
      },

      listProperties: [
        'site_id',
        'technicien_id',
        'intervention_type_id',
        'intervention_date',
        'equipment_type_id',
      ],

      properties: {
        site_id: {
          isTitle: true,
          components: {
            edit: Components.SingleSelect,
          },
          props: {
            label: 'Lieu?',
            tableName: 'sites',
            isVisible: true,
          },
        },
        technicien_id: {
          isTitle: true,
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

        produit_id: {
          isTitle: true,

          components: {
            edit: Components.SingleSelect,
          },
          props: {
            dependant: 'endroit_id',
            label: 'Sur quel produit est installé le puce?',
            tableName: 'equipment_produit',
            isVisible: true,
          },
        },
        endroit_id: {
          isTitle: true,

          components: {
            edit: Components.CustomSelect,
          },
          props: {
            parent: 'produit_id',
            dependant: 'equipment_type_id',
            label: 'A quel endroit?',
            tableName: 'equipment_endroit',
          },
        },
        equipment_type_id: {
          components: {
            edit: Components.CustomSelect,
          },

          props: {
            parent: 'endroit_id',
            label: "Type d'unité ",
            tableName: 'equipment_types',
            dependant: 'finalites',
          },
        },
        intervention_questions: {
          components: {
            edit: Components.InterventionsQuestionsComponent,
          },
        },
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const InterventionsQuestionsEquipmentResource = () => {
  return {
    resource: InterventionsQuestionsEquipmentModel,
    options: {
      navigation: interventionsNavigation,

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
      navigation: interventionsNavigation,

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
      navigation: interventionsNavigation,

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
      navigation: interventionsNavigation,

      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};
