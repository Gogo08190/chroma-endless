onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/botania/mana_infusion/';
  /*{
      input: '',
      output: '',
      count: 1,
      mana: 10,
      catalyst: '' Bloc en dessous de la mana pool non obligatoire,
      id: ''
  }*/
  const recipes = [
    {
      input: '#forge:ingots/steel',
      output: 'botania:manasteel_ingot',
      count: 1,
      mana: 3000,
      id: 'botania:mana_infusion/manasteel'

    },

    {
      input: '#forge:storage_blocks/steel',
      output: 'botania:manasteel_block',
      count: 1,
      mana: 27000,
      id: 'botania:mana_infusion/manasteel_block'

    },

    {
      input: 'minecraft:ender_eye',
      output: 'botania:mana_pearl',
      count: 1,
      mana: 6000,
      id: 'botania:mana_infusion/mana_pearl'

    },

    {
      input: 'emendatusenigmatica:obsidian_dust',
      output: 'fluxnetworks:flux_dust',
      count: 1,
      mana: 3000,
      id: 'fluxnetworks:flux_dust'

    },
    {
      input: 'minecraft:stick',
      output: 'botania:living_root',
      count: 1,
      mana: 300,
      id: `${id_prefix}living_root`

    },
    {
      input: 'envirocore:litherite_crystal',
      output: 'envirocore:litherite_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}litherite_powder`

    },
    {
      input: 'envirocore:erodium_crystal',
      output: 'envirocore:erodium_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}erodium_powder`

    },
    {
      input: 'envirocore:kyronite_crystal',
      output: 'envirocore:kyronite_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}kyronite_powder`

    },
    {
      input: 'envirocore:pladium_crystal',
      output: 'envirocore:pladium_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}pladium_powder`

    },
    {
      input: 'envirocore:ionite_crystal',
      output: 'envirocore:ionite_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}ionite_powder`

    },
    {
      input: 'envirocore:aethium_crystal',
      output: 'envirocore:aethium_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}aethium_powder`

    },
    {
      input: 'envirocore:nanorite_crystal',
      output: 'envirocore:nanorite_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}nanorite_powder`

    },
    {
      input: 'envirocore:xerothium_crystal',
      output: 'envirocore:xerothium_powder',
      count: 1,
      mana: 600,
      catalyst: 'botania:conjuration_catalyst',
      id: `${id_prefix}xerothium_powder`

    }

  ];
  recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        const re = event.custom(constructed_recipe);

        if (recipe.id) {
            re.id(recipe.id);
        } else {
            fallback_id(re, id_prefix);
        }
    });
});
