onEvent('recipes', event => {

/* Zombie Electrode */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 640)
.requireItem('2x emendatusenigmatica:silicon_gem')
.requireItem('2x enderioalloys:item_alloy_ingot_energetic_alloy')
.requireItem('kubejs:octadic_capacitor')
.requireItem('minecraft:zombie_head')
.requireEnergyPerTick(1240)
.produceItem(Item.of('enderioalloys:item_material_skull_zombie_electrode', 1))

/* Z-Logic Controller */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem('2x enderioalloys:item_alloy_ingot_soularium')
.requireItem('2x emendatusenigmatica:silicon_gem')
.requireItem('enderioalloys:item_alloy_ingot_redstone_alloy')
.requireItem('minecraft:zombie_head')
.requireEnergyPerTick(1550)
.produceItem(Item.of('enderioalloys:item_material_skull_zombie_controller', 1))

/* Skeletal Contractor */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem('2x enderioalloys:item_alloy_ingot_soularium')
.requireItem('emendatusenigmatica:silicon_gem')
.requireItem('minecraft:skeleton_skull')
.requireItem('2x architects_palette:rotten_flesh_block')
.requireEnergyPerTick(1350)
.produceItem(Item.of('enderioalloys:item_material_skull_skeletal_contractor', 1))

/* Guardian Diode */

event.recipes.custommachinery.custom_machine("custommachinery:slice_n_splice", 840)
.requireItem('2x enderioalloys:item_alloy_ingot_energetic_alloy')
.requireItem('2x minecraft:prismarine_crystals')
.requireItem('upgrade_aquatic:elder_guardian_spine')
.requireItem('emendatusenigmatica:silicon_gem')
.requireEnergyPerTick(2000)
.produceItem(Item.of('enderioalloys:item_material_skull_guardian_diode', 1))
})
