import {
  sectionConfig,
  headingSectionConfig,
  rowConfig,
  cellConfig,
} from './commonConfigs.mjs';

const interventionsFormLayout = [
  {
    mx: 'auto',
  },
  [
    [
      '@Header',
      {
        children: 'Ajout Intervention',
        style: headingSectionConfig,
      },
    ],

    // SECTION
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
            ['technicien_id', cellConfig],
            ['client_id', cellConfig],
          ],
        ],
        [
          rowConfig,
          [
            ['intervention_type_id', { ...cellConfig, width: 2 / 3 }],
            // ['empty', { component: 'EmptyBreak', ...cellConfig, width: 1 / 3 }],
            ['intervention_date', { ...cellConfig, width: 1 / 3 }],
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

        [
          rowConfig,
          [
            ['additional_information', cellConfig],
            ['document_upload', cellConfig],
          ],
        ],
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

export default interventionsFormLayout;
