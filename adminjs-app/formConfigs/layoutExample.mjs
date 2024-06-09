const layout = [
  { width: 1 / 2 }, // Overall width setting, if needed
  [
    [
      '@H4',
      {
        children: 'Informations générales',
        style: { color: 'blue', fontWeight: 'bold', marginBottom: '20px' },
      },
    ],
    'companyName',
    'companySize',
  ],
  [
    [
      '@H4',
      {
        children: 'Contact Info',
        style: { color: 'green', fontStyle: 'italic', marginBottom: '10px' },
      },
    ],
    [
      { flexDirection: 'row', flex: true },
      [
        [
          '@p',
          {
            children: 'Please provide your email and address:',
            style: { margin: '10px 0' },
          },
        ],
        ['email', { pr: 'default', flexGrow: 1 }],
        ['address', { flexGrow: 1 }],
      ],
    ],
  ],
  [
    [
      '@H4',
      {
        children: 'Additional Info',
        style: {
          color: 'red',
          textDecoration: 'underline',
          marginBottom: '15px',
        },
      },
    ],
    [
      { flexDirection: 'row', flex: true },
      [
        [
          '@div',
          {
            style: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
            children: [
              ['@span', { children: 'Phone', style: { fontWeight: 'bold' } }],
              'phone',
            ],
          },
        ],
        [
          '@div',
          {
            style: { display: 'flex', flexDirection: 'column', flexGrow: 1 },
            children: [
              ['@span', { children: 'Website', style: { fontWeight: 'bold' } }],
              'website',
            ],
          },
        ],
      ],
    ],
    [
      { flexDirection: 'row', flex: true },
      [
        [
          '@a',
          {
            href: 'https://www.linkedin.com',
            children: 'LinkedIn',
            style: { flexGrow: 1, color: 'blue', textDecoration: 'none' },
          },
        ],
        [
          '@a',
          {
            href: 'https://www.twitter.com',
            children: 'Twitter',
            style: { flexGrow: 1, color: 'blue', textDecoration: 'none' },
          },
        ],
      ],
    ],
  ],
];

const layoutSection = [
  [
    '@div',
    {
      style: {
        backgroundColor: '#f0f0f0', // Background color for the entire section
        border: '2px solid #ccc', // Border for the entire section
        padding: '20px', // Padding for the entire section
        borderRadius: '10px', // Optional: rounded corners
        marginBottom: '20px', // Space below the section
      },
      children: [
        [
          '@H4',
          {
            children: 'Contact Info',
            style: {
              color: 'green',
              fontStyle: 'italic',
              marginBottom: '10px',
            },
          },
        ],
        [
          { flexDirection: 'row', flex: true },
          [
            [
              '@p',
              {
                children: 'Please provide your email and address:',
                style: { margin: '10px 0' },
              },
            ],
            ['email', { pr: 'default', flexGrow: 1 }],
            ['address', { flexGrow: 1 }],
          ],
        ],
      ],
    },
  ],
];

const layoutResponsive = [
  [
    '@div',
    {
      style: {
        backgroundColor: '#f0f0f0',
        border: '2px solid #ccc',
        padding: '2rem', // Using rem units for padding
        borderRadius: '10px',
        marginBottom: '2rem', // Using rem units for margin-bottom
        '@media (max-width: 768px)': {
          // Breakpoint for tablets and smaller devices
          padding: '1rem',
          marginBottom: '1rem',
        },
        '@media (max-width: 480px)': {
          // Breakpoint for mobile devices
          padding: '0.5rem',
          marginBottom: '0.5rem',
        },
      },
      children: [
        [
          '@H4',
          {
            children: 'Contact Info',
            style: {
              color: 'green',
              fontStyle: 'italic',
              marginBottom: '1rem', // Using rem units for margin-bottom
              '@media (max-width: 768px)': {
                // Responsive font size for smaller screens
                fontSize: '1.5rem',
              },
              '@media (max-width: 480px)': {
                // Responsive font size for mobile devices
                fontSize: '1.2rem',
              },
            },
          },
        ],
        [
          {
            flexDirection: 'row',
            flex: true,
            '@media (max-width: 768px)': { flexDirection: 'column' },
          }, // Column layout on smaller screens
          [
            [
              '@p',
              {
                children: 'Please provide your email and address:',
                style: {
                  margin: '1rem 0', // Using rem units for margin
                  '@media (max-width: 768px)': {
                    // Adjust margin for smaller screens
                    margin: '0.5rem 0',
                  },
                },
              },
            ],
            [
              'email',
              {
                pr: 'default',
                flexGrow: 1,
                style: {
                  padding: '0.5rem',
                  '@media (max-width: 768px)': { padding: '0.3rem' },
                },
              },
            ],
            [
              'address',
              {
                flexGrow: 1,
                style: {
                  padding: '0.5rem',
                  '@media (max-width: 768px)': { padding: '0.3rem' },
                },
              },
            ],
          ],
        ],
      ],
    },
  ],
];

export default layout;

// Color and Text

// color: Text color
// backgroundColor: Background color
// fontSize: Font size
// fontWeight: Font weight
// fontStyle: Font style (e.g., italic, normal)
// textDecoration: Text decoration (e.g., underline, line-through)
// Spacing

// margin: Margin around the element
// padding: Padding inside the element
// marginTop, marginRight, marginBottom, marginLeft: Specific margins
// paddingTop, paddingRight, paddingBottom, paddingLeft: Specific paddings
// Layout

// display: Display property (e.g., block, inline-block, flex)
// flexDirection: Flex direction (e.g., row, column)
// flexGrow: Flex grow factor
// flexShrink: Flex shrink factor
// alignItems: Alignment of flex items
// justifyContent: Justification of content
// Borders

// border: Border shorthand
// borderWidth: Border width
// borderColor: Border color
// borderRadius: Border radius
// Other Properties

// width: Width of the element
// height: Height of the element
// maxWidth: Maximum width
// minWidth: Minimum width
// maxHeight: Maximum height
// minHeight: Minimum height
// boxShadow: Box shadow effect

// Common Elements
// Headings

// @H1: Heading 1
// @H2: Heading 2
// @H3: Heading 3
// @H4: Heading 4
// @H5: Heading 5
// @H6: Heading 6
// Text Elements

// @p: Paragraph
// @span: Span
// Links

// @a: Anchor (link)
// Lists

// @ul: Unordered List
// @ol: Ordered List
// @li: List Item
// Divisions

// @div: Division
