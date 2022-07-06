onEvent("recipes", (event) => {

    // Centrifuge Controller Tier 5
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ctiers:centrifuge_controller_tier_5",
            count: 1
        },
        catalyst: {
            item: "ctiers:centrifuge_controller_tier_4"
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

    // Centrifuge Casing Tier 5
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "ctiers:centrifuge_casing_tier_5",
            count: 3
        },
        catalyst: {
            count: 3,
            items: [
              {
                item: "ctiers:centrifuge_casing_tier_4"
              }
            ],
            type: "draconicevolution:ingredient_stack"
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
                item: "powah:nitro_crystal_block",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            },
            {
                item: "extendedcrafting:crystaltine_catalyst",
            }
        ],
    }).id('centrifuge_casing_tier_5');

    // Nanorite Solar CCU
    event.recipes.draconicevolution.fusion_crafting({
        result: {
            item: "enviroenergy:nanorite_solar_ccu",
            count: 1
        },
        catalyst: {
            count: 1,
            items: [
              {
                item: "enviroenergy:aethium_solar_ccu"
              }
            ],
            type: "draconicevolution:ingredient_stack"
        },
        total_energy: 20000000,
        tier: "WYVERN",
        ingredients: [
            {
                item: "draconicevolution:wyvern_core",
            },
            {
                item: "draconicevolution:wyvern_core",
            },
            {
                item: "draconicevolution:wyvern_core",
            },
            {
                item: "draconicevolution:wyvern_core",
            },
            {
                item: "enviroenergy:nanorite_solar_cell",
            },
            {
                item: "enviroenergy:nanorite_solar_cell",
            },
            {
                item: "enviroenergy:nanorite_solar_cell",
            },
            {
                item: "enviroenergy:nanorite_solar_cell",
            }
        ],
    }).id('enviroenergy:block/solar/nanorite');
});
