onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/chroma/';
    const recipes = [
        // {
        //     secondary_output: Item.of('minecraft:sugar').chance(0.5),
        //     output: Item.of('minecraft:diamond', 8),
        //     input: Item.of('minecraft:lead'),
        //     experience: 0.5,
        //     duration: 100,
        //     ignore_occultism_multiplier: true
        // }

        {
            secondary_output: Item.of('minecraft:bone_meal').chance(0.15),
            output: Item.of('minecraft:bone_meal', 2),
            input: Ingredient.of('alexsmobs:shark_tooth'),
            experience: 0.5,
            duration: 50,
            ignore_occultism_multiplier: true,
            id_suffix: 'bone_meal_from_shark_tooth'
        },
        {
            secondary_output: Item.of('minecraft:bone_meal', 2).chance(0.25),
            output: Item.of('minecraft:bone_meal', 8),
            input: Ingredient.of('alexsmobs:bone_serpent_tooth'),
            experience: 0.5,
            duration: 150,
            ignore_occultism_multiplier: true,
            id_suffix: 'bone_meal_from_bone_serpent_tooth'
        },
        {
            secondary_output: Item.of('minecraft:bone_meal', 2).chance(0.25),
            output: Item.of('minecraft:bone_meal', 8),
            input: Ingredient.of('upgrade_aquatic:thrasher_tooth'),
            experience: 0.5,
            duration: 150,
            ignore_occultism_multiplier: true,
            id_suffix: 'bone_meal_from_thrasher_tooth'
        },
        {
            secondary_output: Item.of('minecraft:bone_meal', 2).chance(0.25),
            output: Item.of('minecraft:bone_meal', 8),
            input: Ingredient.of('alexsmobs:cachalot_whale_tooth'),
            experience: 0.5,
            duration: 150,
            ignore_occultism_multiplier: true,
            id_suffix: 'bone_meal_from_cachalot_whale_tooth'
        },
        {
            secondary_output: Item.of('minecraft:bone_meal').chance(0.15),
            output: Item.of('minecraft:bone_meal', 4),
            input: Ingredient.of('alexsmobs:serrated_shark_tooth'),
            experience: 0.5,
            duration: 50,
            ignore_occultism_multiplier: true,
            id_suffix: 'bone_meal_from_serrated_shark_tooth'
        }
    ];

    recipetypes_crushing = (event, recipe) => {
        // pedestals
        event
            .custom({
                type: 'pedestals:pedestal_crushing',
                ingredient: recipe.input,
                result: recipe.output
            })
            .id(`${id_prefix}/pedestal_crushing/${recipe.id_suffix}`);

        // occultism
        event
            .custom({
                type: 'occultism:crushing',
                ingredient: recipe.input,
                result: recipe.output,
                crushing_time: recipe.duration,
                ignore_crushing_multiplier: recipe.ignore_occultism_multiplier
            })
            .id(`${id_prefix}/occultism_crushing/${recipe.id_suffix}`);

        // industrialforegoing
        event
            .custom({
                type: 'industrialforegoing:crusher',
                input: recipe.input,
                output: recipe.output
            })
            .id(`${id_prefix}/industrialforegoing_crusher/${recipe.id_suffix}`);

        // thermal
        event.recipes.thermal
            .pulverizer([recipe.output, recipe.secondary_output], recipe.input)
            .experience(recipe.experience)
            .id(`${id_prefix}/thermal_pulverizer/${recipe.id_suffix}`);

        // mekanism
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(`${id_prefix}/pedestals/${recipe.id_suffix}`);

        // immersiveengineering
        event.recipes.immersiveengineering
            .crusher(recipe.output, recipe.input, recipe.secondary_output)
            .id(`${id_prefix}/immersiveengineering_crusher/${recipe.id_suffix}`);

        // create
        event.recipes.create
            .milling([recipe.output, recipe.secondary_output], recipe.input)
            .id(`${id_prefix}/create_milling/${recipe.id_suffix}`);
    };

    recipes.forEach((recipe) => {
        recipetypes_crushing(event, recipe);
    });
});
