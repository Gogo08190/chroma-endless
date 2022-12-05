onEvent('recipes', (event) => {
    event.remove({ type: 'create:cutting', input: '#minecraft:logs' });
    event.remove({ type: 'immersiveengineering:sawmill', input: '#minecraft:logs' });

    event.remove({ type: 'mekanism:combining' });
    event.remove({ type: 'minecraft:smelting', output: 'minecraft:obsidian' });
    event.remove({ type: 'minecraft:blasting', output: 'minecraft:obsidian' });

    event.remove({ type: 'minecraft:smelting', input: '#forge:ores' });
    event.remove({ type: 'minecraft:blasting', input: '#forge:ores' });

    event.remove({ type: 'minecraft:smelting', input: '#forge:dusts' });
    event.remove({ type: 'minecraft:blasting', input: '#forge:dusts' });

    event.remove({ type: 'minecraft:smelting', input: '#farmersdelight:tools/knives' });
    event.remove({ type: 'minecraft:blasting', input: '#farmersdelight:tools/knives' });

    event.remove({ type: 'industrialforegoing:fluid_extractor' });
    event.remove({ type: 'thermal:tree_extractor' });

    event.remove({ mod: 'theoneprobe' });

    event.remove({ type: 'thermal:compression_fuel' });

    var outputRemovals = [
        'aiotbotania:livingwood_shears',
        'aiotbotania:livingrock_shears',

        'byg:blue_enchanted_crafting_table',
        'byg:green_enchanted_crafting_table',
        'byg:mud_block',
        'byg:mud_ball',

        'create:crushing/obsidian',

        'akashictome:tome',

        'magicfeather:magicfeather',

        'minecraft:sticky_piston',

        'morevanillalib:obsidian_shard',

        'simplefarming:raw_bacon',

        'storagedrawers:conversion_upgrade',

        'thermal:bamboo_block'
    ];

    var idRemovals = [
        'apotheosis:spawner/max_delay_inverted',
        'apotheosis:spawner/max_delay',

        'architects_palette:smelting/charcoal_block_from_logs_that_burn_smoking',

        /atmospheric:\w+_chest_wood/,

        'betterendforge:gunpowder_from_sulphur',

        'botania:fertilizer_dye',

        /botanypots:crafting\/compact_hopper/,

        'byg:vermilion_sculk',
        '/byg:\\w+_glass_from_sand/',
        'byg:compat/create/end_sand_from_crushing',

        'compactmachines:wall',

        'create:mechanical_crafting/integrated_circuit',
        'create:pressing/lapis_block',
        'create:fill_minecraft_bucket_with_create_honey',
        'create:crushing/dense_construction_block',
        'create:crushing/nether_quartz_ore',

        'chroma:pack/unification/crafting_shaped_iron_gear',
        'chroma:pack/unification/crafting_shaped_gold_gear',
        'chroma:pack/unification/crafting_shaped_diamond_gear',
        'chroma:pack/unification/crafting_shaped_emerald_gear',
        'chroma:pack/unification/crafting_shaped_lapis_gear',
        'chroma:pack/unification/crafting_shaped_quartz_gear',
        'chroma:pack/unification/crafting_shaped_copper_gear',
        'chroma:pack/unification/crafting_shaped_aluminum_gear',
        'chroma:pack/unification/crafting_shaped_silver_gear',
        'chroma:pack/unification/crafting_shaped_lead_gear',
        'chroma:pack/unification/crafting_shaped_nickel_gear',
        'chroma:pack/unification/crafting_shaped_uranium_gear',
        'chroma:pack/unification/crafting_shaped_osmium_gear',
        'chroma:pack/unification/crafting_shaped_tin_gear',
        'chroma:pack/unification/crafting_shaped_zinc_gear',
        'chroma:pack/unification/crafting_shaped_cobalt_gear',
        'chroma:pack/unification/crafting_shaped_bronze_gear',
        'chroma:pack/unification/crafting_shaped_brass_gear',
        'chroma:pack/unification/crafting_shaped_constantan_gear',
        'chroma:pack/unification/crafting_shaped_electrum_gear',
        'chroma:pack/unification/crafting_shaped_steel_gear',
        'chroma:pack/unification/crafting_shaped_invar_gear',
        'chroma:pack/unification/crafting_shaped_signalum_gear',
        'chroma:pack/unification/crafting_shaped_lumium_gear',
        'chroma:pack/unification/crafting_shaped_enderium_gear',
        'chroma:pack/unification/crafting_shaped_compressed_iron_gear',

        'dustrial_decor:ice_chain',

        /emendatusenigmatica:dust_from_chunk/,
        'emendatusenigmatica:dust_from_ore/quartz',

        'environmental:misc/cherries/cherry_pie',
        'environmental:misc/apple_pie',
        /environmental:building\/wood\/\w+\/\w+_chest_wood/,

        'farmersdelight:cutting/chicken',
        'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
        'farmersdelight:milk_bottle',
        'farmersdelight:milk_bucket_from_bottles',

        'industrialforegoing:laser_drill_ore/niter',
        'industrialforegoing:laser_drill_ore/iridium',
        'industrialforegoing:laser_drill_ore/peridot',
        'industrialforegoing:laser_drill_ore/sapphire',
        'industrialforegoing:laser_drill_ore/ruby',
        'industrialforegoing:laser_drill_ore/ancient_debris',
        'industrialforegoing:laser_drill_ore/arcane',
        'industrialforegoing:laser_drill_ore/mana',
        'industrialforegoing:laser_drill_ore/bitumen',
        'industrialforegoing:laser_drill_ore/fluorite',
        'industrialforegoing:laser_drill_ore/osmium',
        'industrialforegoing:laser_drill_ore/iron',
        'industrialforegoing:laser_drill_ore/gold',
        'industrialforegoing:laser_drill_ore/glowstone',
        'industrialforegoing:laser_drill_ore/emerald',
        'industrialforegoing:laser_drill_ore/uranium',
        'industrialforegoing:laser_drill_ore/tin',
        'industrialforegoing:laser_drill_ore/sulfur',
        'industrialforegoing:laser_drill_ore/silver',
        'industrialforegoing:laser_drill_ore/redstone',
        'industrialforegoing:laser_drill_ore/quartz',
        'industrialforegoing:laser_drill_ore/nickel',
        'industrialforegoing:laser_drill_ore/zinc',
        'industrialforegoing:laser_drill_ore/lead',
        'industrialforegoing:laser_drill_ore/lapis',
        'industrialforegoing:laser_drill_ore/cinnabar',
        'industrialforegoing:laser_drill_ore/diamond',
        'industrialforegoing:laser_drill_ore/copper',
        'industrialforegoing:laser_drill_ore/aluminum',
        'industrialforegoing:laser_drill_ore/coal',
        'industrialforegoing:laser_drill_ore/certus_quartz',
        'industrialforegoing:stonework_generate/andesite',
        'industrialforegoing:stonework_generate/diorite',
        'industrialforegoing:stonework_generate/granite',

        'immersiveengineering:crafting/stick_steel',
        'immersiveengineering:crafting/ingot_steel_to_storage_steel',
        'immersiveengineering:crafting/stick_aluminum',
        'immersiveengineering:crafting/stick_iron',
        'immersiveengineering:crusher/bone_meal',
        /immersiveengineering:crafting\/hammercrushing/,
        'immersivepetroleum:distillationtower/oilcracking',
        'immersiveengineering:crafting/ingot_uranium_to_nugget_uranium',
        'immersiveengineering:crafting/coal_coke_to_coke',

        'materialis:smeltery/melting/metal/starmetal/dust',
        /materialis:armor\/building\/exosuit/,

        'mekanism:crushing/stone/to_cobblestone',
        'mekanism:storage_blocks/steel',
        'mekanism:enriching/enriched/tin',
        'mekanism:processing/bronze/dust/from_infusing',
        'mekanism:processing/bronze/ingot/from_infusing',
        'mekanism:processing/lapis_lazuli/from_ore',
        /mekanism:pigment_extracting\/flower/,
        /mekanism:compat\/byg\/pigment_extracting/,
        'mekanism:processing/uranium/nugget/from_ingot',

        'minecraft:crystal_glass',
        'minecraft:bone_pile_from_bone_pile_block',

        'morevanillalib:obsidian_shard',
        'morevanillalib:obsidian',

        'pedestals:pedestal_cobblegen/blackstone',
        'pitg:green_dye',

        'quark:building/crafting/tallow_from_block',

        // 'resourcefulbees:t1_beehive',
        // 'resourcefulbees:t2_beehive',
        // 'resourcefulbees:t3_beehive',
        // 'resourcefulbees:t4_beehive',
        // 'resourcefulbees:t1_beehive_nests',
        // 'resourcefulbees:t2_beehive_nests',
        // 'resourcefulbees:t3_beehive_nests',
        // 'resourcefulbees:t4_beehive_nests',
        // 'resourcefulbees:t1_apiary_beehive',

        'simplefarming:apple_pie',
        'simplefarming:blueberry_pie',

        'tconstruct:tools/modifiers/wither_bone_conversion',
        'tconstruct:tables/tinkers_anvil',
        'tconstruct:tables/scorched_anvil',
        'tconstruct:smeltery/melting/metal/iron/ingot_6_16', //remove rail melting
        'tconstruct:smeltery/melting/metal/gold/powered_rail', //to prevent dupe loop with Transport
        'tconstruct:smeltery/melting/metal/gold/enchanted_apple',
        'tconstruct:smeltery/melting/metal/gold/apple',
        'tconstruct:compat/refined_glowstone_ingot',
        'tconstruct:compat/refined_obsidian_ingot',
        'tconstruct:smeltery/alloys/molten_refined_obsidian',

        'thermal:compat/tconstruct/chiller_tconstruct_molten_debris_ingot',
        'thermal:machine/smelter/smelter_alloy_netherite',
        'thermal:machine/press/packing2x2/press_honeycomb_packing',
        'thermal:machine/refinery/refinery_crude_oil',
        'thermal:machine/centrifuge/centrifuge_honeycomb',
        'thermal:machine/centrifuge/centrifuge_oil_red_sand',
        'thermal:machine/centrifuge/centrifuge_oil_sand',
        'thermal:machine/plugins/create/pulverizer_create_zinc_ore',
        'thermal:machine/plugins/mekanism/pulverizer_mek_osmium_ore',
        'thermal:storage/sugar_cane_from_block',
        'thermal:devices/plugins/byg/tree_extractor_byg_rainbow_eucalyptus',
        'thermal:devices/plugins/byg/tree_extractor_byg_mahogany',
        'thermal:devices/plugins/byg/tree_extractor_byg_baobab',
        'thermal:devices/tree_extractor/tree_extractor_jungle',
        'thermal:signalum_dust_4',
        'thermal:rubber_3',
        'thermal:smelting/cured_rubber_from_smelting',
        'thermal:storage/sulfur_block',
        'thermal:gunpowder_4',
        'thermal:lumium_ingot',
        'thermal:storage/coal_coke_block',

        'pneumaticcraft:one_probe_crafting',

        'ppfluids:fluid_pipe_to_pipe',

        'powah:crafting/energy_cell_basic_2',
        'powah:crafting/cable_basic',
        'projectvibrantjourneys:seashells',

        'quark:building/crafting/compressed/gunpowder_sack',

        'simplefarming:candy',
        'simplefarming:raw_chicken_wings',

        'supplementaries:strings_recipe',

        'upgrade_aquatic:bone_meal_from_tooth',

        'bigreactors:yellorium_component_to_storage',
    ];

    var regexIdRemovals = [
        /emendatusenigmatica:ore_from_chunk_crafting/,
        /emendatusenigmatica:ore_from_chunk_stonecutting/,
        /create:\w+\/bread/,
        /create:smelting\/ingot_\w+_compat/,
        /create:smelting\/\w+_ingot_compat/,
        /create:blasting\/ingot_\w+_compat/,
        /create:blasting\/\w+_ingot_compat/,
        /create:compat\/thermal\/crushing\/\w+_ore/,
        /byg:\w*red_rock_\w+_from_\w*stonecutting/,
        /masonry:\w+wall_from_\w+_stonecutting/,
        /masonry:\w+slab_from_\w+_stonecutting/,
        /thermal:compat\/\w+\/\w+_ore/,
        /decorative_blocks:\w+_beam/,
        /decorative_blocks_abnormals:\w+_beam/
    ];

    outputRemovals.forEach((removal) => {
        event.remove({ output: removal });
    });

    idRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    regexIdRemovals.forEach((removal) => {
        event.remove({ id: removal });
    });

    disabledItems.forEach((disabledItem) => {
        event.remove({ output: disabledItem });
    });

    event.remove({
        output: 'mekanism:sawdust',
        mod: 'mekanism',
        type: 'mekanism:sawing'
    });

    event.remove({
        output: '/\\w+:\\w+_gear$/',
        type: 'minecraft:crafting_shaped'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveengineering',
        type: 'immersiveengineering:metal_press'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_rod/',
        mod: 'immersiveposts'
    });

    event.remove({
        output: '/emendatusenigmatica:\\w+_gear/',
        mod: 'immersiveengineering'
    });

    event.remove({
        mod: 'occultism',
        type: 'occultism:miner'
    });

    event.remove({
        output: '/powah:\\w+_starter/',
        mod: 'powah'
    });

    event.remove({ type: 'botanypots:crop' });
    event.remove({ type: 'botanypots:soil' });
    event.remove({ type: 'thermal:insolator' });
    event.remove({ type: 'immersiveengineering:cloche' });

    event.remove({ type: 'valhelsia_structures:axe_crafting' });

    stonecuttables.forEach((stoneType) => {
        stoneType.stones.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
        stoneType.onlyAsOutput.forEach((stone) => {
            event.remove({ type: 'minecraft:stonecutting', output: stone });
        });
    });

    event.remove({
        input: '#forge:ores/zinc',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/osmium',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/uranium',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/aluminum',
        type: 'thermal:smelter'
    });
    event.remove({
        input: '#forge:ores/nickel',
        type: 'thermal:smelter'
    });
    event.remove({
        id: /emendatusenigmatica:ore_from_chunk_crafting/
    });
    event.remove({
        input: 'minecraft:fire_charge',
        mod: 'thermal',
        type: 'minecraft:crafting_shapeless'
    });
    event.remove({ type: 'pedestals:pedestal_crushing', output: '#forge:dyes' });
    event.remove({ type: 'create:milling', output: '#forge:dyes' });
    event.remove({ type: 'create:crushing', output: '#forge:dyes' });
    event.remove({ type: 'mekanism:enriching', output: '#forge:dyes' });
    event.remove({ type: 'thermal:centrifuge', output: '#forge:dyes' });
    event.remove({ type: 'immersiveengineering:crusher', output: '#forge:dyes' });
});
