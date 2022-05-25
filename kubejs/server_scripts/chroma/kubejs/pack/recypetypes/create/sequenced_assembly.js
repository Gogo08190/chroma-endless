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
                    input: ['#kubejs:partial_hammer', 'create:cogwheel'],
                    output: 'kubejs:partial_hammer'
                },
                {
                    type: 'deploying',
                    input: ['kubejs:partial_hammer', 'create:andesite_alloy'],
                    output: 'kubejs:partial_hammer'
                }
            ],
            id: `${id_prefix}hammer`
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
