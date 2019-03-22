module.exports = function(plop) {
  // create your generators here
  plop.setGenerator('prefab', {
    description: 'Generates the Prefab UI',
    prompts: [
      {
        type: 'input',
        name: 'project-name',
        message: 'Name of your Micro-App'
      }
    ], // array of inquirer prompts
    actions: [
      {
        type: 'add',
        path: 'packages/app/package.json',
        templateFile: 'plop-templates/app/package.json'
      },
      {
        type: 'add',
        path: 'packages/app/pages/index.js',
        templateFile: 'plop-templates/app/pages/index.js'
      },
      {
        type: 'add',
        path: 'packages/app/pages/about.js',
        templateFile: 'plop-templates/app/pages/about.js'
      },
      {
        type: 'modify',
        path: 'packages/app/package.json',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{dashCase project-name}}'
      },
      {
        type: 'modify',
        path: 'packages/app/pages/about.js',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{titleCase project-name}}'
      },
      {
        type: 'modify',
        path: 'packages/app/pages/index.js',
        pattern: /##__PROJECT_NAME_DASH_CASE__##/gi,
        template: '{{titleCase project-name}}'
      }
    ] // array of actions
  });
};
