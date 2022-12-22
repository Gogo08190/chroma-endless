onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/elementalcraft/binding/';

    const recipes = [
      {
          inputs: [
              { tag: 'forge:ingots/gold' },
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:drenched_iron_bee' }).weakNBT().toJson(),
              { tag: 'forge:dusts/redstone' },
              { item: 'elementalcraft:aircrystal' }
          ],
          element_type: "air",
          element_amount: 2500,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:swift_alloy_bee' }).toJson(),
          id: `${id_prefix}swift_alloy_bee`
      },
      {
          inputs: [
              { tag: 'forge:ingots/netherite' },
              Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:swift_alloy_bee' }).weakNBT().toJson(),
              { item: 'elementalcraft:purecrystal' }
          ],
          element_type: "fire",
          element_amount: 60000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:fireite_bee' }).toJson(),
          id: `${id_prefix}fireite_bee`
      }
    ];

    recipes.forEach((recipe) => {
        let ingredient = [];
        recipe.inputs.forEach((input) => {
            ingredient.push(input);
        });

        event
            .custom({
                type: 'elementalcraft:binding',
                ingredients: ingredient,
                element_type: recipe.element_type,
                element_amount: recipe.element_amount,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
