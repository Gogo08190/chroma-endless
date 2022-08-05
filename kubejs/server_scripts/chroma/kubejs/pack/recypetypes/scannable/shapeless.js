onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'scannable:module_blank',
          inputs: [
              '#scannable:modules'
          ],
          id: 'chroma:pack/kubejs/shaped/module_blank'
      }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
