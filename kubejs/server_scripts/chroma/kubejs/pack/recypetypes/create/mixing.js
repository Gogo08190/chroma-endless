onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/mixing/';
    const recipes = [
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
        //Sheetmetal Iron
        {
            inputs: [Item.of('#forge:plates/iron', 4)],
            output: Item.of('immersiveengineering:sheetmetal_iron', 1),
            id: `${id_prefix}sheetmetal_iron`
        },
        //Sheetmetal Steel
        {
            inputs: [Item.of('#forge:plates/steel', 4)],
            output: Item.of('immersiveengineering:sheetmetal_steel', 1),
            id: `${id_prefix}sheetmetal_steel`
        },
        //Sheetmetal Nickel
        {
            inputs: [Item.of('#forge:plates/nickel', 4)],
            output: Item.of('immersiveengineering:sheetmetal_nickel', 1),
            id: `${id_prefix}sheetmetal_nickel`
        },
        //Sheetmetal Lead
        {
            inputs: [Item.of('#forge:plates/lead', 4)],
            output: Item.of('immersiveengineering:sheetmetal_lead', 1),
            id: `${id_prefix}sheetmetal_lead`
        },
        //Sheetmetal Aluminum
        {
            inputs: [Item.of('#forge:plates/aluminum', 4)],
            output: Item.of('immersiveengineering:sheetmetal_aluminum', 1),
            id: `${id_prefix}sheetmetal_aluminum`
        },
        //Sheetmetal Silver
        {
            inputs: [Item.of('#forge:plates/silver', 4)],
            output: Item.of('immersiveengineering:sheetmetal_silver', 1),
            id: `${id_prefix}sheetmetal_silver`
        },
        //Sheetmetal Gold
        {
            inputs: [Item.of('#forge:plates/gold', 4)],
            output: Item.of('immersiveengineering:sheetmetal_gold', 1),
            id: `${id_prefix}sheetmetal_gold`
        },
        //Sheetmetal Copper
        {
            inputs: [Item.of('#forge:plates/copper', 4)],
            output: Item.of('immersiveengineering:sheetmetal_copper', 1),
            id: `${id_prefix}sheetmetal_copper`
        },
        //Sheetmetal Electrum
        {
            inputs: [Item.of('#forge:plates/electrum', 4)],
            output: Item.of('immersiveengineering:sheetmetal_electrum', 1),
            id: `${id_prefix}sheetmetal_electrum`
        },
        //Sheetmetal Constantan
        {
            inputs: [Item.of('#forge:plates/constantan', 4)],
            output: Item.of('immersiveengineering:sheetmetal_constantan', 1),
            id: `${id_prefix}sheetmetal_constantan`
        },
        //Sheetmetal Uranium
        {
            inputs: [Item.of('#forge:plates/uranium', 4)],
            output: Item.of('immersiveengineering:sheetmetal_uranium', 1),
            id: `${id_prefix}sheetmetal_uranium`
        },
        {
            inputs: [Fluid.of('create_confectionery:white_chocolate', 1000), Fluid.of('create_confectionery:black_chocolate', 1000), Fluid.of('create_confectionery:ruby_chocolate', 1000), Fluid.of('create_confectionery:hot_chocolate', 1000), Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }).weakNBT().toJson() 1)],
            output: Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:chef_bee' }).toJson(), 1),
            id: `${id_prefix}chef_bee`
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
