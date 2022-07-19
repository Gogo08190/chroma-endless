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
