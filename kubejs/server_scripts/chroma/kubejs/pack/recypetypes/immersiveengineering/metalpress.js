onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/immersiveengineering/metalpres/';
    const recipes = [
      {
          input: 'mekanism:hdpe_pellet',
          output: 'mekanism:hdpe_rod',
          mold : "immersiveengineering:mold_rod",
          energy : 2400,
          id: `mekanism:hdpe_rod`
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.immersiveengineering
            .metalPress(recipe.output, recipe.input, recipe.mold)
            .energy(recipe.energy)
            .id(recipe.id);
    });
});
