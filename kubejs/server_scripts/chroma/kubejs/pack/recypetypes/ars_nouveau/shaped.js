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
            output: Item.of('ars_nouveau:arcane_stone', 8),
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
            output: 'ars_nouveau:glyph_press',
            pattern: ['AAA', 'AMA', 'CDC'],
            key: {
                M: 'create:mechanical_piston',
                D: 'elementalcraft:drenched_iron_block',
                C: '#forge:storage_blocks/compressed_stone',
                A: 'ars_nouveau:arcane_stone'
            },
            id: 'ars_nouveau:glyph_press'
        },
        {
            output: 'ars_nouveau:enchanting_apparatus',
            pattern: ['SSS', 'IGI', 'IAI'],
            key: {
                S: 'ars_nouveau:arcane_stone',
                I: 'elementalcraft:swift_alloy_block',
                G: 'emendatusenigmatica:arcane_block',
                A: 'kubejs:spirit_attuned_block'
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
            pattern: [' C ', 'RSR', ' R '],
            key: {
                C: '#forge:clay',
                S: 'emendatusenigmatica:arcane_gem',
                R: 'extendedcrafting:redstone_ingot'
            },
            id: 'ars_nouveau:magic_clay'
        },
        {
            output: 'ars_nouveau:marvelous_clay',
            pattern: ['LBL', 'SMS', 'LBL'],
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
            pattern: ['ASA', 'BMB', 'ASA'],
            key: {
                A: 'emendatusenigmatica:arcane_gem',
                B: 'botania:blaze_block',
                M: 'ars_nouveau:marvelous_clay',
                S: 'occultism:spirit_attuned_gem'
            },
            id: 'ars_nouveau:mythical_clay'
        },
        {
            output: 'ars_nouveau:blaze_fiber',
            pattern: ['MMM', 'MBM', 'MMM'],
            key: {
                M: 'ars_nouveau:mana_fiber',
                B: 'botania:blaze_block'
            },
            id: 'ars_nouveau:blaze_fiber'
        },
        {
            output: 'ars_nouveau:end_fiber',
            pattern: ['BBB', 'BCB', 'BBB'],
            key: {
                C: 'quark:chorus_fruit_block',
                B: 'ars_nouveau:blaze_fiber'
            },
            id: 'ars_nouveau:end_fiber'
        },
        {
            output: 'ars_nouveau:spell_parchment',
            pattern: ['GAG', 'GBG', 'GGG'],
            key: {
                A: 'occultism:spirit_attuned_gem',
                B: 'ars_nouveau:blank_parchment',
                G: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:spell_parchment'
        },
        {
            output: 'ars_nouveau:warp_scroll',
            pattern: ['LAL', 'SBS', 'LAL'],
            key: {
                A: 'occultism:spirit_attuned_gem',
                B: 'ars_nouveau:blank_parchment',
                S: 'emendatusenigmatica:arcane_gem',
                L: 'emendatusenigmatica:lapis_plate'
            },
            id: 'ars_nouveau:warp_scroll'
        },
        {
            output: 'ars_nouveau:archmage_hood',
            pattern: ['   ', 'ESE', 'E E'],
            key: {
                E: 'ars_nouveau:end_fiber',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:archmage_hood'
        },
        {
            output: 'ars_nouveau:archmage_robes',
            pattern: ['E E', 'ESE', 'EEE'],
            key: {
                E: 'ars_nouveau:end_fiber',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:archmage_robes'
        },
        {
            output: 'ars_nouveau:archmage_leggings',
            pattern: ['ESE', 'E E', 'E E'],
            key: {
                E: 'ars_nouveau:end_fiber',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:archmage_leggings'
        },
        {
            output: 'ars_nouveau:archmage_boots',
            pattern: ['   ', 'S S', 'E E'],
            key: {
                E: 'ars_nouveau:end_fiber',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:archmage_boots'
        },
        {
            output: 'ars_nouveau:worn_notebook',
            pattern: [' S ', 'SBS', ' S '],
            key: {
                B: 'minecraft:book',
                S: 'emendatusenigmatica:arcane_gem'
            },
            id: 'ars_nouveau:worn_notebook'
        },
        {
            output: 'ars_nouveau:novice_spell_book',
            pattern: ['ASA', 'ADA', 'AMA'],
            key: {
                M: 'ars_nouveau:mana_fiber',
                D: 'occultism:dictionary_of_spirits',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'

            },
            id: 'ars_nouveau:novice_spell_book'
        },
        {
            output: 'ars_nouveau:apprentice_spell_book',
            pattern: ['ASA', 'BNB', 'SQS'],
            key: {
                N: Item.of('ars_nouveau:novice_spell_book', '{mode:0,spells:",touch,harm,break,self,projectile"}').weakNBT(),
                B: 'botania:blaze_block',
                S: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem',
                Q: 'create:rose_quartz'

            },
            id: 'ars_nouveau:apprentice_spell_book_upgrade'
        },
        {
            output: 'ars_nouveau:archmage_spell_book',
            pattern: ['GTA', 'NBN', 'AWG'],
            key: {
                W: 'ars_nouveau:wilden_tribute',
                N: 'extendedcrafting:nether_star_block',
                B: Item.of('ars_nouveau:apprentice_spell_book', '{mode:0,spells:",touch,harm,break,self,projectile"}').weakNBT(),
                T: 'minecraft:totem_of_undying',
                A: 'emendatusenigmatica:arcane_gem',
                G: 'occultism:spirit_attuned_gem'

            },
            id: 'ars_nouveau:archmage_spell_book_upgrade'
        },
        {
            output: 'ars_nouveau:potion_jar',
            pattern: ['ANA', 'AJA', 'AAA'],
            key: {
                J: 'ars_nouveau:mana_jar',
                N: 'minecraft:nether_wart',
                A: 'emendatusenigmatica:arcane_gem'

            },
            id: 'ars_nouveau:potion_jar'
        },
        {
            output: 'ars_nouveau:ritual',
            pattern: ['BSB', 'BPB', 'BAB'],
            key: {
                B: '#forge:ingots/brass',
                A: 'kubejs:spirit_attuned_block',
                P: 'ars_nouveau:arcane_pedestal',
                S: 'emendatusenigmatica:arcane_block'

            },
            id: 'ars_nouveau:ritual'
        },
        {
            output: 'ars_nouveau:volcanic_accumulator',
            pattern: ['ASA', 'BLB', 'ASA'],
            key: {
                B: '#forge:ingots/brass',
                S: 'occultism:spirit_attuned_gem',
                L: 'minecraft:lava_bucket',
                A: 'emendatusenigmatica:arcane_gem'

            },
            id: 'ars_nouveau:volcanic_accumulator'
        },
        {
            output: 'ars_nouveau:alchemical_sourcelink',
            pattern: ['ASA', 'BWB', 'ASA'],
            key: {
                B: '#forge:ingots/brass',
                S: 'occultism:spirit_attuned_gem',
                W: 'minecraft:brewing_stand',
                A: 'emendatusenigmatica:arcane_gem'

            },
            id: 'ars_nouveau:alchemical_sourcelink'
        },
        {
            output: 'ars_nouveau:spell_parchment',
            pattern: [' G ', 'APA', ' A '],
            key: {
                P: 'ars_nouveau:blank_parchment',
                G: 'occultism:spirit_attuned_gem',
                A: 'emendatusenigmatica:arcane_gem'

            },
            id: 'ars_nouveau:spell_parchment'
        },
        {
            output: 'ars_nouveau:apprentice_robes',
            pattern: ['S S', 'BSB', 'SSS'],
            key: {
                S: 'emendatusenigmatica:arcane_gem',
                B: 'ars_nouveau:blaze_fiber'
            },
            id: 'ars_nouveau:apprentice_robes'
        },
        {
            output: 'ars_nouveau:apprentice_leggings',
            pattern: ['SBS', 'B B', 'B B'],
            key: {
                S: 'emendatusenigmatica:arcane_gem',
                B: 'ars_nouveau:blaze_fiber'
            },
            id: 'ars_nouveau:apprentice_leggings'
        },
        {
            output: 'ars_nouveau:apprentice_hood',
            pattern: ['SBS', 'B B'],
            key: {
                S: 'emendatusenigmatica:arcane_gem',
                B: 'ars_nouveau:blaze_fiber'
            },
            id: 'ars_nouveau:apprentice_hood'
        },
        {
            output: 'ars_nouveau:apprentice_boots',
            pattern: ['S S', 'B B'],
            key: {
                S: 'emendatusenigmatica:arcane_gem',
                B: 'ars_nouveau:blaze_fiber'
            },
            id: 'ars_nouveau:apprentice_boots'
        },
        {
            output: 'ars_nouveau:arcane_core',
            pattern: ['IAI', 'SAS', 'IAI'],
            key: {
                A: 'ars_nouveau:arcane_stone',
                S: 'occultism:spirit_attuned_gem',
                I: 'elementalcraft:swift_alloy_ingot'
            },
            id: 'ars_nouveau:arcane_core'
        },
        {
            output: 'ars_nouveau:arcane_relay',
            pattern: ['AAA', 'IGI', 'ISI'],
            key: {
                A: 'ars_nouveau:arcane_stone',
                S: 'emendatusenigmatica:arcane_gem',
                I: 'elementalcraft:swift_alloy_ingot',
                G: 'occultism:spirit_attuned_gem'
            },
            id: 'ars_nouveau:arcane_relay'
        },
    ]

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
