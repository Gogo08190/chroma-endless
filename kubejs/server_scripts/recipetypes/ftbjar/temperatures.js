onEvent("recipes", (event) => {
    const temp = event.recipes.ftbjarmod.temperature_source;

    event.remove({ id: "ftbjarmod:temperature_sources/blue_ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/ice" });
    event.remove({ id: "ftbjarmod:temperature_sources/packed_ice" });

    const solidSource = (temperature, block, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            efficiency: efficiency,
        });
    };

    const liquidSource = (temperature, block, item, efficiency) => {
        temp({
            temperature: temperature,
            block: block,
            item: item,
            efficiency: efficiency,
        });
    };

    //Solid Temp
    solidSource("subzero", "minecraft:snow_block", 0.45);
    solidSource("subzero", "minecraft:ice", 0.75);
    solidSource("subzero", "minecraft:packed_ice", 2.0);
    solidSource("subzero", "minecraft:blue_ice", 4.0);
    solidSource("subzero", "powah:dry_ice", 6.0);

    //Liquid Temp
    liquidSource("low", "tconstruct:blazing_blood_fluid", "tconstruct:blazing_blood_bucket", 6.0);
    liquidSource("subzero", "minecraft:water", "minecraft:water_bucket", 0.20);
});
