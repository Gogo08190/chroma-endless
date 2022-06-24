onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shaped/';
    const recipes = [

      ///Wireless Crafting Grid
      {
          output: Item.of('refinedstorageaddons:wireless_crafting_grid', '{Energy:0}'),
          pattern: ['QIQ', 'QGQ', 'QAQ'],
          key: {
              Q:'refinedstorage:quartz_enriched_iron',
              I:'rftoolsbase:infused_enderpearl',
              G:'refinedstorage:crafting_grid',
              A:'refinedstorage:advanced_processor'
          },
          id: 'refinedstorageaddons:wireless_crafting_grid'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
