onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/mekanism/combining/';

    /*{
      input: '',
      extrainput: '',
      output: Item.of('', 1),
      id: ''
    }*/

    const recipes = [

      //Ancient débris
      {
        input: 'mekanism:dust_netherite',
        extrainput: 'minecraft:basalt',
        output: 'minecraft:ancient_debris',
        id: 'mekanism:combining/ancient_debris'
      }

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanismCombining(recipe.output, recipe.input, recipe.extrainput).id(recipe.id);
    });
});
