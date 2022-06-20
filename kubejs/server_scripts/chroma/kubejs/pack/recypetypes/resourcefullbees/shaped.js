onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/';
    /*
        ,
        {
            output: '',
            pattern: ['', '', ''],
            key: {
                A: ''
            },
            id: ''
        }
    */

    treeRegistry.forEach((treeCategories) => {
        if (treeCategories.type == 'tree') {
            treeCategories.trees.forEach((tree) => {
              event
                  .shaped(Item.of(tree.trunk, 8), ['WHW', 'HSH', 'WHW'], {
                      S: tree.sapling,
                      H: 'resourcefulbees:forest_honeycomb',
                      W: 'resourcefulbees:wax'
                  })
                  .id(`${id_prefix}${tree.trunk.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`);
            });
        }
    });

    const recipes = [
      {
          output: 'minecraft:beehive',
          pattern: ['BBB', 'CHC', 'BBB'],
          key: {
              B: 'minecraft:stripped_oak_wood',
              C: 'minecraft:honeycomb_block',
              H: '#forge:beehives/tier_0'
          },
          id: 'minecraft:beehive'
      }

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
