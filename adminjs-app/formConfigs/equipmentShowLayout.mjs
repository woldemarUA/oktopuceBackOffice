import {
  sectionConfig,
  headingSectionConfig,
  rowConfig,
  cellConfig,
} from './commonConfigs.mjs';

const equipmentShowLayout = () => {
  return [
    {
      mx: 'auto',
    },
    [
      [
        sectionConfig,
        [
          ['@H6', { children: 'Parametrage', style: headingSectionConfig }],
          // Parametrage range

          [
            rowConfig,
            [
              ['site_id', cellConfig],
              ['nfc_tag_id', cellConfig],
              ['parent_equipment_id', cellConfig],
              ['installation_date', cellConfig],
            ],
          ],
          [
            rowConfig,
            [
              ['produit_id', cellConfig],
              ['endroit_id', cellConfig],
              ['equipment_type_id', cellConfig],
            ],
          ],

          // [['parametrage']],
        ],
      ],
      [
        sectionConfig,
        [
          ['@H6', { children: 'Informations', style: headingSectionConfig }],
          //
          [
            { ...rowConfig, justifyContent: 'flex-start' },
            [
              [['equipment_brand_id', cellConfig]],
              [['equipment_model', cellConfig]],
              [['serial_number', cellConfig]],
              [['remote_control_number', cellConfig]],
              [['unite_interieur_type_id', cellConfig]],
              [['unite_exterieur_type_id', cellConfig]],
            ],
          ],

          [rowConfig, [[['location_data', cellConfig]]]],
          [rowConfig, [['finalites', cellConfig]]],
          [rowConfig, [['gas_params', cellConfig]]],
        ],
      ],
    ],
  ];
};

export default equipmentShowLayout;
