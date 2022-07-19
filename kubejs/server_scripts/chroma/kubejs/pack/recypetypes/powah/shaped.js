onEvent('recipes', (event) => {
    const recipes = [

        {
            output: Item.of('powah:dielectric_rod', 8),
            pattern: ['DRD', 'DRD', 'DRD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'mekanism:hdpe_rod'
            },
            id: 'powah:crafting/dielectric_rod'
        },
        {
            output: Item.of('powah:dielectric_rod_horizontal', 8),
            pattern: ['DDD', 'RRR', 'DDD'],
            key: {
                D: 'powah:dielectric_paste',
                R: 'mekanism:hdpe_rod'
            },
            id: 'powah:crafting/dielectric_rod_h'
        },
        {
            output: 'powah:dielectric_casing',
            pattern: ['DRD', 'RCR', 'DRD'],
            key: {
                D: 'enderioalloys:item_alloy_ingot_dark_steel',
                R: 'powah:dielectric_rod_horizontal',
                C: 'envirocore:pladium_interconnect'
            },
            id: 'powah:crafting/dielectric_casing'
        },
        {
            output: 'powah:photoelectric_pane',
            pattern: ['DUD', 'UCU', 'DUD'],
            key: {
                D: 'powah:dielectric_paste',
                U: 'pneumaticcraft:upgrade_matrix',
                C: 'undergarden:sediment_glass_pane'
            },
            id: 'powah:crafting/photoelectric_pane'
        },
        {
            output: 'powah:wrench',
            pattern: [' OD', ' DO', 'D  '],
            key: {
                D: 'powah:dielectric_paste',
                O: '#forge:ingots/refined_obsidian'
            },
            id: 'powah:crafting/wrench'
        },
     ];


    recipes.forEach((recipe) => {
        if (recipe.id) {
            event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
        } else {
            event.shaped(recipe.output, recipe.pattern, recipe.key);
        }
    });
});
