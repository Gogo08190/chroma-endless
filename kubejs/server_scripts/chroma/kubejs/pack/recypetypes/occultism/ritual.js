onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:summon',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            duration: 60,
            entity_to_sacrifice: {
                tag: 'chroma:bees/forest',
                display_name: 'ritual.occultism.sacrifice.forest_bees'
            },
            pentacle_id: 'occultism:possess_djinni',
            item_to_use: 'occultism:datura',
            entity_to_summon: 'resourcefulbees:occultist_bee',
            ritual_dummy: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:occultist_bee' }).weakNBT(),
            ingredients: [
                'occultism:iesnium_nugget',
                'occultism:iesnium_nugget',
                'occultism:iesnium_nugget',
                'occultism:iesnium_nugget',

                'occultism:spirit_attuned_gem',
                'occultism:otherworld_log',
                'occultism:spirit_attuned_gem',
                'occultism:otherworld_log',

                'occultism:spirit_attuned_gem',
                'occultism:otherworld_log',
                'occultism:spirit_attuned_gem',
                'occultism:otherworld_log'
            ],
            result: 'occultism:jei_dummy/none',
            id: `${id_prefix}summon_occultist_bee`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_djinni',
            duration: 50,
            ritual_dummy: 'thermal:machine_frame',
            ingredients: [
                '#forge:gears/tin',
                '#forge:glass',
                '#forge:gears/tin',
                '#forge:glass',

                '#forge:plates/steel',
                '#forge:plates/steel',
                '#forge:plates/steel',
                '#forge:plates/steel',

                '#forge:plates/steel',
                '#forge:plates/steel',
                '#forge:plates/steel',
                '#forge:plates/steel'
            ],
            result: 'thermal:machine_frame',
            id: `${id_prefix}machine_frame`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_djinni',
            duration: 50,
            ritual_dummy: 'thermal:fluid_cell_frame',
            ingredients: [
                '#forge:gears/bronze',
                '#forge:glass',
                '#forge:gears/bronze',
                '#forge:glass',

                '#forge:plates/copper',
                '#forge:plates/copper',
                '#forge:plates/copper',
                '#forge:plates/copper',

                '#forge:plates/copper',
                '#forge:plates/copper',
                '#forge:plates/copper',
                '#forge:plates/copper'
            ],
            result: 'thermal:fluid_cell_frame',
            id: `${id_prefix}fluid_cell_frame`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_djinni',
            duration: 50,
            ritual_dummy: 'thermal:energy_cell_frame',
            ingredients: [
                '#forge:gears/electrum',
                '#forge:glass',
                '#forge:gears/electrum',
                '#forge:glass',

                '#forge:plates/lead',
                '#forge:plates/lead',
                '#forge:plates/lead',
                '#forge:plates/lead',

                '#forge:plates/lead',
                '#forge:plates/lead',
                '#forge:plates/lead',
                '#forge:plates/lead'
            ],
            result: 'thermal:energy_cell_frame',
            id: `${id_prefix}energy_cell_frame`
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:ritual';

        recipe.activation_item = Ingredient.of(recipe.activation_item).toJson();
        if (recipe.item_to_use) {
            recipe.item_to_use = Ingredient.of(recipe.item_to_use).toJson();
        }
        recipe.ritual_dummy = Ingredient.of(recipe.ritual_dummy).toJson();
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
