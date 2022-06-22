onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/thermal/pulverizer/';

    /*{
        input: '',
        experience: 0.2,
        outputs: [Item.of('', 1)],
        id: ''
    }*/

    const recipes = [
        {
            input: 'enderioalloys:item_material_pulsating_crystal',
            experience: 0.2,
            outputs: [Item.of('enderioalloys:item_material_pulsating_crystal', 1)],
            id: 'enderioalloys:item_material_pulsating_crystal'
        },

        {
            input: 'enderioalloys:item_material_precient_crystal',
            experience: 0.5,
            outputs: [Item.of('enderioalloys:item_material_precient_powder', 1)],
            id: 'enderioalloys:item_material_precient_crystal'
        },

        {
            input: 'enderioalloys:item_material_vibrant_crystal',
            experience: 1.0,
            outputs: [Item.of('enderioalloys:item_material_vibrant_powder', 1)],
            id: 'enderioalloys:item_material_vibrant_crystal'
        },

        // Crying obsidian crying_obsidian_dust

        {
          input: 'minecraft:crying_obsidian',
          experience: 0.5,
          outputs: [Item.of('kubejs:crying_obsidian_dust', 1)],
          id: 'minecraft:crying_obsidian_dust'
        }
    ];
    recipes.forEach((recipe) => {
        event.recipes.thermal.pulverizer(recipe.outputs, recipe.input).experience(recipe.experience).id(recipe.id);
    });
});
