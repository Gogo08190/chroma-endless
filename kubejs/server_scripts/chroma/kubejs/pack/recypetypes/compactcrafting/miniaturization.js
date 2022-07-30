onEvent('recipes', (event) => {

    const recipes = [
    {
        recipeSize: 7,
        layers: [
          {
            type: 'compactcrafting:filled',
            component: 'C'
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "S", "S", "I", "S", "I", "C"],
              ["S", "U", "Q", "Q", "Q", "U", "I"],
              ["S", "Q", "Q", "Q", "Q", "Q", "S"],
              ["I", "Q", "Q", "Q", "Q", "Q", "I"],
              ["S", "Q", "Q", "Q", "Q", "Q", "S"],
              ["I", "U", "Q", "Q", "Q", "U", "S"],
              ["C", "I", "S", "I", "S", "S", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "S", "I", "I", "S", "I", "C"],
              ["S", "R", "Q", "Q", "Q", "R", "I"],
              ["I", "Q", "Q", "B", "Q", "Q", "S"],
              ["I", "Q", "B", "P", "B", "Q", "I"],
              ["S", "Q", "Q", "B", "Q", "Q", "I"],
              ["I", "R", "Q", "Q", "Q", "R", "S"],
              ["C", "I", "S", "I", "I", "S", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "S", "S", "S", "S", "S", "C"],
              ["S", "R", "Q", "Q", "Q", "R", "S"],
              ["S", "Q", "Q", "P", "Q", "Q", "S"],
              ["S", "Q", "P", "M", "P", "Q", "S"],
              ["S", "Q", "Q", "P", "Q", "Q", "S"],
              ["S", "R", "Q", "Q", "Q", "R", "S"],
              ["C", "S", "S", "S", "S", "S", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "I", "I", "S", "I", "S", "C"],
              ["I", "R", "Q", "Q", "Q", "R", "S"],
              ["I", "Q", "Q", "B", "Q", "Q", "I"],
              ["S", "Q", "B", "P", "B", "Q", "S"],
              ["I", "Q", "Q", "B", "Q", "Q", "I"],
              ["S", "R", "Q", "Q", "Q", "R", "I"],
              ["C", "S", "I", "S", "I", "I", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "S", "I", "S", "I", "S", "C"],
              ["S", "U", "Q", "Q", "Q", "U", "S"],
              ["I", "Q", "Q", "Q", "Q", "Q", "I"],
              ["S", "Q", "Q", "Q", "Q", "Q", "S"],
              ["I", "Q", "Q", "Q", "Q", "Q", "I"],
              ["S", "U", "Q", "Q", "Q", "U", "S"],
              ["C", "S", "I", "S", "I", "S", "C"],
            ]
          },
          {
            type: 'compactcrafting:filled',
            component: 'C'
          }
        ],
        catalyst: {
          id: 'refinedstorage:advanced_processor',
          Count: 1
        },
        components: {
          'C': {
            type: "compactcrafting:block",
            block: 'refinedstorage:quartz_enriched_iron_block'
          },
          'P': {
            type: "compactcrafting:block",
            block: 'rftoolspower:cell1'
          },
          'U': {
            type: "compactcrafting:block",
            block: 'miniutilities:unstable_block'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'occultism:iesnium_block'
          },
          'S': {
            type: "compactcrafting:block",
            block: 'create:shadow_steel_casing'
          },
          'M': {
            type: "compactcrafting:block",
            block: 'refinedstorage:machine_casing'
          },
          'Q': {
            type: "compactcrafting:block",
            block: 'create:copper_casing'
          },
          'R': {
            type: "compactcrafting:block",
            block: 'create:refined_radiance_casing'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'undergarden:utherium_block'
          },
        },
        outputs: [{
          id: 'refinedstorage:controller',
          Count: 1
        }]
      },
    {
        recipeSize: 7,
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
      },

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
              ["C", "C", "C", "C", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "W", "F", "W", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["C", "C", "C", "C", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "W", "W", "W", "C"],
              ["C", "G", "G", "G", "C"],
            ]
          },
          {
            type: 'compactcrafting:filled',
            component: 'C'
          }
        ],
        catalyst: {
          id: 'ars_elemental:necrotic_focus',
          Count: 1
        },
        components: {
          'C': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:sheetmetal_steel'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'thermal:enderium_glass'
          },
          'W': {
            type: "compactcrafting:block",
            block: 'compactmachines:wall'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'thermal:machine_frame'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:compactfactory_controller',
          Count: 1
        }]
      },

      {
        recipeSize: 3,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["R", "R", "R"],
              ["R", "S", "R"],
              ["R", "R", "R",],
            ]
          }
        ],
        catalyst: {
          id: 'extendedcrafting:redstone_ingot',
          Count: 1
        },
        components: {
          'R': {
            type: "compactcrafting:block",
            block: 'minecraft:redstone_wire'
          },
          'S': {
            type: "compactcrafting:block",
            block: 'pneumaticcraft:compressed_iron_block'
          }
        },
        outputs: [{
          id: 'compactmachines:wall',
          Count: 4
        }]
      },
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
