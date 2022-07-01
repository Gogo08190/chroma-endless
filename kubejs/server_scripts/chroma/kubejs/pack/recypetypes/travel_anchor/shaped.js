onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'travel_anchors:travel_staff',
            pattern: ['  P', ' E ', 'E  '],
            key: {
                E: 'enderioalloys:item_alloy_ingot_electrical_steel',
                P: 'enderioalloys:item_material_vibrant_crystal'
            },
            id: 'travel_anchors:travel_staff'
        },
        {
            output: 'travel_anchors:travel_anchor',
            pattern: ['EDE', 'DPD', 'EDE'],
            key: {
                E: 'enderioalloys:item_alloy_ingot_electrical_steel',
                P: 'enderioalloys:item_material_vibrant_crystal',
                D: 'enderioalloys:item_alloy_ingot_dark_steel'
            },
            id: 'travel_anchors:travel_anchor'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
