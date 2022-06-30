onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/powah/energizing/';
    const recipes = [
      /*{
          ingredients: [
              { item: 'enderioalloys:item_alloy_ingot_dark_steel' },
              { item: 'enderioalloys:item_alloy_ingot_dark_steel' },
              { tag: 'forge:storage_blocks/iron_osmium' },
              { tag: 'forge:storage_blocks/iron_osmium' }
          ],
          energy: 1000000,
          result: {
              item: 'enderioalloys:block_alloy_energetic_alloy',
              count: 1
          },
          id: 'enderioalloys:block_alloy_energetic_alloy'
      }*/
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'powah:energizing';
        event.custom(recipe).id(recipe.id);
    });
});
