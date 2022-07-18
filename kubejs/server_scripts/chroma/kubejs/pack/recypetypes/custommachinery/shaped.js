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
        // Soul Binder
        {
            output: Item.of('custommachinery:custom_machine_item', '{machine:"custommachinery:soul_binder"}'),
            pattern: ['IEI', 'CMZ', 'ISI'],
            key: {
                I: 'enderioalloys:item_alloy_ingot_soularium',
                S: 'minecraft:skeleton_skull',
                Z: 'minecraft:zombie_head',
                M: 'rftoolsbase:machine_frame',
                E: 'tconstruct:enderman_head',
                C: 'minecraft:creeper_head'
            },
            id: `${id_prefix}soul_binder`
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
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
