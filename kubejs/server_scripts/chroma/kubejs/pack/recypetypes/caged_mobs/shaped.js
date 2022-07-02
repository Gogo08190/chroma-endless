onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'cagedmobs:hoppingmobcage',
            pattern: ['RCR', ' H '],
            key: {
                R: 'pneumaticcraft:omnidirectional_hopper',
                C: '#cagedmobs:cages/mobcage',
                H: 'pneumaticcraft:omnidirectional_hopper'
            },
            id: 'cagedmobs:crafting/hoppingmobcage'
        },
        {
            output: 'cagedmobs:dnasampler',
            pattern: ['S  ', ' G ', '  B'],
            key: {
                S: '#forge:ingots/steel',
                G: 'thermal:obsidian_glass',
                B: '#forge:storage_blocks/steel'
            },
            id: 'cagedmobs:crafting/dnasampler'
        },
        {
            output: 'cagedmobs:dnasamplerdiamond',
            pattern: ['S  ', ' G ', '  B'],
            key: {
                S: '#forge:gems/mana_diamond',
                G: 'thermal:enderium_glass',
                B: 'botania:mana_diamond_block'
            },
            id: 'cagedmobs:crafting/dnasamplerdiamond'
        },
        {
            output: 'cagedmobs:cookingupgrade',
            pattern: [' F ', 'RCB', 'BSB'],
            key: {
                F: 'byg:cryptic_campfire',
                R: 'extendedcrafting:redstone_ingot',
                C: '#forge:storage_blocks/coal_coke',
                B: 'minecraft:polished_blackstone',
                S: '#forge:storage_blocks/steel'
            },
            id: 'cagedmobs:crafting/cookingupgrade'
        },
        {
            output: 'cagedmobs:lightningupgrade',
            pattern: [' F ', 'RCR', 'BSB'],
            key: {
                F: 'minecraft:end_rod',
                B: 'minecraft:phantom_membrane',
                C: 'minecraft:shulker_shell',
                R: 'extendedcrafting:redstone_ingot',
                S: '#forge:storage_blocks/steel'
            },
            id: 'cagedmobs:crafting/lightningupgrade'
        },
        {
            output: 'cagedmobs:arrowupgrade',
            pattern: [' F ', 'RCT', 'BSB'],
            key: {
                F: 'ars_nouveau:split_arrow',
                R: 'extendedcrafting:redstone_ingot',
                C: 'minecraft:dispenser',
                B: 'minecraft:polished_blackstone',
                S: '#forge:storage_blocks/steel',
                T: 'minecraft:skeleton_skull'
            },
            id: 'cagedmobs:crafting/arrowupgrade'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
