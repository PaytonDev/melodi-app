export default function (plop) {
  plop.setGenerator("component", {
    description: "Create a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name",
      },
      {
        type: "input",
        name: "st-path",
        message: "Storybook path",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.tsx",
        templateFile: "plop-templates/Component.tsx.hbs",
      },
      {
        type: "add",
        path: "src/components/{{name}}/{{name}}.stories.tsx",
        templateFile: "plop-templates/Component.stories.tsx.hbs",
      },
    ],
  });
}
