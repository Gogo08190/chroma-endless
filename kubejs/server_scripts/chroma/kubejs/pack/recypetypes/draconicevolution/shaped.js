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
