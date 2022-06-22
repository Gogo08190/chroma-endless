onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/metallurgic_infusing/';

    /*{
        output: ',
        input: '',
        infusionInput: 'mekanism:redstone',
        infusionAmount: 10,
        id: ''
    }*/

    const recipes = [

      //Refined Obsidian Dust
      {
        output: 'mekanism:dust_refined_obsidian',
        input: 'kubejs:crying_obsidian_dust',
        infusionInput: 'mekanism:diamond',
        infusionAmount: 40,
        id: 'mekanism:processing/refined_obsidian/dust/from_obsidian_dust'
      }

    ];

    recipes.forEach((recipe) => {
        event.recipes.mekanism
            .metallurgic_infusing(recipe.output, recipe.input, recipe.infusionInput, recipe.infusionAmount)
            .id(recipe.id);
    });
});
