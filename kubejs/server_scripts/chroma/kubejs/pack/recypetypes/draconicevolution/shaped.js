onEvent('recipes', (event) => {

    const recipes = [
        {
            output: 'draconicevolution:dislocator',
            pattern: ['BDB', 'DED', 'BDB'],
            key: {
                B: 'rftoolspower:blazing_rod',
                D: '#forge:ingots/draconium',
                E: 'minecraft:ender_eye'
            },
            id: 'draconicevolution:dislocator'
        },
        {
            output: 'draconicevolution:magnet',
            pattern: ['S S', 'D D', 'DAD'],
            key: {
                S: '#forge:ingots/signalum',
                D: '#forge:ingots/draconium',
                A: Item.of('draconicevolution:dislocator', '{Damage:0}').weakNBT()
            },
            id: 'draconicevolution:magnet'
        },
        {
            output: 'draconicevolution:advanced_magnet',
            pattern: ['S S', 'D D', 'DAD'],
            key: {
                S: '#forge:ingots/draconium',
                D: '#forge:ingots/draconium_awakened',
                A: 'draconicevolution:magnet'
            },
            id: 'draconicevolution:advanced_magnet'
        },
        {
            output: 'draconicmachinery:draconium_furnace',
            pattern: ['DID', 'FCF', 'DED'],
            key: {
                D: '#forge:ingots/draconium',
                I: 'envirocore:pladium_interconnect',
                C: 'draconicevolution:wyvern_core',
                F: 'thermal:machine_furnace',
                E: 'mekanism:elite_induction_cell'
            },
            id: 'draconicmachinery:draconium_furnace_rcp'
        },
        {
            output: 'draconicevolution:dislocator_receptacle',
            pattern: ['LCL', 'EDE', 'LIL'],
            key: {
                L: '#forge:ingots/lumium',
                C: 'draconicevolution:draconium_core',
                E: '#forge:circuits/elite',
                D: 'draconicevolution:infused_obsidian',
                I: 'envirocore:kyronite_interconnect'
            },
            id: 'draconicevolution:dislocator_receptacle'
        },
        {
            output: 'draconicevolution:energy_pylon',
            pattern: ['DCD', 'IWI', 'DBD'],
            key: {
                D: 'draconicevolution:draconium_ingot',
                C: 'draconicevolution:draconium_core',
                I: 'mekanism:induction_port',
                W: 'draconicevolution:wyvern_energy_core',
                B: 'mekanism:basic_induction_cell'
            },
            id: 'draconicevolution:energy_pylon'
        },
        {
            output: 'draconicevolution:energy_pylon',
            pattern: ['RBR', 'BCB', 'RBR'],
            key: {
                R: '#forge:ingots/inanite',
                B: 'rftoolspower:blazing_rod',
                C: 'draconicevolution:draconium_core'
            },
            id: 'draconicevolution:energy_pylon'
        },
        {
            output: 'draconicevolution:flux_gate',
            pattern: ['RPR', 'BCB', 'RAR'],
            key: {
                R: 'enderioalloys:item_alloy_ingot_dark_steel',
                B: 'refinedpipes:ultimate_energy_pipe',
                C: 'draconicevolution:draconium_core',
                A: 'draconicmachinery:redstone_core',
                P: 'draconicevolution:potentiometer'
            },
            id: 'draconicevolution:flux_gate'
        },
        {
            output: 'draconicevolution:fluid_gate',
            pattern: ['RPR', 'BCB', 'RAR'],
            key: {
                R: 'enderioalloys:item_alloy_ingot_dark_steel',
                B: 'refinedpipes:ultimate_fluid_pipe',
                C: 'draconicevolution:draconium_core',
                A: 'draconicmachinery:redstone_core',
                P: 'draconicevolution:potentiometer'
            },
            id: 'draconicevolution:fluid_gate'
        },
        {
            output: 'draconicmachinery:crafting_injector_item_router',
            pattern: ['ICI', 'DPD', 'ZAZ'],
            key: {
                I: '#forge:ingots/inanite',
                C: 'draconicevolution:basic_crafting_injector',
                D: 'enderioalloys:item_alloy_ingot_dark_steel',
                P: 'mekanism:personal_chest',
                Z: 'enderioalloys:item_material_skull_zombie_controller',
                A: 'draconicevolution:draconium_core'
            },
            id: 'draconicmachinery:injector_router_rcp'
        },
        {
            output: 'draconicmachinery:item_reciever',
            pattern: ['I I', 'DPD', 'ZAZ'],
            key: {
                I: '#forge:ingots/blutonium',
                D: 'enderioalloys:item_alloy_ingot_dark_steel',
                P: 'mekanism:personal_chest',
                Z: 'enderioalloys:item_material_skull_zombie_controller',
                A: 'draconicevolution:draconium_core'
            },
            id: 'draconicmachinery:item_reciever_rcp'
        },
        {
            output: 'draconicmachinery:food_spreader',
            pattern: ['DAD', 'BCE', 'DFD'],
            key: {
                D: '#forge:ingots/draconium',
                A: 'create_confectionery:ruby_chocolate_candy',
                B: 'create_confectionery:black_chocolate_candy',
                E: 'create_confectionery:white_chocolate_candy',
                C: 'draconicevolution:awakened_core',
                F: 'create_confectionery:chocolate_candy'
            },
            id: 'draconicmachinery:food_spreader_rcp'
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
