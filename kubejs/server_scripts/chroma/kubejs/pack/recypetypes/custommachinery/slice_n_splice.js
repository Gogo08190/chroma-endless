onEvent('recipes', event => {

/* Zombie Electrode */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 640)
.requireItem(Item.of('emendatusenigmatica:silicon_gem', 2), "input1")
.requireItem(Item.of('enderioalloys:item_alloy_ingot_energetic_alloy', 2), "input2")
.requireItem('kubejs:uranium_capacitor', "input3")
.requireItem('minecraft:zombie_head', "input4")
.requireFluidPerTick(Fluid.of('industrialforegoing:essence', 1))
.requireEnergyPerTick(1240)
.produceItem(Item.of('enderioalloys:item_material_skull_zombie_electrode', 1))

/* Z-Logic Controller */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem(Item.of('emendatusenigmatica:silicon_gem', 2), "input1")
.requireItem(Item.of('enderioalloys:item_alloy_ingot_soularium', 2), "input2")
.requireItem('enderioalloys:item_alloy_ingot_redstone_alloy', "input3")
.requireItem('minecraft:zombie_head', "input4")
.requireFluidPerTick(Fluid.of('industrialforegoing:essence', 1))
.requireEnergyPerTick(1550)
.produceItem(Item.of('enderioalloys:item_material_skull_zombie_controller', 1))

/* Skeletal Contractor */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem('emendatusenigmatica:silicon_gem', "input1")
.requireItem(Item.of('enderioalloys:item_alloy_ingot_soularium', 2), "input2")
.requireItem(Item.of('architects_palette:rotten_flesh_block', 2), "input3")
.requireItem('minecraft:skeleton_skull', "input4")
.requireFluidPerTick(Fluid.of('industrialforegoing:essence', 1))
.requireEnergyPerTick(1350)
.produceItem(Item.of('enderioalloys:item_material_skull_skeletal_contractor', 1))

/* Ender Resonator */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem(Item.of('emendatusenigmatica:silicon_gem', 2), "input1")
.requireItem(Item.of('enderioalloys:item_alloy_ingot_soularium', 2), "input2")
.requireItem('enderioalloys:item_alloy_ingot_vibrant_alloy', "input3")
.requireItem('tconstruct:enderman_head', "input4")
.requireFluidPerTick(Fluid.of('industrialforegoing:essence', 1))
.requireEnergyPerTick(2000)
.produceItem(Item.of('enderioalloys:item_material_skull_ender_resonator', 1))

/* Binding Card */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem(Item.of('mekanism:alloy_infused', 2), "input1")
.requireItem(Item.of('enderioalloys:item_alloy_ingot_soularium', 2), "input2")
.requireItem('powah:blank_card', "input3")
.requireItem('powah:ender_core', "input4")
.requireFluidPerTick(Fluid.of('industrialforegoing:essence', 1))
.requireEnergyPerTick(2000)
.produceItem(Item.of('powah:binding_card', 1))
.id('powah:crafting/binding_card')
})
