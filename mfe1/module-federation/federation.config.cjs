const {
    withNativeFederation, shareAll,
  } = require("@softarc/native-federation/build");
  
  module.exports = withNativeFederation({
    name: "remote",
    exposes: {
      "./mfe1-app": "./src/App.tsx"
    },
    shared: shareAll(),
    skip: [
      'react-dom/server',
      'react-dom/server.node',
      'react/jsx-dev-runtime',
      '@refinedev/cli',
      'i18next',
      'zlib',
      'http',
      'https',
      'tty'
    ],
  });
  