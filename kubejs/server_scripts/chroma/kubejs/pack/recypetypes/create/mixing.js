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
            inputs: ['#forge:ingots/iron', '#forge:dusts/redstone', '#forge:dusts/redstone'],
            output: Item.of('extendedcrafting:redstone_ingot', 1),
            heated: true,
            id: `extendedcrafting:redstone_ingot`
        },
        {
            inputs: ['#forge:ingots/iron', 'minecraft:ender_pearl', 'minecraft:ender_pearl'],
            output: Item.of('extendedcrafting:ender_ingot', 1),
            id: `extendedcrafting:ender_ingot`
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
