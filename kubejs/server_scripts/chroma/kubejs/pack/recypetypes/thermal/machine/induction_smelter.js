onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/induction_smelter';
    const recipes = [
      {
          inputs: ['#forge:ingots/iron', '#forge:dusts/redstone'],
          outputs: ['extendedcrafting:redstone_ingot'],
          id: `${id_prefix}redstone_ingot`
      },
      {
          inputs: ['#forge:ingots/iron', 'minecraft:ender_pearl'],
          outputs: ['extendedcrafting:ender_ingot'],
          id: `${id_prefix}ender_ingot`
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.thermal.smelter(recipe.outputs, recipe.inputs).id(recipe.id);
    });
});
