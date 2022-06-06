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
