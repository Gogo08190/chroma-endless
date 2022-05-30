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
                if (tree.trunk != 'minecraft:oak_log') {
                    event
                        .shaped(Item.of(tree.trunk, 8), ['WHW', 'HSH', 'WHW'], {
                            S: tree.sapling,
                            H: 'resourcefulbees:forest_honeycomb',
                            W: 'resourcefulbees:wax'
                        })
                        .id(`${id_prefix}${tree.trunk.replace(':', '_')}_from_${tree.sapling.replace(':', '_')}`);
                }
            });
        }
    });

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
