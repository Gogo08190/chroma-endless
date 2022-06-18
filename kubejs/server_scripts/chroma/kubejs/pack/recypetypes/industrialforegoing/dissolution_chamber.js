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
            inputFluidAmount: 250,
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
            inputFluidAmount: 135,
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
        }
    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input));
        });

        event
            .custom({
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
