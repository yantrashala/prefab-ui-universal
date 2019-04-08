module.exports = function(plop) {
  plop.setGenerator('prefab-microApp', {
    description: 'Generates the Prefab Universal UI Micro App',
    prompts: [
      {
        type: 'input',
        name: 'project-name',
        message: 'Name of your Micro-App'
      }
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{camelCase project-name}}',
        templateFiles: 'plop-templates/**'
      },
      {
        type: 'modify',
        path: 'packages/{{camelCase project-name}}/package.json',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{dashCase project-name}}'
      },
      {
        type: 'modify',
        path: 'packages/{{camelCase project-name}}/pages/about.js',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{titleCase project-name}}'
      },
      {
        type: 'modify',
        path: 'packages/{{camelCase project-name}}/pages/index.js',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{titleCase project-name}}'
      }
    ]
  });
};
