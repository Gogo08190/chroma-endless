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
      },
      //Cogwheel
      {
        output: Item.of('create:cogwheel', 8),
        pattern: ['AAA', 'ABA', 'AAA'],
        key: {
            A: '#minecraft:buttons',
            B: 'create:shaft'
        },
        id: 'create:crafting/kinetics/cogwheel'
      },
      //Large Cogwheel
      {
        output: Item.of('create:large_cogwheel', 2),
        pattern: ['ABA', 'BCB', 'ABA'],
        key: {
            A: '#minecraft:buttons',
            B: 'create:cogwheel',
            C: 'create:shaft'
        },
        id: 'create:crafting/kinetics/large_cogwheel'
      },
      {
        output: 'create:depot',
        pattern: ['STS', 'WAW'],
        key: {
            S: '#quark:stone_tool_materials',
            T: 'create:turntable',
            W: '#minecraft:planks',
            A: 'create:andesite_casing'
        },
        id: 'create:crafting/kinetics/depot'
      },
      {
        output: Item.of('create:chute', 4),
        pattern: ['A A', 'PHP', ' P '],
        key: {
            P: '#forge:plates/iron',
            A: '#forge:ingots/andesite_alloy',
            H: 'minecraft:hopper'
        },
        id: 'create:crafting/kinetics/chute'
      },
      {
        output: 'create:water_wheel',
        pattern: ['SCS', 'CAC', 'SCS'],
        key: {
            S: '#minecraft:slabs',
            C: 'create:large_cogwheel',
            A: 'create:shaft'
        },
        id: 'create:crafting/kinetics/water_wheel'
      },
      {
        output: Item.of('create:shaft', 8),
        pattern: ['A', 'A', 'A'],
        key: {
            A: '#forge:ingots/andesite_alloy'
        },
        id: 'create:crafting/kinetics/shaft'
      },
      {
        output: 'create:basin',
        pattern: ['ABA', 'AAA'],
        key: {
            A: '#forge:ingots/andesite_alloy',
            B: 'minecraft:bucket'
        },
        id: 'create:crafting/kinetics/basin'
      },
      {
        output: 'create:mechanical_press',
        pattern: ['SPS', 'CAC', 'SIS'],
        key: {
            A: 'create:andesite_casing',
            S: 'create:shaft',
            P: 'minecraft:piston',
            I: '#forge:storage_blocks/iron',
            C: 'create:cogwheel'
        },
        id: 'create:crafting/kinetics/mechanical_press'
      },
      {
        output: 'create:mechanical_mixer',
        pattern: ['SPS', 'CAC', 'SIS'],
        key: {
            A: 'create:andesite_casing',
            S: 'create:shaft',
            P: 'minecraft:piston',
            I: 'create:whisk',
            C: 'create:cogwheel'
        },
        id: 'create:crafting/kinetics/mechanical_mixer'
      },
      {
        output: 'create:deployer',
        pattern: ['SPS', 'CAC', 'SIS'],
        key: {
            A: 'create:andesite_casing',
            S: 'create:shaft',
            P: 'create:electron_tube',
            I: 'create:brass_hand',
            C: 'create:cogwheel'
        },
        id: 'create:crafting/kinetics/deployer'
      },
      {
        output: 'create:encased_fan',
        pattern: ['ASA', 'PCP', 'AFA'],
        key: {
            A: 'create:andesite_casing',
            S: 'create:shaft',
            P: '#forge:plates/iron',
            F: 'create:propeller',
            C: 'create:cogwheel'
        },
        id: 'create:crafting/kinetics/encased_fan'
      },
      {
        output: 'create:gearbox',
        pattern: ['SAS', 'CBC', 'SAS'],
        key: {
            A: 'create:andesite_casing',
            B: 'create:shaft',
            S: '#chroma:crafting_slabs',
            C: 'create:large_cogwheel'

        },
        id: 'create:crafting/kinetics/gearbox'
      },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
