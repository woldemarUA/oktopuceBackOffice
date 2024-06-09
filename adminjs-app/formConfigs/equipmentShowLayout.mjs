const equipmentShowLayout = [
  [
    { mx: 'auto' },
    [
      ['@H4', { children: 'Parametrage' }],

      [
        {
          flexDirection: ['column', 'row'],
          flex: true,
          justifyContent: 'space-between',
        },
        [
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
          [
            'site_id',
            {
              flexGrow: 1,
              mb: '0.1rem',
              mr: '0.5rem',

              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
          [
            'nfc_tag_id',
            {
              flexGrow: 1,
              mb: '0.1rem',
              mr: '0.5rem',

              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
          [
            'installation_date',
            {
              flexGrow: 1,
              mb: '0.1rem',
              mr: '0.5rem',

              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
        ],
      ],

      // Parametrage range
      [
        {
          flexDirection: ['column', 'row'],
          flex: true,
          justifyContent: 'space-between',
        },

        [
          [
            'produit_id',
            {
              flexGrow: 1,
              mb: '0.1rem',
              mr: '0.5rem',

              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
          [
            'endroit_id',
            {
              flexGrow: 1,
              mb: '0.5rem',
              mr: '0.5rem',
              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
          [
            'equipment_type_id',
            {
              flexGrow: 1,
              mb: '0.5rem',
              mr: '0.5rem',
              width: 'auto',
              minWidth: 'fit-content',
            },
          ],
        ],
      ],
    ],
  ],
  [
    ['@H6', { children: 'Emplacement' }],
    [
      {
        flexDirection: ['column', 'row'],
        flex: true,
        justifyContent: 'space-between',
      },
      [
        [
          'location_id',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            // minWidth: 'fit-content',
          },
        ],
      ],
      [
        [
          'location_precision',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            // minWidth: 'fit-content',
          },
        ],
      ],
    ],
  ],
  // [
  //   [
  //     { flexDirection: 'row', flex: true },
  //     ['location_data', { pr: 'default', flexGrow: 1 }],
  //   ],
  // ],
  [
    [
      { flexDirection: 'row', flex: true },
      ['finalites', { pr: 'default', flexGrow: 1 }],
    ],
  ],

  [
    ['@H4', { children: 'Information' }],

    // Information range

    // Brand range
    [
      {
        flexDirection: ['column', 'row'],
        flex: true,
        justifyContent: 'space-between',
      },
      [
        [
          'equipment_brand_id',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
        [
          'equipment_model',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
        [
          'unite_exterieur_type_id',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
        [
          'unite_interieur_type_id',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
      ],
    ],

    // serial number range
    [
      {
        flexDirection: ['column', 'row'],
        flex: true,
        justifyContent: 'space-between',
      },
      [
        [
          'serial_number',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
        [
          'remote_control_number',
          {
            flexGrow: 1,
            mb: '0.1rem',
            mr: '0.5rem',

            width: 'auto',
            minWidth: 'fit-content',
          },
        ],
      ],
    ],
  ],

  // Finalites range
  // [
  //   [
  //     { flexDirection: 'row', flex: true },
  //     ['finalites', { pr: 'default', flexGrow: 1 }],
  //   ],
  // ],
  // Gas range
  [
    [
      { flexDirection: 'row', flex: true },
      [['gas_params', { pr: 'default', flexGrow: 1 }]],
    ],
  ],
];

export default equipmentShowLayout;
