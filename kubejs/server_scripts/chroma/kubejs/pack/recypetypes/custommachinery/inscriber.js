onEvent('recipes', event => {

  event.recipes.custommachinery.custom_machine("custommachinery:inscriber", 240)
  .requireItem('refinedstorage:raw_basic_processor')
  .requireItem('extendedcrafting:redstone_ingot')
  .requireItem('emendatusenigmatica:silicon_gem')
  .requireEnergyPerTick(100)
  .produceItem(Item.of('refinedstorage:basic_processor', 1))
  .id('refinedstorage:basic_processor')
})
