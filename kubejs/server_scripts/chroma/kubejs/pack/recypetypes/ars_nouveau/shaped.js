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
            pattern: ['SGS', 'ASA', 'SSS'],
            key: {
                S: 'elementalcraft:scroll_paper',
                M: 'ars_nouveau:mana_fiber',
                P: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:blank_parchment'
        },
        {
            output: 'ars_nouveau:mycelial_sourcelink',
            pattern: ['SGS', 'ASA', 'SSS'],
            key: {
                B: '#forge:ingots/brass',
                M: '#forge:mushrooms',
                A: 'emendatusenigmatica:arcane_gem',
                G: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:mycelial_sourcelink'
        },
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});

