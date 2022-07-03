onEvent('recipes', (event) => {
    const recipes = [
      {
          output: 'envirocore:clear_structure_panel',
          inputs: ['envirocore:structure_panel'],
          id: 'envirocore:blocks/components/clear_structure_panel'
      },
      {
          output: 'envirocore:structure_panel',
          inputs: ['envirocore:clear_structure_panel'],
          id: 'envirocore:blocks/components/structure_panel_reverse'
      }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
