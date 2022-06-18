onEvent('recipes', event => {

  event.recipes.custommachinery.custom_machine("enderio:alloy_smelter", 100)
  .requireItem('pneumaticcraft:ingot_iron_compressed')
  .requireItem('emendatusenigmatica:coal_dust')
  .requireItem('prefab:block_compressed_obsidian')
  .requireEnergyPerTick(20)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_dark_steel', 1))
})
