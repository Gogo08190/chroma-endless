onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/industrialforegoing/dissolution_chamber/';

    /*
    {
        inputs: [
            '', // top left
            '', // top
            '', // top right
            '', // left
            '', // right
            '', // bottom left
            '', // bottom
            ''  // bottom right
        ],
        inputFluid: '', // optionnel
        inputFluidAmount: 0, // 0 si pas de fluid
        processingTime: 50,
        outputItem: { item: '', count: 1 },
        outputFluid: '', // optionnel
        outputFluidAmount: 0, // 0 si pas de fluid
        id: ''
    }
    */

    const recipes = [
        {
            inputs: [
                'thermal:lumium_glass',
                'immersiveengineering:toolupgrade_shield_flash',
                'thermal:lumium_glass',
                'thermal:lumium_glass',
                'thermal:lumium_glass',
                'immersiveengineering:component_steel',
                'powah:energy_discharger_nitro',
                'immersiveengineering:component_steel'
            ],
            inputFluid: 'immersiveengineering:creosote',
            inputFluidAmount: 1000,
            processingTime: 600,
            outputItem: { item: 'immersiveengineering:cloche', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'immersiveengineering:crafting/cloche'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_pity',
                'industrialforegoing:plastic',
                'enderioalloys:item_alloy_ingot_dark_steel',
                'enderioalloys:item_alloy_ingot_dark_steel',
                'enderioalloys:item_material_gear_vibrant',
                'kubejs:advanced_extreme_circuit_board',
                'enderioalloys:item_material_gear_vibrant'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_simple',
                '#forge:plastic',
                'enderioalloys:item_alloy_ingot_end_steel',
                'enderioalloys:item_alloy_ingot_end_steel',
                'enderioalloys:item_material_skull_ender_resonator',
                'kubejs:advanced_extreme_circuit_board',
                'enderioalloys:item_material_skull_ender_resonator'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:machine_frame_advanced',
                '#forge:plastic',
                'enderioalloys:item_alloy_ingot_melodic_alloy',
                'enderioalloys:item_alloy_ingot_melodic_alloy',
                'enderioalloys:item_material_skull_guardian_diode',
                'kubejs:advanced_extreme_circuit_board',
                'enderioalloys:item_material_skull_guardian_diode'
            ],
            inputFluid: 'industrialforegoing:ether_gas',
            inputFluidAmount: 500,
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'
        },
        {
            inputs: [
                'tconstruct:hepatizon_block',
                'immersiveengineering:sawblade',
                'tconstruct:hepatizon_block',
                'rftoolsbase:infused_diamond',
                'pneumaticcraft:huge_tank',
                'industrialforegoing:plastic',
                'thermal:upgrade_augment_3',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 400,
            outputItem: { item: 'industrialforegoing:infinity_saw', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/infinity_saw'
        },
        {
            inputs: [
                'tconstruct:hepatizon_block',
                'pneumaticcraft:jackhammer',
                'tconstruct:hepatizon_block',
                'rftoolsbase:infused_diamond',
                'pneumaticcraft:huge_tank',
                'industrialforegoing:plastic',
                'thermal:upgrade_augment_3',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 400,
            outputItem: { item: 'industrialforegoing:infinity_hammer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/infinity_hammer'
        },
        {
            inputs: [
                'tconstruct:hepatizon_block',
                'create:weighted_ejector',
                'tconstruct:hepatizon_block',
                'industrialforegoing:mob_imprisonment_tool',
                'pneumaticcraft:huge_tank',
                'industrialforegoing:plastic',
                'thermal:upgrade_augment_3',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 400,
            outputItem: { item: 'industrialforegoing:infinity_launcher', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/infinity_launcher'
        },
        {
            inputs: [
                'tconstruct:hepatizon_block',
                'minecraft:trident',
                'tconstruct:hepatizon_block',
                'rftoolsbase:infused_diamond',
                'pneumaticcraft:huge_tank',
                'industrialforegoing:plastic',
                'thermal:upgrade_augment_3',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 400,
            outputItem: { item: 'industrialforegoing:infinity_trident', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/infinity_trident'
        },
        {
            inputs: [
                'tconstruct:hepatizon_block',
                'pneumaticcraft:drill_bit_netherite',
                'tconstruct:hepatizon_block',
                'rftoolsbase:infused_diamond',
                'pneumaticcraft:huge_tank',
                'industrialforegoing:plastic',
                'thermal:upgrade_augment_3',
                'industrialforegoing:plastic'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 2000,
            processingTime: 400,
            outputItem: { item: 'industrialforegoing:infinity_drill', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/infinity_drill'
        },
        {
            inputs: [
                'industrialforegoing:speed_addon_1',
                'kubejs:extreme_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:enderium_gear',
                'emendatusenigmatica:enderium_gear',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:speed_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/speed_addon_2'
        },
        {
            inputs: [
                'industrialforegoing:processing_addon_1',
                'kubejs:extreme_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:enderium_gear',
                'emendatusenigmatica:enderium_gear',
                'rftoolscontrol:ram_chip',
                'rftoolscontrol:ram_chip'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:processing_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/processing_addon_2'
        },
        {
            inputs: [
                'industrialforegoing:efficiency_addon_1',
                'kubejs:extreme_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:enderium_gear',
                'emendatusenigmatica:enderium_gear',
                'rftoolspower:blazing_rod',
                'rftoolspower:blazing_rod'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:efficiency_addon_2', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/efficiency_addon_2'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'pneumaticcraft:printed_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:lumium_gear',
                'emendatusenigmatica:lumium_gear',
                'rftoolspower:blazing_rod',
                'rftoolspower:blazing_rod'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:efficiency_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/efficiency_addon_1'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'pneumaticcraft:printed_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:lumium_gear',
                'emendatusenigmatica:lumium_gear',
                'rftoolscontrol:ram_chip',
                'rftoolscontrol:ram_chip'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:processing_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/processing_addon_1'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'pneumaticcraft:printed_circuit_board',
                'minecraft:glass_pane',
                'minecraft:glass_pane',
                'emendatusenigmatica:lumium_gear',
                'emendatusenigmatica:lumium_gear',
                'pneumaticcraft:glycerol',
                'pneumaticcraft:glycerol'
            ],
            inputFluid: 'industrialforegoing:latex',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:speed_addon_1', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:dissolution_chamber/speed_addon_1'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'industrialforegoing:infinity_hammer',
                'industrialforegoing:plastic',
                'enderioalloys:item_alloy_ingot_end_steel',
                'enderioalloys:item_alloy_ingot_end_steel',
                'enderioalloys:item_material_gear_vibrant',
                'industrialforegoing:machine_frame_advanced',
                'enderioalloys:item_material_gear_vibrant'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:mob_crusher', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:mob_crusher'
        },
        {
            inputs: [
                'industrialforegoing:plastic',
                'kubejs:advanced_extreme_circuit_board',
                'industrialforegoing:plastic',
                'pneumaticcraft:spawner_extractor',
                'pneumaticcraft:spawner_extractor',
                'enderioalloys:item_material_skull_ender_resonator',
                'industrialforegoing:machine_frame_advanced',
                'enderioalloys:item_material_skull_ender_resonator'
            ],
            inputFluid: 'industrialforegoing:pink_slime',
            inputFluidAmount: 1000,
            processingTime: 200,
            outputItem: { item: 'industrialforegoing:mob_duplicator', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'industrialforegoing:mob_duplicator'
        },
        {
            inputs: [
                'pneumaticcraft:ingot_iron_compressed',
                'pneumaticcraft:ingot_iron_compressed',
                'pneumaticcraft:ingot_iron_compressed'
            ],
            inputFluid: 'tconstruct:molten_quartz',
            inputFluidAmount: 144,
            processingTime: 150,
            outputItem: { item: 'refinedstorage:quartz_enriched_iron', count: 3 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'refinedstorage:quartz_enriched_iron'
        },
        {
            inputs: [
              'enderioalloys:item_alloy_ingot_melodic_alloy',
              'refinedstorage:raw_basic_processor',
              'enderioalloys:item_alloy_ingot_melodic_alloy',
              'refinedstorage:raw_improved_processor',
              'refinedstorage:raw_advanced_processor',
              'minecraft:obsidian',
              'refinedstorage:processor_binding',
              'minecraft:obsidian'
            ],
            inputFluid: 'tconstruct:molten_quartz',
            inputFluidAmount: 144,
            processingTime: 150,
            outputItem: { item: 'extrastorage:raw_neural_processor', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'extrastorage:raw_neural_processor'
        },
        {
            inputs: [
              'pneumaticcraft:ingot_iron_compressed',
              'immersivepetroleum:petcoke_dust',
              'pneumaticcraft:ingot_iron_compressed',
              'immersivepetroleum:petcoke_dust',
              'immersivepetroleum:petcoke_dust',
              'pneumaticcraft:ingot_iron_compressed',
              'immersivepetroleum:petcoke_dust',
              'pneumaticcraft:ingot_iron_compressed'
            ],
            inputFluid: 'pneumaticcraft:oil',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'extendedcrafting:black_iron_ingot', count: 2 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'extendedcrafting:black_iron_ingot'
        },
        {
            inputs: [
              'minecraft:netherite_block',
              'resourcefulbees:centrifuge_casing',
              'minecraft:netherite_block',
              'resourcefulbees:centrifuge_casing',
              'resourcefulbees:centrifuge_casing',
              'minecraft:netherite_block',
              'extendedcrafting:redstone_ingot_block',
              'minecraft:netherite_block'
            ],
            inputFluid: 'resourcefulbees:honey',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'resourcefulbees:elite_centrifuge_casing', count: 3 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'resourcefulbees:elite_centrifuge_casing'
        },
        {
            inputs: [
              'resourcefulbees:elite_centrifuge_casing',
              'resourcefulbees:centrifuge_controller',
              'resourcefulbees:elite_centrifuge_casing',
              'rftoolsbase:infused_enderpearl',
              'rftoolsbase:infused_enderpearl',
              'resourcefulbees:elite_centrifuge_casing',
              'enderioalloys:item_material_skull_ender_resonator',
              'resourcefulbees:elite_centrifuge_casing'
            ],
            inputFluid: 'resourcefulbees:honey',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'resourcefulbees:elite_centrifuge_controller', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'resourcefulbees:elite_centrifuge_controller'
        },
        {
            inputs: [
              'envirocore:litherite_interconnect',
              'enviroenergy:litherite_solar_cell',
              'envirocore:litherite_interconnect',
              'enviroenergy:litherite_solar_cell',
              'enviroenergy:litherite_solar_cell',
              'envirocore:litherite_interconnect',
              'envirocore:structure_panel',
              'envirocore:litherite_interconnect'
            ],
            inputFluid: 'tconstruct:molten_lumium',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:litherite_solar_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/solar/litherite'
        },
        {
            inputs: [
              'create:refined_radiance',
              'enviroenergy:insulated_lightning_rod',
              'create:refined_radiance',
              'envirocore:litherite_interconnect',
              'envirocore:litherite_interconnect',
              'envirocore:litherite_interconnect',
              'envirocore:structure_panel',
              'envirocore:litherite_interconnect'
            ],
            inputFluid: 'tconstruct:molten_lumium',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:litherite_lightning_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/lightning/ct_litherite'
        },
        {
            inputs: [
              'envirocore:litherite_interconnect',
              'envirocore:laser_diode',
              'envirocore:litherite_interconnect',
              'envirocore:litherite_interconnect',
              'envirocore:litherite_interconnect',
              'envirocore:structure_panel',
              'envirocore:laser_core',
              'envirocore:structure_panel'
            ],
            inputFluid: 'kubejs:molten_mana_diamond',
            inputFluidAmount: 1000,
            processingTime: 150,
            outputItem: { item: 'envirotech:litherite_void_miner_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'envirotech:block/void_miner/ct_litherite'
        },
        {
            inputs: [
                'envirocore:erodium_interconnect',
                'enviroenergy:erodium_solar_cell',
                'envirocore:erodium_interconnect',
                'enviroenergy:erodium_solar_cell',
                'enviroenergy:erodium_solar_cell',
                'envirocore:erodium_interconnect',
                'enviroenergy:litherite_solar_ccu',
                'envirocore:erodium_interconnect'
            ],
            inputFluid: 'tconstruct:molten_lumium',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:erodium_solar_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/solar/erodium'
        },
        {
            inputs: [
                'create:refined_radiance',
                'enviroenergy:insulated_lightning_rod',
                'create:refined_radiance',
                'envirocore:erodium_interconnect',
                'envirocore:erodium_interconnect',
                'envirocore:erodium_interconnect',
                'enviroenergy:litherite_lightning_ccu',
                'envirocore:erodium_interconnect'
            ],
            inputFluid: 'tconstruct:molten_lumium',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:erodium_lightning_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/lightning/ct_erodium'
        },
        {
            inputs: [
                'envirocore:erodium_interconnect',
                'envirocore:laser_diode',
                'envirocore:erodium_interconnect',
                'envirocore:erodium_interconnect',
                'envirocore:erodium_interconnect',
                'envirocore:laser_core',
                'envirotech:litherite_void_miner_ccu',
                'envirocore:laser_core'
            ],
            inputFluid: 'kubejs:molten_mana_diamond',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'envirotech:erodium_void_miner_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'envirotech:block/void_miner/ct_erodium'
        },
        {
            inputs: [
                'envirocore:kyronite_interconnect',
                'enviroenergy:kyronite_solar_cell',
                'envirocore:kyronite_interconnect',
                'enviroenergy:kyronite_solar_cell',
                'enviroenergy:kyronite_solar_cell',
                'envirocore:kyronite_interconnect',
                'enviroenergy:erodium_solar_ccu',
                'envirocore:kyronite_interconnect'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:kyronite_solar_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/solar/kyronite'
        },
        {
            inputs: [
                'create:refined_radiance',
                'enviroenergy:insulated_lightning_rod',
                'create:refined_radiance',
                'envirocore:kyronite_interconnect',
                'envirocore:kyronite_interconnect',
                'envirocore:kyronite_interconnect',
                'enviroenergy:erodium_lightning_ccu',
                'envirocore:kyronite_interconnect'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'enviroenergy:kyronite_lightning_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/lightning/ct_kyronite'
        },
        {
            inputs: [
                'envirocore:kyronite_interconnect',
                'envirocore:laser_diode',
                'envirocore:kyronite_interconnect',
                'envirocore:kyronite_interconnect',
                'envirocore:kyronite_interconnect',
                'envirocore:laser_core',
                'envirotech:erodium_void_miner_ccu',
                'envirocore:laser_core'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 150,
            outputItem: { item: 'envirotech:kyronite_void_miner_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'envirotech:block/void_miner/ct_kyronite'
        },
        {
            inputs: [
                'envirocore:pladium_interconnect',
                'enviroenergy:pladium_solar_cell',
                'envirocore:pladium_interconnect',
                'enviroenergy:pladium_solar_cell',
                'enviroenergy:pladium_solar_cell',
                'envirocore:pladium_interconnect',
                'enviroenergy:kyronite_solar_ccu',
                'envirocore:pladium_interconnect'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 300,
            outputItem: { item: 'enviroenergy:pladium_solar_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/solar/pladium'
        },
        {
            inputs: [
                'create:refined_radiance',
                'enviroenergy:insulated_lightning_rod',
                'create:refined_radiance',
                'envirocore:pladium_interconnect',
                'envirocore:pladium_interconnect',
                'envirocore:pladium_interconnect',
                'enviroenergy:kyronite_lightning_ccu',
                'envirocore:pladium_interconnect'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 300,
            outputItem: { item: 'enviroenergy:pladium_lightning_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'enviroenergy:block/lightning/ct_pladium'
        },
        {
            inputs: [
                'envirocore:pladium_interconnect',
                'envirocore:laser_diode',
                'envirocore:pladium_interconnect',
                'envirocore:pladium_interconnect',
                'envirocore:pladium_interconnect',
                'envirocore:laser_core',
                'envirotech:kyronite_void_miner_ccu',
                'envirocore:laser_core'
            ],
            inputFluid: 'mekanismgenerators:fusion_fuel',
            inputFluidAmount: 8000,
            processingTime: 300,
            outputItem: { item: 'envirotech:pladium_void_miner_ccu', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'envirotech:block/void_miner/ct_pladium'
        },
        // Elite Tier Installer
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_tier_installer',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'minecraft:netherite_block',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_tier_installer', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:tier_installer/elite'
        },
        // Elite Smelting Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_smelting_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_smelting_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/smelting'
        },
        // Elite Enriching Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_enriching_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_enriching_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/enriching'
        },
        // Elite Crushing Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_crushing_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_crushing_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/crushing'
        },
        // Elite Compressing Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_compressing_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_compressing_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/compressing'
        },
        // Elite Combining Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_combining_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_combining_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/combining'
        },
        // Elite Infusing Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_infusing_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_infusing_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/infusing'
        },
        // Elite Sawing Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_sawing_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_sawing_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/sawing'
        },
        // Inanite Jetpack
        {
            inputs: [
                'ironjetpacks:elite_coil',
                'ironjetpacks:inanite_capacitor',
                'ironjetpacks:elite_coil',
                'bigreactors:inanite_block',
                'bigreactors:inanite_block',
                'ironjetpacks:inanite_thruster',
                Item.of('ironjetpacks:regalium_jetpack').weakNBT().toJson(),
                'ironjetpacks:inanite_thruster'
            ],
            inputFluid: 'industrialforegoing:ether_gas', // optionnel
            inputFluidAmount: 8000, // 0 si pas de fluid
            processingTime: 500,
            outputItem: { item: 'ironjetpacks:inanite_jetpack', count: 1 },
            outputFluid: '', // optionnel
            outputFluidAmount: 0, // 0 si pas de fluid
            id: `${id_prefix}inanite_jetpack`
        },
        // Inanite cell
        {
            inputs: [
                'ironjetpacks:regalium_cell'
            ],
            inputFluid: 'bigreactors:rossinite', // optionnel
            inputFluidAmount: 500, // 0 si pas de fluid
            processingTime: 60,
            outputItem: { item: 'ironjetpacks:inanite_cell', count: 1 },
            outputFluid: '', // optionnel
            outputFluidAmount: 0, // 0 si pas de fluid
            id: `${id_prefix}inanite_cell`
        },
        //Muffling Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                '#forge:dusts/steel',
                '#forge:dusts/steel',
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_muffling', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/muffling'
        },
        //Filter Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                '#forge:dusts/tin',
                '#forge:dusts/tin',
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_filter', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/filter'
        },
        //Energy Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                '#forge:dusts/electrum',
                '#forge:dusts/electrum',
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_energy', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/energy'
        },
        //Speed Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                '#forge:dusts/iesnium',
                '#forge:dusts/iesnium',
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_speed', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/speed'
        },
        //Gas Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                '#forge:dusts/iron',
                '#forge:dusts/iron',
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_gas', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/gas'
        },
        //Stone Generator Upgrade
        {
            inputs: [
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused',
                Item.of('elementalcraft:element_holder_water', '{element_amount:10000,Damage:0}'),
                Item.of('elementalcraft:element_holder_fire', '{element_amount:10000,Damage:0}'),
                '#mekanism:alloys/infused',
                '#forge:glass',
                '#mekanism:alloys/infused'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:upgrade_stone_generator', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:upgrade/stone_generator'
        },
        //Teleporter Frame
        {
            inputs: [
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
                'mekanism:ingot_refined_obsidian',
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 1000,
            processingTime: 300,
            outputItem: { item: 'mekanism:teleporter_frame', count: 9 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:teleporter_frame'
        },
        // Elite Injecting Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_injecting_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_injecting_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/injecting'
          },
        // Elite Purifying Factory
        {
            inputs: [
                'mekanism:elite_control_circuit',
                'mekanism:advanced_purifying_factory',
                'mekanism:elite_control_circuit',
                'industrialforegoing:plastic',
                'industrialforegoing:plastic',
                'mekanism:elite_control_circuit',
                'createdeco:netherite_sheet',
                'mekanism:elite_control_circuit'
            ],
            inputFluid: 'tconstruct:molten_refined_glowstone',
            inputFluidAmount: 2000,
            processingTime: 300,
            outputItem: { item: 'mekanism:elite_purifying_factory', count: 1 },
            outputFluid: '',
            outputFluidAmount: 0,
            id: 'mekanism:factory/elite/purifying'
          },
          //soul lava bee
          {
              inputs: [
                  'minecraft:lava_bucket',
                  'allthemodium:allthemodium_ingot',
                  'minecraft:lava_bucket',
                  Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:nether_bee' }).weakNBT().toJson(),
                  Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:blazing_bee' }).weakNBT().toJson(),
                  'tconstruct:blazing_blood_bucket',
                  'allthemodium:allthemodium_ingot',
                  'tconstruct:blazing_blood_bucket'
              ],
              inputFluid: 'allthemodium:molten_bluelava',
              inputFluidAmount: 4000,
              processingTime: 300,
              outputItem: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:soul_lava_bee' }).toJson(),
              outputFluid: '',
              outputFluidAmount: 0,
              id: `${id_prefix}soul_lava_bee`
            }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event.custom({
                type: 'industrialforegoing:dissolution_chamber',
                input: ingredients,
                inputFluid: `{FluidName:"${recipe.inputFluid}",Amount:${recipe.inputFluidAmount}}`,
                processingTime: recipe.processingTime,
                output: recipe.outputItem,
                outputFluid: `{FluidName:"${recipe.outputFluid}",Amount:${recipe.outputFluidAmount}}`
            })
            .id(recipe.id);
    });
});
