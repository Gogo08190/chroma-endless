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
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_infused_pickaxe',
            ingredients: [
                '#forge:rods/copper',
                '#forge:rods/copper',
                'occultism:spirit_attuned_pickaxe_head',
                'create:chromatic_compound',

                'create:chromatic_compound',
            ],
            result: 'occultism:infused_pickaxe',
            id: `occultism:ritual/craft_infused_pickaxe`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_djinni',
            pentacle_id: 'occultism:craft_djinni',
            duration: 240,
            ritual_dummy: 'occultism:ritual_dummy/craft_dimensional_matrix',
            ingredients: [
                'create:polished_rose_quartz',
                'create:polished_rose_quartz',
                'create:polished_rose_quartz',
                'extendedcrafting:ender_ingot',
            ],
            result: 'occultism:dimensional_matrix',
            id: `occultism:ritual/craft_dimensional_matrix`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 60,
            ritual_dummy: 'occultism:ritual_dummy/craft_storage_controller_base',
            ingredients: [
                'occultism:otherstone_pedestal',
                '#forge:ingots/brass',
                '#forge:ingots/brass',
                '#forge:ingots/brass'
            ],
            result: 'occultism:storage_controller_base',
            id: `occultism:ritual/craft_storage_controller_base`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'occultism:book_of_binding_bound_foliot',
            pentacle_id: 'occultism:craft_foliot',
            duration: 120,
            ritual_dummy: 'occultism:ritual_dummy/craft_stabilizer_tier1',
            ingredients: [
                'occultism:otherstone_pedestal',
                'create:copper_casing',
                'botania:blaze_block',
                'kubejs:spirit_attuned_block'
            ],
            result: 'occultism:storage_stabilizer_tier1',
            id: `occultism:ritual/craft_stabilizer_tier1`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'kubejs:sac',
            pentacle_id: 'occultism:craft_afrit',
            duration: 120,
            ritual_dummy: 'sophisticatedbackpacks:backpack',
            ingredients: [
                'immersiveengineering:hemp_fabric',
                'immersiveengineering:hemp_fabric',
                'immersiveengineering:crate',
                'immersiveengineering:hemp_fabric',

                'quark:bonded_leather',
                'quark:bonded_leather',
                'quark:bonded_leather',
                'quark:bonded_leather'
            ],
            result: 'sophisticatedbackpacks:backpack',
            id: `sophisticatedbackpacks:backpack`
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'botania:manasteel_block',
            pentacle_id: 'occultism:craft_afrit',
            duration: 120,
            ritual_dummy: 'botania:terra_plate',
            ingredients: [
                'botania:rune_fire',
                'botania:rune_air',
                'botania:rune_mana',
                'botania:rune_water',

                'botania:rune_earth',
                'minecraft:lapis_block',
                'minecraft:lapis_block',
                'minecraft:lapis_block'
            ],
            result: 'botania:terra_plate',
            id: 'botania:terra_plate'
        },
        {
            ritual_type: 'occultism:craft_with_spirit_name',
            activation_item: 'resourcefulbees:t1_beehive',
            pentacle_id: 'occultism:craft_afrit',
            duration: 120,
            ritual_dummy: 'resourcefulbees:t2_beehive',
            ingredients: [
                'minecraft:honeycomb_block',
                'resourcefulbees:wax_block',
                'expandedstorage:gold_chest',
                'minecraft:honeycomb_block',

                'resourcefulbees:wax_block',
                'expandedstorage:gold_chest',
                'minecraft:honeycomb_block',
                'minecraft:honeycomb_block'
            ],
            result: 'resourcefulbees:t2_beehive',
            id: 'resourcefulbees:t2_beehive_nests'
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
