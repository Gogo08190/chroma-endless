onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/pressing/';

    /*{
        output: '',
        inputs: [''],
        id: `${id_prefix}item`
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.create.pressing(recipe.output, recipe.inputs).id(recipe.id);
    });
});
