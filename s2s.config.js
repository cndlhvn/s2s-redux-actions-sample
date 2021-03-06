const handlerBabelSpread = require('s2s-handler-babel-object-rest-spread').default

module.exports = {
  watch: './**/*.js',
  plugins: [
    {
      test: /src\/actions\/(?!.*index).*\.js/,
      plugin: ['s2s-redux-actions', {autocomplete: false}]
    },
    {
      test: /src\/actions\/(?!.*index).*\.js/,
      output: "index.js",
      plugin: ['s2s-redux-actions-root',
      { input: 'src/actions/*.js', output: "src/actions/index.js" }]
    },
    {
      test: /src\/reducers\/(?!.*index).*\.js/,
      handler: handlerBabelSpread,
      plugin: ['s2s-redux-actions-reducers', {autocomplete: false}]
     },
     {
       test: /src\/reducers\/(?!.*index).*\.js/,
       output: "index.js",
       handler: handlerBabelSpread,
       plugin: ['s2s-redux-actions-reducers-root',
       { input: 'src/reducers/*.js', output: "src/reducers/index.js",router: true }]
     },
    {
       test: /src\/sagas\/(?!.*index).*\.js/,
       plugin: ['s2s-redux-sagas']
    },
    {
      test: /src\/sagas\/(?!.*index).*\.js/,
      output: "index.js",
      plugin: ['s2s-redux-sagas-root',
      { input: 'src/sagas/*.js', output: "src/sagas/index.js" }]
    },
    {
      test: /src\/api\/(?!.*index).*\.js/,
      plugin: ['s2s-axios-api']
    },
    {
      test: /src\/api\/(?!.*index).*\.js/,
      output: "index.js",
      plugin: ['s2s-axios-api-root',
      { input: 'src/api/*.js', output: "src/api/index.js" }]
    },
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-action-builders']
    },
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-redux-actions-manager',
      { input: 'src/builders/*.js', output: "src/actions/*.js" }]
    },
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-redux-actions-reducers-manager',
      { input: 'src/builders/*.js', output: "src/reducers/*.js" }]
    },
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-redux-sagas-manager',
      { input: 'src/builders/*.js', output: "src/sagas/*.js" }]
    },
    {
      test: /src\/builders\/.*\.js/,
      plugin: ['s2s-axios-api-manager',
      { input: 'src/builders/*.js', output: "src/api/*.js" }]
    }
  ],
  templates: [
    {
      test: /src\/actions\/.*\.js/, input: 'redux-action.js'
    },
    {
      test: /src\/reducers\/.*\.js/, input: 'reducer.js'
    },
    {
      test: /src\/sagas\/.*\.js/, input: 'saga.js'
    },
    {
      test: /src\/containers\/.*\.js/, input: 'container.js'
    },
    {
      test: /src\/api\/.*\.js/, input: 'axios-api.js'
    }
  ]
}
