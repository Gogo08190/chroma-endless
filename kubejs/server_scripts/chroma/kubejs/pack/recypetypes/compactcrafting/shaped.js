onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/compact/shaped/';
    const recipes = [

        {
            output: Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:redstone_in"}}'),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'undergarden:cloggrum_ingot',
                B: 'undergarden:sediment_glass_pane',
                C: 'thermal:redstone_servo'
            },
            id: `${id_prefix}redstone_in`
        },
        {
            output: Item.of('compactmachines:tunnel', '{definition:{id:"compactmachines:item"}}'),
            pattern: [' A ', 'BCB', ' A '],
            key: {
                A: 'undergarden:cloggrum_ingot',
                B: 'undergarden:sediment_glass_pane',
                C: 'pipez:item_pipe'
            },
            id: `${id_prefix}item_tunnel`
        },
        {
            output: 'compactmachines:personal_shrinking_device',
            pattern: [' A ', 'BCB', ' D '],
            key: {
                A: 'undergarden:sediment_glass_pane',
                B: 'botania:mana_pearl',
                C: 'ars_nouveau:worn_notebook',
                D: 'occultism:iesnium_ingot'
            },
            id: 'compactmachines:personal_shrinking_device'
        },
        {
            output: 'compactcrafting:projector_dish',
            pattern: ['AB ', 'ACB', 'AB '],
            key: {
                A: 'undergarden:sediment_glass_pane',
                B: '#forge:plates/iron',
                C: 'botania:mana_pearl'
            },
            id: 'compactcrafting:projector_dish'
        },
        {
            output: 'compactcrafting:base',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'thermal:rf_coil',
                B: 'botania:mana_diamond',
                C: 'minecraft:dark_prismarine',
                D: '#forge:sheetmetals/iron'
            },
            id: 'compactcrafting:base'
        },
        {
            output: 'compactcrafting:field_projector',
            pattern: ['T', 'B'],
            key: {
                T: 'compactcrafting:projector_dish',
                B: 'compactcrafting:base'
            },
            id: 'compactcrafting:field_projector'
        },
        {
            output: 'masterfulmachinery:compactfactory_compact_item_port_items_input',
            pattern: ['SCS', 'UPU', 'SFS'],
            key: {
                S: 'immersiveengineering:sheetmetal_steel',
                C: 'create:smart_chute',
                U: '#forge:ingots/utherium',
                P: 'pipez:item_pipe',
                F: 'ars_elemental:earth_focus'
            },
            id: `${id_prefix}compactfactory_compact_item_port_items_input`
        },
        {
            output: 'masterfulmachinery:compactfactory_compact_item_port_items_output',
            pattern: ['SFS', 'UPU', 'SCS'],
            key: {
                S: 'immersiveengineering:sheetmetal_steel',
                C: 'engineersdecor:factory_hopper',
                U: '#forge:ingots/utherium',
                P: 'pipez:item_pipe',
                F: 'ars_elemental:fire_focus'
            },
            id: `${id_prefix}compactfactory_compact_item_port_items_output`
        },
        {
            output: 'masterfulmachinery:compactfactory_compact_energy_port_energy_input',
            pattern: ['SFS', 'UPU', 'SCS'],
            key: {
                S: 'immersiveengineering:sheetmetal_steel',
                C: 'immersiveengineering:capacitor_hv',
                U: '#forge:ingots/utherium',
                P: 'pipez:energy_pipe',
                F: 'ars_elemental:air_focus'
            },
            id: `${id_prefix}compactfactory_compact_energy_port_energy_input`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
