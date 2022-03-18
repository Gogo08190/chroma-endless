// priority: 100
onEvent("item.tags", (event) => {
    event.add("tconstruct:tables/station", /^tconstruct:tinker_station/g);
    event.add("tconstruct:tables/builder", /^tconstruct:part_builder/g);
    event.add("itemfilters:check_nbt", ["extendedcrafting:singularity", "patchouli:guide_book", "immersiveengineering:blueprint"]);
});
