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
          {
              output: Item.of('kubejs:cthetaneck'),
              itemInput: { ingredient: { item: 'kubejs:thetaneck' } },
              gasInput: { amount: 1000, gas: 'kubejs:green' },
              duration: 25000,
              id: `${id_prefix}cthetaneck`
          },
          {
              output: Item.of('kubejs:ctauneck'),
              itemInput: { ingredient: { item: 'kubejs:tauneck' } },
              gasInput: { amount: 1000, gas: 'kubejs:light' },
              duration: 25000,
              id: `${id_prefix}ctauneck`
          },
          {
              output: Item.of('kubejs:cphineck'),
              itemInput: { ingredient: { item: 'kubejs:phineck' } },
              gasInput: { amount: 1000, gas: 'kubejs:pink' },
              duration: 25000,
              id: `${id_prefix}cphineck`
          },
          {
              output: Item.of('kubejs:comeganeck'),
              itemInput: { ingredient: { item: 'kubejs:omeganeck' } },
              gasInput: { amount: 1000, gas: 'kubejs:blue' },
              duration: 25000,
              id: `${id_prefix}comeganeck`
          },
          {
              output: Item.of('kubejs:cksineck'),
              itemInput: { ingredient: { item: 'kubejs:ksineck' } },
              gasInput: { amount: 1000, gas: 'kubejs:purple' },
              duration: 25000,
              id: `${id_prefix}cksineck`
          },
          {
              output: Item.of('kubejs:cgammaneck'),
              itemInput: { ingredient: { item: 'kubejs:gammaneck' } },
              gasInput: { amount: 1000, gas: 'kubejs:orange' },
              duration: 25000,
              id: `${id_prefix}cgammaneck`
          },
          {
              output: Item.of('kubejs:cdeltaneck'),
              itemInput: { ingredient: { item: 'kubejs:deltaneck' } },
              gasInput: { amount: 1000, gas: 'kubejs:black' },
              duration: 25000,
              id: `${id_prefix}cdeltaneck`
          },
          {
              output: Item.of('kubejs:calphaneck'),
              itemInput: { ingredient: { item: 'kubejs:alphaneck' } },
              gasInput: { amount: 1000, gas: 'kubejs:red' },
              duration: 25000,
              id: `${id_prefix}calphaneck`
          }
        ]
    };

    data.recipes.forEach((recipe) => {
        recipe.type = 'mekanism:nucleosynthesizing';
        event.custom(recipe).id(recipe.id);
    });
});
