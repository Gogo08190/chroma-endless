//   #    #     #  #####  ######
//  # #   #     # #     # #     #
// #   #  #     # #       #     #
//#     # #     #  #####  ######
//#######  #   #        # #
//#     #   # #   #     # #
//#     #    #     #####  #
//
//HIDE ITEMS IN JEI
//BY NEEPNOOP & ANOKKA / 2021
//
onEvent('jei.hide.items', event => {
//COAL
	//Coal dust
	event.hide('silents_mechanisms:coal_dust')
	event.hide('mekanism:dust_coal')
	event.hide('terraqueous:coal_dust')
	//Coal ore
	event.hide('minecraft:coal_ore')
//
//IRON
	//Iron dust
	event.hide('immersiveengineering:dust_iron')
	event.hide('mekanism:dust_iron')
	event.hide('pedestals:dustiron')
	event.hide('mysticalworld:iron_dust')
	event.hide('thermal:iron_dust')
	event.hide('occultism:iron_dust')
	event.hide('terraqueous:iron_dust')
	event.hide('appliedenergistics2:iron_dust')
	//Iron gear
	event.hide('thermal:iron_gear')
	event.hide('titanium:iron_gear')
	//Iron plate
	event.hide('immersiveengineering:plate_iron')
	event.hide('thermal:iron_plate')
	event.hide('create:iron_sheet')
	//Iron rod
	event.hide('silentgear:iron_rod')
	event.hide('immersiveengineering:stick_iron')
	event.hide('createaddition:iron_rod')
	//Iron ore
	event.hide('minecraft:iron_ore')
	event.hide('geolosys:iron_cluster')
//
//GOLD
	//Gold dust
	event.hide('immersiveengineering:dust_gold')
	event.hide('mekanism:dust_gold')
	event.hide('pedestals:dustgold')
	event.hide('mysticalworld:gold_dust')
	event.hide('thermal:gold_dust')
	event.hide('occultism:gold_dust')
	event.hide('terraqueous:gold_dust')
	//Gold gear
	event.hide('thermal:gold_gear')
	event.hide('titanium:gold_gear')
	event.hide('thermal:gold_plate')
	event.hide('immersiveengineering:plate_gold')
	//Gold rod
	event.hide('createaddition:gold_rod')
	//Gold ore
	event.hide('minecraft:gold_ore')
	event.hide('minecraft:nether_gold_ore')
	event.hide('geolosys:gold_cluster')
	event.hide('geolosys:nether_gold_cluster')
//
//DIAMOND
	//Diamond dust
	event.hide('createaddition:diamond_grit')
	event.hide('mekanism:dust_diamond')
	event.hide('thermal:diamond_dust')
	event.hide('terraqueous:diamond_dust')
	//Diamond gear
	event.hide('thermal:diamond_gear')
	event.hide('titanium:diamond_gear')
	//Diamond ore
	event.hide('minecraft:diamond_ore')
//
//EMERALD
	//Emerald dust
	event.hide('mekanism:dust_emerald')
	event.hide('thermal:emerald_dust')
	event.hide('terraqueous:emerald_dust')
	//Emerald gear
	event.hide('thermal:emerald_gear')
	//Emerald ore
	event.hide('minecraft:emerald_ore')
//
//LAPIS LAZULI
	//Lapis lazuli dust
	event.hide('thermal:lapis_dust')
	event.hide('mekanism:dust_lapis_lazuli')
	//Lapis lazuli gear
	event.hide('thermal:lapis_lazuli_gear')
	//Lapis lazuli plate
	event.hide('create:lapis_sheet')
	//Lapis lazuli ore
	event.hide('minecraft:lapis_ore')
//
//NETHER QUARTZ
	//Nether quartz dust
	event.hide('mekanism:dust_quartz')
	event.hide('thermal:quartz_dust')
	//Nether quartz gear
	event.hide('thermal:quartz_gear')
	//Nether quartz ore
	event.hide('minecraft:nether_quartz_ore')
//
//COPPER
	//Copper ingot
	event.hide('mekanism:ingot_copper')
	event.hide('mysticalworld:copper_ingot')
	event.hide('thermal:copper_ingot')
	event.hide('immersiveengineering:ingot_copper')
	event.hide('occultism:copper_ingot')
	event.hide('create:copper_ingot')
	event.hide('tconstruct:copper_ingot')
	event.hide('geolosys:copper_ingot')
	event.hide('projectred-core:copper_ingot')
	//Copper block
	event.hide('mekanism:block_copper')
	event.hide('mysticalworld:copper_block')
	event.hide('thermal:copper_block')
	event.hide('immersiveengineering:storage_copper')
	event.hide('occultism:copper_block')
	event.hide('create:copper_block')
	event.hide('tconstruct:copper_block')
	//Copper nugget
	event.hide('mekanism:nugget_copper')
	event.hide('mysticalworld:copper_nugget')
	event.hide('thermal:copper_nugget')
	event.hide('immersiveengineering:nugget_copper')
	event.hide('occultism:copper_nugget')
	event.hide('create:copper_nugget')
	event.hide('tconstruct:copper_nugget')
	event.hide('geolosys:copper_nugget')
	//Copper dust
	event.hide('immersiveengineering:dust_copper')
	event.hide('mekanism:dust_copper')
	event.hide('pedestals:dustcopper')
	event.hide('mysticalworld:copper_dust')
	event.hide('thermal:copper_dust')
	event.hide('occultism:copper_dust')
	//Copper gear
	event.hide('thermal:copper_gear')
	//Copper plate
	event.hide('create:copper_sheet')
	event.hide('thermal:copper_plate')
	event.hide('immersiveengineering:plate_copper')
	//Copper rod
	event.hide('immersiveposts:stick_copper')
	event.hide('createaddition:copper_rod')
	//Copper ore
	event.hide('immersiveengineering:ore_copper')
	event.hide('mekanism:copper_ore')
	event.hide('create:copper_ore')
	event.hide('thermal:copper_ore')
	event.hide('mysticalworld:copper_ore')
	event.hide('tconstruct:copper_ore')
	event.hide('occultism:copper_ore')
	event.hide('geolosys:copper_cluster')
	event.hide('projectred-exploration:copper_ore')
//
//ALUMINUM
	//Aluminum ingot
	event.hide('immersiveengineering:ingot_aluminium')
	event.hide('geolosys:aluminum_ingot')
	//Aluminum block
	event.hide('immersiveengineering:storage_aluminium')
	//Aluminum nugget
	event.hide('immersiveengineering:nugget_aluminium')
	event.hide('geolosys:aluminum_nugget')
	//Aluminum dust
	event.hide('pedestals:dustaluminum')
	event.hide('immersiveengineering:dust_aluminium')
	//Aluminum plate
	event.hide('immersiveengineering:plate_aluminium')
	//Aluminum rod
	event.hide('immersiveengineering:stick_aluminium')
	//Aluminum ore
	event.hide('immersiveengineering:ore_aluminum')
	event.hide('geolosys:aluminum_cluster')
//
//SILVER
	//Silver ingot
	event.hide('mysticalworld:silver_ingot')
	event.hide('thermal:silver_ingot')
	event.hide('immersiveengineering:ingot_silver')
	event.hide('occultism:silver_ingot')
	event.hide('geolosys:silver_ingot')
	event.hide('projectred-core:silver_ingot')
	//Silver block
	event.hide('mysticalworld:silver_block')
	event.hide('thermal:silver_block')
	event.hide('immersiveengineering:storage_silver')
	event.hide('occultism:silver_block')
	//Silver nugget
	event.hide('mysticalworld:silver_nugget')
	event.hide('thermal:silver_nugget')
	event.hide('immersiveengineering:nugget_silver')
	event.hide('occultism:silver_nugget')
	event.hide('geolosys:silver_nugget')
	//Silver dust
	event.hide('mysticalworld:silver_dust')
	event.hide('thermal:silver_dust')
	event.hide('immersiveengineering:dust_silver')
	event.hide('occultism:silver_dust')
	event.hide('pedestals:dustsilver')
	//Silver gear
	event.hide('thermal:silver_gear')
	//Silver plate
	event.hide('thermal:silver_plate')
	event.hide('immersiveengineering:plate_silver')
	//Silver ore
	event.hide('immersiveengineering:ore_silver')
	event.hide('thermal:silver_ore')
	event.hide('mysticalworld:silver_ore')
	event.hide('occultism:silver_ore')
	event.hide('geolosys:silver_cluster')
	event.hide('projectred-exploration:silver_ore')
//
//LEAD
	//Lead ingot
	event.hide('mekanism:ingot_lead')
	event.hide('mysticalworld:lead_ingot')
	event.hide('thermal:lead_ingot')
	event.hide('immersiveengineering:ingot_lead')
	event.hide('geolosys:lead_ingot')
	//Lead block
	event.hide('mekanism:block_lead')
	event.hide('mysticalworld:lead_block')
	event.hide('thermal:lead_block')
	event.hide('immersiveengineering:storage_lead')
	//Lead nugget
	event.hide('mekanism:nugget_lead')
	event.hide('mysticalworld:lead_nugget')
	event.hide('thermal:lead_nugget')
	event.hide('immersiveengineering:nugget_lead')
	event.hide('geolosys:lead_nugget')
	//Lead dust
	event.hide('mekanism:dust_lead')
	event.hide('mysticalworld:lead_dust')
	event.hide('thermal:lead_dust')
	event.hide('immersiveengineering:dust_lead')
	event.hide('pedestals:dustlead')
	//Lead gear
	event.hide('thermal:lead_gear')
	//Lead plate
	event.hide('thermal:lead_plate')
	event.hide('immersiveengineering:plate_lead')
	//Lead ore
	event.hide('immersiveengineering:ore_lead')
	event.hide('mekanism:lead_ore')
	event.hide('thermal:lead_ore')
	event.hide('mysticalworld:lead_ore')
	event.hide('silents_mechanisms:lead_ore')
	event.hide('geolosys:lead_cluster')
//
//NICKEL
	//Nickel ingot
	event.hide('thermal:nickel_ingot')
	event.hide('immersiveengineering:ingot_nickel')
	event.hide('geolosys:nickel_ingot')
	//Nickel block
	event.hide('thermal:nickel_block')
	event.hide('immersiveengineering:storage_nickel')
	//Nickel nugget
	event.hide('thermal:nickel_nugget')
	event.hide('immersiveengineering:nugget_nickel')
	event.hide('geolosys:nickel_nugget')
	//Nickel dust
	event.hide('thermal:nickel_dust')
	event.hide('immersiveengineering:dust_nickel')
	event.hide('pedestals:dustnickel')
	//Nickel gear
	event.hide('thermal:nickel_gear')
	//Nickel plate
	event.hide('thermal:nickel_plate')
	event.hide('immersiveengineering:plate_nickel')
	//Nickel ore
	event.hide('immersiveengineering:ore_nickel')
	event.hide('thermal:nickel_ore')
	event.hide('geolosys:nickel_cluster')
//
//URANIUM
	//Uranium ingot
	event.hide('mekanism:ingot_uranium')
	event.hide('immersiveengineering:ingot_uranium')
	//Uranium block
	event.hide('mekanism:block_uranium')
	event.hide('immersiveengineering:storage_uranium')
	//Uranium nugget
	event.hide('mekanism:nugget_uranium')
	event.hide('immersiveengineering:nugget_uranium')
	//Uranium dust
	event.hide('mekanism:dust_uranium')
	event.hide('immersiveengineering:dust_uranium')
	event.hide('pedestals:dusturanium')
	//Uranium plate
	event.hide('immersiveengineering:plate_uranium')
	//Uranium post
	event.hide('immersiveposts:stick_uranium')
	//Uranium ore
	event.hide('immersiveengineering:ore_uranium')
	event.hide('mekanism:uranium_ore')
	event.hide('geolosys:uranium_cluster')
	event.hide('geolosys:yellorium_cluster')
//
//OSMIUM
	//Osmium ingot
	event.hide('mekanism:ingot_osmium')
	//Osmium block
	event.hide('mekanism:block_osmium')
	//Osmium nugget
	event.hide('mekanism:nugget_osmium')
	//Osmium dust
	event.hide('mekanism:dust_osmium')
	event.hide('pedestals:dustosmium')
	//Osmium ore
	event.hide('mekanism:osmium_ore')
	event.hide('geolosys:osmium_cluster')
//
//TIN
	//Tin ingot
	event.hide('mekanism:ingot_tin')
	event.hide('mysticalworld:tin_ingot')
	event.hide('thermal:tin_ingot')
	event.hide('geolosys:tin_ingot')
	event.hide('projectred-core:tin_ingot')
	//Tin block
	event.hide('mekanism:block_tin')
	event.hide('mysticalworld:tin_block')
	event.hide('thermal:tin_block')
	//Tin nugget
	event.hide('mekanism:nugget_tin')
	event.hide('mysticalworld:tin_nugget')
	event.hide('thermal:tin_nugget')
	event.hide('geolosys:tin_nugget')
	//Tin dust
	event.hide('mekanism:dust_tin')
	event.hide('mysticalworld:tin_dust')
	event.hide('thermal:tin_dust')
	event.hide('pedestals:dusttin')
	//Tin gear
	event.hide('thermal:tin_gear')
	//Tin plate
	event.hide('thermal:tin_plate')
	//Tin ore
	event.hide('mekanism:tin_ore')
	event.hide('thermal:tin_ore')
	event.hide('mysticalworld:tin_ore')
	event.hide('geolosys:tin_cluster')
	event.hide('projectred-exploration:tin_ore')
//
//ZINC
	//Zinc ingot
	event.hide('create:zinc_ingot')
	event.hide('geolosys:zinc_ingot')
	//Zinc block
	event.hide('create:zinc_block')
	//Zinc nugget
	event.hide('create:zinc_nugget')
	event.hide('geolosys:zinc_nugget')
	//Zinc dust
	event.hide('silents_mechanisms:zinc_dust')
	//Zinc plate
	event.hide('createaddition:zinc_sheet')
	//Zinc ore
	event.hide('create:zinc_ore')
	event.hide('geolosys:zinc_cluster')
//
//COBALT
	//Cobalt ingot
	event.hide('tconstruct:cobalt_ingot')
	//Cobalt block
	event.hide('tconstruct:cobalt_block')
	//Cobalt nuggett
	event.hide('tconstruct:cobalt_nugget')
	//Cobalt ore
	event.hide('tconstruct:cobalt_ore')

//FLUORITE
	//Fluorite crystal
	event.hide('mekanism:fluorite_gem')
	//Fluorite dust
	event.hide('mekanism:dust_fuorite')
	//Fluorite ore
	event.hide('mekanism:fluorite_ore')
//
//BITUMEN
	//Bitumen gem
	event.hide('immersivepetroleum:bitumen')
	event.hide('thermal:bitumen')
	//Bitumen block
	event.hide('thermal:bitumen_block')
//
//CINNABAR
	//Cinnabar gem
	event.hide('thermal:cinnabar')
	//Cinnabar block
	event.hide('thermal:cinnabar_block')
	//Cinnabar dust
	event.hide('thermal:cinnabar_dust')
	//Cinnabar ore
	event.hide('thermal:cinnabar_ore')
//
//APATITE
	//Apatite gem
	event.hide('thermal:apatite')
	//Apatite block
	event.hide('thermal:apatite_block')
	//Apatite dust
	event.hide('thermal:apatite_dust')
	//Apatite ore
	event.hide('thermal:apatite_ore')
//
//SULFUR
	//Sulfur gem
	event.hide('thermal:sulfur')
	//Sulfur block
	event.hide('thermal:sulfur_block')
	//Sulfur dust
	event.hide('thermal:sulfur_dust')
	event.hide('immersiveengineering:dust_sulfur')
	event.hide('mekanism:dust_sulfur')
	//Sulfur ore
	event.hide('thermal:sulfur_ore')
//
//POTASSIUM NITRATE
	//Potassium nitrate gem
	event.hide('thermal:niter')
	//Potassium nitrate block
	event.hide('thermal:niter_block')
	//Potassium nitrate dust
	event.hide('thermal:niter_dust')
//
//DIMENSIONAL SHARD
	//
//
//BRONZE
	//Bronze ingot
	event.hide('mekanism:ingot_bronze')
	event.hide('thermal:bronze_ingot')
	//Bronze block
	event.hide('mekanism:block_bronze')
	event.hide('thermal:bronze_block')
	//Bronze nugget
	event.hide('mekanism:nugget_bronze')
	event.hide('thermal:bronze_nugget')
	//Bronze dust
	event.hide('mekanism:dust_bronze')
	//Bronze gear
	event.hide('thermal:bronze_gear')
	//Bronze plate
	event.hide('thermal:bronze_plate')
//
//BRASS
	//Brass ingot
	event.hide('create:brass_ingot')
	//Brass block
	event.hide('create:brass_block')
	//Brass nugget
	event.hide('create:brass_nugget')
	//Brass plate
	event.hide('create:brass_sheet')
	//Brass rod
	event.hide('createaddition:brass_rod')
//
//ELECTRUM
	//Electrum ingot
	event.hide('thermal:electrum_ingot')
	event.hide('immersiveengineering:ingot_electrum')
	//Electrum block
	event.hide('thermal:electrum_block')
	event.hide('immersiveengineering:storage_electrum')
	//Electrum nugget
	event.hide('thermal:electrum_nugget')
	event.hide('immersiveengineering:nugget_electrum')
	//Electrum dust
	event.hide('silents_mechanisms:electrum_dust')
	event.hide('immersiveengineering:dust_electrum')
	//Electrum gear
	event.hide('thermal:electrum_gear')
	//Electrum plate
	event.hide('thermal:electrum_plate')
	event.hide('immersiveengineering:plate_electrum')
//
//CONSTANTAN
	//Constantan ingot
	event.hide('thermal:constantan_ingot')
	event.hide('immersiveengineering:ingot_constantan')
	//Constantan block
	event.hide('thermal:constantan_block')
	event.hide('immersiveengineering:storage_constantan')
	//Constantan nugget
	event.hide('thermal:constantan_nugget')
	event.hide('immersiveengineering:nugget_constantan')
	//Constantan dust
	event.hide('immersiveengineering:dust_constantan')
	//Constantan gear
	event.hide('thermal:constantan_gear')
	//Constantan plate
	event.hide('thermal:constantan_plate')
	event.hide('immersiveengineering:plate_constantan')
	//Constantan rod
	event.hide('immersiveposts:stick_constantan')
//
//STEEL
	//Steel ingot
	event.hide('mekanism:ingot_steel')
	event.hide('immersiveengineering:ingot_steel')
	//Steel block
	event.hide('mekanism:block_steel')
	event.hide('immersiveengineering:storage_steel')
	//Steel nugget
	event.hide('mekanism:nugget_steel')
	event.hide('immersiveengineering:nugget_steel')
	//Steel dust
	event.hide('mekanism:dust_steel')
	event.hide('immersiveengineering:dust_steel')
	//Steel plate
	event.hide('immersiveengineering:plate_steel')
	//Steel rod
	event.hide('immersiveengineering:stick_steel')
//
//INVAR
	//Invar ingot
	event.hide('thermal:invar_ingot')
	//Invar block
	event.hide('thermal:invar_block')
	//Invar nugget
	event.hide('thermal:invar_nugget')
	//Invar gear
	event.hide('thermal:invar_gear')
	//Invar plate
	event.hide('thermal:invar_plate')
//
//LUMIUM
	//Lumium ingot
	event.hide('thermal:lumium_ingot')
	//Lumium block
	event.hide('thermal:lumium_block')
	//Lumium nugget
	event.hide('thermal:lumium_nugget')
	//Lumium gear
	event.hide('thermal:lumium_gear')
	//Lumium plate
	event.hide('thermal:lumium_plate')
//
//SIGNALUM
	//Signalum ingot
	event.hide('thermal:signalum_ingot')
	//Signalum block
	event.hide('thermal:signalum_block')
	//Signalum nugget
	event.hide('thermal:signalum_nugget')
	//Signalum gear
	event.hide('thermal:signalum_gear')
	//Signalum plate
	event.hide('thermal:signalum_plate')
//
//ENDERIUM
	//Enderium ingot
	event.hide('thermal:enderium_ingot')
	//Enderium block
	event.hide('thermal:enderium_block')
	//Enderium nugget
	event.hide('thermal:enderium_nugget')
	//Enderium gear
	event.hide('thermal:enderium_gear')
	//Enderium plate
	event.hide('thermal:enderium_plate')
//
//SILICON
	//Silicon gem.
	event.hide('refinedstorage:silicon')
	//event.hide('emendatusenigmatica:silicon')
//
//COAL COKE
	//Coal coke gem
	event.hide('immersiveengineering:coal_coke')
	event.hide('thermal:coal_coke')
	//Coal coke block
	event.hide('immersiveengineering:coke')
	event.hide('thermal:coal_coke_block')
	//Coal coke dust
	event.hide('immersiveengineering:dust_coke')
//
//CHARCOAL
	//Charcoal dust
	event.hide('mekanism:dust_charcoal')
//
//OTHER
	event.hide('minecraft:redstone_ore')
	event.hide('geolosys:ancient_debris_cluster')
//
//fin
//
})
