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
            block: 'immersiveengineering:sheetmetal_colored_black'
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
              ["R", "R", "R"],
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

      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "A", "A", "A", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "A", "A", "A", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "C", "C", "C", "A"],
              ["B", "D", "E", "D", "B"],
              ["B", "E", "H", "E", "B"],
              ["B", "D", "E", "D", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "C", "C", "C", "A"],
              ["B", "D", "E", "D", "B"],
              ["F", "E", "G", "E", "F"],
              ["B", "D", "E", "D", "B"],
              ["A", "B", "F", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "C", "C", "C", "A"],
              ["B", "D", "E", "D", "B"],
              ["B", "E", "I", "E", "B"],
              ["B", "D", "E", "D", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "A", "A", "A", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "B", "B", "B", "A"],
              ["A", "A", "A", "A", "A"],
            ]
          }
        ],
        catalyst: {
          id: 'create:electron_tube',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'create:shadow_steel_casing'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'occultism:otherstone'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'create:framed_glass'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:heavy_engineering'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'create:refined_radiance_casing'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'create:encased_fan'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'create:spout'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'create:fluid_tank'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'create:portable_fluid_interface'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:autoinfuser_controller',
          Count: 1
        }]
      },

      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["B", "D", "E", "D", "B"],
              ["B", "E", "F", "E", "B"],
              ["B", "D", "E", "D", "B"],
              ["B", "B", "B", "B", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["B", "D", "D", "D", "B"],
              ["G", "F", "H", "F", "G"],
              ["B", "D", "F", "D", "B"],
              ["B", "B", "G", "B", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["B", "D", "E", "D", "B"],
              ["B", "E", "F", "E", "B"],
              ["B", "D", "E", "D", "B"],
              ["B", "B", "B", "B", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          }
        ],
        catalyst: {
          id: 'envirocore:cpu',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'emendatusenigmatica:aluminum_block'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'envirocore:structure_panel'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'envirocore:mica'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'envirocore:litherite_frame'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'envirocore:litherite'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'mekanism:ultimate_induction_cell'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'extendedcrafting:ender_star_block'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'mekanism:steel_casing'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:cuttingmachine_controller',
          Count: 1
        }]
      },

      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "D", "D", "D", "B"],
              ["B", "D", "D", "D", "B"],
              ["B", "D", "D", "D", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "F", "E", "D"],
              ["D", "G", "H", "G", "D"],
              ["D", "E", "G", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "G", "E", "D"],
              ["D", "I", "J", "I", "D"],
              ["D", "E", "I", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "F", "E", "D"],
              ["D", "G", "K", "G", "D"],
              ["D", "E", "G", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          }
        ],
        catalyst: {
          id: 'immersiveengineering:electron_tube',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'occultism:iesnium_block'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:sheetmetal_steel'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'thermal:obsidian_glass'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'occultism:otherstone'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:generator'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:coil_hv'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:radiator'
          },
          'K': {
            type: "compactcrafting:block",
            block: 'occultism:storage_controller_base'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:furnace_heater'
          },
          'J': {
            type: "compactcrafting:block",
            block: 'thermal:machine_smelter'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'create:mechanical_mixer'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:fusioner_controller',
          Count: 1
        }]
      },

      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "D", "D", "D", "B"],
              ["B", "D", "J", "D", "B"],
              ["B", "D", "D", "D", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["D", "E", "F", "E", "D"],
              ["D", "E", "E", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["G", "H", "I", "H", "G"],
              ["D", "E", "H", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["B", "C", "C", "C", "B"],
              ["D", "E", "C", "E", "D"],
              ["D", "E", "F", "E", "D"],
              ["D", "E", "E", "E", "D"],
              ["B", "D", "D", "D", "B"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["B", "B", "B", "B", "B"],
              ["A", "B", "B", "B", "A"],
            ]
          }
        ],
        catalyst: {
          id: 'draconicevolution:awakened_core',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'draconicevolution:draconium_block'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'create:shadow_steel_casing'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:reactor_glass'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_frame'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'mekanism:superheating_element'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_injector'
          },
          'G': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_port'
          },
          'H': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_stabilizer'
          },
          'I': {
            type: "compactcrafting:block",
            block: 'draconicevolution:reactor_core'
          },
          'J': {
            type: "compactcrafting:block",
            block: 'mekanismgenerators:fusion_reactor_controller'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:endlessreactor_controller',
          Count: 1
        }]
      },

      {
        recipeSize: 5,
        layers: [
          {
            type: 'compactcrafting:filled',
            component: 'A'
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["A", "C", "D", "C", "A"],
              ["A", "D", "E", "D", "A"],
              ["A", "C", "D", "C", "A"],
              ["A", "A", "A", "A", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["A", "D", "E", "D", "A"],
              ["A", "E", "F", "E", "A"],
              ["A", "D", "E", "D", "A"],
              ["A", "A", "A", "A", "A"],
            ]
          },
          {
            type: 'compactcrafting:mixed',
            pattern: [
              ["A", "B", "B", "B", "A"],
              ["A", "C", "D", "C", "A"],
              ["A", "D", "E", "D", "A"],
              ["A", "C", "D", "C", "A"],
              ["A", "A", "A", "A", "A"],
            ]
          },
          {
            type: 'compactcrafting:filled',
            component: 'A'
          }
        ],
        catalyst: {
          id: 'cagedmobs:star_infused_netherite_ingot',
          Count: 1
        },
        components: {
          'A': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:treated_wood_horizontal'
          },
          'B': {
            type: "compactcrafting:block",
            block: 'thermal:obsidian_glass'
          },
          'C': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:concrete_leaded'
          },
          'D': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:hempcrete'
          },
          'E': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:light_engineering'
          },
          'F': {
            type: "compactcrafting:block",
            block: 'immersiveengineering:coil_lv'
          }
        },
        outputs: [{
          id: 'masterfulmachinery:autosmithing_controller',
          Count: 1
        }]
      },
      //Atomic Centrifuge Gas Input
      {
          recipeSize: 5,
          layers: [
            {
              type: 'compactcrafting:filled',
              component: 'B'
            },
            {
              type: 'compactcrafting:mixed',
              pattern: [
                ["B", "B", "B", "B", "B"],
                ["B", "S", "S", "S", "B"],
                ["B", "S", "S", "S", "B"],
                ["B", "S", "S", "S", "B"],
                ["B", "B", "B", "B", "B"],
              ]
            },
            {
              type: 'compactcrafting:mixed',
              pattern: [
                ["B", "B", "B", "B", "B"],
                ["B", "S", "G", "S", "B"],
                ["B", "G", "S", "G", "B"],
                ["B", "S", "G", "S", "B"],
                ["B", "B", "B", "B", "B"],
              ]
            },
            {
              type: 'compactcrafting:mixed',
              pattern: [
                ["B", "B", "B", "B", "B"],
                ["B", "s", "S", "S", "B"],
                ["B", "S", "S", "S", "B"],
                ["B", "S", "S", "S", "B"],
                ["B", "B", "B", "B", "B"],
              ]
            },
            {
              type: 'compactcrafting:filled',
              component: 'B'
            }
          ],
          catalyst: {
            id: 'mekanism:ultimate_chemical_tank',
            Count: 1
          },
          components: {
            'B': {
              type: "compactcrafting:block",
              block: 'mekanism:boiler_casing'
            },
            'S': {
              type: "compactcrafting:block",
              block: 'mekanism:superheating_element'
            },
            'G': {
              type: "compactcrafting:block",
              block: 'mekanismgenerators:gas_burning_generator'
            }
          },
          outputs: [{
            id: 'masterfulmachinery:centrifuge_centrifuge_gas_port_mekanism_gas_input',
            Count: 1
          }]
        },
        //Atomic Centrifuge Gas Output
        {
            recipeSize: 5,
            layers: [
              {
                type: 'compactcrafting:filled',
                component: 'B'
              },
              {
                type: 'compactcrafting:mixed',
                pattern: [
                  ["B", "B", "B", "B", "B"],
                  ["B", "S", "S", "S", "B"],
                  ["B", "S", "S", "S", "B"],
                  ["B", "S", "S", "S", "B"],
                  ["B", "B", "B", "B", "B"],
                ]
              },
              {
                type: 'compactcrafting:mixed',
                pattern: [
                  ["B", "B", "B", "B", "B"],
                  ["B", "S", "R", "S", "B"],
                  ["B", "R", "S", "R", "B"],
                  ["B", "S", "R", "S", "B"],
                  ["B", "B", "B", "B", "B"],
                ]
              },
              {
                type: 'compactcrafting:mixed',
                pattern: [
                  ["B", "B", "B", "B", "B"],
                  ["B", "s", "S", "S", "B"],
                  ["B", "S", "S", "S", "B"],
                  ["B", "S", "S", "S", "B"],
                  ["B", "B", "B", "B", "B"],
                ]
              },
              {
                type: 'compactcrafting:filled',
                component: 'B'
              }
            ],
            catalyst: {
              id: 'mekanism:ultimate_chemical_tank',
              Count: 1
            },
            components: {
              'B': {
                type: "compactcrafting:block",
                block: 'mekanism:boiler_casing'
              },
              'S': {
                type: "compactcrafting:block",
                block: 'mekanism:superheating_element'
              },
              'R': {
                type: "compactcrafting:block",
                block: 'mekanism:rotary_condensentrator'
              }
            },
            outputs: [{
              id: 'masterfulmachinery:centrifuge_centrifuge_gas_port_mekanism_gas_output',
              Count: 1
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
