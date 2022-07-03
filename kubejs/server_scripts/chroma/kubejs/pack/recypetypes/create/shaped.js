onEvent('recipes', (event) => {
    const recipes = [
      {
        output: Item.of('create:brass_casing', 4),
        pattern: ['ABA', 'BCB', 'ABA'],
        key: {
            A: '#forge:plates/brass',
            B: 'immersiveengineering:treated_wood_horizontal',
            C: 'create:andesite_alloy'
        },
        id: 'create:crafting/materials/brass_casing'
      },
      {
        output: 'create:millstone',
        pattern: [' G ', 'ASA', 'PPP'],
        key: {
            G: '#forge:gears/copper',
            A: '#forge:ingots/andesite_alloy',
            S: 'create:cogwheel',
            P: 'minecraft:smooth_stone'
        },
        id: 'create:crafting/kinetics/millstone'
      },
      {
        output: 'create:windmill_bearing',
        pattern: ['T', 'P', 'S'],
        key: {
            T: 'create:turntable',
            P: 'create:sticky_mechanical_piston',
            S: 'create:shaft'
        },
        id: 'create:crafting/kinetics/windmill_bearing'
      },
      {
        output: 'create:electron_tube',
        pattern: ['Q', 'R', 'A'],
        key: {
            Q: 'create:polished_rose_quartz',
            R: 'minecraft:redstone_torch',
            A: '#forge:ingots/andesite_alloy'
        },
        id: 'create:crafting/materials/electron_tube'
      },
      {
        output: Item.of('create:encased_chain_drive', 2),
        pattern: [' C ', 'SES', ' C '],
        key: {
            C: 'minecraft:chain',
            S: 'create:shaft',
            E: 'create:andesite_casing'
        },
        id: 'create:crafting/kinetics/encased_chain_drive'
      },
      {
        output: 'create:copper_backtank',
        pattern: ['LSL', 'CTC', 'ACA'],
        key: {
            L: 'betterendforge:leather_stripe',
            S: 'create:shaft',
            C: '#forge:plates/copper',
            T: 'create:fluid_tank',
            A: '#forge:ingots/andesite_alloy'
        },
        id: 'create:crafting/appliances/copper_backtank'
      },
      {
        output: 'create:diving_helmet',
        pattern: ['DCD', 'CGC'],
        key: {
            D: 'thermal:diving_fabric',
            C: '#forge:ingots/copper',
            G: '#forge:glass/cyan'
        },
        id: 'create:crafting/appliances/diving_helmet'
      },
      {
        output: 'create:diving_boots',
        pattern: ['D D', 'C C', 'L L'],
        key: {
            D: 'thermal:diving_fabric',
            C: '#forge:ingots/copper',
            L: '#forge:ingots/lead'
        },
        id: 'create:crafting/appliances/diving_boots'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
