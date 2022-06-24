onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/refined_storage/shaped/';
    const recipes = [
      ///Large Pattern Encoder
      {
          output: 'rslargepatterns:large_pattern_encoder',
          pattern: ['QNQ', 'LML', 'QCQ'],
          key: {
              Q:'refinedstorage:quartz_enriched_iron',
              N:'extrastorage:neural_processor',
              L:'rslargepatterns:large_pattern',
              M:'refinedstorage:machine_casing',
              C:'create:mechanical_crafter'
          },
          id: 'rslargepatterns:large_pattern_encoder'
      },
      ///Large Pattern Encoder
      {
          output: 'rslargepatterns:large_pattern',
          pattern: ['LPL', 'PNP', 'QQQ'],
          key: {
              L:'thermal:lumium_glass',
              P:'refinedstorage:pattern',
              N:'extrastorage:neural_processor',
              Q:'refinedstorage:quartz_enriched_iron'
          },
          id: 'rslargepatterns:large_pattern'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
