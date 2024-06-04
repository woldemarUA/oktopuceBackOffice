import importExportFeature from '@adminjs/import-export';

// Entities import
import { EquipmentBrandsModel } from '../entities/Equipments/EqipmentBrandsModel.mjs';
import { EquipmentExtTypesModel } from '../entities/Equipments/EquipmentExtTypesModel.mjs';
import { EquipmentIntTypesModel } from '../entities/Equipments/EquipmentIntTypesModel.mjs';
import { EquipmentLocationsModel } from '../entities/Equipments/EquipmentLocationsModel.mjs';
import { EquipmentTypesModel } from '../entities/Equipments/EquipmentTypesModel.mjs';
import { EquipmentsModel } from '../entities/Equipments/EquipmentsModel.mjs';
import { EquipmentGasTypesModel } from '../entities/Equipments/EquipmentGasTypesModel.mjs';
import { EquipmentProduitModel } from '../entities/Equipments/EquipmentProduitModel.mjs';
import { EquipmentEndroitModel } from '../entities/Equipments/EquipmentEndroitModel.mjs';
import { NfcTagsModel } from '../entities/Equipments/NfcTagsModel.mjs';

//  components import
import { componentLoader } from '../../setUp/componentLoader.mjs';
import { Components } from '../../components/components.mjs';
// shared fields import

// import form config
import equipmentFormLayout from '../../actions/Equipment/equipmentFormLayout.mjs';

import {
  listVisibility,
  idVisibility,
} from './resourcesSharedFields/resourcesSharedFields.mjs';

const equipmentNavigation = {
  name: 'Equipments Configuration  ',
};

export const EquipmentsResource = async () => {
  return {
    resource: EquipmentsModel,
    features: [importExportFeature({ componentLoader })],

    options: {
      navigation: equipmentNavigation,
      actions: {
        new: {
          layout: equipmentFormLayout,
        },
      },
      properties: {
        site_id: { position: 1, label: 'Quel site ' },
        produit_id: {
          position: 2,
        },
        endroit_id: {
          position: 3,

          components: {
            edit: Components.CustomSelect,
          },
          props: {
            parent: 'produit_id',
            label: 'A quel endroit?',
            tableName: 'equipment_endroit',
          },
        },
        equipment_type_id: {
          position: 4,
          components: {
            edit: Components.CustomSelect,
          },

          props: {
            parent: 'endroit_id',
            label: "Type d'unité ",
            tableName: 'equipment_types',
          },
        },
        location_data: {
          components: {
            edit: Components.LocationInfoComponent,
          },
          props: {
            parent: 'endroit_id',
            isVisible: await EquipmentEndroitModel.is_location(),
            select: { value: 'location_id', label: 'Emplacement' },
            checkBox: {
              value: 'location_precision_checkBox',
              label: 'Précision',
            },
            textField: { value: 'location_precision', label: '' },
          },
        },

        finalites: {
          availableValues: [
            { value: 'is_plancher_chauffant', label: 'Plancher Chauffant' },
            {
              value: 'is_plancher_raffraichssant',
              label: 'Plancher Chauffant / Raffraichssant',
            },
            { value: 'is_radiateurs', label: 'Radiateurs' },
            { value: 'ventilo_convecteurs', label: 'Ventilo-convecteur(s)' },
          ],
          components: {
            edit: Components.CustomCheckBox,
          },

          props: {
            parent: 'equipment_type_id',
            isVisible: await EquipmentTypesModel.isFinalite(),
            label: 'Finalite(s)',
          },
        },
      },
    },
  };
};
// nfc_tag_id: { position: 5 },
// installation_date: { position: 6 },
// // end of parametrage
// location_id: { position: 7, isVisible: listVisibility },
// location_precision: { position: 8, isVisible: listVisibility },
// equipment_brand_id: { position: 9, isVisible: listVisibility },
// equipment_model: { position: 10, isVisible: listVisibility },
// serial_number: { position: 11, isVisible: listVisibility },
// remote_control_number: { position: 11, isVisible: listVisibility },
// gas_type_id: { isVisible: listVisibility },
// gas_weight: { isVisible: listVisibility },
// has_leak_detection: { isVisible: listVisibility },
// last_leak_detection: { isVisible: listVisibility },
// next_leak_detection: { isVisible: listVisibility },
// unite_exterieur_type_id: { isVisible: listVisibility },
// leak_detection_periodicity: { isVisible: listVisibility },
// ballon_capacite: { isVisible: listVisibility },
// unite_interieur_type_id: { isVisible: listVisibility },
// parent_equipment_id: { isVisible: listVisibility },
// created_at: { isVisible: false },
// updated_at: { isVisible: false },
// id: { isVisible: false },

export const EquipmentProduitResource = () => {
  return {
    resource: EquipmentProduitModel,
    options: {
      navigation: equipmentNavigation,

      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const EquipmentEndroitResource = () => {
  return {
    resource: EquipmentEndroitModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const EquipmentBrandsResource = () => {
  return {
    resource: EquipmentBrandsModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: false },
        updated_at: { isVisible: false },
        id: { isVisible: false },
      },
    },
  };
};

export const EquipmentExtTypesResource = () => {
  return {
    resource: EquipmentExtTypesModel,
    options: {
      navigation: equipmentNavigation,

      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const EquipmentIntTypesResource = () => {
  return {
    resource: EquipmentIntTypesModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const EquipmentLocationsResource = () => {
  return {
    resource: EquipmentLocationsModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const EquipmentTypesResource = () => {
  return {
    resource: EquipmentTypesModel,
    options: {
      navigation: equipmentNavigation,
      actions: {
        getEndroitIds: {
          actionType: 'resource',
          handler: async (request, response, context) => {
            try {
              const endroits = await EquipmentTypesModel.getEndroitIdsAll();
              return response.send({ endroits: [...endroits] }); // Ensure it's an array for JSON serialization
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

export const EquipmentGasTypesResource = () => {
  return {
    resource: EquipmentGasTypesModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};

export const NfcTagsResource = () => {
  return {
    resource: NfcTagsModel,
    options: {
      navigation: equipmentNavigation,
      properties: {
        created_at: { isVisible: listVisibility },
        updated_at: { isVisible: listVisibility },
        id: { isVisible: idVisibility },
      },
    },
  };
};
