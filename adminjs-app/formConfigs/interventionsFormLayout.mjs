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
      sectionConfig,
      [
        [
          rowConfig,
          [
            [
              '@H6',
              {
                children: 'Informations générales',
                style: { ...headingSectionConfig, ...cellConfig },
              },
            ],

            // ['homeBtn', cellConfig],
          ],
        ],
        // Parametrage range
        [['parametrage']],

        // [
        //   rowConfig,
        //   [
        //     ['client_id', cellConfig],
        //     ['site_id', cellConfig],
        //     ['equipment_id', cellConfig],
        //   ],
        // ],
        [
          rowConfig,
          [
            ['technicien_id', cellConfig],
            ['intervention_type_id', cellConfig],

            ['intervention_date', cellConfig],
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
