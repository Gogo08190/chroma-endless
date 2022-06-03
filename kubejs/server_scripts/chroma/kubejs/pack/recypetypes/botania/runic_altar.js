onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/runic_altar/';

    /*{
        inputs: [
            '',
            ''
        ],
        mana: 16000,
        output: '',
        count: 2,
        id: ''
    }*/

    const recipes = [


    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
