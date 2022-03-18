onEvent("recipes", (event) => {
    event.recipes.ftbjarmod
        .jar("16x ftbjarmod:cast_iron_ingot", ["16x #forge:ingots/iron", "#minecraft:coals"])
        .time(1200)
        .highTemp();

    // Thermal
    event.recipes.thermal
        .smelter("4x #forge:ingots/cast_iron", ["4x #forge:ingots/iron", "#forge:silicon"])
        .energy(2000);

    // Mekanism
    event.smelting("#forge:ingots/cast_iron", "mekanism:enriched_iron");
    event.blasting("#forge:ingots/cast_iron", "mekanism:enriched_iron");

    // Immersive
    event.recipes.immersiveengineering
        .arc_furnace(["32x #forge:ingots/cast_iron"], "32x #forge:ingots/iron", ["2x #forge:silicon", "2x #coals"])
        .energy(102400)
        .time(200);
});
