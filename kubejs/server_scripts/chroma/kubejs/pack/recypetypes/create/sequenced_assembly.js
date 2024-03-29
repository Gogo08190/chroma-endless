onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/create/sequenced_assembly/';
    const recipes = [
        /*{
            input: 'input_item_here',
            outputs: [
                Item.of('6x create:large_cogwheel').withChance(32.0), //withChance sets a weight for the output, default is 1 without it
                Item.of('secondary_outputs').withChance(2.0),
,               'more_secondaries_with_weight_1'
            ],
            transitionalItem: 'transitional_item_here', //required, but can be same as input item apparently
            loops: 1, //required
            sequence: [
                {
                    type: 'sequence_type_here',  //options are deploying, cutting, filling, pressing
                    input: 'input_items_fluids_or_array_here',
                    output: 'output_item_here',
                    processingTime: 50 // for cutting recipes
                }
            ],
            id: 'recipe_id_here'
        }*/
        //Hammer
        {
            input: '#forge:rods/lead',
            outputs: ['immersiveengineering:hammer'],
            transitionalItem: 'kubejs:partial_hammer',
            loops: 2,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_hammer', '#forge:ingots/iron'],
                    output: 'kubejs:partial_hammer'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_hammer', 'create:cogwheel'],
                    output: 'kubejs:partial_hammer'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_hammer', 'create:andesite_alloy'],
                    output: 'kubejs:partial_hammer'
                }
            ],
            id: `${id_prefix}hammer`
        },
        //Wirecutter
        {
            input: '#forge:rods/lead',
            outputs: ['immersiveengineering:wirecutter'],
            transitionalItem: 'kubejs:partial_wirecutter',
            loops: 2,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_wirecutter', '#forge:ingots/steel'],
                    output: 'kubejs:partial_wirecutter'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_wirecutter', 'create:andesite_alloy'],
                    output: 'kubejs:partial_wirecutter'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_wirecutter', '#forge:ingots/steel'],
                    output: 'kubejs:partial_wirecutter'
                }
            ],
            id: `${id_prefix}wirecutter`
        },
        // Windmill
        {
            input: 'kubejs:central_windmill',
            outputs: ['immersiveengineering:windmill'],
            transitionalItem: 'kubejs:part_central_windmill',
            loops: 8,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:part_central_windmill', 'immersiveengineering:stick_treated'],
                    output: 'kubejs:part_central_windmill'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_central_windmill', 'immersiveengineering:windmill_blade'],
                    output: 'kubejs:part_central_windmill'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_central_windmill', '#forge:nuggets/steel'],
                    output: 'kubejs:part_central_windmill'
                }
            ],
            id: `${id_prefix}windmill`
        },
        // Garden Cloche
        {
            input: 'immersiveengineering:coil_lv',
            outputs: ['immersiveengineering:cloche'],
            transitionalItem: 'kubejs:part_garden_cloche',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:part_garden_cloche', 'immersiveengineering:component_steel'],
                    output: 'kubejs:part_garden_cloche'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_garden_cloche', 'immersiveengineering:treated_wood_horizontal'],
                    output: 'kubejs:part_garden_cloche'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_garden_cloche', 'immersiveengineering:insulating_glass'],
                    output: 'kubejs:part_garden_cloche'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_garden_cloche', 'immersiveengineering:fluid_pipe'],
                    output: 'kubejs:part_garden_cloche'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:part_garden_cloche', 'immersiveengineering:electron_tube'],
                    output: 'kubejs:part_garden_cloche'
                }
            ],
            id: `${id_prefix}garden_cloche`
        },
        //cogwheel
        {
            input: 'create:shaft',
            outputs: [Item.of('12x create:cogwheel')],
            transitionalItem: 'create:incomplete_cogwheel',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_cogwheel', '#minecraft:buttons'],
                    output: 'create:incomplete_cogwheel'
                },
                {
                    type: 'cutting',
                    input: ['create:incomplete_cogwheel'],
                    output: 'create:incomplete_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/cogwheel'
        },

        //Large Cogwheel
        {
            input: 'create:shaft',
            outputs: [Item.of('6x create:large_cogwheel')],
            transitionalItem: 'create:incomplete_large_cogwheel',
            loops: 3,
            sequence: [
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:planks'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'deploying',
                    input: ['create:incomplete_large_cogwheel', '#minecraft:wooden_buttons'],
                    output: 'create:incomplete_large_cogwheel'
                },
                {
                    type: 'cutting',
                    input: 'create:incomplete_large_cogwheel',
                    output: 'create:incomplete_large_cogwheel',
                    processingTime: 50
                }
            ],
            id: 'create:sequenced_assembly/large_cogwheel'
        },

        //Heat Generator
        {
            input: 'mekanism:steel_casing',
            outputs: ['mekanismgenerators:heat_generator'],
            transitionalItem: 'kubejs:partial_heat_generator',
            loops: 1,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:partial_heat_generator', 'ironfurnaces:netherite_furnace'],
                    output: 'kubejs:partial_heat_generator'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_heat_generator', 'emendatusenigmatica:copper_gear'],
                    output: 'kubejs:partial_heat_generator'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_heat_generator', 'emendatusenigmatica:osmium_plate'],
                    output: 'kubejs:partial_heat_generator'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_heat_generator', 'immersiveengineering:sheetmetal_iron'],
                    output: 'kubejs:partial_heat_generator'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_heat_generator', 'pneumaticcraft:heat_sink'],
                    output: 'kubejs:partial_heat_generator'
                },
                {
                    type: 'pressing',
                    input: ['kubejs:partial_heat_generator'],
                    output: 'kubejs:partial_heat_generator'
                },
            ],
            id: 'mekanismgenerators:generator/heat'
        },

        //Creative slot 1
        {
            input: 'tconstruct:tinkers_anvil',
            outputs: [Item.of('tconstruct:creative_slot', '{slot:"upgrades"}')],
            transitionalItem: 'kubejs:incomplete_upgrade',
            loops: 6,
            sequence: [
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('allthemodium:molten_bluelava', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'undergarden:utherium_ingot'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'cutting',
                    input: 'kubejs:incomplete_upgrade',
                    output: 'kubejs:incomplete_upgrade',
                    processingTime: 50
                },
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('tconstruct:molten_hepatizon', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'betterendforge:aeternium_hammer_head'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'pressing',
                    input: ['kubejs:incomplete_upgrade'],
                    output: 'kubejs:incomplete_upgrade'
                },
            ],
            id: `${id_prefix}creative_slot_1`
        },

        //Creative slot 2
        {
            input: 'tconstruct:hepatizon_block',
            outputs: [Item.of('tconstruct:creative_slot', '{slot:"defense"}')],
            transitionalItem: 'kubejs:incomplete_upgrade',
            loops: 6,
            sequence: [
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('allthemodium:molten_bluelava', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'undergarden:utherium_ingot'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'cutting',
                    input: 'kubejs:incomplete_upgrade',
                    output: 'kubejs:incomplete_upgrade',
                    processingTime: 50
                },
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('tconstruct:molten_hepatizon', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'emendatusenigmatica:emerald_plate'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'pressing',
                    input: ['kubejs:incomplete_upgrade'],
                    output: 'kubejs:incomplete_upgrade'
                },
            ],
            id: `${id_prefix}creative_slot_2`
        },

        //Creative slot 3
        {
            input: 'minecraft:nether_star',
            outputs: [Item.of('tconstruct:creative_slot', '{slot:"abilities"}')],
            transitionalItem: 'kubejs:incomplete_upgrade',
            loops: 6,
            sequence: [
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('allthemodium:molten_bluelava', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'undergarden:utherium_ingot'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'cutting',
                    input: 'kubejs:incomplete_upgrade',
                    output: 'kubejs:incomplete_upgrade',
                    processingTime: 50
                },
                {
                    type: 'filling',
                    input: ['kubejs:incomplete_upgrade', Fluid.of('tconstruct:molten_hepatizon', 500)],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_upgrade', 'minecraft:enchanted_golden_apple'],
                    output: 'kubejs:incomplete_upgrade'
                },
                {
                    type: 'pressing',
                    input: ['kubejs:incomplete_upgrade'],
                    output: 'kubejs:incomplete_upgrade'
                },
            ],
            id: `${id_prefix}creative_slot_3`
        },

        //Chef bee
        {
            input: Item.of('resourcefulbees:bee_jar', { Entity: 'minecraft:bee' }).weakNBT().toJson(),
            outputs: [Item.of('resourcefulbees:bee_jar', { Entity: 'resourcefulbees:chef_bee' }).toJson()],
            transitionalItem: 'kubejs:larve',
            loops: 1,
            sequence: [
                {
                    type: 'filling',
                    input: ['kubejs:larve', Fluid.of('create_confectionery:white_chocolate', 1000)],
                    output: 'kubejs:larve'
                },
                {
                    type: 'filling',
                    input: ['kubejs:larve', Fluid.of('create_confectionery:black_chocolate', 1000)],
                    output: 'kubejs:larve'
                },
                {
                    type: 'filling',
                    input: ['kubejs:larve', Fluid.of('create_confectionery:hot_chocolate', 1000)],
                    output: 'kubejs:larve'
                },
                {
                    type: 'filling',
                    input: ['kubejs:larve', Fluid.of('create_confectionery:ruby_chocolate', 1000)],
                    output: 'kubejs:larve'
                },
            ],
            id: `${id_prefix}chef_bee`
        },
    ];

    recipes.forEach((recipe) => {
        let sequence = [];

        recipe.sequence.forEach((step) => {
            if (step.type == 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input));
            } else if (step.type == 'cutting') {
                sequence.push(
                    event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime)
                );
            } else if (step.type == 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input));
            } else if (step.type == 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input));
            }
        });

        event.recipes.create
            .sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id);
    });
});
