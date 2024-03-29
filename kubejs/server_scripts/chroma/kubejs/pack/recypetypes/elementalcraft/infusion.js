onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/elementalcraft/infusion/';

    const recipes = [
        {
          input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:iron_bee' }).weakNBT().toJson(),
          element_type: "water",
          element_amount: 2000,
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:drenched_iron_bee' }).toJson(),
          id: `${id_prefix}drenched_bee`
        },

        {
            input: {
              item : 'minecraft:quartz'
            },
            element_type: "water",
            element_amount: 500,
            output: {
              item: 'minecraft:prismarine_shard'
            },
            id: `${id_prefix}prismarine_shard`
        }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'elementalcraft:infusion',
                input: recipe.input,
                element_type: recipe.element_type,
                element_amount: recipe.element_amount,
                output: recipe.output
            })
            .id(recipe.id);
    });
});
