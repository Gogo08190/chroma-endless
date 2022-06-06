onEvent('recipes', (event) => {

    const recipes = [
        // Contained Crystal
        {
            output: 'elementalcraft:containedcrystal',
            pattern: [' B ', 'BCB', ' B '],
            key: {
                B: '#forge:nuggets/brass',
                C: 'elementalcraft:inertcrystal'
            },
            id: 'elementalcraft:containedcrystal'
        },

        // Impered Element Pipe
        {
            output: Item.of('elementalcraft:elementpipe_impaired', 4),
            pattern: ['ICI'],
            key: {
                I: '#forge:ingots/manasteel',
                C: 'elementalcraft:containedcrystal'
            },
            id: 'elementalcraft:elementpipe_impaired'
        },

        // Empty Source Receptacle
        {
            output: 'elementalcraft:receptacle_empty',
            pattern: ['BSB', 'DCD', 'BSB'],
            key: {
                B: '#forge:ingots/brass',
                C: 'elementalcraft:purecrystal',
                S: '#forge:ingots/swift_alloy',
                D: '#forge:gems/mana_diamond'
            },
            id: 'elementalcraft:receptacle_empty'
        },

        // Empty Source Receptacle
        {
            output: 'elementalcraft:tank_small',
            pattern: [' P ', 'PGP', ' P '],
            key: {
                P: 'elementalcraft:elementpipe_impaired',
                G: 'thermal:obsidian_glass'
            },
            id: 'elementalcraft:tank_small'
        },

        // Element Container
        {
            output: 'elementalcraft:tank',
            pattern: ['ICI', 'PGP', 'WWW'],
            key: {
                P: 'elementalcraft:elementpipe',
                G: 'thermal:obsidian_glass',
                I: 'elementalcraft:drenched_iron_ingot',
                W: 'elementalcraft:whiterock',
                C: 'elementalcraft:containedcrystal'
            },
            id: 'elementalcraft:tank'
        },

        // Rune Inscriber
        {
            output: 'elementalcraft:inscriber',
            pattern: [' WS', 'WDS', 'WCW'],
            key: {
                W: 'elementalcraft:whiterock',
                C: 'elementalcraft:containedcrystal',
                D: '#forge:gems/mana_diamond',
                S: '#forge:ingots/swift_alloy'
            },
            id: 'elementalcraft:inscriber'
        },

        // Element Extractor
        {
            output: 'elementalcraft:extractor',
            pattern: [' C ', ' I ', 'ICI'],
            key: {
                I: '#forge:ingots/manasteel',
                C: 'elementalcraft:containedcrystal'
            },
            id: 'elementalcraft:extractor'
        },

        // Element Infuser
        {
            output: 'elementalcraft:infuser',
            pattern: ['N N', 'ICI'],
            key: {
                I: '#forge:ingots/manasteel',
                C: 'elementalcraft:containedcrystal',
                N: '#forge:nuggets/manasteel'
            },
            id: 'elementalcraft:infuser'
        },

        // Focus
        {
            output: 'elementalcraft:focus',
            pattern: [' SC', ' HS', 'D  '],
            key: {
                C: 'elementalcraft:containedcrystal',
                S: '#forge:ingots/swift_alloy',
                H: 'elementalcraft:hardened_handle',
                D: '#forge:gems/mana_diamond'
            },
            id: 'elementalcraft:focus'
        },

        // Focus
        {
            output: 'elementalcraft:shrine_upgrade_core',
            pattern: ['RSR', 'SCS', 'RSR'],
            key: {
                C: 'elementalcraft:containedcrystal',
                S: '#forge:ingots/swift_alloy',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'elementalcraft:shrine_upgrade_core'
        },

        // Focus
        {
            output: 'elementalcraft:pureinfuser',
            pattern: ['WEW', 'SCS', 'WDW'],
            key: {
                C: 'elementalcraft:containedcrystal',
                S: '#forge:ingots/swift_alloy',
                E: 'elementalcraft:infuser',
                W: 'elementalcraft:whiterock',
                D: '#forge:gems/dragonstone'
            },
            id: 'elementalcraft:pureinfuser'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
