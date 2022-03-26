// priority: 0

events.listen('jei.hide.items', function (event) {
  event.hide([
    /ftblibrary:fluid_container/,
    /tconstruct:part_builder/,
    /tconstruct:tinker_station/,
    /tconstruct:crafting_station/,
    'ftbquests:missing_item',
    'ftbquests:custom_icon',
    'ftbquests:barrier',
    'ftbquests:stage_barrier',
    'ftbquests:detector',
    'ftbjarmod:creative_low_temperature_source',
    'ftbjarmod:creative_high_temperature_source',
    'ftbjarmod:creative_subzero_temperature_source',
  ])
})

onEvent('jei.add.items', e => {
  e.add([
    'tconstruct:crafting_station',
    Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
    Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}')
  ])
});
