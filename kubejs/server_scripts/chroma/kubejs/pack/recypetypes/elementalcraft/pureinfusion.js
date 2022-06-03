onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/elementalcraft/pureinfusion/';

    /*{
        inputs: [
            { tag: 'si tag' },
            { item: 'si item' }
        ],
        element_amount: 100000,
        output: { item: '' },
        id: ''
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'elementalcraft:pureinfusion',
                ingredients: ingredient,
                element_amount: recipe.element_amount,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
