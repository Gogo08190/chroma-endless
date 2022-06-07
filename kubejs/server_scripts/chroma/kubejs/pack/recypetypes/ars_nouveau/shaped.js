onEvent('recipes', (event) => {
/*
    ,
    {
        output: '',
        pattern: ['', '', ''],
        key: {
            A: ''
        },
        id: ''
    }
*/
    const recipes = [
        {
            output: 'ars_nouveau:vitalic_sourcelink',
            pattern: ['ASA', 'BDB', 'ASA'],
            key: {
                B: '#forge:ingots/brass',
                D: 'occultism:datura',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:vitalic_sourcelink'
        },
        {
            output: 'ars_nouveau:arcane_stone',
            pattern: ['GCG', 'CAC', 'GCG'],
            key: {
                G: 'emendatusenigmatica:arcane_gem',
                A: 'occultism:spirit_attuned_gem',
                C: '#forge:storage_blocks/compressed_stone',
            },
            id: 'ars_nouveau:arcane_stone'
        },
        {
            output: 'ars_nouveau:mana_condenser',
            pattern: ['ASA', 'BHB', 'ASA'],
            key: {
                B: '#forge:ingots/brass',
                H: '#forge:hay_bales',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:mana_condenser'
        },
        {
            output: 'ars_nouveau:mana_condenser',
            pattern: ['AAA', 'AMA', 'CDC'],
            key: {
                M: 'create:mechanical_piston',
                D: 'elementalcraft:drenched_iron_block',
                C: '#forge:storage_blocks/compressed_stone',
                A: 'ars_nouveau:arcane_stone'
            },
            id: 'ars_nouveau:mana_condenser'
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['DGD', 'DAD', 'SSS'],
            key: {
                S: 'ars_nouveau:arcane_stone',
                D: 'elementalcraft:drenched_iron_block',
                G: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:enchanting_apparatus'
        },
        {
            output: 'ars_nouveau:arcane_pedestal',
            pattern: ['SGS', 'ASA', 'SSS'],
            key: {
                S: 'ars_nouveau:arcane_stone',
                G: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:arcane_pedestal'
        },
        {
            output: 'ars_nouveau:blank_parchment',
            pattern: ['GFG', 'FSF', 'GFG'],
            key: {
                S: 'elementalcraft:scroll_paper',
                F: 'ars_nouveau:mana_fiber',
                G: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:blank_parchment'
        },
        {
            output: 'ars_nouveau:mycelial_sourcelink',
            pattern: ['GSG', 'BMB', 'GSG'],
            key: {
                B: '#forge:ingots/brass',
                M: '#forge:mushrooms',
                S: 'occultism:spirit_attuned_gem',
                G: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:mycelial_sourcelink'
        },
        {
            output: 'ars_nouveau:mana_jar',
            pattern: ['CAC', 'CSC', 'CCC'],
            key: {
                C: 'tconstruct:clear_glass',
                S: 'ars_nouveau:arcane_stone',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:mana_jar'
        },
        {
            output: 'ars_nouveau:mundane_belt',
            pattern: [' S ', 'BAB', ' B '],
            key: {
                B: 'quark:bonded_leather',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:mundane_belt'
        },
        {
            output: 'ars_nouveau:dull_trinket',
            pattern: ['ADA', 'DSD', 'ADA'],
            key: {
                D: 'elementalcraft:drenched_iron_nugget',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:dull_trinket'
        },
        {
            output: 'ars_nouveau:runic_chalk',
            pattern: ['  M', 'WF ', 'WW '],
            key: {
                M: 'ars_nouveau:magic_clay',
                F: 'ars_nouveau:mana_fiber',
                W: 'elementalcraft:whiterock'
            },
            id: 'ars_nouveau:runic_chalk'
        },
        {
            output: 'ars_nouveau:magic_clay',
            pattern: ['  M', 'WF ', 'WW '],
            key: {
                C: '#forge:clay',
                S: 'emendatusenigmatica:arcane_gem',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'ars_nouveau:magic_clay'
        },
        {
            output: 'ars_nouveau:marvelous_clay',
            pattern: ['  M', 'WF ', 'WW '],
            key: {
                L: 'minecraft:lapis_lazuli',
                B: '#forge:ingots/brass',
                M: 'ars_nouveau:magic_clay',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:marvelous_clay'
        },
        {
            output: 'ars_nouveau:mythical_clay',
            pattern: ['  M', 'WF ', 'WW '],
            key: {
                A: 'emendatusenigmatica:arcane_gem',
                B: 'botania:blaze_block',
                M: 'ars_nouveau:marvelous_clay',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'ars_nouveau:mythical_clay'
        },
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

