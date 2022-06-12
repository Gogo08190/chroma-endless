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
          {item: 'botania:manasteel_helmet'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: 'botania:elementium_helmet'
        },
        id: 'botania:elementium_helmet'
      },

      {
        inputs: [
          {item: 'botania:manasteel_chestplate'},
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
            item: 'botania:elementium_chestplate'
        },
        id: 'botania:elementium_chestplate'
      },

      {
        inputs: [
          {item: 'botania:manasteel_leggings'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: 'botania:elementium_leggings'
        },
        id: 'botania:elementium_leggings'
      },

      {
        inputs: [
          {item: 'botania:manasteel_boots'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'},
          {item: 'botania:elementium_ingot'}
        ],
        output: {
            item: 'botania:elementium_boots'
        },
        id: 'botania:elementium_boots'
      },

      {
        inputs: [
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {item: 'minecraft:diamond'}
        ],
        output: {
            item: 'rftoolsbase:infused_diamond'
        },
        id: 'rftoolsbase:infused_diamond'
      },

      {
        inputs: [
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {tag: '#forge:gems/dimensional'},
          {item: 'minecraft:ender_pearl'}
        ],
        output: {
            item: 'rftoolsbase:infused_enderpearl'
        },
        id: 'rftoolsbase:infused_enderpearl'
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
