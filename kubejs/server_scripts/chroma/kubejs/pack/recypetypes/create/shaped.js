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
      {
        output: 'create:smart_chute',
        pattern: [' P ', 'FCF', 'ATA'],
        key: {
            P: '#forge:plates/brass',
            F: 'create:attribute_filter',
            C: 'create:chute',
            A: 'create:andesite_casing',
            T: 'create:electron_tube'
        },
        id: 'create:crafting/kinetics/smart_chute'
      },
      {
        output: Item.of('create:andesite_funnel', 2),
        pattern: ['AAA', 'KCK', ' D '],
        key: {
            A: '#forge:ingots/andesite_alloy',
            K: 'minecraft:dried_kelp',
            C: '#forge:chests',
            D: 'create:chute'
        },
        id: 'create:crafting/logistics/andesite_funnel'
      },
      {
        output: Item.of('create:brass_funnel', 2),
        pattern: ['ATA', 'KCK', ' D '],
        key: {
            A: '#forge:ingots/brass',
            K: 'minecraft:dried_kelp',
            C: 'create:attribute_filter',
            D: 'create:chute',
            T: 'create:electron_tube'
        },
        id: 'create:crafting/logistics/brass_funnel'
      },
      {
        output: 'create:sequenced_gearshift',
        pattern: ['RTR', 'CBC', 'RGR'],
        key: {
            T: 'create:electron_tube',
            R: '#forge:dusts/redstone',
            C: 'create:cogwheel',
            B: 'create:brass_casing',
            G: 'minecraft:clock'
        },
        id: 'create:crafting/kinetics/sequenced_gearshift'
      },
      {
        output: 'create:spout',
        pattern: [' T ', 'KCK', ' P '],
        key: {
            T: 'create:fluid_tank',
            K: 'minecraft:dried_kelp',
            C: 'create:fluid_pipe',
            P: '#forge:nuggets/copper'
        },
        id: 'create:crafting/kinetics/spout'
      },
      {
        output: 'create:hose_pulley',
        pattern: ['PCP', 'TKT', 'PSP'],
        key: {
            P: '#forge:plates/copper',
            C: 'create:copper_casing',
            T: 'create:fluid_pipe',
            K: 'minecraft:dried_kelp',
            S: 'create:shaft'
        },
        id: 'create:crafting/kinetics/hose_pulley'
      },
      {
        output: 'create:rotation_speed_controller',
        pattern: ['BPB', 'SCS'],
        key: {
            B: 'create:brass_casing',
            P: 'create:precision_mechanism',
            S: 'create:shaft',
            C: 'create:speedometer'
        },
        id: 'create:crafting/kinetics/rotation_speed_controller'
      },
      {
        output: Item.of('create:copper_casing', 4),
        pattern: ['NWN', 'PLP', 'NWN'],
        key: {
            N: '#forge:nuggets/copper',
            W: '#minecraft:planks',
            P: '#forge:plates/copper',
            L: '#minecraft:logs'
        },
        id: 'create:crafting/materials/copper_casing'
      },
      {
        output: Item.of('create:fluid_tank', 2),
        pattern: [' C ', 'PGP', ' C '],
        key: {
            C: 'create:copper_casing',
            P: '#forge:plates/copper',
            G: '#forge:glass'
        },
        id: 'create:crafting/kinetics/fluid_tank'
      },
      {
        output: Item.of('create:andesite_casing', 4),
        pattern: ['AWA', 'WLW', 'AWA'],
        key: {
            A: '#forge:ingots/andesite_alloy',
            W: '#minecraft:planks',
            L: '#minecraft:logs'
        },
        id: 'create:crafting/materials/andesite_casing'
      },
      {
        output: Item.of('create:refined_radiance_casing', 4),
        pattern: ['PWP', 'RGR', 'PWP'],
        key: {
            P: '#forge:plates/aluminum',
            W: '#minecraft:planks',
            R: '#forge:ingots/refined_radiance',
            G: '#forge:glass'
        },
        id: 'create:crafting/materials/refined_radiance_casing'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
