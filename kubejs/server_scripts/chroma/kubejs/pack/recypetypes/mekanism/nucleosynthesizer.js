onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/nucleosynthesizing/';

    /*{
        output: Item.of(''),
        itemInput: { ingredient: { item: ' } },
        gasInput: { amount: 10, gas: 'mekanism:antimatter' },
        duration: 25000,
        id: ''
    }*/

    var data = {
        recipes: [

        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
