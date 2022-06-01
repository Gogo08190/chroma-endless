onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/occultism/ritual/';
    const recipes = [
        {
            ritual_type: 'occultism:summon',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            duration: 120,
            entity_to_sacrifice: {
                tag: 'mob a sacrifer',
                display_name: 'nom a afficher'
            },
            pentacle_id: 'id du pentacle',
            item_to_use: 'item a utiliser',
            entity_to_summon: 'entité a summon',
            ritual_dummy: 'logo du rituel',
            ingredients: [
                '12 o'clock' ,
                '3 o'clock' ,
                '6 o'clock' ,
                '9 o'clock' ,

                '1 o'clock',
                '2 o'clock' ,
                '7 o'clock' ,
                '8 o'clock' ,

                '11 o'clock' ,
                '4 o'clock' ,
                '5 o'clock' ,
                '10 o'clock',
            ],
            result: 'occultism:jei_dummy/none',
            id: `${id_prefix}summon_nom`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_djinni',
            duration: 100,
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
                '#forge:plates/steel',
            ],
            result: 'thermal:machine_frame',
            id: `${id_prefix}machine_frame`
        },
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
