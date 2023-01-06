onEvent('recipes', (event) => {
    const recipes = [
        {
            output: 'meetyourfight:haunted_bell',
            pattern: ['GRG', 'PBP', 'GSG'],
            key: {
                G: '#forge:ingots/gold',
                R: '#botania:runes/sloth',
                P: 'elementalcraft:purecrystal',
                B: 'create:haunted_bell',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'meetyourfight:haunted_bell'
        },
        {
            output: 'meetyourfight:devils_ante',
            pattern: ['GDG', 'GAG', 'PRQ'],
            key: {
                G: '#forge:ingots/gold',
                R: '#botania:runes/wrath',
                P: 'elementalcraft:purecrystal',
                Q: 'botania:cosmetic_devil_tail',
                D: 'botania:cosmetic_devil_horns',
                A: 'occultism:afrit_essence'
            },
            id: 'meetyourfight:devils_ante'
        },
        {
            output: 'meetyourfight:fossil_bait',
            pattern: ['GEG', 'RFR', 'GBG'],
            key: {
                G: '#forge:ingots/gold',
                E: 'occultism:soul_gem',
                R: 'minecraft:rotten_flesh',
                F: '#minecraft:fishes',
                B: '#botania:runes/water'

            },
            id: 'meetyourfight:fossil_bait'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
