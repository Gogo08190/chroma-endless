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
            outputs: ['create:cogwheel'],
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
            id: `${id_prefix}cogwheel`
        }
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
