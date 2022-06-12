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
            id: `compactmachines:personal_shrinking_device`
        },
        {
            output: 'compactcrafting:projector_dish',
            pattern: ['AB ', 'ACB', 'AB '],
            key: {
                A: 'undergarden:sediment_glass_pane',
                B: '#forge:plates/iron',
                C: 'botania:mana_pearl'
            },
            id: `compactcrafting:projector_dish`
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
            id: `compactcrafting:base`
        },
        {
            output: 'compactcrafting:field_projector',
            pattern: [' A ', 'BCB', 'DDD'],
            key: {
                A: 'compactmachines:projector_dish',
                B: 'undergarden:sediment_glass_pane',
                C: 'undergarden:cloggrum_ingot',
                D: '#forge:sheetmetals/steel',
                E: 'compactcrafting:base'
            },
            id: `compactcrafting:field_projector`
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
