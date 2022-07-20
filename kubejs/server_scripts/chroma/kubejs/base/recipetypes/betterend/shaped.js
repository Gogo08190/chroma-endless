onEvent('recipes', (event) => {
    const recipes = [

        // Endstone Furnace
        {
            output: 'betterendforge:end_stone_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'minecraft:end_stone_bricks',
                E: 'minecraft:end_stone',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:end_stone_furnace'
        },
        // Flavolite Furnace
        {
            output: 'betterendforge:flavolite_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'betterendforge:flavolite_bricks',
                E: 'betterendforge:flavolite',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:flavolite_furnace'
        },
        // Sulfuric Rock Furnace
        {
            output: 'betterendforge:sulphuric_rock_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'betterendforge:sulphuric_rock_bricks',
                E: 'betterendforge:sulphuric_rock',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:sulphuric_rock_furnace'
        },
        // Virid Jedstone Furnace
        {
            output: 'betterendforge:virid_jadestone_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'betterendforge:virid_jadestone_bricks',
                E: 'betterendforge:virid_jadestone',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:virid_jadestone_furnace'
        },
        // Azure Jadestone Furnace
        {
            output: 'betterendforge:azure_jadestone_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'betterendforge:azure_jadestone_bricks',
                E: 'betterendforge:azure_jadestone',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:azure_jadestone_furnace'
        },
        // Sandy Jadestone Furnace
        {
            output: 'betterendforge:sandy_jadestone_furnace',
            pattern: ['BEB', 'EFE', 'BEB'],
            key: {
                B: 'betterendforge:sandy_jadestone_bricks',
                E: 'betterendforge:sandy_jadestone',
                F: 'minecraft:furnace'
            },
            id: 'betterendforge:sandy_jadestone_furnace'
        },
        // Endstone Smelter
        {
            output: 'betterendforge:end_stone_smelter',
            pattern: ['TFT', 'FBF', 'TFT'],
            key: {
                B: 'minecraft:end_stone_bricks',
                T: 'betterendforge:thallasium_block',
                F: 'betterendforge:end_stone_furnace'
            },
            id: 'betterendforge:end_stone_smelter'
        },
        // Eternal Pedestal
        {
            output: 'betterendforge:eternal_pedestal',
            pattern: [' R ', 'TPT', 'FFF'],
            key: { 
                P: 'betterendforge:flavolite_pillar',
                R: 'betterendforge:flavolite_runed',
                F: 'betterendforge:flavolite_polished',
                T: 'betterendforge:thallasium_nugget'
            },
            id: 'betterendforge:eternal_pedestal'
        },
        // Infusion Pedestal
        {
            output: 'betterendforge:infusion_pedestal',
            pattern: [' E ', 'TCT', 'CCC'],
            key: {
                E: 'minecraft:ender_eye',
                T: 'betterendforge:thallasium_ingot',
                C: 'minecraft:crying_obsidian'
            },
            id: 'betterendforge:infusion_pedestal'
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
