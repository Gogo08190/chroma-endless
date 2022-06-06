onEvent('recipes', (event) => {

    const recipes = [
        // Portal Frame
        {
            output: Item.of('wormhole:portal_frame', 2),
            pattern: ['SBS', 'BOB', 'SBS'],
            key: {
                S: '#forge:ingots/steel',
                B: '#forge:blackstone',
                O: '#forge:obsidian'
            },
            id: 'wormhole:portal_frame'
        },

        // Basic Energy Cell
        {
            output: 'wormhole:basic_energy_cell',
            pattern: ['SRS', 'RCR', 'SRS'],
            key: {
                S: '#forge:ingots/steel',
                R: 'thermal:rf_coil',
                C: 'immersiveengineering:coil_hv'
            },
            id: 'wormhole:basic_energy_cell'
        },

        // Advanced Energy Cell
        {
            output: 'wormhole:advanced_energy_cell',
            pattern: ['SQS', 'RCR', 'SQS'],
            key: {
                S: '#forge:ingots/steel',
                R: 'thermal:rf_coil',
                C: 'wormhole:basic_energy_cell',
                Q: 'create:rose_quartz'
            },
            id: 'wormhole:advanced_energy_cell'
        },

        // Basic Target Cell
        {
            output: 'wormhole:basic_target_cell',
            pattern: ['SLS', 'RCR', 'SLS'],
            key: {
                S: '#forge:ingots/steel',
                R: '#forge:ingots/drenched_iron',
                C: 'thermal:redstone_servo',
                L: '#forge:plates/lapis'
            },
            id: 'wormhole:basic_target_cell'
        },

        // Advanced Target Cell
        {
            output: 'wormhole:advanced_target_cell',
            pattern: ['SLS', 'RCR', 'SLS'],
            key: {
                S: '#forge:ingots/steel',
                R: 'thermal:redstone_servo',
                C: 'wormhole:basic_target_cell',
                L: '#forge:ingots/swift_alloy'
            },
            id: 'wormhole:advanced_target_cell'
        },

        // Coal generator
        {
            output: 'wormhole:coal_generator',
            pattern: ['SPS', 'SFS', 'SRS'],
            key: {
                S: '#forge:ingots/steel',
                P: 'botania:mana_pearl',
                F: 'minecraft:furnace',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'wormhole:coal_generator'
        },

        // Target Definition Device
        {
            output: 'wormhole:target_device',
            pattern: ['  I', 'SPS', 'SRS'],
            key: {
                S: '#forge:ingots/steel',
                P: 'botania:mana_pearl',
                R: 'thermal:redstone_servo',
                I: 'extendedcrafting:redstone_ingot'
            },
            id: 'wormhole:target_device'
        },

        // Advanced Target Definition Device
        {
            output: 'wormhole:advanced_target_device',
            pattern: ['  C', 'SPI', 'SSS'],
            key: {
                S: '#forge:ingots/steel',
                P: 'wormhole:target_device',
                I: '#forge:ingots/swift_alloy',
                C: 'elementalcraft:containedcrystal'
            },
            id: 'wormhole:advanced_target_device'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
