onEvent('recipes', (event) => {
    /*
        ,
        {
            output: '',
            inputs: [''],
            id: ''
        }
    */

    const recipes = [
        {
            output: '4x tconstruct:grout',
            inputs: ['minecraft:clay', '4x #forge:sand', '4x #forge:gravel'],
            id: 'tconstruct:grout_multiple'
        },
        {
            output: 'tconstruct:grout',
            inputs: ['minecraft:clay_ball', '#forge:sand', '#forge:gravel'],
            id: 'tconstruct:grout'
        },
        {
            output: '2x tconstruct:nether_grout',
            inputs: ['minecraft:magma_cream', '#forge:soul_sand', 'tconstruct:grout'],
            id: 'tconstruct:nether_grout'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
