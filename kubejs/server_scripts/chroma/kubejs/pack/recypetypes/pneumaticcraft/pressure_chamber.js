onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/pressure_chamber/';

    /*{
        ingredients: [
          { type: 'pneumaticcraft:stacked_item', item: '', count: nb } (Si item)
          { type: 'pneumaticcraft:stacked_item', tag: '', count: nb } (Si tag)
        ],
        pressure: 2.0,
        output: [
          { item: '', count: nb }
        ],
        id: ''
    }*/

    const recipes = [
        {
            ingredients: [
              { type: 'pneumaticcraft:stacked_item', item: 'undergarden:cloggrum_ingot', count: 1 }
            ],
            pressure: 2.0,
            output: [
              { item: 'pneumaticcraft:ingot_iron_compressed', count: 1 }
            ],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_ingot'
        },
        {
            ingredients: [
              { type: 'pneumaticcraft:stacked_item', item: 'undergarden:cloggrum_block', count: 1 }
            ],
            pressure: 2.0,
            output: [
              { item: 'pneumaticcraft:compressed_iron_block', count: 1 }
            ],
            id: 'pneumaticcraft:pressure_chamber/compressed_iron_block'
        },
        {
            ingredients: [
              { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:plastic', count: 1 },
              { type: 'pneumaticcraft:stacked_item', tag: '#forge:nuggets/electrum', count: 3 },
              { type: 'pneumaticcraft:stacked_item', item: 'thermal:redstone_servo', count: 2 }
            ],
            pressure: 1.5,
            output: [
              { item: 'pneumaticcraft:empty_pcb', count: 3 }

            ],
            id: 'pneumaticcraft:pressure_chamber/empty_pcb'
        },
        {
            ingredients: [
              { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:plastic', count: 1 },
              { type: 'pneumaticcraft:stacked_item', tag: '#forge:nuggets/electrum', count: 2 },
              { type: 'pneumaticcraft:stacked_item', item: 'botania:mana_pearl', count: 1 }
            ],
            pressure: 1.5,
            output: [
              { item: 'pneumaticcraft:capacitor', count: 1 }

            ],
            id: 'pneumaticcraft:pressure_chamber/capacitor'
        },
        {
            ingredients: [
              { type: 'pneumaticcraft:stacked_item', item: 'pneumaticcraft:plastic', count: 1 },
              { type: 'pneumaticcraft:stacked_item', tag: '#forge:nuggets/electrum', count: 2 },
              { type: 'pneumaticcraft:stacked_item', item: 'extendedcrafting:redstone_ingot', count: 1 }
            ],
            pressure: 1.5,
            output: [
              { item: 'pneumaticcraft:transistor', count: 1 }

            ],
            id: 'pneumaticcraft:pressure_chamber/transistor'
        }
    ];
    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:pressure_chamber',
                inputs: recipe.ingredients,
                pressure: recipe.pressure,
                results: recipe.output
            })
            .id(recipe.id);
    });
});
