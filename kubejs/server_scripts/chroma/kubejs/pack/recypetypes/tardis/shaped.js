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
            output: 'tardis:key_pirate',
            pattern: ['  B', 'RSC', 'A  '],
            key: {
                B: 'pneumaticcraft:compressed_iron_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                C: 'pneumaticcraft:ingot_iron_compressed',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:key_pirate'
        },

        {
            output: 'tardis:key_gallifreyan',
            pattern: ['  B', 'RSI', 'A  '],
            key: {
                B: 'minecraft:iron_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                I: 'minecraft:iron_ingot',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:key_gallifreyan'
        },

        {
            output: 'tardis:tardis_key',
            pattern: ['  B', 'RSI', 'A  '],
            key: {
                B: 'minecraft:gold_block',
                R: 'rftoolsbase:infused_enderpearl',
                S: 'storagedrawers:drawer_key',
                I: 'minecraft:gold_ingot',
                A: 'pneumaticcraft:advanced_pcb'
            },
            id: 'tardis:tardis_key'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
