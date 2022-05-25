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
            output: 'tconstruct:silky_cloth',
            pattern: ['CSS', 'SSG', 'GGG'],
            key: {
                C: 'minecraft:clay',
                S: '#forge:sand',
                G: '#forge:gravel'
            },
            id: '4x tconstruct:grout'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
