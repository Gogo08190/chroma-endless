onEvent('recipes', (event) => {
    /*
    ,
    {
        output: '',
        inputs: [''],
        id: ''
    }
*/

    const recipes = [
        {
            output: '9x enderioalloys:item_alloy_nugget_pulsating_iron',
            inputs: ['enderioalloys:item_alloy_ingot_pulsating_iron'],
            id: 'enderioalloys:item_alloy_nugget_pulsating_iron'
        },

        {
            output: 'enderioalloys:block_alloy_conductive_iron',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_conductive_iron'
            ],
            id: 'enderioalloys:block_alloy_conductive_iron'
        },

        {
            output: 'enderioalloys:block_alloy_crude_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crude_steel'
            ],
            id: 'enderioalloys:block_alloy_crude_steel'
        },

        {
            output: 'enderioalloys:block_alloy_crystalline_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crystalline_alloy'
            ],
            id: 'enderioalloys:block_alloy_crystalline_alloy'
        },

        {
            output: 'enderioalloys:block_alloy_dark_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_dark_steel'
            ],
            id: 'enderioalloys:block_alloy_dark_steel'
        },

        {
            output: 'enderioalloys:block_alloy_crystalline_pink_slime',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crystalline_pink_slime'
            ],
            id: 'enderioalloys:block_alloy_crystalline_pink_slime'
        },

        {
            output: 'enderioalloys:block_alloy_electrical_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_electrical_steel'
            ],
            id: 'enderioalloys:block_alloy_electrical_steel'
        },

        {
            output: 'enderioalloys:block_alloy_end_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_end_steel'
            ],
            id: 'enderioalloys:block_alloy_end_steel'
        },

        {
            output: 'enderioalloys:block_alloy_energetic_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_energetic_alloy'
            ],
            id: 'enderioalloys:block_alloy_energetic_alloy'
        },

        {
            output: 'enderioalloys:block_alloy_energetic_silver',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_energetic_silver'
            ],
            id: 'enderioalloys:block_alloy_energetic_silver'
        },

        {
            output: 'enderioalloys:block_alloy_redstone_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_redstone_alloy'
            ],
            id: 'enderioalloys:block_alloy_redstone_alloy'
        },

        {
            output: 'enderioalloys:block_alloy_soularium',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_soularium'
            ],
            id: 'enderioalloys:block_alloy_soularium'
        },

        {
            output: 'enderioalloys:block_alloy_stellar_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_stellar_alloy'
            ],
            id: 'enderioalloys:block_alloy_stellar_alloy'
        },

        {
            output: 'enderioalloys:block_alloy_vibrant_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_vibrant_alloy'
            ],
            id: 'enderioalloys:block_alloy_vibrant_alloy'
        },

        {
            output: 'enderioalloys:block_alloy_pulsating_iron',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_pulsating_iron'
            ],
            id: 'enderioalloys:block_alloy_pulsating_iron'
        },

        {
            output: 'enderioalloys:block_alloy_melodic_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_melodic_alloy'
            ],
            id: 'enderioalloys:block_alloy_melodic_alloy'
        }
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
