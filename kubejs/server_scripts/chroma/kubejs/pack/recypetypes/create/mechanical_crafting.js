onEvent('recipes', (event) => {
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
        }
    ];

    recipes.forEach((recipe) => {
        event.recipes.create.mechanical_crafting(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
