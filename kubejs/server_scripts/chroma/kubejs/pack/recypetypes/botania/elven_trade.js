onEvent('recipes', (event) => {
    /*{
        inputs: [
            { tag: ''#forge:ingots/iron'' }, <-- Si item de type tag
            { item: 'botania:mana_pearl' } <-- Si item de type item
        ],
        output: {
            item: ''
        },
        id: ''
    }*/
    const recipes = [
      {
        inputs: [
          {tag: 'forge:ingots/brass'},
          {item: 'elementalcraft:inertcrystal'}
        ],
        output: {
            item: 'elementalcraft:containedcrystal'
        },
        id: 'elementalcraft:containedcrystal'
      },

      {
        inputs: [
          {item: Item.of('botania:manasteel_helmet', '{Damage:0}').weakNBT()},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: Item.of('botania:elementium_helmet', '{Damage:0}').weakNBT()
        },
        id: 'botania:elementium_helmet'
      },

      {
        inputs: [
          {item: Item.of('botania:manasteel_chestplate', '{Damage:0}').weakNBT()},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: Item.of('botania:elementium_chestplate', '{Damage:0}').weakNBT()
        },
        id: 'botania:elementium_chestplate'
      },

      {
        inputs: [
          {item: Item.of('botania:manasteel_leggings', '{Damage:0}').weakNBT()},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: Item.of('botania:elementium_leggings', '{Damage:0}').weakNBT()
        },
        id: 'botania:elementium_leggings'
      },

      {
        inputs: [
          {item: Item.of('botania:manasteel_boots', '{Damage:0}').weakNBT()},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: Item.of('botania:elementium_boots', '{Damage:0}').weakNBT()
        },
        id: 'botania:elementium_boots'
      }

    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'botania:elven_trade',
                ingredients: recipe.inputs,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
