onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/botania/runic_altar/';

    /*{
        inputs: [
            '',
            ''
        ],
        mana: 16000,
        output: '',
        count: 2,
        id: ''
    }*/

    const recipes = [
      {
        inputs: [
          'betterendforge:amber_gem',
          'betterendforge:amber_gem',
          'arsarsenal:source_steel_ingot',
          'arsarsenal:source_steel_ingot',
          'arsarsenal:source_steel_ingot',
          'minecraft:dragon_breath',
          'botania:dragonstone',
          'botania:dragonstone',
          'create:cuckoo_clock'
        ],
        mana: 20000,
        output: 'tiab:timeinabottle',
        count: 1,
        id:'tiab:timeinabottle'
      },

      {
        inputs: [
          'minecraft:ender_eye',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:terrasteel_ingot',
          'botania:mana_pylon'
        ],
        mana: 20000,
        output: 'botania:natura_pylon',
        count: 1,
        id: 'botania:natura_pylon'
      },

      {
        inputs: [
          'botania:pixie_dust',
          'botania:pixie_dust',
          'botania:elementium_block',
          'botania:elementium_block',
          'botania:natura_pylon'
        ],
        mana: 20000,
        output: 'botania:gaia_pylon',
        count: 1,
        id: 'botania:gaia_pylon'
      }

    ];

    recipes.forEach((recipe) => {
        let ingredients = [];

        recipe.inputs.forEach((input) => {
            ingredients.push(Ingredient.of(input).toJson());
        });

        const re = event.custom({
            type: 'botania:runic_altar',
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana,
            ingredients: ingredients
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
