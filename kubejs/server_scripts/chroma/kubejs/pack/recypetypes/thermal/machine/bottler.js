onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/bottler/';

    /*{
        input: '',
        fluid: Fluid.of('', mb),
        output: '',
        energy: 12000,
        id: `${id_prefix}item`
    }*/

    const recipes = [
      {
          input: 'minecraft:stone',
          fluid: Fluid.of('kubejs:molten_compressed_iron', 18),
          output: 'pneumaticcraft:reinforced_stone',
          energy: 8000,
          id: 'pneumaticcraft:reinforced_stone'
      }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
