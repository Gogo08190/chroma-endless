onEvent("recipes", (event) => {

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ctiers:centrifuge_controller_tier_5",
            count: 1
        },
        catalyst: {
            item: "ctiers:centrifuge_controller_tier_4",
            count: 1
        },
        total_energy: 50000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "powah:energy_cell_nitro",
            },
            {
                item: "draconicevolution:draconic_energy_core",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "mekanism:personal_chest",
            }
        ],
    }).id('centrifuge_controller_tier_5');

    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ctiers:centrifuge_casing_tier_5",
            count: 3
        },
        catalyst: {
            item: "ctiers:centrifuge_casing_tier_4",
            count: 3
        },
        total_energy: 20000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "draconicevolution:awakened_core",
            },
            {
                item: "ctiers:centrifuge_casing_tier_4",
            },
            {
                item: "ctiers:centrifuge_casing_tier_4",
            },
            {
                item: "ctiers:centrifuge_casing_tier_4",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            }
        ],
    }).id('centrifuge_casing_tier_5');
});
