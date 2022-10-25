onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/storagedrawers/';
    const recipes = [
        {
            output: 'storagedrawers:obsidian_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'immersiveengineering:stick_treated',
                B: 'minecraft:obsidian',
                C: 'storagedrawers:upgrade_template'
            },
            id: 'storagedrawers:obsidian_storage_upgrade'
        },
        {
            output: 'storagedrawers:iron_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'immersiveengineering:stick_treated',
                B: '#forge:ingots/iron',
                C: 'storagedrawers:obsidian_storage_upgrade'
            },
            id: 'storagedrawers:iron_storage_upgrade'
        },
        {
            output: 'storagedrawers:gold_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'immersiveengineering:stick_treated',
                B: '#forge:ingots/gold',
                C: 'storagedrawers:iron_storage_upgrade'
            },
            id: 'storagedrawers:gold_storage_upgrade'
        },
        {
            output: 'storagedrawers:diamond_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'immersiveengineering:stick_treated',
                B: '#forge:gems/diamond',
                C: 'storagedrawers:gold_storage_upgrade'
            },
            id: 'storagedrawers:diamond_storage_upgrade'
        },
        {
            output: 'storagedrawers:emerald_storage_upgrade',
            pattern: ['AAA', 'BCB', 'AAA'],
            key: {
                A: 'immersiveengineering:stick_treated',
                B: '#forge:gems/emerald',
                C: 'storagedrawers:diamond_storage_upgrade'
            },
            id: 'storagedrawers:emerald_storage_upgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
