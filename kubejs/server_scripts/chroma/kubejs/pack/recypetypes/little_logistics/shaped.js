onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'littlelogistics:barge',
            pattern: ['ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: '#forge:chests',
                R: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:barge'
        },
        {
            output: 'littlelogistics:fishing_barge',
            pattern: ['F F', 'ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: '#forge:chests',
                R: 'immersiveengineering:sheetmetal_colored_red',
                F: 'farmersdelight:safety_net'
            },
            id: 'littlelogistics:fishing_barge'
        },
        {
            output: 'littlelogistics:fluid_barge',
            pattern: ['ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: 'create:fluid_tank',
                R: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:fluid_barge'
        },
        {
            output: 'littlelogistics:seater_barge',
            pattern: ['ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: '#create:seats',
                R: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:seater_barge'
        },
        {
            output: 'littlelogistics:tug',
            pattern: ['H H', 'ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: 'thermal:dynamo_stirling',
                R: 'immersiveengineering:sheetmetal_colored_red',
                H: 'engineersdecor:dark_shingle_roof_chimney'
            },
            id: 'littlelogistics:tug'
        },
        {
            output: 'littlelogistics:energy_tug',
            pattern: ['ACA', 'RRR'],
            key: {
                A: '#forge:sheetmetals/aluminum',
                C: Item.of('thermal:energy_cell').ignoreNBT(),
                R: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:energy_tug'
        },
        {
            output: 'littlelogistics:vessel_charger',
            pattern: [' R ', 'ACA', 'RRR'],
            key: {
                A: 'thermal:rf_coil',
                C: Item.of('thermal:energy_cell').ignoreNBT(),
                R: 'immersiveengineering:sheetmetal_colored_red'
            },
            id: 'littlelogistics:vessel_charger'
        },
        {
            output: Item.of('littlelogistics:spring', 6),
            pattern: ['CAC', 'ACA'],
            key: {
                A: '#forge:ingots/andesite_alloy',
                C: 'minecraft:chain'
            },
            id: 'littlelogistics:spring'
        },
        {
            output: 'littlelogistics:fluid_hopper',
            pattern: ['T', 'H'],
            key: {
                T: 'create:fluid_tank',
                H: 'minecraft:hopper'
            },
            id: 'littlelogistics:fluid_hopper'
        },
        {
            output: 'littlelogistics:tug_route',
            pattern: [' R ', 'ACA', ' R '],
            key: {
                R: 'extendedcrafting:redstone_ingot',
                A: '#forge:ingots/andesite_alloy',
                C: 'minecraft:compass'
            },
            id: 'littlelogistics:tug_route'
        },
        {
            output: Item.of('littlelogistics:tug_dock', 2),
            pattern: ['SSS', 'CSC', 'III'],
            key: {
                S: '#forge:stone',
                C: 'littlelogistics:spring',
                I: '#forge:ingots/steel'
            },
            id: 'littlelogistics:tug_dock'
        },
        {
            output: Item.of('littlelogistics:barge_dock', 2),
            pattern: ['SSS', 'SCS', 'III'],
            key: {
                S: '#forge:stone',
                C: 'littlelogistics:spring',
                I: '#forge:ingots/steel'
            },
            id: 'littlelogistics:barge_dock'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
