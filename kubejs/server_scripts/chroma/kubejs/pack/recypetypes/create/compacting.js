onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/compacting/';
    const recipes = [
        {
            inputs: [Fluid.of('industrialforegoing:latex', 900)],
            output: Item.of('industrialforegoing:dryrubber', 1),
            type: 'unheated',
            id: `${id_prefix}dryrubber`
        },
        {
            inputs: ['immersiveengineering:blastbrick', 'emendatusenigmatica:steel_plate'],
            output: Item.of('immersiveengineering:blastbrick_reinforced', 1),
            type: 'superheated',
            id: `${id_prefix}blastbrick_reinforced`
        },
        //Sheetmetal Iron
        {
            inputs: [Item.of('#forge:plates/iron', 4)],
            output: Item.of('immersiveengineering:sheetmetal_iron', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_iron`
        },
        //Sheetmetal Steel
        {
            inputs: [Item.of('#forge:plates/steel', 4)],
            output: Item.of('immersiveengineering:sheetmetal_steel', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_steel`
        },
        //Sheetmetal Nickel
        {
            inputs: [Item.of('#forge:plates/nickel', 4)],
            output: Item.of('immersiveengineering:sheetmetal_nickel', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_nickel`
        },
        //Sheetmetal Lead
        {
            inputs: [Item.of('#forge:plates/lead', 4)],
            output: Item.of('immersiveengineering:sheetmetal_lead', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_lead`
        },
        //Sheetmetal Aluminum
        {
            inputs: [Item.of('#forge:plates/aluminum', 4)],
            output: Item.of('immersiveengineering:sheetmetal_aluminum', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_aluminum`
        },
        //Sheetmetal Silver
        {
            inputs: [Item.of('#forge:plates/silver', 4)],
            output: Item.of('immersiveengineering:sheetmetal_silver', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_silver`
        },
        //Sheetmetal Gold
        {
            inputs: [Item.of('#forge:plates/gold', 4)],
            output: Item.of('immersiveengineering:sheetmetal_gold', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_gold`
        },
        //Sheetmetal Copper
        {
            inputs: [Item.of('#forge:plates/copper', 4)],
            output: Item.of('immersiveengineering:sheetmetal_copper', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_copper`
        },
        //Sheetmetal Electrum
        {
            inputs: [Item.of('#forge:plates/electrum', 4)],
            output: Item.of('immersiveengineering:sheetmetal_electrum', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_electrum`
        },
        //Sheetmetal Constantan
        {
            inputs: [Item.of('#forge:plates/constantan', 4)],
            output: Item.of('immersiveengineering:sheetmetal_constantan', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_constantan`
        },
        //Sheetmetal Uranium
        {
            inputs: [Item.of('#forge:plates/uranium', 4)],
            output: Item.of('immersiveengineering:sheetmetal_uranium', 1),
            type: 'unheated',
            id: `${id_prefix}sheetmetal_uranium`
        },
        //Raw basic processor
        {
            inputs: ['refinedstorage:processor_binding', 'emendatusenigmatica:steel_ingot'],
            output: 'refinedstorage:raw_basic_processor',
            type: 'unheated',
            id: 'refinedstorage:raw_basic_processor'
        },
        //Raw improved processor
        {
            inputs: ['refinedstorage:processor_binding', 'emendatusenigmatica:brass_ingot'],
            output: 'refinedstorage:raw_improved_processor',
            type: 'unheated',
            id: 'refinedstorage:raw_improved_processor'
        },
        //Raw advanced processor
        {
            inputs: ['refinedstorage:processor_binding', 'botania:mana_diamond'],
            output: 'refinedstorage:raw_advanced_processor',
            type: 'unheated',
            id: 'refinedstorage:raw_advanced_processor'
        },
        {
            inputs: [Item.of('#forge:plates/iron', 5), Item.of('#forge:ingots/andesite_alloy', 2)],
            output: 'create:whisk',
            type: 'unheated',
            id: 'create:crafting/kinetics/whisk'
        }
    ];

    recipes.forEach((recipe) => {
        const re = event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.type == 'heated') {
            re.heated();
        }
        if (recipe.type == 'superheated') {
            re.superheated();
        }
    });
});
