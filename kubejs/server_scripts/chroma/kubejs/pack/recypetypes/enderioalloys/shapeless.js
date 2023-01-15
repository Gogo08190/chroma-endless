onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/enderioalloys/shapeless/';
    const recipes = [
        {
            output: '9x enderioalloys:item_alloy_nugget_pulsating_iron',
            inputs: ['enderioalloys:item_alloy_ingot_pulsating_iron'],
            id: `${id_prefix}item_alloy_nugget_pulsating_iron`
        },

        {
            output: 'enderioalloys:block_alloy_conductive_iron',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_conductive_iron'
            ],
            id: `${id_prefix}block_alloy_conductive_iron`
        },

        {
            output: 'enderioalloys:block_alloy_crude_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crude_steel'
            ],
            id: `${id_prefix}block_alloy_crude_steel`
        },

        {
            output: 'enderioalloys:block_alloy_crystalline_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crystalline_alloy'
            ],
            id: `${id_prefix}block_alloy_crystalline_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_dark_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_dark_steel'
            ],
            id: `${id_prefix}block_alloy_dark_steel`
        },

        {
            output: 'enderioalloys:block_alloy_crystalline_pink_slime',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_crystalline_pink_slime'
            ],
            id: `${id_prefix}block_alloy_crystalline_pink_slime`
        },

        {
            output: 'enderioalloys:block_alloy_electrical_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_electrical_steel'
            ],
            id: `${id_prefix}block_alloy_electrical_steel`
        },

        {
            output: 'enderioalloys:block_alloy_end_steel',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_end_steel'
            ],
            id: `${id_prefix}block_alloy_end_steel`
        },

        {
            output: 'enderioalloys:block_alloy_energetic_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_energetic_alloy'
            ],
            id: `${id_prefix}block_alloy_energetic_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_energetic_silver',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_energetic_silver'
            ],
            id: `${id_prefix}block_alloy_energetic_silver`
        },

        {
            output: 'enderioalloys:block_alloy_redstone_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_redstone_alloy'
            ],
            id: `${id_prefix}block_alloy_redstone_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_soularium',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_soularium'
            ],
            id: `${id_prefix}block_alloy_soularium`
        },

        {
            output: 'enderioalloys:block_alloy_stellar_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_stellar_alloy'
            ],
            id: `${id_prefix}block_alloy_stellar_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_vibrant_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_vibrant_alloy'
            ],
            id: `${id_prefix}block_alloy_vibrant_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_pulsating_iron',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_pulsating_iron'
            ],
            id: `${id_prefix}block_alloy_pulsating_iron`
        },

        {
            output: 'enderioalloys:block_alloy_melodic_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_melodic_alloy'
            ],
            id: `${id_prefix}block_alloy_melodic_alloy`
        },

        {
            output: 'enderioalloys:block_alloy_vivid_alloy',
            inputs: [
                '9x enderioalloys:item_alloy_ingot_vivid_alloy'
            ],
            id: `${id_prefix}block_alloy_vivid_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_conductive_iron',
            inputs: ['enderioalloys:item_alloy_ingot_conductive_iron'],
            id: `${id_prefix}item_alloy_nugget_conductive_iron`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_crude_steel',
            inputs: ['enderioalloys:item_alloy_ingot_crude_steel'],
            id: `${id_prefix}item_alloy_nugget_crude_steel`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_crystalline_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_crystalline_alloy'],
            id: `${id_prefix}item_alloy_nugget_crystalline_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_crystalline_pink_slime',
            inputs: ['enderioalloys:item_alloy_ingot_crystalline_pink_slime'],
            id: `${id_prefix}item_alloy_nugget_crystalline_pink_slime`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_dark_steel',
            inputs: ['enderioalloys:item_alloy_ingot_dark_steel'],
            id: `${id_prefix}item_alloy_nugget_dark_steel`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_electrical_steel',
            inputs: ['enderioalloys:item_alloy_ingot_electrical_steel'],
            id: `${id_prefix}item_alloy_nugget_electrical_steel`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_end_steel',
            inputs: ['enderioalloys:item_alloy_ingot_end_steel'],
            id: `${id_prefix}item_alloy_nugget_end_steel`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_energetic_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_energetic_alloy'],
            id: `${id_prefix}item_alloy_nugget_energetic_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_energetic_silver',
            inputs: ['enderioalloys:item_alloy_ingot_energetic_silver'],
            id: `${id_prefix}item_alloy_nugget_energetic_silver`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_melodic_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_melodic_alloy'],
            id: `${id_prefix}item_alloy_nugget_melodic_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_redstone_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_redstone_alloy'],
            id: `${id_prefix}item_alloy_nugget_redstone_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_soularium',
            inputs: ['enderioalloys:item_alloy_ingot_soularium'],
            id: `${id_prefix}item_alloy_nugget_soularium`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_stellar_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_stellar_alloy'],
            id: `${id_prefix}item_alloy_nugget_stellar_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_vibrant_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_vibrant_alloy'],
            id: `${id_prefix}item_alloy_nugget_vibrant_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_vivid_alloy',
            inputs: ['enderioalloys:item_alloy_ingot_vivid_alloy'],
            id: `${id_prefix}item_alloy_nugget_vivid_alloy`
        },

        {
            output: 'enderioalloys:item_alloy_ingot_conductive_iron',
            inputs: ['9x enderioalloys:item_alloy_nugget_conductive_iron'],
            id: `${id_prefix}item_alloy_ingot_conductive_iron`
        },
        {
            output: '9x enderioalloys:item_alloy_nugget_crude_steel',
            inputs: ['enderioalloys:item_alloy_ingot_crude_steel'],
            id: `${id_prefix}item_alloy_nugget_crude_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_crystalline_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_crystalline_alloy'],
            id: `${id_prefix}item_alloy_ingot_crystalline_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_crystalline_pink_slime',
            inputs: ['9x enderioalloys:item_alloy_nugget_crystalline_pink_slime'],
            id: `${id_prefix}item_alloy_ingot_crystalline_pink_slime`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_dark_steel',
            inputs: ['9x enderioalloys:item_alloy_nugget_dark_steel'],
            id: `${id_prefix}item_alloy_ingot_dark_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_electrical_steel',
            inputs: ['9x enderioalloys:item_alloy_nugget_electrical_steel'],
            id: `${id_prefix}item_alloy_ingot_electrical_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_end_steel',
            inputs: ['9x enderioalloys:item_alloy_nugget_end_steel'],
            id: `${id_prefix}item_alloy_ingot_end_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_energetic_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_energetic_alloy'],
            id: `${id_prefix}item_alloy_ingot_energetic_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_energetic_silver',
            inputs: ['9x enderioalloys:item_alloy_nugget_energetic_silver'],
            id: `${id_prefix}item_alloy_ingot_energetic_silver`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_melodic_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_melodic_alloy'],
            id: `${id_prefix}item_alloy_ingot_melodic_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_redstone_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_redstone_alloy'],
            id: `${id_prefix}item_alloy_ingot_redstone_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_soularium',
            inputs: ['9x enderioalloys:item_alloy_nugget_soularium'],
            id: `${id_prefix}item_alloy_ingot_soularium`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_crude_steel',
            inputs: ['9x enderioalloys:item_alloy_nugget_crude_steel'],
            id: `${id_prefix}item_alloy_ingot_crude_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_pulsating_iron',
            inputs: ['9x enderioalloys:item_alloy_nugget_pulsating_iron'],
            id: `${id_prefix}item_alloy_nugget_pulsating_iron_steel`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_stellar_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_stellar_alloy'],
            id: `${id_prefix}item_alloy_ingot_stellar_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_vibrant_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_vibrant_alloy'],
            id: `${id_prefix}item_alloy_ingot_vibrant_alloy`
        },
        {
            output: 'enderioalloys:item_alloy_ingot_vivid_alloy',
            inputs: ['9x enderioalloys:item_alloy_nugget_vivid_alloy'],
            id: `${id_prefix}item_alloy_ingot_vivid_alloy`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_vivid_alloy',
            inputs: ['enderioalloys:block_alloy_vivid_alloy'],
            id: `${id_prefix}block_alloy_vivid_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_vibrant_alloy',
            inputs: ['enderioalloys:block_alloy_vibrant_alloy'],
            id: `${id_prefix}block_alloy_vibrant_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_stellar_alloy',
            inputs: ['enderioalloys:block_alloy_stellar_alloy'],
            id: `${id_prefix}block_alloy_stellar_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_soularium',
            inputs: ['enderioalloys:block_alloy_soularium'],
            id: `${id_prefix}block_alloy_soularium_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_redstone_alloy',
            inputs: ['enderioalloys:block_alloy_redstone_alloy'],
            id: `${id_prefix}block_alloy_redstone_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_pulsating_iron',
            inputs: ['enderioalloys:block_alloy_pulsating_iron'],
            id: `${id_prefix}block_alloy_pulsating_iron_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_melodic_alloy',
            inputs: ['enderioalloys:block_alloy_melodic_alloy'],
            id: `${id_prefix}block_alloy_melodic_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_energetic_silver',
            inputs: ['enderioalloys:block_alloy_energetic_silver'],
            id: `${id_prefix}block_alloy_energetic_silver_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_energetic_alloy',
            inputs: ['enderioalloys:block_alloy_energetic_alloy'],
            id: `${id_prefix}block_alloy_energetic_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_end_steel',
            inputs: ['enderioalloys:block_alloy_end_steel'],
            id: `${id_prefix}block_alloy_end_steel_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_electrical_steel',
            inputs: ['enderioalloys:block_alloy_electrical_steel'],
            id: `${id_prefix}block_alloy_electrical_steel_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_dark_steel',
            inputs: ['enderioalloys:block_alloy_dark_steel'],
            id: `${id_prefix}block_alloy_dark_steel_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_crystalline_pink_slime',
            inputs: ['enderioalloys:block_alloy_crystalline_pink_slime'],
            id: `${id_prefix}block_alloy_crystalline_pink_slime_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_crystalline_alloy',
            inputs: ['enderioalloys:block_alloy_crystalline_alloy'],
            id: `${id_prefix}block_alloy_crystalline_alloy_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_crude_steel',
            inputs: ['enderioalloys:block_alloy_crude_steel'],
            id: `${id_prefix}block_alloy_crude_steel_to_ingot`
        },
        {
            output: '9x enderioalloys:item_alloy_ingot_conductive_iron',
            inputs: ['enderioalloys:block_alloy_conductive_iron'],
            id: `${id_prefix}block_alloy_conductive_iron_to_ingot`
        }
    ];
    recipes.forEach((recipe) => {
        event.shapeless(recipe.output, recipe.inputs).id(recipe.id);
    });
});
