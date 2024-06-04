const equipmentFormLayout = [
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
      // nfc_tag_id
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
    ['@H4', { children: 'Information' }],
    // Information range
    [
      {
        flexDirection: ['column', 'row'],
        flex: true,
        justifyContent: 'space-between',
      },
      [
        [
          'location_data',
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
  [
    [
      { flexDirection: 'row', flex: true },
      ['finalites', { pr: 'default', flexGrow: 1 }],
    ],
  ],
  // Gas range
  [
    [
      '@H6',
      {
        children: ['Gas paremeters'],
      },
    ],
    [
      { flexDirection: 'row', flex: true },
      [
        ['gas_type_id', { pr: 'default', flexGrow: 1 }],
        ['gas_weight', { flexGrow: 1 }],
      ],
    ],
    [
      { flexDirection: 'row', flex: true },
      [
        ['has_leak_detection', { pr: 'default', flexGrow: 1 }],
        ['leak_detection_periodicity', { flexGrow: 1 }],
      ],
    ],
  ],
];

export default equipmentFormLayout;
