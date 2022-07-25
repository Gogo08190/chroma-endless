onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    /*{
        input: { item: ''},
        results: { item: '', count: nb },
        loss_rate: nb,
        id: ``
    }*/

    const recipes = [
      // compressed iron ingot
      {
        input: { item: 'undergarden:cloggrum_ingot' },
        results: [{ item: 'pneumaticcraft:ingot_iron_compressed' }],
        loss_rate: 10,
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_ingot'
      },
      {
        input: { item: 'undergarden:cloggrum_block' },
        results: [{ item: 'pneumaticcraft:compressed_iron_block' }],
        loss_rate: 10,
        id: 'pneumaticcraft:explosion_crafting/compressed_iron_block'
      },
      {
        input: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:cloggrum_bee' }).weakNBT().toJson(),
        results: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:compressed_iron_bee' }).toJson()],
        loss_rate: 20,
        id: `${id_prefix}compressed_iron_bee`
      }
    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: 'pneumaticcraft:explosion_crafting',
                loss_rate: recipe.loss_rate,
                input: recipe.input,
                results: recipe.results,
            })
            .id(recipe.id);
    });
});
