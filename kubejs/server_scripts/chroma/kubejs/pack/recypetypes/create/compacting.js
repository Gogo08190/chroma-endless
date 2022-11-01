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
        //Whisk
        {
            inputs: [Item.of('#forge:plates/iron', 5), Item.of('#forge:ingots/andesite_alloy', 2)],
            output: 'create:whisk',
            type: 'unheated',
            id: 'create:crafting/kinetics/whisk'
        },
        {
            inputs: [Item.of('create:extendo_grip').weakNBT(), 'create:blaze_burner'],
            output: 'ironjetpacks:mechanical_thruster',
            type: 'unheated',
            id: `${id_prefix}mechanical_thruster`
        },
        {
            inputs: [Item.of('ironjetpacks:mechanical_cell',2), 'create:gearbox'],
            output: 'ironjetpacks:mechanical_capacitor',
            type: 'unheated',
            id: `${id_prefix}mechanical_capacitor`
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
