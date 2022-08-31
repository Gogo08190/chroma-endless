onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mixing/';
    const recipes = [
        {
            inputs: ['#forge:storage_blocks/coal'],
            output: Item.of('emendatusenigmatica:coke_gem', 9),
            heated: true,
            id: `${id_prefix}coal_coke`
        },
        {
            inputs: ['#forge:clay', '#forge:gravel', '#forge:sand', '#forge:sand', Fluid.of('minecraft:water', 500)],
            output: Fluid.of('immersiveengineering:concrete', 500),
            id: `${id_prefix}concrete`
        },
        {
            inputs: ['industrialforegoing:dryrubber', Fluid.of('emendatusenigmatica:molten_sulfur', 72)],
            output: 'thermal:cured_rubber',
            superheated: true,
            id: `${id_prefix}cured_rubber`
        },
        {
            inputs: ['#forge:ingots/iron', '#forge:dusts/ender'],
            output: Item.of('betterendforge:terminite_ingot', 1),
            id: `${id_prefix}terminite_ingot_from_iron`
        },
        {
            inputs: ['tconstruct:grout', '#forge:sandstone'],
            output: Item.of('immersiveengineering:cokebrick', 1),
            heated: true,
            id: `${id_prefix}cokebrick`
        },
        {
            inputs: ['tconstruct:grout', 'minecraft:magma_block', 'minecraft:nether_brick'],
            output: Item.of('immersiveengineering:blastbrick', 1),
            superheated: true,
            id: `${id_prefix}blastbrick`
        },
        {
            inputs: ['#forge:sandstone', Fluid.of('tconstruct:molten_clay', 1000)],
            output: Item.of('immersiveengineering:alloybrick', 1),
            id: `${id_prefix}alloybrick`
        },
        {
            inputs: ['miniutilities:magical_egg', 'quark:bonded_leather', 'thermal:white_rockwool', 'elementalcraft:earthcrystal_block', 'supplementaries:feather_block', 'tconstruct:pig_iron_block', Fluid.of('minecraft:water', 1000)],
            output: Fluid.of('kubejs:blessed_fluid', 1000),
            heated: true,
            id: `${id_prefix}blessed_fluid`
        },
        {
            inputs: ['miniutilities:magical_egg', 'architects_palette:rotten_flesh_block', 'elementalcraft:earthcrystal_block', 'minecraft:bone_block', 'minecraft:slime_block', 'miniutilities:ender_pearl_block', Fluid.of('minecraft:water', 1000)],
            output: Fluid.of('kubejs:cursed_fluid', 1000),
            heated: true,
            id: `${id_prefix}cursed_fluid`
        },
        {
            inputs: [Fluid.of('tconstruct:molten_ender', 1000), Fluid.of('tconstruct:molten_emerald', 1000)],
            output: Fluid.of('kubejs:resonant_emerald_fluid', 1000),
            superheated: true,
            id: `${id_prefix}resonant_emerald_fluid`
        },
        {
            inputs: ['powah:capacitor_basic', 'powah:capacitor_basic'],
            output: Item.of('powah:capacitor_basic_large', 1),
            heated: true,
            id: 'powah:crafting/capacitor_basic_large'
        },
        {
            inputs: [Fluid.of('tconstruct:molten_brass', 1000), Item.of('#forge:ingots/andesite_alloy', 2)],
            output: Item.of('create:brass_hand', 2),
            heated: true,
            id: 'create:crafting/kinetics/brass_hand'
        },
        {
            inputs: ['resourcefulbees:slime_honeycomb', 'resourcefulbees:guardian_honeycomb', 'resourcefulbees:forgotten_honeycomb', 'resourcefulbees:forest_honeycomb', 'resourcefulbees:experience_honeycomb', 'resourcefulbees:ender_honeycomb', 'resourcefulbees:emerald_honeycomb', 'resourcefulbees:creeper_honeycomb', 'resourcefulbees:aeternium_honeycomb', 'resourcefulbees:vibranium_honeycomb', 'resourcefulbees:zombie_honeycomb', 'resourcefulbees:uranium_honeycomb', 'resourcefulbees:uraninite_honeycomb', 'resourcefulbees:terrasteel_honeycomb', 'resourcefulbees:spirited_honeycomb'],
            output: Item.of('kubejs:green_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}green_honeycomb`
        },
        {
            inputs: ['resourcefulbees:drenched_iron_honeycomb', 'resourcefulbees:diamond_honeycomb', 'resourcefulbees:cyanite_honeycomb', 'resourcefulbees:cobalt_honeycomb', 'resourcefulbees:blutonium_honeycomb', 'resourcefulbees:blizz_honeycomb', 'resourcefulbees:water_honeycomb', 'resourcefulbees:xion_honeycomb', 'resourcefulbees:soul_lava_honeycomb', 'resourcefulbees:manasteel_honeycomb', 'resourcefulbees:niotic_honeycomb', 'resourcefulbees:osmium_honeycomb', 'resourcefulbees:sky_slime_honeycomb', 'resourcefulbees:terminite_honeycomb', 'resourcefulbees:thallasium_honeycomb', 'resourcefulbees:lapis_honeycomb', 'resourcefulbees:froststeel_honeycomb', 'resourcefulbees:enderium_honeycomb'],
            output: Item.of('kubejs:blue_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}blue_honeycomb`
        },
        {
            inputs: ['resourcefulbees:nether_honeycomb', 'resourcefulbees:netherite_honeycomb', 'resourcefulbees:nitro_honeycomb', 'resourcefulbees:pigman_honeycomb', 'resourcefulbees:redstone_honeycomb'],
            output: Item.of('kubejs:red_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}red_honeycomb`
        },
        {
            inputs: ['resourcefulbees:copper_honeycomb', 'resourcefulbees:constantan_honeycomb', 'resourcefulbees:cloggrum_honeycomb', 'resourcefulbees:bronze_honeycomb', 'resourcefulbees:awakened_honeycomb', 'resourcefulbees:signalum_honeycomb', 'resourcefulbees:starry_lexxie_honeycomb', 'resourcefulbees:swift_alloy_honeycomb', 'resourcefulbees:allthemodium_honeycomb', 'resourcefulbees:refined_glowstone_honeycomb', 'resourcefulbees:magma_honeycomb', 'resourcefulbees:lava_honeycomb', 'resourcefulbees:iron_honeycomb', 'resourcefulbees:ichor_slime_honeycomb', 'minecraft:honeycomb', 'resourcefulbees:glowstone_honeycomb', 'resourcefulbees:fireite_honeycomb', 'resourcefulbees:energized_honeycomb', 'resourcefulbees:electrum_honeycomb'],
            output: Item.of('kubejs:orange_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}orange_honeycomb`
        },
        {
            inputs: ['resourcefulbees:elementium_honeycomb', 'resourcefulbees:fairy_honeycomb', 'resourcefulbees:inanite_honeycomb', 'resourcefulbees:magentite_honeycomb', 'resourcefulbees:ridiculite_honeycomb', 'resourcefulbees:rose_gold_honeycomb', 'resourcefulbees:source_steel_honeycomb', 'resourcefulbees:utherium_honeycomb'],
            output: Item.of('kubejs:pink_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}pink_honeycomb`
        },
        {
            inputs: ['resourcefulbees:lumium_honeycomb', 'resourcefulbees:gold_honeycomb', 'resourcefulbees:end_honeycomb', 'resourcefulbees:blaze_honeycomb', 'resourcefulbees:blazing_honeycomb', 'resourcefulbees:brass_honeycomb', 'resourcefulbees:nickel_honeycomb', 'resourcefulbees:regalium_honeycomb', 'resourcefulbees:zinc_honeycomb'],
            output: Item.of('kubejs:yellow_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}yellow_honeycomb`
        },
        {
            inputs: ['resourcefulbees:basalz_honeycomb', 'resourcefulbees:coal_honeycomb', 'resourcefulbees:compressed_iron_honeycomb', 'resourcefulbees:gravel_honeycomb', 'resourcefulbees:seared_honeycomb', 'resourcefulbees:steel_honeycomb', 'resourcefulbees:stone_honeycomb', 'resourcefulbees:wither_honeycomb', 'resourcefulbees:graphite_honeycomb', 'resourcefulbees:chaotic_honeycomb', 'resourcefulbees:catnip_honeycomb', 'resourcefulbees:bitumen_honeycomb'],
            output: Item.of('kubejs:dark_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}dark_honeycomb`
        },
        {
            inputs: ['resourcefulbees:fluorite_honeycomb', 'resourcefulbees:ghast_honeycomb', 'resourcefulbees:invar_honeycomb', 'resourcefulbees:nether_quartz_honeycomb', 'resourcefulbees:potassium_honeycomb', 'resourcefulbees:sand_honeycomb', 'resourcefulbees:silver_honeycomb', 'resourcefulbees:skeleton_honeycomb', 'resourcefulbees:tin_honeycomb', 'resourcefulbees:aluminum_honeycomb', 'resourcefulbees:blitz_honeycomb', 'resourcefulbees:clay_honeycomb'],
            output: Item.of('kubejs:light_honeycomb', 1),
            superheated: true,
            id: `${id_prefix}light_honeycomb`
        }
    ];

    recipes.forEach((recipe) => {
        if (recipe.heated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).heated();
        } else if (recipe.superheated) {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id).superheated();
        } else {
            event.recipes.create.mixing(recipe.output, recipe.inputs).id(recipe.id);
        }
    });
});
