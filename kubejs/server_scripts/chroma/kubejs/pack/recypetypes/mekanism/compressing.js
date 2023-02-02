onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/compressing/';

    const recipes = [
      //Refined Glowstone Bee
      {
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:glowstone_bee' }).weakNBT().toJson(),
        gasInput: { amount:16, gas: "mekanism:liquid_osmium" },
        output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:refined_glowstone_bee' }).weakNBT(),
        id: `${id_prefix}refined_glowstone_bee`
      },

      //Refined Obsidian Bee
      {
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:obsidian_bee' }).weakNBT().toJson(),
        gasInput: { amount:16, gas: "mekanism:liquid_osmium" },
        output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:refined_obsidian_bee' }).weakNBT(),
        id: `${id_prefix}refined_obsidian_bee`
      }
    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCompressing(recipe.output, recipe.input, recipe.gasInput).id(recipe.id)
    });
});
