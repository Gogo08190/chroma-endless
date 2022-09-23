onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/kubejs/shaped/';
    const recipes = [
        // Slice N Plice
        {
            output: Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:slice_n_splice"}'),
            pattern: ['ISI', 'EME', 'III'],
            key: {
                M: 'rftoolsbase:machine_frame',
                S: 'minecraft:skeleton_skull',
                I: 'enderioalloys:item_alloy_ingot_soularium',
                E: 'industrialforegoing:essence_bucket'
            },
            id: `${id_prefix}slice_n_plice`
        },
        // Alloy Smelter
        {
            output: Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:alloy_smelter"}'),
            pattern: ['IBI', 'SMR', 'GCG'],
            key: {
                I: 'pneumaticcraft:ingot_iron_compressed',
                B: 'minecraft:blast_furnace',
                R: 'thermal:machine_furnace',
                M: 'rftoolsbase:machine_frame',
                S: 'engineersdecor:small_electrical_furnace',
                G: 'enderioalloys:item_material_gear_iron',
                C: 'minecraft:cauldron'
            },
            id: `${id_prefix}alloy_smelter`
        },

        // Inscriber
        {
            output: Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:inscriber"}'),
            pattern: ['ICI', 'SGS', 'IRI'],
            key: {
                I: 'refinedstorage:quartz_enriched_iron',
                C: 'pneumaticcraft:capacitor',
                G: 'refinedstorage:machine_casing',
                S: 'create:sticky_mechanical_piston',
                R: 'thermal:rf_coil'
            },
            id: `${id_prefix}inscriber`
        },
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
