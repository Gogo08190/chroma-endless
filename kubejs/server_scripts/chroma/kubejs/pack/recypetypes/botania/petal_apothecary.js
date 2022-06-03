onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/petal_apothecary/';

    /*{
        inputs: [
            '',
            '',
            ''
        ],
        output: '',
        count: 1,
        id: ''
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        recipe.type = 'botania:petal_apothecary';
        recipe.ingredients = recipe.inputs.map((input) => Ingredient.of(input).toJson());
        recipe.output = { item: recipe.output, count: recipe.count };

        event.custom(recipe).id(recipe.id);
    });
});
