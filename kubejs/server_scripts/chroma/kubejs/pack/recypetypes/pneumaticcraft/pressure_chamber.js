onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/pressure_chamber/';

    /*{
        inputs: [
            { tag: 'si tag', count: nb },
            { item: 'si item', count: nb }
        ],
        pressure: 2.0,
        results: [{ item: '', count: nb }],
        id: ''
    }*/

    const recipes = [
      inputs: [
          { item: 'undergarden:cloggrum_ingot', count: 1 }
      ],
      pressure: 2.0,
      results: [{ item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }],
      id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];
        recipe.inputs.forEach((input) => {
            input.type = 'pneumaticcraft:stacked_item';
            ingredients.push(input);
        });

        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: ingredients,
                pressure: recipe.pressure,
                results: recipe.results
            })
            .id(recipe.id);
    });
});
