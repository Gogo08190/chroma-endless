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
        output: '4x kubejs:crying_obsidian_dust',
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
      },

      //Enriched Energized Uranium
      {
        input: 'kubejs:energized_uranium',
        output: 'kubejs:enriched_energized_uranium',
        id: `${id_prefix}enriched_energized_uranium`
      },

      //Enriched Kyronite
      {
        input: 'envirocore:kyronite_powder',
        output: 'kubejs:enriched_kyronite',
        id: `${id_prefix}enriched_kyronite`
      },

      //Enriched Pladium
      {
        input: 'envirocore:pladium_powder',
        output: 'kubejs:enriched_pladium',
        id: `${id_prefix}enriched_pladium`
      },

      //Enriched Ludicrite
      {
        input: 'bigreactors:ludicrite_ingot',
        output: 'kubejs:enriched_ludicrite',
        id: `${id_prefix}enriched_ludicrite`
      }

    ];
    recipes.forEach((recipe) => {
        event.recipes.mekanism.enriching(recipe.output, recipe.input).id(recipe.id);
    });
});
