const handlerBabelSpread = require('s2s-handler-babel-object-rest-spread').default

module.exports = {
  watch: './**/*.js',
  plugins: [
    {
      test: /src\/actions\/(?!.*index).*\.js/,
      plugin: ['s2s-redux-actions']
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
      plugin: ['s2s-redux-actions-reducers']
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
