//priority: 900
onEvent('recipes', (event) => {
    dyeSources.forEach((recipe) => {
        botania_dye_pestle_mortar(event, recipe);
        create_dye_milling(event, recipe);
        immersiveengineering_dye_crusher(event, recipe);
        mekanism_dye_enriching(event, recipe);
        mekanism_pigment_extracting(event, recipe);
        pedestals_dye_crushing(event, recipe);
        thermal_dye_centrifuge(event, recipe);
        occultism_dye_crushing(event, recipe);
    });
});

//dye normalization functions
function botania_dye_pestle_mortar(event, recipe) {
    if (recipe.type == 'petal') {
        return;
    }

    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    if (recipe.primary == 'minecraft:bone_meal') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        inputs = [recipe.input, 'botania:pestle_and_mortar'];

    event.shapeless(output, inputs);
}

function create_dye_milling(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.create.milling(outputs, input);
}
function immersiveengineering_dye_crusher(event, recipe) {
    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }
    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        extras = [
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.immersiveengineering.crusher(output, input, extras);
}
function mekanism_dye_enriching(event, recipe) {
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = Item.of(recipe.primary, count),
        input = recipe.input;

    event.recipes.mekanism.enriching(output, input);
}

function mekanism_pigment_extracting(event, recipe) {
    if (!recipe.primary.includes('_dye')) {
        return;
    }
    var baseCount = 3,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    let dye_color = recipe.primary.split(':')[1].replace('_dye', '');
    let count = baseCount * multiplier;

    event.custom({
        type: 'mekanism:pigment_extracting',
        input: { ingredient: { item: recipe.input } },
        output: { pigment: `mekanism:${dye_color}`, amount: 256 * count }
    });
}

function pedestals_dye_crushing(event, recipe) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    event.custom({
        type: 'pedestals:pedestal_crushing',
        ingredient: { item: input },
        result: { item: output, count: count }
    });
}
function thermal_dye_centrifuge(event, recipe) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        outputs = [
            Item.of(recipe.primary, count),
            Item.of(recipe.secondary).withCount(count).withChance(0.25),
            Item.of(recipe.tertiary).withCount(multiplier).withChance(0.05)
        ],
        input = recipe.input;

    event.recipes.thermal.centrifuge(outputs, input);
}
function occultism_dye_crushing(event, recipe) {
    if (recipe.input == 'minecraft:bone') {
        return;
    }

    var baseCount = 2,
        multiplier = 1;
    if (recipe.type == 'large') {
        multiplier = 2;
    }

    var count = baseCount * multiplier,
        output = recipe.primary,
        input = recipe.input;

    event.custom({
        type: 'occultism:crushing',
        ingredient: { item: input },
        result: { item: output, count: count },
        crushing_time: 50
    });
}
