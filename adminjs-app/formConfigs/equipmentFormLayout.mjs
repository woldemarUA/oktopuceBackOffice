import {
  sectionConfig,
  headingSectionConfig,
  rowConfig,
  cellConfig,
} from './commonConfigs.mjs';

const equipmentFormLayout = () => {
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

          [['parametrage']],
        ],
      ],
      [
        sectionConfig,
        [
          ['@H6', { children: 'Informations', style: headingSectionConfig }],
          //
          [
            { ...rowConfig, justifyContent: 'space-around' },
            [
              [['equipment_brand_id', cellConfig]],
              [['equipment_model', cellConfig]],
              [['unite_interieur_type_id', cellConfig]],
              [['unite_exterieur_type_id', cellConfig]],
            ],
          ],
          [
            { ...rowConfig, justifyContent: 'space-around' },
            [
              [['serial_number', cellConfig]],
              [['remote_control_number', cellConfig]],
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

export default equipmentFormLayout;
