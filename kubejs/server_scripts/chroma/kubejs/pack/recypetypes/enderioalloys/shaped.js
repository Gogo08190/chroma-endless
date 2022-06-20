onEvent('recipes', (event) => {
    /*
           ,
           {
               output: '',
               pattern: ['', '', ''],
               key: {
                   A: ''
               },
               id: ''
           }
    */
    const recipes = [

        {
            output: 'enderioalloys:item_material_gear_darksteel',
            pattern: ['NIN', 'IGI', 'NIN'],
            key: {
                G: 'enderioalloys:item_material_gear_iron',
                I: 'enderioalloys:item_alloy_ingot_dark_steel',
                N: 'enderioalloys:item_alloy_nugget_dark_steel'
            },
            id: 'enderioalloys:item_material_gear_darksteel'
        },

        {
            output: 'enderioalloys:item_material_gear_energized',
            pattern: ['NIN', 'IGI', 'NIN'],
            key: {
                G: 'enderioalloys:item_material_gear_iron',
                I: 'enderioalloys:item_alloy_ingot_energetic_alloy',
                N: 'enderioalloys:item_alloy_nugget_energetic_alloy'
            },
            id: 'enderioalloys:item_material_gear_energized'
        },

        {
            output: 'enderioalloys:item_material_gear_iron',
            pattern: ['SIS', 'IGI', 'SIS'],
            key: {
                G: 'pneumaticcraft:compressed_iron_gear',
                S: 'emendatusenigmatica:silicon_gem',
                I: 'pneumaticcraft:ingot_iron_compressed'
            },
            id: 'enderioalloys:item_material_gear_iron'
        },

        {
            output: 'enderioalloys:item_material_gear_stone',
            pattern: ['TST', 'SCS', 'TST'],
            key: {
                T: 'immersiveengineering:stick_treated',
                S: '#forge:stone',
                C: '#forge:cobblestone'
            },
            id: 'enderioalloys:item_material_gear_stone'
        },

        {
            output: 'enderioalloys:item_material_gear_vibrant',
            pattern: ['NIN', 'IGI', 'NIN'],
            key: {
                G: 'enderioalloys:item_material_gear_iron',
                I: 'enderioalloys:item_alloy_nugget_vibrant_alloy',
                N: 'enderioalloys:item_alloy_ingot_vibrant_alloy'
            },
            id: 'enderioalloys:item_material_gear_vibrant'
        },

        {
            output: 'enderioalloys:item_material_gear_wood',
            pattern: ['TWT', 'PBP', 'TWT'],
            key: {
                T: 'immersiveengineering:stick_treated',
                W: '#forge:treated_wood',   
                P: '#minecraft:planks',
                B: '#minecraft:wooden_buttons'
            },
            id: 'enderioalloys:item_material_gear_wood'
        },

        {
            output: 'enderioalloys:item_material_weather_crystal',
            pattern: [' P ', 'VEV', ' P '],
            key: {
                E: 'enderioalloys:item_material_ender_crystal',
                V: 'enderioalloys:item_material_vibrant_crystal',
                P: 'enderioalloys:item_material_pulsating_crystal'
            },
            id: 'enderioalloys:item_material_weather_crystal'
        },

        {
            output: 'enderioalloys:item_material_pulsating_crystal',
            pattern: ['SPS', 'PMP', 'SPS'],
            key: {
                S: 'emendatusenigmatica:signalum_nugget',
                M: 'botania:mana_diamond',
                P: 'enderioalloys:item_alloy_nugget_pulsating_iron'
            },
            id: 'enderioalloys:item_material_pulsating_crystal'
        },

        {
            output: 'enderioalloys:item_material_vibrant_crystal',
            pattern: ['EVE', 'VMV', 'EVE'],
            key: {
                V: 'enderioalloys:item_alloy_nugget_vibrant_alloy',
                M: 'botanicalmachinery:mana_emerald',
                E: 'emendatusenigmatica:enderium_nugget'
            },
            id: 'enderioalloys:item_material_vibrant_crystal'
        },

        {
            output: 'enderioalloys:item_material_precient_crystal',
            pattern: ['SVS', 'VSV', 'SVS'],
            key: {
                V: 'enderioalloys:item_material_vibrant_crystal',
                S: 'minecraft:shulker_shell'
            },
            id: 'enderioalloys:item_material_precient_crystal'
        },

        {
            output: 'enderioalloys:item_material_ender_crystal',
            pattern: [' V ', 'VEV', ' V '],
            key: {
                V: 'enderioalloys:item_material_vibrant_crystal',
                E: 'tconstruct:enderman_head'
            },
            id: 'enderioalloys:item_material_ender_crystal'
        }
    ]   

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});