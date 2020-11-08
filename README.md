# Wecasa's test

## Structure
    .
    ├── public                      
    ├── src                         # Source files 
    │   ├── actions                 # Where the actions are (API calls etc.)
    │   │   ├── constants.js        # File with all the constants
    │   │   ├── *action*.js         # File with some actions
    │   ├── assets                  # All images, icons etc.
    │   ├── components              # All the components
    │   │   ├── component.spec.js   # Test file
    │   │   ├── component.styled.js # Style of the component with styled-components 
    │   │   ├── component.js        # Component file
    │   │   └── index.js            # Choose what to export
    │   ├── reducers                # The reducers
    │   │   ├── index.js            # Where I combine all the reducers
    │   │   ├── *reducer*.js        # A reducer file with initialState, the differents PropTypes and values depending on actions
    │   ├── screens                 # All screens
    │   │   ├── screen.styled.js    # Style of the screen with styled-components 
    │   │   ├── screen.js           # Screen file
    │   │   └── index.js            # Choose what to export
    │   ├── style                   # Variables CSS, global style etc
    │   ├── utils                   # Helpers I'll used (functions, axios configured)
    │   ├── index.js                # Index file to launch App.js with Provider
    │   ├── App.js                  # Where all the routes are
    └── .env                        # Environment file with variables like API's URL
    └── .gitignore                  # Files to be ignored for git
    └── jsconfig.json               # Config for JavaScrupt like absolute paths
    └── .prettierrc                 # Rules for prettier
    └── .prettierignore             # Files to be ignored for prettier
    └── package.json                # List of packages and commands to run with yarn
    └── README.md                   # Informations about the project
    └── yarn.lock                   # Packages in the node_modules folder

## Requirements
* Node
* Yarn

### How to launch the app ?
* `yarn install`
* `yarn start`

### How to start the tests ?
* `yarn test`