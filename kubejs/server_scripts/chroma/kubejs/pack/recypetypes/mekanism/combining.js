onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/mekanism/combining/';

    /*{
      input: '',
      extrainput: '',
      output: Item.of('', 1),
      id: ''
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
