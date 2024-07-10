import {
  sectionConfig,
  headingSectionConfig,
  rowConfig,
  cellConfig,
} from './commonConfigs.mjs';

const interventionsShowLayout = [
  {
    mx: 'auto',
  },
  [
    [
      sectionConfig,
      [
        [
          '@H6',
          { children: 'Informations générales', style: headingSectionConfig },
        ],
        // Parametrage range

        [
          rowConfig,
          [
            ['site_id', cellConfig],
            ['equipment_id', cellConfig],
            ['client_id', cellConfig],
          ],
        ],
        [
          rowConfig,
          [
            ['technicien_id', cellConfig],
            ['intervention_type_id', { ...cellConfig, width: 2 / 3 }],

            ['intervention_date', { ...cellConfig, width: 1 / 3 }],
          ],
        ],

        [['parametrage']],
      ],
    ],

    // SECTION
    [
      sectionConfig,
      [
        ['@H6', { children: 'Questions', style: headingSectionConfig }],
        [rowConfig, ['intervention_questions', cellConfig]],
      ],
    ],
    // SECTION
    [
      sectionConfig,
      [
        ['@H6', { children: 'Approval', style: headingSectionConfig }],

        [rowConfig, [['additional_information', cellConfig]]],
        [rowConfig, [['document_upload', cellConfig]]],
        [
          rowConfig,
          [
            ['signature_client', cellConfig],
            ['signature_technicien', cellConfig],
          ],
        ],
      ],
    ],
  ],
];

export default interventionsShowLayout;
