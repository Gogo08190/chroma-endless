onEvent('recipes', event => {

  /* Dark Steel */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 240)
  .requireItem('pneumaticcraft:ingot_iron_compressed')
  .requireItem('emendatusenigmatica:coal_dust')
  .requireItem('prefab:block_compressed_obsidian')
  .requireEnergyPerTick(240)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_dark_steel', 1))

  /* Conductive Iron */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 100)
  .requireItem('pneumaticcraft:ingot_iron_compressed')
  .requireItem('extendedcrafting:redstone_ingot')
  .requireEnergyPerTick(120)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_conductive_iron', 1))

  /* Crude Steel Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 100)
  .requireItem('emendatusenigmatica:steel_ingot')
  .requireItem('thermal:crude_oil_bucket')
  .requireEnergyPerTick(120)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_crude_steel', 1))

  /* Crystalline Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 150)
  .requireItem('#forge:ingots/gold')
  .requireItem('elementalcraft:inertcrystal')
  .requireItem('#forge:ingots/zinc')
  .requireEnergyPerTick(150)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_crystalline_alloy', 1))

  /* Crystalline Pink Slime Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 480)
  .requireItem('enderioalloys:item_alloy_ingot_crystalline_alloy')
  .requireItem('elementalcraft:inertcrystal')
  .requireItem('industrialforegoing:pink_slime')
  .requireEnergyPerTick(200)
  .produceItem(Item.of('enderioalloys:item_alloy_ingot_crystalline_pink_slime', 1))

  /* Electrical Steel Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 120)
    .requireItem('pneumaticcraft:ingot_iron_compressed')
    .requireItem('emendatusenigmatica:silicon_gem')
    .requireItem('emendatusenigmatica:coke_dust')
    .requireEnergyPerTick(120)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_electrical_steel', 1))

  /* Energetic Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 110)
    .requireItem('minecraft:gold_ingot')
    .requireItem('minecraft:glowstone')
    .requireItem('extendedcrafting:redstone_ingot')
    .requireEnergyPerTick(100)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_energetic_alloy', 1))

  /* Energetic Silver Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 150)
    .requireItem('emendatusenigmatica:silver_ingot')
    .requireItem('minecraft:glowstone')
    .requireItem('extendedcrafting:redstone_ingot')
    .requireEnergyPerTick(100)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_energetic_silver', 1))

  /* Melodic Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 520)
    .requireItem('enderioalloys:item_alloy_ingot_end_steel')
    .requireItem('minecraft:note_block')
    .requireItem('emendatusenigmatica:enderium_ingot')
    .requireEnergyPerTick(250)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_melodic_alloy', 1))

  /* Pulsating Iron Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 100)
    .requireItem('pneumaticcraft:ingot_iron_compressed')
    .requireItem('betterendforge:ender_block')
    .requireEnergyPerTick(100)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_pulsating_iron', 1))

  /* Redstone Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 90)
    .requireItem('emendatusenigmatica:silicon_gem')
    .requireItem('extendedcrafting:redstone_ingot')
    .requireEnergyPerTick(90)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_redstone_alloy', 1))


  /* Soularium Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 105)
    .requireItem('minecraft:gold_ingot')
    .requireItem('minecraft:soul_sand')
    .requireItem('emendatusenigmatica:brass_ingot')
    .requireEnergyPerTick(90)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_soularium', 1))

  /* Stellar Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 520)
    .requireItem('extendedcrafting:nether_star_block')
    .requireItem('enderioalloys:item_alloy_ingot_melodic_alloy')
    .requireItem('minecraft:clay')
    .requireEnergyPerTick(300)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_stellar_alloy', 1))

  /* Vibrant Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 120)
    .requireItem('betterendforge:ender_block')
    .requireItem('enderioalloys:item_alloy_ingot_energetic_alloy')
    .requireEnergyPerTick(120)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_vibrant_alloy', 1))

  /* Vivid Alloy Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 90)
    .requireItem('betterendforge:ender_block')
    .requireItem('enderioalloys:item_alloy_ingot_energetic_alloy')
    .requireEnergyPerTick(20)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_vivid_alloy', 1))

  /* NetherCotta Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 90)
    .requireItem('minecraft:netherite_ingot')
    .requireItem('minecraft:terracotta')
    .requireEnergyPerTick(20)
    .produceItem(Item.of('enderioalloys:item_material_glazed_nether_brick', 1))

  /* End Steel Ingot */

  event.recipes.custommachinery.custom_machine("custommachinery:alloy_smelter", 250)
    .requireItem('extendedcrafting:ender_ingot')
    .requireItem('prefab:block_compressed_obsidian')
    .requireItem('enderioalloys:item_alloy_ingot_dark_steel')
    .requireEnergyPerTick(200)
    .produceItem(Item.of('enderioalloys:item_alloy_ingot_end_steel', 1))
})
