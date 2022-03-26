onEvent('recipes', event => {
  event.remove({id: 'immersiveengineering:crafting/coal_coke_to_coke'})
  event.remove({id: 'thermal:storage/coal_coke_block'})
  event.remove({id: 'immersiveengineering:recycling/cast_iron_gear'})
  event.remove({id: 'ftbic:macerating/generated/dust_from_metal/emendatusenigmatica/cast_iron_dust'})
  event.remove({id: 'emendatusenigmatica:gear_from_ingot/cast_iron'})
  event.remove({id: 'ftbic:rolling/generated/gear_from_plate/emendatusenigmatica/cast_iron_gear'})
  event.remove({id: 'ftbic:rolling/generated/plate_from_ingot/emendatusenigmatica/cast_iron_plate'})
  event.remove({id: 'ftbic:extracting/generated/rod_from_metal/emendatusenigmatica/cast_iron_rod'})
})

onEvent('recipes', event => {
  var ore = [
    'copper',
    'aluminum',
    'lead',
    'nickel',
    'uranium',
    'osmium',
    'tin',
    'zinc',
    'cobalt',
    'bitumen',
    'cinnabar',
    'apatite',
    'sulfur',
    'niter',
    'bronze',
    'brass',
    'constantan',
    'electrum',
    'steel',
    'invar',
    'signalum',
    'lumium',
    'silver',
    "enderium",
    "steel"
  ]
  ore.forEach(function (item, index) {
    event.remove({id: "mysticalworld:ingots_" + item + "_to_storage_block"})
    event.remove({id: "thermal:storage/" + item + "_block"})
    event.remove({id: "immersiveengineering:crafting/ingot_" + item + "_to_storage_" + item})
    event.remove({id: "tconstruct:common/materials/" + item + "_block_from_ingots"})
    event.remove({id: "create:crafting/materials/" +item + "_block_from_compacting"})
    event.remove({id: "mekanism:processing/" + item + "/storage_blocks/from_ingots"})
    event.remove({id: "occultism:crafting/" + item + "_block"})
    event.remove({id: "mekanism:storage_blocks/" + item})
  })
})
