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
            id: 'tconstruct:smeltery/seared/grout_multiple'
        },
        {
            output: 'tconstruct:grout',
            inputs: ['minecraft:clay_ball', '#forge:sand', '#forge:gravel'],
            id: 'tconstruct:smeltery/seared/grout'
        },
        {
            output: '2x tconstruct:nether_grout',
            inputs: ['minecraft:magma_cream', '#forge:soul_sand', 'tconstruct:grout'],
            id: 'tconstruct:smeltery/scorched/nether_grout'
        }
    ];

    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
