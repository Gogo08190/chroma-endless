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
                'industrialforegoing:plastic', // top left
                'industrialforegoing:machine_frame_pity', // top
                'industrialforegoing:plastic', // top right
                'enderioalloys:item_alloy_ingot_dark_steel', // left
                'enderioalloys:item_alloy_ingot_dark_steel', // right
                'enderioalloys:item_material_gear_vibrant', // bottom left
                'kubejs:advanced_extreme_circuit_board', // bottom
                'enderioalloys:item_material_gear_vibrant'  // bottom right
            ],
            inputFluid: 'industrialforegoing:latex', // optionnel
            inputFluidAmount: 250, // 0 si pas de fluid
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_simple', count: 1 },
            outputFluid: '', // optionnel
            outputFluidAmount: 0, // 0 si pas de fluid
            id: 'industrialforegoing:dissolution_chamber/simple_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic', // top left
                'industrialforegoing:machine_frame_simple', // top
                '#forge:plastic', // top right
                'enderioalloys:item_alloy_ingot_end_steel', // left
                'enderioalloys:item_alloy_ingot_end_steel', // right
                'enderioalloys:item_material_skull_ender_resonator', // bottom left
                'kubejs:advanced_extreme_circuit_board', // bottom
                'enderioalloys:item_material_skull_ender_resonator'  // bottom right
            ],
            inputFluid: 'industrialforegoing:pink_slime', // optionnel
            inputFluidAmount: 500, // 0 si pas de fluid
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_advanced', count: 1 },
            outputFluid: '', // optionnel
            outputFluidAmount: 0, // 0 si pas de fluid
            id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame'
        },
        {
            inputs: [
                'industrialforegoing:plastic', // top left
                'industrialforegoing:machine_frame_advanced', // top
                '#forge:plastic', // top right
                'enderioalloys:item_alloy_ingot_melodic_alloy', // left
                'enderioalloys:item_alloy_ingot_melodic_alloy', // right
                'enderioalloys:item_material_skull_guardian_diode', // bottom left
                'kubejs:advanced_extreme_circuit_board', // bottom
                'enderioalloys:item_material_skull_guardian_diode' // bottom right
            ],
            inputFluid: 'industrialforegoing:ether_gas', // optionnel
            inputFluidAmount: 135, // 0 si pas de fluid
            processingTime: 300,
            outputItem: { item: 'industrialforegoing:machine_frame_supreme', count: 1 },
            outputFluid: '', // optionnel
            outputFluidAmount: 0, // 0 si pas de fluid
            id: 'industrialforegoing:dissolution_chamber/supreme_machine_frame'
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
