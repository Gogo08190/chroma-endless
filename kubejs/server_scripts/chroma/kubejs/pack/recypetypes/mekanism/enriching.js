onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/mekanism/enriching/';

    /*{
        input: '',
        output: '',
        id: ''
    }*/

    const recipes = [

      //Crying obsidian dust
      {
        input: 'minecraft:crying_obsidian',
        output: 'kubejs:crying_obsidian_dust',
        id: 'minecraft:crying_obsidian_dust'
      },

      //Carbon
      {
        input:'emendatusenigmatica:coke_gem',
        output: 'mekanism:enriched_carbon',
        id: 'mekanism:enriching/enriched/carbon'
      },

      //Redstone
      {
        input: 'extendedcrafting:redstone_ingot',
        output: 'mekanism:enriched_redstone',
        id: 'mekanism:enriching/enriched/redstone'
      },

      //Diamond
      {
        input: 'botania:mana_diamond',
        output: 'mekanism:enriched_diamond',
        id: 'mekanism:enriching/enriched/diamond'
      }
      
    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
