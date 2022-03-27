onEvent('recipes', event => {
  event.remove({id: 'immersiveengineering:crafting/coal_coke_to_coke'})
  event.remove({id: 'thermal:storage/coal_coke_block'})
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
