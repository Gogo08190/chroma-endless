onEvent('recipes', (event) => {

    const recipes = [
    {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:filled',
            component: 'C'
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "U", "C", "C", "C", "U", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "U", "V", "V", "V", "U", "C"],
              ["C", "G", "G", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "I", "M", "I", "C", "C"],
              ["C", "C", "M", "S", "M", "C", "C"],
              ["C", "C", "I", "M", "I", "C", "C"],
              ["C", "V", "V", "V", "V", "V", "C"],
              ["C", "G", "G", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "M", "M", "M", "C", "C"],
              ["C", "C", "M", "S", "M", "C", "C"],
              ["C", "C", "M", "M", "M", "C", "C"],
              ["C", "V", "V", "V", "V", "V", "C"],
              ["C", "G", "G", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "I", "M", "I", "C", "C"],
              ["C", "C", "M", "S", "M", "C", "C"],
              ["C", "C", "I", "M", "I", "C", "C"],
              ["C", "V", "V", "V", "V", "V", "C"],
              ["C", "G", "G", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "U", "C", "C", "C", "U", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "C", "C", "C", "C", "C", "C"],
              ["C", "U", "V", "V", "V", "U", "C"],
              ["C", "G", "G", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:filled',
            component: 'C'
          }
        ],
        catalyst: {
          id: 'kubejs:advanced_extreme_circuit_board',
          Count: 1
        },
        components: {
          'C': {
            type: "compactcrafting:block",
            block: 'pneumaticcraft:compressed_brick_tile'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'pneumaticcraft:pressure_chamber_glass'
          },
          'U': {
            type: "compactcrafting:block",
            block: 'undergarden:utherium_block'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'occultism:iesnium_block'
          },
          'V': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:insulating_glass'
          },
          'M': {
            type: "compactcrafting:block",
            block: 'thermal:machine_frame'
          },
          'S': {
            type: "compactcrafting:block",
            block: 'create:shadow_steel_casing'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:assemblylaser_controller',
          Count: 1
        }]
      }
    ];

    recipes.forEach((recipe) => {
        event.custom({
            type: 'compactcrafting:miniaturization',
            version: 1,
            recipeSize: recipe.recipeSize,
            layers: recipe.layers,
            catalyst: recipe.catalyst,
            components: recipe.components,
            outputs: recipe.outputs
        });
    });
});
