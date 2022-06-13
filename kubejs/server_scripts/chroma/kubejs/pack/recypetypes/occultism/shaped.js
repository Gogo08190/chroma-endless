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

     /* beat */   
    const recipes = [
        {
            output: 'occultism:otherstone_frame',
            pattern: ['OOO', 'OAO', 'OOO'],
            key: {
                O: 'occultism:otherstone',
                A: 'create:andesite_alloy'
            },
            id: 'occultism:crafting/otherstone_frame'
        },
        {
            output: 'occultism:otherstone_tablet',
            pattern: ['ASA', 'SSS', 'ASA'],
            key: {
                S: 'occultism:otherstone_slab',
                A: 'create:andesite_alloy'
            },
            id: 'occultism:crafting/otherstone_tablet'
        },
        {
            output: 'occultism:chalk_white_impure',
            pattern: [' HB', 'HAH', 'BH '],
            key: {
                A: 'create:andesite_alloy',
                H: 'occultism:otherworld_ashes',
                B: 'occultism:burnt_otherstone'
            },
            id: 'occultism:crafting/chalk_white_impure'
        },
        {
            output: 'occultism:otherstone_pedestal',
            pattern: ['SGS', 'AOA', 'SSS'],
            key: {
                O: 'occultism:otherstone',
                A: 'create:andesite_alloy',
                G: 'occultism:spirit_attuned_gem',
                S: 'occultism:otherstone_slab'
            },
            id: 'occultism:crafting/otherstone_pedestal'
        },
        {
            output: 'occultism:spirit_attuned_pickaxe_head',
            pattern: [' A ', 'GGG', 'A A'],
            key: {
                A: 'create:andesite_alloy',
                G: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/spirit_attuned_pickaxe_head'
        },
        {
            output: 'occultism:lenses',
            pattern: ['CCC', 'CGC', 'CCC'],
            key: {
                C: 'tconstruct:clear_glass',
                G: 'occultism:spirit_attuned_gem'
            },
            id: 'occultism:crafting/lenses'
        },
        {
            output: 'occultism:lens_frame',
            pattern: ['OOO', 'SBS', 'OOO'],
            key: {
                O: 'occultism:otherstone',
                S: '#forge:ingots/silver',
                B: '#forge:ingots/brass'
            },
            id: 'occultism:crafting/lens_frame'
        },
        {
            output: 'occultism:magic_lamp_empty',
            pattern: [' S ', 'SIS', ' SB'],
            key: {
                I: 'occultism:iesnium_ingot',
                S: '#forge:ingots/silver',
                B: '#forge:ingots/brass'
            },
            id: 'occultism:crafting/magic_lamp_empty'
        },
        {
            output: 'occultism:divination_rod',
            pattern: ['SGS', 'TAT', ' C '],
            key: {
                C: '#forge:rods/copper',
                T: 'immersiveengineering:stick_treated',
                A: 'create:andesite_alloy',
                G: 'occultism:spirit_attuned_gem',
                S: 'minecraft:stick'
            },
            id: 'occultism:crafting/divination_rod'
        },
        {
            output: 'occultism:brush',
            pattern: ['   ', 'BBB', 'WWC'],
            key: {
                B: 'create:brass_casing',
                W: 'dustrial_decor:mini_padded_block',
                C: 'comforts:hammock_white'
            },
            id: 'occultism:crafting/brush'
        },
        {
            output: Item.of('occultism:butcher_knife', '{Damage:0}'),
            pattern: [' AI', 'AI ', 'S  '],
            key: {
                S: 'minecraft:stick',
                I: '#forge:storage_blocks/iron',
                A: 'create:andesite_alloy'
            },
            id: 'occultism:crafting/butcher_knife'
        },
        {
            output: Item.of('occultism:iesnium_pickaxe', '{Damage:0}'),
            pattern: ['IDI', ' C ', ' S '],
            key: {
                S: 'minecraft:stick',
                C: '#forge:rods/copper',
                D: 'create:shadow_steel',
                I: 'occultism:iesnium_ingot'
            },
            id: 'occultism:crafting/iesnium_pickaxe'
        },
        {
            output: 'occultism:golden_sacrificial_bowl',
            pattern: ['GBG', 'BSB', 'GBG'],
            key: {
                S: 'occultism:sacrificial_bowl',
                B: '#forge:ingots/brass',
                G: '#forge:ingots/gold'
            },
            id: 'occultism:crafting/golden_sacrificial_bowl'
        },
        {
            output: 'occultism:book_of_binding_foliot',
            pattern: ['BDB', 'AQA', 'BDB'],
            key: {
                A: 'create:andesite_alloy',
                Q: 'minecraft:writable_book',
                D: '#forge:dyes/blue',
                B: 'createdeco:blue_brick'
            },
            id: 'occultism:crafting/book_of_binding_foliot'
        },
        {
            output: 'occultism:book_of_binding_djinni',
            pattern: ['SBS', 'AQA', 'SBS'],
            key: {
                A: 'create:andesite_alloy',
                Q: 'minecraft:writable_book',
                S: 'createdeco:scarlet_brick',
                B: 'createdeco:blue_brick'
            },
            id: 'occultism:crafting/book_of_binding_djinni'
        },
        {
            output: 'occultism:book_of_binding_afrit',
            pattern: ['DYD', 'AQA', 'DYD'],
            key: {
                A: 'create:andesite_alloy',
                Q: 'minecraft:writable_book',
                Y: '#forge:dyes/yellow',
                D: 'createdeco:dean_brick'
            },
            id: 'occultism:crafting/book_of_binding_afrit'
        },
        {
            output: 'occultism:book_of_binding_marid',
            pattern: ['DBD', 'AQA', 'DBD'],
            key: {
                A: 'create:andesite_alloy',
                Q: 'minecraft:writable_book',
                B: '#forge:dyes/blue',
                D: 'createdeco:dean_brick'
            },
            id: 'occultism:crafting/book_of_binding_marid'
        },
        {
            output: 'occultism:storage_controller',
            pattern: ['ADA', 'BCB', 'ABA'],
            key: {
                A: 'create:andesite_alloy',
                C: 'occultism:storage_controller_base',
                B: '#forge:ingots/brass',
                D: '#occultism:dimensional_matrix'
            },
            id: 'occultism:crafting/storage_controller'
        }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
