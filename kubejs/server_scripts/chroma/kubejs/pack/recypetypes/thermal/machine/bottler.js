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
      },
      {
          input: 'minecraft:ender_pearl',
          fluid: Fluid.of('tconstruct:blazing_blood', 125),
          output: 'minecraft:ender_eye',
          energy: 1000,
          id: `${id_prefix}ender_eye`
      },
      {
          input: 'minecraft:iron_ingot',
          fluid: Fluid.of('tconstruct:molten_ender', 125),
          output: 'extendedcrafting:ender_ingot',
          energy: 1000,
          id: `${id_prefix}ender_ingot`
      },
      {
          input: 'minecraft:iron_ingot',
          fluid: Fluid.of('thermal:redstone', 125),
          output: 'extendedcrafting:redstone_ingot',
          energy: 1000,
          id: `${id_prefix}redstone_ingot`
      }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]).energy(recipe.energy).id(recipe.id);
    });
});
