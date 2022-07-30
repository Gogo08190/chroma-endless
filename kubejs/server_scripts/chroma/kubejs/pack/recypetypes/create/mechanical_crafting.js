onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mechanical_crafting/'
    const recipes = [
        {
            output: 'occultism:dictionary_of_spirits',
            pattern: ['CAC', 'CBC', 'CSC'],
            key: {
                C: 'create:cinder_flour',
                A: 'create:andesite_alloy',
                B: 'minecraft:book',
                S: 'occultism:datura_seeds'
            },
            id: 'occultism:dictionary_of_spirits'
        },
        {
            output: '2x create:crushing_wheel',
            pattern: [' AAA ', 'AACAA', 'ACSCA', 'AACAA', ' AAA '],
            key: {
                C: 'create:brass_casing',
                A: 'create:andesite_alloy',
                S: 'create:shaft'
            },
            id: 'create:crushing_wheel'
        },
        {
            output: 'immersiveengineering:watermill',
            pattern: ['   S   ', '  SWS  ', ' SWIWS ', 'SWITIWS', ' SWIWS ', '  SWS  ', '   S   '],
            key: {
                S: 'immersiveengineering:stick_treated',
                W: 'immersiveengineering:waterwheel_segment',
                I: 'emendatusenigmatica:steel_ingot',
                T: 'immersiveengineering:treated_wood_horizontal'
            },
            id: 'immersiveengineering:watermill'
        },
        {
            output: 'pneumaticcraft:aerial_interface',
            pattern: ['CCPCC', 'CAHAC', 'TFNFT', 'CAMAC', 'CCSCC'],
            key: {
                C: 'pneumaticcraft:pressure_chamber_wall',
                P: Item.of('modularrouters:player_module', '{modularrouters:{ModuleFilter:{}}}').weakNBT(),
                A: 'pneumaticcraft:advanced_pcb',
                H: 'pneumaticcraft:omnidirectional_hopper',
                T: 'pneumaticcraft:advanced_pressure_tube',
                F: 'thermal:rf_coil',
                N: 'cagedmobs:star_infused_netherite_block',
                M: 'pneumaticcraft:liquid_hopper',
                S: 'thermal:redstone_servo'
            },
            id: 'pneumaticcraft:aerial_interface'
        },
        {
            output: 'pneumaticcraft:flux_compressor',
            pattern: ['ULLLU', 'UTATU', 'PGFGP', 'SFAFS', 'SSPSS'],
            key: {
                U: '#forge:ingots/utherium',
                L: 'pneumaticcraft:upgrade_matrix',
                T: 'pneumaticcraft:turbine_rotor',
                A: 'pneumaticcraft:advanced_pcb',
                P: 'pneumaticcraft:advanced_pressure_tube',
                G: '#forge:gears/compressed_iron',
                F: 'thermal:rf_coil',
                S: 'pneumaticcraft:reinforced_stone'
            },
            id: 'pneumaticcraft:flux_compressor'
        },
        {
            output: 'industrialforegoing:dissolution_chamber',
            pattern: ['SSGSS', 'SDADS', 'GCFTG', 'SDUDS', 'SSRSS'],
            key: {
                S: 'enderioalloys:item_alloy_ingot_electrical_steel',
                G: 'enderioalloys:item_material_gear_energized',
                D: 'pneumaticcraft:glycerol',
                A: 'pneumaticcraft:etching_acid_bucket',
                C: 'pneumaticcraft:smart_chest',
                F: 'industrialforegoing:machine_frame_pity',
                U: 'kubejs:advanced_extreme_circuit_board',
                R: 'thermal:rf_coil',
                T: 'pneumaticcraft:medium_tank'
            },
            id: 'industrialforegoing:dissolution_chamber'
        },
        {
            output: 'industrialforegoing:infinity_nuke',
            pattern: [' PPP ', 'PUCUP', 'HCNCH', 'PUCUP', 'D T D'],
            key: {
                P: 'industrialforegoing:plastic',
                U: 'mekanism:ultimate_induction_cell',
                C: 'mekanism:ultimate_control_circuit',
                H: 'tconstruct:hepatizon_block',
                N: 'mekanism:pellet_plutonium',
                T: 'pneumaticcraft:huge_tank',
                D: 'mekanism:hdpe_rod'
            },
            id: 'industrialforegoing:dissolution_chamber/infinity_nuke'
        },
        {
            output: 'resourcefulbees:t1_beehive',
            pattern: ['GGGGG', 'GCCCG', 'GCBCG', 'GCCCG', 'GGGGG'],
            key: {
                G: 'minecraft:grass',
                C: 'minecraft:honeycomb_block',
                B: 'minecraft:beehive'
            },
            id: 'resourcefulbees:t1_beehive'
        },
        {
            output: 'refinedstorage:disk_drive',
            pattern: ['QQTQQ', 'QACAQ', 'ECMCE', 'QACAQ', 'QQWQQ'],
            key: {
                Q: 'refinedstorage:quartz_enriched_iron',
                T: 'tardis:circuits',
                A: 'refinedstorage:advanced_processor',
                C: '#forge:circuits/basic',
                E: 'kubejs:advanced_extreme_circuit_board',
                M: 'refinedstorage:machine_casing',
                W: 'occultism:storage_stabilizer_tier1'
            },
            id: 'refinedstorage:disk_drive'
        },
        {
            output: 'extrastorage:netherite_crafter',
            pattern: ['QCSCQ', 'QETEQ', 'PUMUP', 'QETEQ', 'QCACQ'],
            key: {
                Q: 'refinedstorage:quartz_enriched_iron',
                S: 'pneumaticcraft:smart_chest',
                T: 'kubejs:netherite_transistor',
                P: 'extrastorage:neural_processor',
                C: '#forge:circuits/ultimate',
                E: 'kubejs:advanced_extreme_circuit_board',
                M: 'extrastorage:diamond_crafter',
                U: 'kubejs:uranium_capacitor',
                A: 'thermal:upgrade_augment_3'
            },
            id: 'extrastorage:netherite_crafter'
        },
        {
            output: 'resourcefulbees:t1_hive_upgrade',
            pattern: ['GGGGG', 'GCCCG', 'GCBCG', 'GCCCG', 'GGGGG'],
            key: {
                G: 'minecraft:grass',
                C: 'minecraft:honeycomb_block',
                B: 'minecraft:beehive'
            },
            id: 'resourcefulbees:t1_hive_upgrade'
        },
        {
            output: 'minecraft:ender_eye',
            pattern: ['CAC', 'APA', 'CAC'],
            key: {
                C: '#forge:shards/aurora',
                A: '#forge:gems/amber',
                P: '#forge:gems/ender'
            },
            id: 'betterendforge:ender_eye_from_amber_gem'
        },
        {
            output: 'powah:energizing_orb',
            pattern: ['GGGGG', 'G A G', 'G C G', 'FEUEF', 'RRRRR'],
            key: {
                R: 'powah:dielectric_rod_horizontal',
                G: 'botania:bifrost_perm',
                E: 'kubejs:advanced_extreme_circuit_board',
                U: '#forge:circuits/ultimate',
                A: 'botania:corporea_crystal_cube',
                C: 'powah:dielectric_casing',
                F: 'powah:dielectric_rod'
            },
            id: 'powah:crafting/energizing_orb'
        },
        //beacon
        {
            output: 'minecraft:beacon',
            pattern: ['AAAAA', 'ABBBA', 'ABCBA', 'ADDDA', 'AAAAA'],
            key: {
                A: '#forge:glass',
                B: 'minecraft:sea_lantern',
                C: 'minecraft:nether_star',
                D: '#forge:obsidian'
            },
            id: 'minecraft:beacon'
        },
        //Propeller
        {
            output: 'create:propeller',
            pattern: ['P   P', ' P P ', '  A  ', ' P P ', 'P   P'],
            key: {
                A: '#forge:ingots/andesite_alloy',
                P: '#forge:plates/iron'
            },
            id: 'create:crafting/kinetics/propeller'
        },
        //Flywheel
        {
            output: 'create:flywheel',
            pattern: [' PPP', 'BPCP', ' PPP'],
            key: {
                C: 'create:large_cogwheel',
                P: '#forge:plates/brass',
                B: 'create:brass_casing'
            },
            id: 'create:mechanical_crafting/flywheel'
        },
        //Mechanical Jetpack
        {
            output: 'ironjetpacks:mechanical_jetpack',
            pattern: [' F F ', 'GSGSG', 'SCSCS','BHLHB','T U T','E   E'],
            key: {
                F:'create:flywheel',
                G:'create:gearbox',
                S:'create:shaft',
                C:'ironjetpacks:basic_coil',
                B:'create:blaze_burner',
                H:'create:cuckoo_clock',
                L:'ironjetpacks:strap',
                T:'ironjetpacks:mechanical_thruster',
                U:'ironjetpacks:mechanical_capacitor',
                E:'create:encased_fan'
            },
            id: `${id_prefix}mechanical_jetpack`
        }

    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
