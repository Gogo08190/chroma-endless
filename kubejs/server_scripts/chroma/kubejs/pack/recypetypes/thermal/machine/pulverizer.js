onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/pulverizer/';

    /*{
        input: '',
        experience: 0.2,
        outputs: [Item.of('', 1)],
        id: ''
    }*/

    const recipes = [

    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
