// gitprofile.config.js

const config = {
  github: {
    username: 'kritarthaviate', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 0, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [
        'ds-algo',
        'js-problems',
        'task_planner_backend',
        'kritarthaviate.github.io',
        'safe-deployments',
        'redux-app-poc',
      ], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'kritarth-baranwal',
    twitter: 'kritarthaviate',
    email: 'kritarthbaranwal@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/15CvFsCHBU_DsJiTKqmyCsXhU6yw1Vcut/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'ReactJS',
    'NextJS',
    'JavaScript',
    'Typescript',
    'Tailwind',
    'Redux',
    'Redux-Saga',
    'Socket.io',
    'GraphQL',
    'Node.js',
    'Solidity',
    'Ethers.js',
    'Web3.js',
    'Moralis',
    'Hardhat',
    'PostgreSQL',
    'MongoDB',
    'Firebase',
    'AWS',
    'Git',
    'HTML',
    'CSS',
  ],
  experiences: [
    {
      company: 'Parcel Inc',
      position: 'Senior Full Stack Developer',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://parcel.money/',
    },
  ],
  education: [
    {
      institution: 'GLA University',
      degree:
        'BTech - Bachelor of Technology, Electrical and Electronics Engineering',
      from: '2016',
      to: '2020',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'FundWise - Decentralised Crowdfunding Platform',
      description:
        'FundWise is a decentralised crowdfunding platform that allows users to create and contribute to campaigns. It uses the Ethereum blockchain to store campaign data and contributions. The platform is built using Solidity and Hardhat.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/kritarthAviate/fundwise-smart-contract',
      stack: ['Solidity', 'Hardhat'],
    },
    {
      title: 'AAVE V2 poc application',
      description:
        'Built a smart contract to use AAVE V2 protocol to deposit and withdraw ETH using WETH Gateway.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/kritarthAviate/aave-frontend-poc',
      stack: [
        'NextJS',
        'JavaScript',
        'Tailwind',
        'Moralis',
        'ethers.js',
        'Solidity',
        'Hardhat',
      ],
    },
    {
      title: 'Chat Application',
      description:
        'The chat app built using Socket.IO enables users to create and join chat rooms to communicate with other users in real-time. Users can easily create new chat rooms or join existing ones by entering a unique room ID. The app does not store any data on the server.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/kritarthAviate/chat-app',
      stack: ['React', 'JavaScript', 'Socket.io', 'Express'],
    },
    {
      title: 'Single player Snake Game',
      description:
        'This React Snake game uses requestAnimationFrame for smooth animation. Control the snake with arrow keys and eat food while avoiding walls and body collisions. The game keeps track of the score and high score for added challenge and enjoyment.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/kritarthAviate/snake-game',
      stack: ['React', 'JavaScript'],
    },
    // {
    //   title: 'Task Planner',
    //   description:
    //     'This task planner React app comes with Google OAuth2 integration and email/password authentication for login. It lets users create, delete, and prioritize tasks with easy drag-and-drop functionality.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://github.com/kritarthAviate/task_planner',
    //   stack: [
    //     'React',
    //     'JavaScript',
    //     'ExpressJS',
    //     'MongoDB',
    //     'react-cookie',
    //     'OAuth2',
    //   ],
    // },
    // {
    //   title: 'Tic-tac-toe',
    //   description:
    //     'CLI tic-tac-toe game. Play against another player and get informative prompts. Simple and fun.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://example.com',
    //   stack: ['NodeJS']
    // },
    // {
    //   title: 'JSON Similarity Calculator',
    //   description:
    //     'This React-based JSON Similarity Calculator app allows users to compare the similarity between two JSON objects by analyzing their structure and properties. It uses advanced data structure concepts for efficient comparison and returns a percentage score for the level of similarity.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://github.com/kritarthAviate/json-diff',
    //   stack: ['React', 'JavaScript'],
    // },
  ],

  web3Projects: [
    // {
    //   title: 'AAVE V2 poc application',
    //   description:
    //     'Built a smart contract to use AAVE V2 protocol to deposit and withdraw ETH using WETH Gateway.',
    //   imageUrl: 'https://via.placeholder.com/250x250',
    //   link: 'https://github.com/kritarthAviate/aave-frontend',
    //   stack: ['NextJS', 'JavaScript', 'Tailwind', 'Moralis', 'ethers.js'],
    // },
  ],
  openSource: [
    {
      title: 'Safe (Gnosis Safe)',
      description:
        'Safe is an open source blockchain-based multisig wallet designed for secure and private storage of funds. I contributed to the project by adding functionality to its address input component and writing test cases. This improved its user-friendliness and security.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://github.com/kritarthAviate/safe-web-core',
      stack: ['NextJS', 'Typescript'],
    },
  ],

  // Display blog posts from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many posts to display. Max is 10.
  // },
  // googleAnalytics: {
  //   id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  // },
  // // Track visitor interaction and behavior. https://www.hotjar.com
  // hotjar: {
  //   id: '',
  //   snippetVersion: 6,
  // },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
