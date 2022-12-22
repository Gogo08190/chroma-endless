onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/petal_apothecary/';

    const recipes = [
      {
          inputs: [
            Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:rgbee_bee' }).weakNBT().toJson(),
            { item: 'botania:red_petal' },
            { item: 'botania:black_petal' },
            { item: 'botania:gray_petal' },
            { item: 'botania:pink_petal' },
            { item: 'botania:lime_petal' },
            { item: 'botania:yellow_petal' },
            { item: 'botania:light_blue_petal' },
            { item: 'botania:magenta_petal' },
            { item: 'botania:orange_petal' },
            { item: 'botania:cyan_petal' },
            { item: 'botania:light_gray_petal' },
            { item: 'botania:purple_petal' },
            { item: 'botania:blue_petal' },
            { item: 'botania:brown_petal' },
            { item: 'botania:green_petal' }
          ],
          output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:mystical_bee' }).toJson(),
          id: `${id_prefix}mystical_bee`
      }
    ];

    recipes.forEach((recipe) => {
        const re = event.custom({
            type: 'botania:petal_apothecary',
            output: recipe.output,
            ingredients: recipe.inputs
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
