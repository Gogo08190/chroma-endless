onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/press/';

    /*{
        inputs: [Item.of('), Ingredient.of('#thermal:crafting/dies/packing_2x2')],
        output: Item.of(''),
        energy: 1000,
        id: ``
    }*/

    const recipes = [
      {
      inputs: ['mekanism:hdpe_pellet', Ingredient.of('#thermal:crafting/dies/rod')],
      output: 'mekanism:hdpe_rod',
      energy: '2400',
      id: `${id_prefix}hdpe_rod`
    }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.press(recipe.output, recipe.inputs).energy(recipe.energy).id(recipe.id);
    });
});
