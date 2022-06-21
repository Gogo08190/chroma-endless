// priority: 0
onEvent("item.tooltip", (event) => {
    event.add(/minecraft:(wooden|stone|iron|golden|diamond|netherite)_(sword|shovel|(pick)?axe)/, [
        Text.red("This item is for crafting only!"),
    ]);
    event.add(/mekanismtools:(wood|stone|iron|diamond|gold|netherite|bronze|lapis_lazuli|osmium|steel)_paxel/, [
        Text.red("This item is disabled !"),
    ]);
    event.add(/mekanismtools:(bronze|lapis_lazuli|osmium|steel)_(sword|shovel|(pick)?axe)/, [
        Text.red("This item is for crafting only!"),
    ]);
    event.add(/prefab:item_swift_blade_(wood|stone|iron|gold|diamond|netherite|copper|osmium|bronze|steel|obsidian)/, [
        Text.red("This item is for crafting only!"),
    ]);
    event.add(/miniutilities:experience_pearl*/, [
        Text.red("Experience pearls are gotten when you kill a mob with experience harvester enchant."),
    ]);

    event.add(/^losttrinkets:(?!treasure_bag).+$/, [Text.green("Right-click to learn!")]);

    event.add("miniutilities:cursed_earth", [Text.green("Spawns hostile mobs")]);
    event.add("miniutilities:blessed_earth", [Text.green("Spawns passive mobs")]);
    event.add("miniutilities:blursed_earth", [Text.green("Spawns all mobs")]);
});
