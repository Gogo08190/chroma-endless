onEvent("recipes", (event) => {
  const id_prefix = 'chroma:pack/extendedcrafting/table/';
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABCBA",
        "ACDCA",
        "ABCBA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:luminessence"
        },
        "B": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "C": {
          "item": "mekanism:alloy_atomic"
        },
        "D": {
          "item": "resourcefulbees:elite_centrifuge_controller"
        }
      },
      "result": {
        "item": "ctiers:centrifuge_controller_tier_3"
      }
    }
  ).id(`${id_prefix}centrifuge_controller_tier_3`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABBBA",
        "ACDCA",
        "ADCDA",
        "AAAAA"
      ],
      "key": {
        "A": {
          "item": "extendedcrafting:luminessence"
        },
        "B": {
          "item": "mekanism:alloy_atomic"
        },
        "C": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "D": {
          "item": "resourcefulbees:elite_centrifuge_casing"
        }
      },
      "result": {
        "item": "ctiers:centrifuge_casing_tier_3",
        "count": 3
      }
    }
  ).id(`${id_prefix}centrifuge_casing_tier_3`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "DEFED",
        "CFGFC",
        "DEFED",
        "ABCBA"
      ],
      "key": {
        "A": {
          "tag": "resourcefulbees:resourceful_honeycomb_block"
        },
        "B": {
          "item": "resourcefulbees:waxed_machine_block"
        },
        "C": {
          "item": "pneumaticcraft:logistics_core"
        },
        "D": {
          "item": "bigreactors:blutonium_ingot"
        },
        "E": {
          "item": "extendedcrafting:nether_star_block"
        },
        "F": {
          "item": "resourcefulbees:t4_beehive"
        },
        "G": {
          "item": "extendedcrafting:luminessence_block"
        }
      },
      "result": {
        "item": "resourcefulbees:t1_apiary"
      }
    }
  ).id('resourcefulbees:t1_apiary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "DEFED",
        "CFGFC",
        "DEFED",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "tconstruct:queens_slime_block"
        },
        "B": {
          "item": "resourcefulbees:waxed_machine_block"
        },
        "C": {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        "D": {
          "tag": "resourcefulbees:resourceful_honeycomb_block"
        },
        "E": {
          "item": "extendedcrafting:nether_star_block"
        },
        "F": {
          "item": "resourcefulbees:t1_apiary"
        },
        "G": {
          "item": "extendedcrafting:luminessence_block"
        }
      },
      "result": {
        "item": "resourcefulbees:t2_apiary"
      }
    }
  ).id('resourcefulbees:t2_apiary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "ECFGFCE",
        "CFHIHFC",
        "DGIJIGD",
        "CFHIHFC",
        "ECFGFCE",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "tconstruct:queens_slime_block"
        },
        "B": {
          "item": "tconstruct:slimesteel_block"
        },
        "C": {
          "item": "botania:elementium_block"
        },
        "D": {
          "item": "botania:terrasteel_block"
        },
        "E": {
          "tag": "resourcefulbees:resourceful_honeycomb_block"
        },
        "F": {
          "item": "mekanism:alloy_atomic"
        },
        "G": {
          "item": "resourcefulbees:waxed_machine_block"
        },
        "H": {
          "item": "extendedcrafting:nether_star_block"
        },
        "I": {
          "item": "resourcefulbees:t2_apiary"
        },
        "J": {
          "item": "extendedcrafting:luminessence_block"
        }
      },
      "result": {
        "item": "resourcefulbees:t3_apiary"
      }
    }
  ).id('resourcefulbees:t3_apiary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDDDCBA",
        "ECFGHGFCE",
        "CFGIJIGFC",
        "DGIKLKIGD",
        "DHMLNLMHD",
        "DGIKLKIGD",
        "CFGIJIGFC",
        "ECFGHGFCE",
        "ABCDDDCBA"
      ],
      "key": {
        "A": {
          "item": "tconstruct:queens_slime_block"
        },
        "B": {
          "item": "tconstruct:slimesteel_block"
        },
        "C": {
          "item": "botania:elementium_block"
        },
        "D": {
          "item": "botania:terrasteel_block"
        },
        "E": {
          "tag": "resourcefulbees:resourceful_honeycomb_block"
        },
        "F": {
          "item": "elementalcraft:swift_alloy_block"
        },
        "G": {
          "item": "elementalcraft:drenched_iron_block"
        },
        "H": {
          "item": "resourcefulbees:waxed_machine_block"
        },
        "I": {
          "item": "powah:nitro_crystal_block"
        },
        "J": {
          "item": "botania:gaia_ingot"
        },
        "K": {
          "item": "extendedcrafting:nether_star_block"
        },
        "L": {
          "item": "resourcefulbees:t3_apiary"
        },
        "M": {
          "item": "draconicevolution:wyvern_core"
        },
        "N": {
          "item": "extendedcrafting:luminessence_block"
        }
      },
      "result": {
        "item": "resourcefulbees:t4_apiary"
      }
    }
  ).id('resourcefulbees:t4_apiary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A A ",
        "ABABA",
        "ACDCA",
        "AEFEA",
        "AG GA"
      ],
      "key": {
        "A": {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        "B": {
          "item": "enderioalloys:item_material_gear_vibrant"
        },
        "C": {
          "item": "ironjetpacks:stellar_capacitor"
        },
        "D": {
          "type": "forge:nbt",
          "item": "ironjetpacks:inanite_jetpack",
          "count": 1,
          "nbt": ""
        },
        "E": {
          "item": "ironjetpacks:stellar_thruster"
        },
        "F": {
          "item": "enderioalloys:item_material_skull_ender_resonator"
        },
        "G": {
          "item": "kubejs:octadic_capacitor"
        }
      },
      "result": {
        "type": "forge:nbt",
        "item": "ironjetpacks:stellar_jetpack",
        "count": 1,
        "nbt": ""
      }
    }
  ).id(`${id_prefix}stellar_jetpack`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ADEFEDA",
        "BEGHGEB",
        "IFHJHFI",
        "BEGHGEB",
        "ADEFEDA",
        "AABCBAA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        "B": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "C": {
          "item": "draconicevolution:chaotic_energy_core"
        },
        "D": {
          "item": "envirocore:nanorite_interconnect"
        },
        "E": {
          "item": "mekanism:ultimate_induction_cell"
        },
        "F": {
          "item": "draconicadditions:chaos_container"
        },
        "G": {
          "item": "resourcefulbees:awakened_honeycomb_block"
        },
        "H": {
          "item": "resourcefulbees:dragon_honeycomb_block"
        },
        "I": {
          "item": "draconicevolution:chaotic_core"
        },
        "J": {
          "item": "draconicmachinery:chaos_heart"
        }
      },
      "result": {
        "item": "draconicmachinery:chaos_collector"
      }
    }
  ).id('draconicmachinery:chaos_collector_rcp')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BIJIB",
        "ABKBA"
      ],
      "key": {
        "A": {
          "item": "bigreactors:magentite_ingot"
        },
        "B": {
          "item": "draconicevolution:draconium_ingot"
        },
        "C": {
          "item": "mob_grinding_utils:tank_sink"
        },
        "D": {
          "item": "pneumaticcraft:smart_chest"
        },
        "E": {
          "item": "enderioalloys:item_material_skull_skeletal_contractor"
        },
        "F": {
          "item": "miniutilities:etheric_sword"
        },
        "G": {
          "item": "draconicevolution:draconium_core"
        },
        "H": {
          "item": "mob_grinding_utils:saw"
        },
        "I": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "J": {
          "item": "draconicmachinery:draconium_furnace"
        },
        "K": {
          "item": "draconicmachinery:redstone_core"
        }
      },
      "result": {
        "item": "draconicevolution:grinder"
      }
    }
  ).id('draconicevolution:grinder')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BIJIB",
        "ABKBA"
      ],
      "key": {
        "A": {
          "item": "bigreactors:magentite_ingot"
        },
        "B": {
          "item": "draconicevolution:draconium_ingot"
        },
        "C": {
          "item": "mob_grinding_utils:tank_sink"
        },
        "D": {
          "item": "pneumaticcraft:smart_chest"
        },
        "E": {
          "item": "enderioalloys:item_material_skull_zombie_controller"
        },
        "F": {
          "item": "miniutilities:etheric_sword"
        },
        "G": {
          "item": "draconicevolution:draconium_core"
        },
        "H": {
          "item": "mob_grinding_utils:saw"
        },
        "I": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "J": {
          "item": "draconicmachinery:draconium_furnace"
        },
        "K": {
          "item": "draconicmachinery:redstone_core"
        }
      },
      "result": {
        "item": "draconicmachinery:player_grinder"
      }
    }
  ).id('draconicmachinery:player_grinder_rcp')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "EDFDE",
        "ACDCA",
        "AAGAA"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:draconium_ingot"
        },
        "B": {
          "item": "draconicevolution:awakened_core"
        },
        "C": {
          "item": "ars_nouveau:ritual_sunrise"
        },
        "D": {
          "item": "minecraft:enchanting_table"
        },
        "E": {
          "item": "draconicevolution:wyvern_core"
        },
        "F": {
          "item": "minecraft:dragon_egg"
        },
        "G": {
          "item": "draconicmachinery:redstone_core"
        }
      },
      "result": {
        "item": "draconicmachinery:sun_dial"
      }
    }
  ).id('draconicmachinery:sun_dial_rcp')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AAAAA",
        "ABCBA",
        "DEFED",
        "GEHEI",
        "JKLKJ"
      ],
      "key": {
        "A": {
          "item": "draconicevolution:draconium_ingot"
        },
        "B": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "C": {
          "item": "kubejs:advanced_extreme_circuit_board"
        },
        "D": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "E": {
          "item": "powah:capacitor_blazing"
        },
        "F": {
          "item": "draconicmachinery:draconium_furnace"
        },
        "G": {
          "item": "create:propeller"
        },
        "H": {
          "item": "powah:battery_nitro"
        },
        "I": {
          "item": "mekanism:induction_port"
        },
        "J": {
          "item": "draconicevolution:draconium_core"
        },
        "K": {
          "item": "wormhole:coal_generator"
        },
        "L": {
          "item": "draconicmachinery:redstone_core"
        }
      },
      "result": {
        "item": "draconicevolution:generator"
      }
    }
  ).id('draconicevolution:generator')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "bigreactors:inanite_ingot"
        },
        "B": {
          "item": "enderioalloys:item_alloy_ingot_energetic_alloy"
        },
        "C": {
          "item": "draconicevolution:wyvern_core"
        },
        "D": {
          "item": "draconicevolution:wyvern_energy_core"
        },
        "E": {
          "item": "envirocore:ionite_interconnect"
        },
        "F": {
          "item": "mekanism:ultimate_induction_cell"
        }
      },
      "result": {
        "item": "draconicevolution:energy_core"
      }
    }
  ).id('draconicevolution:energy_core')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A A ",
        "BBCBB",
        "BDEDB",
        "BFGFB",
        "BBBBB"
      ],
      "key": {
        "A": {
          "item": "ironjetpacks:stellar_cell"
        },
        "B": {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        "C": {
          "item": "enderioalloys:item_material_gear_vibrant"
        },
        "D": {
          "item": "kubejs:octadic_capacitor"
        },
        "E": {
          "item": "enderioalloys:item_material_skull_ender_resonator"
        },
        "F": {
          "item": "mekanism:superheating_element"
        },
        "G": {
          "item": "enderioalloys:item_material_skull_guardian_diode"
        }
      },
      "result": {
        "item": "ironjetpacks:stellar_capacitor"
      }
    }
  ).id(`${id_prefix}stellar_capacitor`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  A  ",
        " ABA ",
        "AACAA",
        "AADAA",
        "AEFEA"
      ],
      "key": {
        "A": {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        "B": {
          "item": "enderioalloys:item_material_skull_guardian_diode"
        },
        "C": {
          "item": "kubejs:octadic_capacitor"
        },
        "D": {
          "item": "enderioalloys:item_material_gear_vibrant"
        },
        "E": {
          "item": "mekanism:superheating_element"
        },
        "F": {
          "item": "enderioalloys:item_material_skull_ender_resonator"
        }
      },
      "result": {
        "item": "ironjetpacks:stellar_thruster"
      }
    }
  ).id(`${id_prefix}stellar_thruster`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_bin"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:qio_exporter"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:teleportation_core"
        },
        "F": {
          "item": "mekanism:qio_drive_base"
        },
        "G": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_item_port_items_output"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_item_port_items_output`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FEGEF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_bin"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:qio_importer"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:teleportation_core"
        },
        "F": {
          "item": "mekanism:qio_drive_base"
        },
        "G": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_item_port_items_input"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_item_port_items_input`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CFGFC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_induction_provider"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:ultimate_induction_cell"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:pellet_polonium"
        },
        "F": {
          "item": "powah:energizing_rod_nitro"
        },
        "G": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_energy_port_energy_output"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_energy_port_energy_output`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "pneumaticcraft:reinforced_air_canister"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:teleportation_core"
        },
        "F": {
          "item": "kubejs:netherite_transistor"
        },
        "G": {
          "item": "pneumaticcraft:advanced_pressure_tube"
        },
        "H": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_air_port_pncr_pressure_input"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_air_port_pncr_pressure_input`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_fluid_tank"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:teleportation_core"
        },
        "F": {
          "item": "mekanism:dynamic_tank"
        },
        "G": {
          "item": "mekanism:ultimate_mechanical_pipe"
        },
        "H": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_fluid_port_fluids_input"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_fluid_port_fluids_input`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "create:electron_tube"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "create:refined_radiance"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "create:precision_mechanism"
        },
        "F": {
          "item": "create:rotation_speed_controller"
        },
        "G": {
          "item": "mekanism:teleportation_core"
        },
        "H": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_speed_port_create_rotation_output"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_speed_port_create_rotation_output`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "FGHGF",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "mekanism:ultimate_chemical_tank"
        },
        "B": {
          "item": "create:shadow_steel_casing"
        },
        "C": {
          "item": "mekanism:pellet_polonium"
        },
        "D": {
          "item": "draconicevolution:draconium_ingot"
        },
        "E": {
          "item": "mekanism:teleportation_core"
        },
        "F": {
          "item": "mekanism:electrolytic_core"
        },
        "G": {
          "item": "mekanism:ultimate_pressurized_tube"
        },
        "H": {
          "item": "mekanism:steel_casing"
        }
      },
      "result": {
        "item": "masterfulmachinery:endlessreactor_endless_gas_port_mekanism_gas_input"
      }
    }
  ).id(`${id_prefix}endlessreactor_endless_gas_port_mekanism_gas_input`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCBAA",
        "ABDEDBA",
        "BDFGFDB",
        "HEGIGEH",
        "BDFGFDB",
        "ABDEDBA",
        "AABCBAA"
      ],
      "key": {
        "A": {
          "item": "projecte:dark_matter"
        },
        "B": {
          "item": "enderioalloys:item_alloy_ingot_dark_steel"
        },
        "C": {
          "item": "enderioalloys:item_material_precient_powder"
        },
        "D": {
          "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
        },
        "E": {
          "item": "mekanism:alloy_atomic"
        },
        "F": {
          "item": "powah:charged_snowball"
        },
        "G": {
          "item": "enderioalloys:item_material_weather_crystal"
        },
        "H": {
          "item": "enderioalloys:item_material_pulsating_powder"
        },
        "I": {
          "item": "projecte:philosophers_stone"
        }
      },
      "result": {
        "item": "projecte:transmutation_table"
      }
    }
  ).id('projecte:transmutation_table')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCDCBAA",
        "ABEFGFEBA",
        "BEHIJKHEB",
        "CFILMLKFC",
        "DGJMNMJGD",
        "CFKLMLIFC",
        "BEHKJIHEB",
        " BEFGFEB ",
        "  BCDCB  "
      ],
      "key": {
        "A": {
          "item": "elementalcraft:fireite_ingot"
        },
        "B": {
          "item": "bigreactors:inanite_ingot"
        },
        "C": {
          "item": "botania:elementium_ingot"
        },
        "D": {
          "item": "miniutilities:the_final_opinium_core"
        },
        "E": {
          "item": "envirocore:nanorite_interconnect"
        },
        "F": {
          "item": "mekanism:pellet_polonium"
        },
        "G": {
          "item": "enderioalloys:item_material_skull_guardian_diode"
        },
        "H": {
          "item": "extrastorage:neural_processor"
        },
        "I": {
          "item": "occultism:iesnium_ingot"
        },
        "J": {
          "item": "draconicevolution:wyvern_core"
        },
        "K": {
          "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
        },
        "L": {
          "item": "projecte:aeternalis_fuel"
        },
        "M": {
          "item": "powah:capacitor_niotic"
        },
        "N": {
          "item": "kubejs:arcana"
        }
      },
      "result": {
        "item": "projecte:philosophers_stone"
      }
    }
  ).id('projecte:philosophers_stone')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABCC",
        "ABDDC",
        "BDEDB",
        "FDDBA",
        "FFBAA"
      ],
      "key": {
        "A": {
          "item": "projecte:high_covalence_dust"
        },
        "B": {
          "item": "botania:mana_string"
        },
        "C": {
          "item": "projecte:medium_covalence_dust"
        },
        "D": {
          "item": "mekanism:hdpe_sheet"
        },
        "E": {
          "item": "projecte:dark_matter"
        },
        "F": {
          "item": "projecte:low_covalence_dust"
        }
      },
      "result": {
        "item": "projecte:repair_talisman"
      }
    }
  ).id('projecte:repair_talisman')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  A  ",
        " ABA ",
        "ABCBA",
        " ABA ",
        "  A  "
      ],
      "key": {
        "A": {
          "item": "projectexpansion:pink_fuel"
        },
        "B": {
          "item": "projectexpansion:magenta_fuel"
        },
        "C": {
          "item": "projecte:red_matter"
        }
      },
      "result": {
        "item": "projectexpansion:infinite_fuel"
      }
    }
  ).id('projectexpansion:infinite_fuel')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDE",
        "FGHIJ",
        "KLMNO",
        "PQRST",
        "UVWXU"
      ],
      "key": {
        "A": {
          "item": "sushigocrafting:salmon_maki"
        },
        "B": {
          "item": "sushigocrafting:tuna_maki"
        },
        "C": {
          "item": "sushigocrafting:avocado_maki"
        },
        "D": {
          "item": "sushigocrafting:cucumber_maki"
        },
        "E": {
          "item": "sushigocrafting:crab_maki"
        },
        "F": {
          "item": "sushigocrafting:tobiko_tuna_cucumber_california"
        },
        "G": {
          "item": "sushigocrafting:tuna_cucumber_california"
        },
        "H": {
          "item": "sushigocrafting:salmon_temaki"
        },
        "I": {
          "item": "sushigocrafting:tuna_california"
        },
        "J": {
          "item": "sushigocrafting:tobiko_tuna_california"
        },
        "K": {
          "item": "sushigocrafting:salmon_nigiri"
        },
        "L": {
          "item": "sushigocrafting:chicken_temaki"
        },
        "M": {
          "item": "projectexpansion:magenta_matter"
        },
        "N": {
          "item": "sushigocrafting:tuna_temaki"
        },
        "O": {
          "item": "sushigocrafting:tuna_nigiri"
        },
        "P": {
          "item": "sushigocrafting:tobiko_salmon_cucumber_california"
        },
        "Q": {
          "item": "sushigocrafting:tuna_cheese_california"
        },
        "R": {
          "item": "sushigocrafting:shrimp_temaki"
        },
        "S": {
          "item": "sushigocrafting:salmon_cucumber_california"
        },
        "T": {
          "item": "sushigocrafting:tobiko_salmon_california"
        },
        "U": {
          "item": "sushigocrafting:onigiri"
        },
        "V": {
          "item": "sushigocrafting:salmon_gunkan"
        },
        "W": {
          "item": "sushigocrafting:wakame_gunkan"
        },
        "X": {
          "item": "sushigocrafting:tuna_gunkan"
        }
      },
      "result": {
        "item": "projectexpansion:infinite_steak"
      }
    }
  ).id('projectexpansion:infinite_steak')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A   A ",
        "ABAAACA",
        "AADEFAA",
        "AAAAAAA",
        "A     A",
        "A     A",
        "       "
      ],
      "key": {
        "A": {
          "item": "allthemodium:allthemodium_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "botania:terrasteel_helmet",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "betterendforge:crystalite_helmet",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "D": {
          "type": "forge:nbt",
          "item": "undergarden:utheric_helmet",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "E": {
          "item": "miniutilities:infused_helmet"
        },
        "F": {
          "type": "forge:nbt",
          "item": "mekanismtools:refined_obsidian_helmet",
          "count": 1,
          "nbt": "{Damage:0}"
        }
      },
      "result": {
        "item": "allthemodium:allthemodium_helmet"
      }
    }
  ).id('allthemodium:main/allthemodium_helmet')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AA   AA",
        "AA   AA",
        "AAAAAAA",
        " ABACA ",
        " AADAA ",
        " AEAFA ",
        " AAAAA "
      ],
      "key": {
        "A": {
          "item": "allthemodium:allthemodium_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "botania:terrasteel_chestplate",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "betterendforge:crystalite_chestplate",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "D": {
          "item": "miniutilities:infused_chestplate"
        },
        "E": {
          "type": "forge:nbt",
          "item": "mekanismtools:refined_obsidian_chestplate",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "F": {
          "type": "forge:nbt",
          "item": "undergarden:utheric_chestplate",
          "count": 1,
          "nbt": "{Damage:0}"
        }
      },
      "result": {
        "item": "allthemodium:allthemodium_chestplate"
      }
    }
  ).id('allthemodium:main/allthemodium_chestplate')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " AAAAA ",
        "AAABAAA",
        "ACA ADA",
        "AAA AAA",
        "AAA AAA",
        "AEA AFA",
        "AAA AAA"
      ],
      "key": {
        "A": {
          "item": "allthemodium:allthemodium_ingot"
        },
        "B": {
          "item": "miniutilities:infused_leggings"
        },
        "C": {
          "type": "forge:nbt",
          "item": "mekanismtools:refined_obsidian_leggings",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "D": {
          "type": "forge:nbt",
          "item": "undergarden:utheric_leggings",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "E": {
          "type": "forge:nbt",
          "item": "botania:terrasteel_leggings",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "F": {
          "type": "forge:nbt",
          "item": "betterendforge:crystalite_leggings",
          "count": 1,
          "nbt": "{Damage:0}"
        }
      },
      "result": {
        "item": "allthemodium:allthemodium_leggings"
      }
    }
  ).id('allthemodium:main/allthemodium_leggings')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "       ",
        "A     A",
        "A     A",
        "AAA AAA",
        "ABA ACA",
        "ADA AEA",
        "AAAFAAA"
      ],
      "key": {
        "A": {
          "item": "allthemodium:allthemodium_ingot"
        },
        "B": {
          "type": "forge:nbt",
          "item": "botania:terrasteel_boots",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "betterendforge:crystalite_boots",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "D": {
          "type": "forge:nbt",
          "item": "mekanismtools:refined_obsidian_boots",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "E": {
          "type": "forge:nbt",
          "item": "undergarden:utheric_boots",
          "count": 1,
          "nbt": "{Damage:0}"
        },
        "F": {
          "item": "miniutilities:infused_boots"
        }
      },
      "result": {
        "item": "allthemodium:allthemodium_boots"
      }
    }
  ).id('allthemodium:main/allthemodium_boots')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AABAA  ",
        " A  C  A ",
        "A   C   A",
        "A   C   A",
        "    C    ",
        "    C    ",
        "    C    ",
        "    C    ",
        "    C    "
      ],
      "key": {
        "A": {
          "item": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "B": {
          "item": "projecte:rm_pick"
        },
        "C": {
          "item": "allthemodium:allthemodium_block"
        }
      },
      "result": {
        "item": "allthemodium:alloy_pick"
      }
    }
  ).id('allthemodium:main/alloy_pick')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " AA B AA ",
        "A  ABA  A",
        "A   C   A",
        "A  ABA  A",
        " AA B AA ",
        "    B    ",
        "    B    ",
        "    B    ",
        "    B    "
      ],
      "key": {
        "A": {
          "item": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "B": {
          "item": "allthemodium:allthemodium_block"
        },
        "C": {
          "item": "projecte:rm_axe"
        }
      },
      "result": {
        "item": "allthemodium:alloy_axe"
      }
    }
  ).id('allthemodium:main/alloy_axe')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "      AAA",
        "     AAAA",
        "    AAAAA",
        "   AAAAA ",
        "B AAAAA  ",
        "BBAAAA   ",
        "BBCAA    ",
        " BBB     ",
        "B BBB    "
      ],
      "key": {
        "A": {
          "item": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "B": {
          "item": "allthemodium:allthemodium_block"
        },
        "C": {
          "item": "projecte:rm_sword"
        }
      },
      "result": {
        "item": "allthemodium:alloy_sword"
      }
    }
  ).id('allthemodium:main/alloy_sword')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "    A    ",
        "   AAA   ",
        "  AAAAA  ",
        "  AAAAA  ",
        "  BAAAB  ",
        "   BCB   ",
        "    B    ",
        "    B    ",
        "    B    "
      ],
      "key": {
        "A": {
          "item": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "B": {
          "item": "allthemodium:allthemodium_block"
        },
        "C": {
          "item": "projecte:rm_shovel"
        }
      },
      "result": {
        "item": "allthemodium:alloy_shovel"
      }
    }
  ).id('allthemodium:main/alloy_shovel')

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:nether_quartz_honeycomb"
        },
        {
          "item": "resourcefulbees:potassium_honeycomb"
        },
        {
          "item": "resourcefulbees:sand_honeycomb"
        },
        {
          "item": "resourcefulbees:silver_honeycomb"
        },
        {
          "item": "resourcefulbees:skeleton_honeycomb"
        },
        {
          "item": "resourcefulbees:tin_honeycomb"
        },
        {
          "item": "resourcefulbees:clay_honeycomb"
        },
        {
          "item": "resourcefulbees:blitz_honeycomb"
        },
        {
          "item": "resourcefulbees:aluminum_honeycomb"
        },
        {
          "item": "resourcefulbees:invar_honeycomb"
        },
        {
          "item": "resourcefulbees:ghast_honeycomb"
        },
        {
          "item": "resourcefulbees:fluorite_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:light_honeycomb"
      }
    }
  ).id(`${id_prefix}light_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:graphite_honeycomb"
        },
        {
          "item": "resourcefulbees:wither_honeycomb"
        },
        {
          "item": "resourcefulbees:stone_honeycomb"
        },
        {
          "item": "resourcefulbees:steel_honeycomb"
        },
        {
          "item": "resourcefulbees:seared_honeycomb"
        },
        {
          "item": "resourcefulbees:gravel_honeycomb"
        },
        {
          "item": "resourcefulbees:compressed_iron_honeycomb"
        },
        {
          "item": "resourcefulbees:coal_honeycomb"
        },
        {
          "item": "resourcefulbees:bitumen_honeycomb"
        },
        {
          "item": "resourcefulbees:catnip_honeycomb"
        },
        {
          "item": "resourcefulbees:chaotic_honeycomb"
        },
        {
          "item": "resourcefulbees:basalz_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:dark_honeycomb"
      }
    }
  ).id(`${id_prefix}dark_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:lumium_honeycomb"
        },
        {
          "item": "resourcefulbees:gold_honeycomb"
        },
        {
          "item": "resourcefulbees:end_honeycomb"
        },
        {
          "item": "resourcefulbees:blaze_honeycomb"
        },
        {
          "item": "resourcefulbees:blazing_honeycomb"
        },
        {
          "item": "resourcefulbees:brass_honeycomb"
        },
        {
          "item": "resourcefulbees:nickel_honeycomb"
        },
        {
          "item": "resourcefulbees:regalium_honeycomb"
        },
        {
          "item": "resourcefulbees:zinc_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:yellow_honeycomb"
      }
    }
  ).id(`${id_prefix}yellow_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:draconium_honeycomb"
        },
        {
          "item": "resourcefulbees:ender_slime_honeycomb"
        },
        {
          "item": "resourcefulbees:gaia_honeycomb"
        },
        {
          "item": "resourcefulbees:hepatizon_honeycomb"
        },
        {
          "item": "resourcefulbees:lead_honeycomb"
        },
        {
          "item": "resourcefulbees:ludicrite_honeycomb"
        },
        {
          "item": "resourcefulbees:manyullyn_honeycomb"
        },
        {
          "item": "resourcefulbees:obsidian_honeycomb"
        },
        {
          "item": "resourcefulbees:occultist_honeycomb"
        },
        {
          "item": "resourcefulbees:refined_obsidian_honeycomb"
        },
        {
          "item": "resourcefulbees:unobtainium_honeycomb"
        },
        {
          "item": "resourcefulbees:dragon_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:purple_honeycomb"
      }
    }
  ).id(`${id_prefix}purple_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:elementium_honeycomb"
        },
        {
          "item": "resourcefulbees:fairy_honeycomb"
        },
        {
          "item": "resourcefulbees:inanite_honeycomb"
        },
        {
          "item": "resourcefulbees:magentite_honeycomb"
        },
        {
          "item": "resourcefulbees:ridiculite_honeycomb"
        },
        {
          "item": "resourcefulbees:rose_gold_honeycomb"
        },
        {
          "item": "resourcefulbees:source_steel_honeycomb"
        },
        {
          "item": "resourcefulbees:utherium_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:pink_honeycomb"
      }
    }
  ).id(`${id_prefix}pink_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:awakened_honeycomb"
        },
        {
          "item": "resourcefulbees:signalum_honeycomb"
        },
        {
          "item": "resourcefulbees:starry_lexxie_honeycomb"
        },
        {
          "item": "resourcefulbees:swift_alloy_honeycomb"
        },
        {
          "item": "resourcefulbees:allthemodium_honeycomb"
        },
        {
          "item": "resourcefulbees:electrum_honeycomb"
        },
        {
          "item": "resourcefulbees:energized_honeycomb"
        },
        {
          "item": "resourcefulbees:fireite_honeycomb"
        },
        {
          "item": "resourcefulbees:glowstone_honeycomb"
        },
        {
          "item": "resourcefulbees:bronze_honeycomb"
        },
        {
          "item": "resourcefulbees:refined_glowstone_honeycomb"
        },
        {
          "item": "resourcefulbees:copper_honeycomb"
        },
        {
          "item": "resourcefulbees:constantan_honeycomb"
        },
        {
          "item": "resourcefulbees:lava_honeycomb"
        },
        {
          "item": "resourcefulbees:magma_honeycomb"
        },
        {
          "item": "resourcefulbees:cloggrum_honeycomb"
        },
        {
          "item": "resourcefulbees:iron_honeycomb"
        },
        {
          "item": "resourcefulbees:ichor_slime_honeycomb"
        },
        {
          "item": "minecraft:honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:orange_honeycomb"
      }
    }
  ).id(`${id_prefix}orange_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:redstone_honeycomb"
        },
        {
          "item": "resourcefulbees:pigman_honeycomb"
        },
        {
          "item": "resourcefulbees:nitro_honeycomb"
        },
        {
          "item": "resourcefulbees:netherite_honeycomb"
        },
        {
          "item": "resourcefulbees:nether_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:red_honeycomb"
      }
    }
  ).id(`${id_prefix}red_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:cobalt_honeycomb"
        },
        {
          "item": "resourcefulbees:osmium_honeycomb"
        },
        {
          "item": "resourcefulbees:sky_slime_honeycomb"
        },
        {
          "item": "resourcefulbees:froststeel_honeycomb"
        },
        {
          "item": "resourcefulbees:enderium_honeycomb"
        },
        {
          "item": "resourcefulbees:soul_lava_honeycomb"
        },
        {
          "item": "resourcefulbees:xion_honeycomb"
        },
        {
          "item": "resourcefulbees:water_honeycomb"
        },
        {
          "item": "resourcefulbees:blutonium_honeycomb"
        },
        {
          "item": "resourcefulbees:drenched_iron_honeycomb"
        },
        {
          "item": "resourcefulbees:diamond_honeycomb"
        },
        {
          "item": "resourcefulbees:cyanite_honeycomb"
        },
        {
          "item": "resourcefulbees:manasteel_honeycomb"
        },
        {
          "item": "resourcefulbees:niotic_honeycomb"
        },
        {
          "item": "resourcefulbees:terminite_honeycomb"
        },
        {
          "item": "resourcefulbees:thallasium_honeycomb"
        },
        {
          "item": "resourcefulbees:lapis_honeycomb"
        },
        {
          "item": "resourcefulbees:blizz_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:blue_honeycomb"
      }
    }
  ).id(`${id_prefix}blue_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "resourcefulbees:emerald_honeycomb"
        },
        {
          "item": "resourcefulbees:creeper_honeycomb"
        },
        {
          "item": "resourcefulbees:aeternium_honeycomb"
        },
        {
          "item": "resourcefulbees:spirited_honeycomb"
        },
        {
          "item": "resourcefulbees:terrasteel_honeycomb"
        },
        {
          "item": "resourcefulbees:uraninite_honeycomb"
        },
        {
          "item": "resourcefulbees:uranium_honeycomb"
        },
        {
          "item": "resourcefulbees:zombie_honeycomb"
        },
        {
          "item": "resourcefulbees:vibranium_honeycomb"
        },
        {
          "item": "resourcefulbees:ender_honeycomb"
        },
        {
          "item": "resourcefulbees:experience_honeycomb"
        },
        {
          "item": "resourcefulbees:forest_honeycomb"
        },
        {
          "item": "resourcefulbees:forgotten_honeycomb"
        },
        {
          "item": "resourcefulbees:guardian_honeycomb"
        },
        {
          "item": "resourcefulbees:slime_honeycomb"
        }
      ],
      "result": {
        "item": "kubejs:green_honeycomb"
      }
    }
  ).id(`${id_prefix}green_honeycomb`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "botania:rune_air"
        },
        {
          "item": "botania:rune_autumn"
        },
        {
          "item": "botania:rune_earth"
        },
        {
          "item": "botania:rune_envy"
        },
        {
          "item": "botania:rune_fire"
        },
        {
          "item": "botania:rune_gluttony"
        },
        {
          "item": "botania:rune_greed"
        },
        {
          "item": "botania:rune_lust"
        },
        {
          "item": "botania:rune_mana"
        },
        {
          "item": "botania:rune_pride"
        },
        {
          "item": "botania:rune_sloth"
        },
        {
          "item": "botania:rune_spring"
        },
        {
          "item": "botania:rune_summer"
        },
        {
          "item": "botania:rune_water"
        },
        {
          "item": "botania:rune_winter"
        },
        {
          "item": "botania:rune_wrath"
        }
      ],
      "result": {
        "item": "kubejs:ultimate_rune"
      }
    }
  ).id(`${id_prefix}ultimate_rune`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "draconicevolution:draconium_ingot"
        },
        {
          "item": "allthemodium:unobtainium_ingot"
        },
        {
          "item": "bigreactors:ludicrite_ingot"
        },
        {
          "item": "mekanism:ingot_refined_obsidian"
        },
        {
          "item": "tconstruct:hepatizon_ingot"
        },
        {
          "item": "tconstruct:manyullyn_ingot"
        }
      ],
      "result": {
        "item": "kubejs:purple_ingot"
      }
    }
  ).id(`${id_prefix}purple_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "elementalcraft:swift_alloy_ingot"
        },
        {
          "item": "undergarden:regalium_ingot"
        },
        {
          "item": "tconstruct:tinkers_bronze_ingot"
        },
        {
          "item": "emendatusenigmatica:bronze_ingot"
        },
        {
          "item": "mekanism:ingot_refined_glowstone"
        },
        {
          "item": "emendatusenigmatica:lumium_ingot"
        },
        {
          "item": "minecraft:gold_ingot"
        },
        {
          "item": "emendatusenigmatica:brass_ingot"
        },
        {
          "item": "emendatusenigmatica:electrum_ingot"
        },
        {
          "item": "allthemodium:allthemodium_ingot"
        },
        {
          "item": "draconicevolution:awakened_draconium_ingot"
        },
        {
          "item": "emendatusenigmatica:copper_ingot"
        },
        {
          "item": "emendatusenigmatica:constantan_ingot"
        },
        {
          "item": "emendatusenigmatica:signalum_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_energetic_alloy"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_end_steel"
        }
      ],
      "result": {
        "item": "kubejs:orange_ingot"
      }
    }
  ).id(`${id_prefix}orange_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "betterendforge:thallasium_ingot"
        },
        {
          "item": "botania:manasteel_ingot"
        },
        {
          "item": "emendatusenigmatica:silver_ingot"
        },
        {
          "item": "tconstruct:slimesteel_ingot"
        },
        {
          "item": "occultism:iesnium_ingot"
        },
        {
          "item": "bigreactors:blutonium_ingot"
        },
        {
          "item": "emendatusenigmatica:cobalt_ingot"
        },
        {
          "item": "bigreactors:cyanite_ingot"
        },
        {
          "item": "elementalcraft:drenched_iron_ingot"
        },
        {
          "item": "undergarden:froststeel_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_energetic_silver"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_vivid_alloy"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_crystalline_alloy"
        },
        {
          "item": "emendatusenigmatica:osmium_ingot"
        },
        {
          "item": "betterendforge:terminite_ingot"
        }
      ],
      "result": {
        "item": "kubejs:blue_ingot"
      }
    }
  ).id(`${id_prefix}blue_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "bigreactors:inanite_ingot"
        },
        {
          "item": "undergarden:utherium_ingot"
        },
        {
          "item": "extendedcrafting:redstone_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_redstone_alloy"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_conductive_iron"
        }
      ],
      "result": {
        "item": "kubejs:red_ingot"
      }
    }
  ).id(`${id_prefix}red_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "bigreactors:magentite_ingot"
        },
        {
          "item": "materialis:fairy_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_melodic_alloy"
        },
        {
          "item": "arsarsenal:source_steel_ingot"
        },
        {
          "item": "bigreactors:ridiculite_ingot"
        },
        {
          "item": "botania:elementium_ingot"
        },
        {
          "item": "industrialforegoing:pink_slime_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_crystalline_pink_slime"
        },
        {
          "item": "tconstruct:pig_iron_ingot"
        },
        {
          "item": "botania:gaia_ingot"
        },
        {
          "item": "tconstruct:rose_gold_ingot"
        }
      ],
      "result": {
        "item": "kubejs:pink_ingot"
      }
    }
  ).id(`${id_prefix}pink_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "betterendforge:aeternium_ingot"
        },
        {
          "item": "extendedcrafting:ender_ingot"
        },
        {
          "item": "emendatusenigmatica:enderium_ingot"
        },
        {
          "item": "undergarden:forgotten_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_pulsating_iron"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_vibrant_alloy"
        },
        {
          "item": "tconstruct:queens_slime_ingot"
        },
        {
          "item": "botania:terrasteel_ingot"
        },
        {
          "item": "emendatusenigmatica:uranium_ingot"
        },
        {
          "item": "allthemodium:vibranium_ingot"
        },
        {
          "item": "emendatusenigmatica:zinc_ingot"
        }
      ],
      "result": {
        "item": "kubejs:green_ingot"
      }
    }
  ).id(`${id_prefix}green_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "cagedmobs:star_infused_netherite_ingot"
        },
        {
          "item": "dustrial_decor:rusty_iron_ingot"
        },
        {
          "item": "undergarden:cloggrum_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_dark_steel"
        },
        {
          "item": "emendatusenigmatica:steel_ingot"
        },
        {
          "item": "pneumaticcraft:ingot_iron_compressed"
        },
        {
          "item": "immersiveengineering:ingot_hop_graphite"
        },
        {
          "item": "minecraft:netherite_ingot"
        },
        {
          "item": "extendedcrafting:black_iron_ingot"
        },
        {
          "item": "elementalcraft:fireite_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_soularium"
        }
      ],
      "result": {
        "item": "kubejs:dark_ingot"
      }
    }
  ).id(`${id_prefix}dark_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shapeless_table",
      "ingredients": [
        {
          "item": "emendatusenigmatica:tin_ingot"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_electrical_steel"
        },
        {
          "item": "enderioalloys:item_alloy_ingot_crude_steel"
        },
        {
          "item": "minecraft:iron_ingot"
        },
        {
          "item": "emendatusenigmatica:invar_ingot"
        },
        {
          "item": "emendatusenigmatica:aluminum_ingot"
        }
      ],
      "result": {
        "item": "kubejs:light_ingot"
      }
    }
  ).id(`${id_prefix}light_ingot`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEFGHI",
        "JKLMNOPQR",
        "STUVWXYZ1",
        "2345678  ",
        "         ",
        "         ",
        "         ",
        "         ",
        "         "
      ],
      "key": {
        "A": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:pladium\"}"
        },
        "B": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:aethium\"}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:bitumen\"}"
        },
        "D": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:graphite\"}"
        },
        "E": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:steel\"}"
        },
        "F": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:hepatizon\"}"
        },
        "G": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:erodium\"}"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:froststeel\"}"
        },
        "I": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:draconium\"}"
        },
        "J": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:unobtaninium\"}"
        },
        "K": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:refined_obsidian\"}"
        },
        "L": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:nanorite\"}"
        },
        "M": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:kyronite\"}"
        },
        "N": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:spirit_attuned_gem\"}"
        },
        "O": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:enderslime\"}"
        },
        "P": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:inanite\"}"
        },
        "Q": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:cloggrum\"}"
        },
        "R": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:utherium\"}"
        },
        "S": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:refined_glowstone\"}"
        },
        "T": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:litherite\"}"
        },
        "U": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:forgotten\"}"
        },
        "V": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:iesnium\"}"
        },
        "W": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:ionite\"}"
        },
        "X": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:xerothium\"}"
        },
        "Y": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:xion\"}"
        },
        "Z": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:regalium\"}"
        },
        "1": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:basalz\"}"
        },
        "2": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:plastic\"}"
        },
        "3": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:vibranium\"}"
        },
        "4": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:dimensional_shard\"}"
        },
        "5": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:blitz\"}"
        },
        "6": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:blizz\"}"
        },
        "7": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:brass\"}"
        },
        "8": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:allthemodium\"}"
        }
      },
      "result": {
        "item": "extendedcrafting:ultimate_singularity"
      }
    }
  ).id('extendedcrafting:ultimate_singularity')

  event.custom (
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDADCBA",
        "BEFFGFFEB",
        "CFHIJIHFC",
        "DFIKLKIFD",
        "AMJLNLJOA",
        "DFPKLKPFD",
        "CFHPJPHFC",
        "BEFFQFFEB",
        "ABCDADCBA"
      ],
      "key": {
        "A": {
          "item": "ars_nouveau:mythical_clay"
        },
        "B": {
          "item": "occultism:iesnium_ingot"
        },
        "C": {
          "item": "occultism:afrit_essence"
        },
        "D": {
          "item": "emendatusenigmatica:arcane_gem"
        },
        "E": {
          "item": "ars_elemental:necrotic_focus"
        },
        "F": {
          "item": "arsarsenal:source_steel_ingot"
        },
        "G": {
          "item": "ars_elemental:fire_focus"
        },
        "H": {
          "item": "extendedcrafting:luminessence"
        },
        "I": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:source_gem\"}"
        },
        "J": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "K": {
          "item": "kubejs:chroma_matter"
        },
        "L": {
          "item": "kubejs:creative_catalyst"
        },
        "M": {
          "item": "ars_elemental:air_focus"
        },
        "N": {
          "item": "ars_nouveau:archmage_spell_book"
        },
        "O": {
          "item": "ars_elemental:water_focus"
        },
        "P": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:spirit_attuned_gem\"}"
        },
        "Q": {
          "item": "ars_elemental:earth_focus"
        }
      },
      "result": {
        "item": "ars_nouveau:creative_spell_book"
      }
    }
  ).id(`${id_prefix}creative_spell_book`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBDBCBE",
        "BFGHIJGFB",
        "CGKLMLKGC",
        "BNLOPOLNB",
        "QRMPSPMTU",
        "BNLOPOLNB",
        "CGKLMLKGC",
        "BFGJVHGFB",
        "WBCBXBCBY"
      ],
      "key": {
        "A": {
          "item": "ars_nouveau:mana_condenser"
        },
        "B": {
          "item": "emendatusenigmatica:arcane_gem"
        },
        "C": {
          "item": "kubejs:creative_catalyst"
        },
        "D": {
          "item": "ars_nouveau:arcane_relay"
        },
        "E": {
          "item": "ars_nouveau:volcanic_accumulator"
        },
        "F": {
          "item": "ars_nouveau:mythical_clay"
        },
        "G": {
          "item": "occultism:iesnium_ingot"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:source_gem\"}"
        },
        "I": {
          "item": "ars_nouveau:potion_jar"
        },
        "J": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:spirit_attuned_gem\"}"
        },
        "K": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "L": {
          "item": "ars_nouveau:purple_archwood_wood"
        },
        "M": {
          "item": "kubejs:chroma_matter"
        },
        "N": {
          "item": "arsarsenal:source_steel_ingot"
        },
        "O": {
          "item": "ars_nouveau:phantom_block"
        },
        "P": {
          "item": "ars_nouveau:warding_stone"
        },
        "Q": {
          "item": "ars_nouveau:relay_deposit"
        },
        "R": {
          "item": "ars_nouveau:timer_spell_turret"
        },
        "S": {
          "item": "ars_nouveau:mana_jar"
        },
        "T": {
          "item": "ars_nouveau:spell_turret"
        },
        "U": {
          "item": "ars_nouveau:relay_warp"
        },
        "V": {
          "item": "ars_nouveau:basic_spell_turret"
        },
        "W": {
          "item": "ars_nouveau:alchemical_sourcelink"
        },
        "X": {
          "item": "ars_nouveau:mycelial_sourcelink"
        },
        "Y": {
          "item": "ars_nouveau:vitalic_sourcelink"
        }
      },
      "result": {
        "item": "ars_nouveau:creative_mana_jar"
      }
    }
  ).id(`${id_prefix}creative_source_jar`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBA",
        "BFGHIHGJB",
        "CGKLMLKGC",
        "NOLPQPLRN",
        "STUVWXYZ1",
        "NOLP2PLRN",
        "CGKL3LKGC",
        "B4G565G7B",
        "ABCD8DCBA"
      ],
      "key": {
        "A": {
          "item": "elementalcraft:swift_alloy_block"
        },
        "B": {
          "item": "elementalcraft:elementpipe_improved"
        },
        "C": {
          "item": "elementalcraft:drenched_iron_block"
        },
        "D": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:swift_alloy\"}"
        },
        "E": {
          "type": "forge:nbt",
          "item": "elementalcraft:reservoir_fire",
          "count": 1,
          "nbt": "{BlockEntityTag:{element_storage:{element_capacity:5000000,element_amount:5000000,element_type:\"fire\"}}}"
        },
        "F": {
          "item": "elementalcraft:firecrystal_block"
        },
        "G": {
          "item": "elementalcraft:whiterock"
        },
        "H": {
          "item": "elementalcraft:pedestal_fire"
        },
        "I": {
          "item": "elementalcraft:crude_fire_gem"
        },
        "J": {
          "item": "elementalcraft:aircrystal_block"
        },
        "K": {
          "item": "elementalcraft:purecrystal"
        },
        "L": {
          "item": "elementalcraft:shrine_upgrade_core"
        },
        "M": {
          "item": "elementalcraft:fine_fire_gem"
        },
        "N": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:fireite\"}"
        },
        "O": {
          "item": "elementalcraft:pedestal_water"
        },
        "P": {
          "item": "kubejs:chroma_matter"
        },
        "Q": {
          "item": "elementalcraft:pristine_fire_gem"
        },
        "R": {
          "item": "elementalcraft:pedestal_air"
        },
        "S": {
          "type": "forge:nbt",
          "item": "elementalcraft:reservoir_water",
          "count": 1,
          "nbt": "{BlockEntityTag:{element_storage:{element_capacity:5000000,element_amount:5000000,element_type:\"water\"}}}"
        },
        "T": {
          "item": "elementalcraft:crude_water_gem"
        },
        "U": {
          "item": "elementalcraft:fine_water_gem"
        },
        "V": {
          "item": "elementalcraft:pristine_water_gem"
        },
        "W": {
          "type": "forge:nbt",
          "item": "elementalcraft:pure_element_holder",
          "count": 1,
          "nbt": "{earth:100000,fire:100000,air:100000,water:100000}"
        },
        "X": {
          "item": "elementalcraft:pristine_air_gem"
        },
        "Y": {
          "item": "elementalcraft:fine_air_gem"
        },
        "Z": {
          "item": "elementalcraft:crude_air_gem"
        },
        "1": {
          "type": "forge:nbt",
          "item": "elementalcraft:reservoir_air",
          "count": 1,
          "nbt": "{BlockEntityTag:{element_storage:{element_capacity:5000000,element_amount:5000000,element_type:\"air\"}}}"
        },
        "2": {
          "item": "elementalcraft:pristine_earth_gem"
        },
        "3": {
          "item": "elementalcraft:fine_earth_gem"
        },
        "4": {
          "item": "elementalcraft:watercrystal_block"
        },
        "5": {
          "item": "elementalcraft:pedestal_earth"
        },
        "6": {
          "item": "elementalcraft:crude_earth_gem"
        },
        "7": {
          "item": "elementalcraft:earthcrystal_block"
        },
        "8": {
          "type": "forge:nbt",
          "item": "elementalcraft:reservoir_earth",
          "count": 1,
          "nbt": "{BlockEntityTag:{element_storage:{element_capacity:5000000,element_amount:5000000,element_type:\"earth\"}}}"
        }
      },
      "result": {
        "item": "elementalcraft:tank_creative"
      }
    }
  ).id(`${id_prefix}creative_element_container`)

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBBBA",
        "BCCDDDCCB",
        "BCEEEEECB",
        "BDEFGFEDB",
        "BDEGHGEDB",
        "BDEFGFEDB",
        "BCEEEEECB",
        "BCCDDDCCB",
        "ABBBBBBBA"
      ],
      "key": {
        "A": {
          "item": "kubejs:chroma_matter"
        },
        "B": {
          "item": "minecraft:dragon_head"
        },
        "C": {
          "item": "resourcefulbees:starry_lexxie_honeycomb_block"
        },
        "D": {
          "item": "resourcefulbees:nitro_honeycomb_block"
        },
        "E": {
          "item": "draconicevolution:dragon_heart"
        },
        "F": {
          "item": "draconicevolution:small_chaos_frag"
        },
        "G": {
          "item": "resourcefulbees:t4_apiary"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:comb\"}"
        }
      },
      "result": {
        "item": "creativeapiary:tcreative_apiary"
      }
    }).id('creativeapiary:tcreative_apiary')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABBBBBBBA",
        "BCCDDDCCB",
        "BCEEEEECB",
        "BDEFGFEDB",
        "BDEGHGEDB",
        "BDEFGFEDB",
        "BCEEEEECB",
        "BCCDDDCCB",
        "ABBBBBBBA"
      ],
      "key": {
        "A": {
          "item": "kubejs:chroma_matter"
        },
        "B": {
          "item": "minecraft:dragon_head"
        },
        "C": {
          "item": "resourcefulbees:starry_lexxie_honeycomb_block"
        },
        "D": {
          "item": "resourcefulbees:nitro_honeycomb_block"
        },
        "E": {
          "item": "draconicevolution:dragon_heart"
        },
        "F": {
          "item": "expandedstorage:netherite_chest"
        },
        "G": {
          "item": "extendedcrafting:nether_star_block"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:comb\"}"
        }
      },
      "result": {
        "item": "creativeapiary:creative_apiary_storage"
      }
    }).id('creativeapiary:creative_apiary_storage')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACDCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "resourcefulbees:unobtainium_honeycomb_block"
        },
        "B": {
          "item": "draconicevolution:awakened_core"
        },
        "C": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:comb\"}"
        },
        "D": {
          "item": "draconicevolution:chaotic_core"
        },
        "E": {
          "item": "ctiers:centrifuge_controller_tier_5"
        }
      },
      "result": {
        "item": "ctiers:centrifuge_controller_tier_creative"
      }
    }).id('ctiers:centrifuge_controller_tier_creative')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AABAA",
        "ACDCA",
        "BDEDB",
        "ACFCA",
        "AABAA"
      ],
      "key": {
        "A": {
          "item": "resourcefulbees:unobtainium_honeycomb_block"
        },
        "B": {
          "item": "draconicevolution:awakened_core"
        },
        "C": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:comb\"}"
        },
        "D": {
          "item": "ctiers:centrifuge_casing_tier_5"
        },
        "E": {
          "item": "draconicevolution:chaotic_core"
        },
        "F": {
          "item": "minecraft:dragon_egg"
        }
      },
      "result": {
        "item": "3x ctiers:centrifuge_casing_tier_creative"
      }
    }).id('ctiers:centrifuge_casing_tier_creative')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AOBCDCBOA",
        "OEFGHGFEO",
        "BFIJKJIFB",
        "CGJLMLJGC",
        "DHKMNMKHD",
        "CGJLMLJGC",
        "BFIJKJIFB",
        "OEFGHGFEO",
        "AOBCDCBOA"
      ],
      "key": {
        "A": {
          "item": "extrastorage:storagepart_16384k"
        },
        "B": {
          "item": "mekanism:qio_drive_supermassive"
        },
        "C": {
          "item": "occultism:storage_stabilizer_tier4"
        },
        "D": {
          "item": "mekanism:ultimate_tier_installer"
        },
        "E": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:quartz_enriched_iron\"}"
        },
        "F": {
          "item": "kubejs:chroma_matter"
        },
        "G": {
          "item": "draconicevolution:awakened_core"
        },
        "H": {
          "item": "kubejs:creative_catalyst"
        },
        "I": {
          "item": "projectexpansion:fading_matter"
        },
        "J": {
          "item": "mekanism:hdpe_sheet"
        },
        "K": {
          "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
        },
        "L": {
          "item": "extrastorage:neural_processor"
        },
        "M": {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        "N": {
          "item": "refinedstorage:storage_housing"
        },
        "O": {
          "item": "extrastorage:neural_processor"
        }
      },
      "result": {
        "item": "refinedstorage:creative_storage_disk"
      }
    }
  ).id('refinedstorage:creative_storage_disk')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "AOBCDCBOA",
        "OEFGHGFEO",
        "BFIJKJIFB",
        "CGJLMLJGC",
        "DHKMNMKHD",
        "CGJLMLJGC",
        "BFIJKJIFB",
        "OEFGHGFEO",
        "AOBCDCBOA"
      ],
      "key": {
        "A": {
          "item": "extrastorage:storagepart_1048576k_fluid"
        },
        "B": {
          "item": "mekanism:qio_drive_supermassive"
        },
        "C": {
          "item": "occultism:storage_stabilizer_tier4"
        },
        "D": {
          "item": "mekanism:ultimate_tier_installer"
        },
        "E": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:quartz_enriched_iron\"}"
        },
        "F": {
          "item": "kubejs:chroma_matter"
        },
        "G": {
          "item": "draconicevolution:awakened_core"
        },
        "H": {
          "item": "kubejs:creative_catalyst"
        },
        "I": {
          "item": "projectexpansion:fading_matter"
        },
        "J": {
          "item": "mekanism:hdpe_sheet"
        },
        "K": {
          "item": "allthemodium:unobtainium_vibranium_alloy_ingot"
        },
        "L": {
          "item": "extrastorage:neural_processor"
        },
        "M": {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        "N": {
          "item": "refinedstorage:storage_housing"
        },
        "O": {
          "item": "extrastorage:neural_processor"
        }
      },
      "result": {
        "item": "refinedstorage:creative_fluid_storage_disk"
      }
    }
  ).id('refinedstorage:creative_fluid_storage_disk')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "DEFED",
        "CFGFC",
        "DEFED",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "refinedstorage:quartz_enriched_iron_block"
        },
        "B": {
          "item": "extrastorage:neural_processor"
        },
        "C": {
          "item": "refinedstorage:crafting_upgrade"
        },
        "D": {
          "item": "refinedstorage:range_upgrade"
        },
        "E": {
          "item": "envirocore:aethium_interconnect"
        },
        "F": {
          "item": "mekanism:ultimate_induction_cell"
        },
        "G": {
          "item": "universalgrid:wireless_universal_grid"
        }
      },
      "result": {
        "item": "universalgrid:creative_wireless_universal_grid"
      }
    }
  ).id('universalgrid:creative_wireless_universal_grid')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBDBCBA",
        "BEFGHGFEB",
        "CGIJBJIGC",
        "BFKLMLKFB",
        "DHNOPONHD",
        "BFKLMLKFB",
        "CGIJBJIGC",
        "BEFGHGFEB",
        "ABCBDBCBA"
      ],
      "key": {
        "A": {
          "item": "thermal:diving_fabric"
        },
        "B": {
          "item": "thermal:enderium_glass"
        },
        "C": {
          "item": "thermal:flux_capacitor"
        },
        "D": {
          "item": "thermal:hazmat_fabric"
        },
        "E": {
          "item": "thermal:rf_coil"
        },
        "F": {
          "item": "thermal:machine_efficiency_augment"
        },
        "G": {
          "item": "thermal:rf_coil_xfer_augment"
        },
        "H": {
          "item": "thermal:redstone_servo"
        },
        "I": {
          "item": "thermal:fluid_cell_frame"
        },
        "J": {
          "item": "thermal:energy_cell_frame"
        },
        "K": {
          "item": "thermal:machine_frame"
        },
        "L": {
          "item": "kubejs:chroma_matter"
        },
        "M": {
          "item": "kubejs:creative_catalyst"
        },
        "N": {
          "item": "thermal:upgrade_augment_3"
        },
        "O": {
          "item": "thermal:rf_potato"
        },
        "P": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "thermal:machine_efficiency_creative_augment"
      }
    }
  ).id('thermal:machine_efficiency_creative_augment')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDFGA",
        "HIJKHKJLH",
        "MJNOPONJQ",
        "DKORRROKD",
        "EHPRSRPHE",
        "DKORRROKD",
        "CJNOPONJQ",
        "HIJKHKJLH",
        "AHMDEDFHA"
      ],
      "key": {
        "A": {
          "item": "kubejs:chroma_matter"
        },
        "B": {
          "type": "forge:nbt",
          "item": "powah:energy_cell_nitro",
          "count": 1,
          "nbt": "{lollipoptile_stack_nbt:{energy_stored_main_energy:10000L}}"
        },
        "C": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:uraninite\"}"
        },
        "D": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "E": {
          "item": "mekanism:supercharged_coil"
        },
        "F": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:nitro\"}"
        },
        "G": {
          "type": "forge:nbt",
          "item": "powah:energy_cell_nitro",
          "count": 1,
          "nbt": "{lollipoptile_stack_nbt:{energy_stored_main_energy:101000L}}"
        },
        "H": {
          "item": "powah:energy_cell_nitro"
        },
        "I": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:spirited\"}"
        },
        "J": {
          "item": "mekanism:pellet_antimatter"
        },
        "K": {
          "item": "wormhole:advanced_energy_cell"
        },
        "L": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:blazing\"}"
        },
        "M": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:niotic\"}"
        },
        "N": {
          "item": "mekanism:ultimate_induction_cell"
        },
        "O": {
          "item": "envirocore:xerothium_interconnect"
        },
        "P": {
          "item": "kubejs:creative_catalyst"
        },
        "Q": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:energized_steel\"}"
        },
        "R": {
          "item": "projectexpansion:purple_matter"
        },
        "S": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "powah:energy_cell_creative"
      }
    }
  ).id('powah:energy_cell_creative')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "         ",
        " A     A ",
        "ABA   ABA",
        "ACA   ACA",
        "ADEFGFEDA",
        "AHIJKJIHA",
        "ALHIIIHLA",
        " AAAAAAA ",
        "         "
      ],
      "key": {
        "A": {
          "item": "botania:livingrock"
        },
        "B": {
          "item": "kubejs:ultimate_rune"
        },
        "C": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:tiny_potato\"}"
        },
        "D": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "E": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:manasteel\"}"
        },
        "F": {
          "item": "botania:fabulous_pool"
        },
        "G": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "H": {
          "item": "kubejs:gaia_spirit_block"
        },
        "I": {
          "item": "projectexpansion:cyan_matter"
        },
        "J": {
          "item": "kubejs:chroma_matter"
        },
        "K": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:terrasteel\"}"
        },
        "L": {
          "item": "kubejs:creative_catalyst"
        }
      },
      "result": {
        "item": "kubejs:empty_creative_pool"
      }
    }
  ).id('kubejs:empty_creative_pool')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCCDCCBA",
        "BEFCCCFEB",
        "CFGHHHGFC",
        "CCHIJIHCC",
        "DCHJKJHCD",
        "CCHIJIHCC",
        "CFGHHHGFC",
        "BEFCCCFEB",
        "ABCCDCCBA"
      ],
      "key": {
        "A": {
          "item": "createaddition:overcharged_alloy"
        },
        "B": {
          "item": "create:precision_mechanism"
        },
        "C": {
          "item": "create:blaze_cake"
        },
        "D": {
          "item": "create:electron_tube"
        },
        "E": {
          "item": "mekanism:superheating_element"
        },
        "F": {
          "item": "createaddition:capacitor"
        },
        "G": {
          "item": "allthemodium:unobtainium_allthemodium_alloy_ingot"
        },
        "H": {
          "item": "create:blaze_burner"
        },
        "I": {
          "item": "tconstruct:blazing_blood_bucket"
        },
        "J": {
          "item": "extendedcrafting:luminessence"
        },
        "K": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:bar_of_chocolate\"}"
        }
      },
      "result": {
        "item": "create:creative_blaze_cake"
      }
    }
  ).id('create:creative_blaze_cake')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCCDCCBA",
        "BEFGHGFEB",
        "CFIJKJIFC",
        "CGJLMLJGC",
        "DHKMNMKHD",
        "CGJLMLJGC",
        "CFIJKJIFC",
        "BEFGHGFEB",
        "ABCCDCCBA"
      ],
      "key": {
        "A": {
          "item": "mekanismgenerators:fusion_reactor_frame"
        },
        "B": {
          "item": "projectexpansion:fading_matter"
        },
        "C": {
          "item": "mekanism:structural_glass"
        },
        "D": {
          "item": "industrialforegoing:supreme_black_hole_tank"
        },
        "E": {
          "item": "kubejs:chroma_matter"
        },
        "F": {
          "item": "extrastorage:disk_1048576k_fluid"
        },
        "G": {
          "item": "mekanism:pellet_plutonium"
        },
        "H": {
          "item": "mekanism:alloy_atomic"
        },
        "I": {
          "item": "mekanism:ultimate_fluid_tank"
        },
        "J": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "K": {
          "item": "kubejs:creative_catalyst"
        },
        "L": {
          "item": "mekanism:pellet_antimatter"
        },
        "M": {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        "N": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "mekanism:creative_fluid_tank"
      }
    }
  ).id('mekanism:creative_fluid_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCCDCCBA",
        "BEFGHGFEB",
        "CFIJKJIFC",
        "CGJLMLJGC",
        "DHKMNMKHD",
        "CGJLMLJGC",
        "CFIJKJIFC",
        "BEFGHGFEB",
        "ABCCDCCBA"
      ],
      "key": {
        "A": {
          "item": "mekanismgenerators:fusion_reactor_frame"
        },
        "B": {
          "item": "projectexpansion:fading_matter"
        },
        "C": {
          "item": "mekanism:structural_glass"
        },
        "D": {
          "item": "mekanism:ultimate_pressurized_tube"
        },
        "E": {
          "item": "mekanism:pellet_polonium"
        },
        "F": {
          "item": "mekanism:ultimate_chemical_tank"
        },
        "G": {
          "item": "mekanism:pellet_plutonium"
        },
        "H": {
          "item": "mekanism:alloy_atomic"
        },
        "I": {
          "item": "kubejs:chroma_matter"
        },
        "J": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "K": {
          "item": "kubejs:creative_catalyst"
        },
        "L": {
          "item": "mekanism:pellet_antimatter"
        },
        "M": {
          "item": "storagedrawers:creative_storage_upgrade"
        },
        "N": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "mekanism:creative_chemical_tank"
      }
    }
  ).id('mekanism:creative_chemical_tank')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDCBA",
        "BEFGFEB",
        "CFHIHFC",
        "JGKLKGJ",
        "CFHIHFC",
        "BEFGFEB",
        "ABCDCBA"
      ],
      "key": {
        "A": {
          "item": "allthemodium:unobtainium_allthemodium_alloy_block"
        },
        "B": {
          "item": "mekanismgenerators:fusion_reactor_frame"
        },
        "C": {
          "item": "mekanism:structural_glass"
        },
        "D": {
          "item": "kubejs:creative_catalyst"
        },
        "E": {
          "item": "extendedcrafting:enhanced_ender_catalyst"
        },
        "F": {
          "item": "refinedstorage:machine_casing"
        },
        "G": {
          "type": "forge:nbt",
          "item": "mekanism:ultimate_energy_cube",
          "count": 1,
          "nbt": "{mekData:{EnergyContainers:[{Container:0b,stored:\"256000000\"}]}}"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:quartz_enriched_iron\"}"
        },
        "I": {
          "item": "kubejs:chroma_matter"
        },
        "J": {
          "item": "extrastorage:storagepart_16384k"
        },
        "K": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "L": {
          "item": "extendedcrafting:ultimate_singularity"
        }
      },
      "result": {
        "item": "refinedstorage:creative_controller"
      }
    }
  ).id('refinedstorage:creative_controller')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCDEDCBF",
        "BGHIJKLGB",
        "CHMNONMLC",
        "DPNQRQNSD",
        "EJTRURTJE",
        "DVNQRQNWD",
        "CXMNONMYC",
        "BGXZJ1YGB",
        "2BCDEDCB3"
      ],
      "key": {
        "A": {
          "item": "extrastorage:storagepart_16384k"
        },
        "B": {
          "item": "extendedcrafting:the_ultimate_catalyst"
        },
        "C": {
          "item": "kubejs:ultimate_honeycomb"
        },
        "D": {
          "item": "allthemodium:unobtainium_vibranium_alloy_block"
        },
        "E": {
          "item": "kubejs:ultimate_rune"
        },
        "F": {
          "item": "extrastorage:storagepart_16384k"
        },
        "G": {
          "item": "extendedcrafting:ultimate_singularity"
        },
        "H": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:chaos_shard\"}"
        },
        "I": {
          "item": "mekanism:creative_chemical_tank"
        },
        "J": {
          "item": "kubejs:chroma_matter"
        },
        "K": {
          "item": "mekanism:creative_fluid_tank"
        },
        "L": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:experience\"}"
        },
        "M": {
          "item": "mekanism:qio_drive_supermassive"
        },
        "N": {
          "item": "extendedcrafting:crystaltine_block"
        },
        "O": {
          "item": "kubejs:uranium_capacitor"
        },
        "P": {
          "item": "create:creative_blaze_cake"
        },
        "Q": {
          "item": "kubejs:creative_catalyst"
        },
        "R": {
          "item": "extendedcrafting:the_ultimate_block"
        },
        "S": {
          "item": "ars_nouveau:creative_mana_jar"
        },
        "T": {
          "item": "kubejs:netherite_transistor"
        },
        "U": {
          "item": "kubejs:endless"
        },
        "V": {
          "item": "tardis:artron_battery_creative"
        },
        "W": {
          "item": "elementalcraft:tank_creative"
        },
        "X": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:red_matter\"}"
        },
        "Y": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:nitro\"}"
        },
        "Z": {
          "item": "botania:creative_pool"
        },
        "1": {
          "item": "thermal:machine_efficiency_creative_augment"
        },
        "2": {
          "item": "extrastorage:storagepart_16384k"
        },
        "3": {
          "item": "extrastorage:storagepart_16384k"
        }
      },
      "result": {
        "item": "storagedrawers:creative_vending_upgrade"
      }
    }
  ).id('storagedrawers:creative_vending_upgrade')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "ABCBA",
        "BDEDB",
        "CEFEC",
        "BDEDB",
        "ABCBA"
      ],
      "key": {
        "A": {
          "item": "refinedstorage:64k_storage_part"
        },
        "B": {
          "item": "storagedrawers:emerald_storage_upgrade"
        },
        "C": {
          "item": "allthemodium:unobtainium_ingot"
        },
        "D": {
          "item": "mekanism:ultimate_control_circuit"
        },
        "E": {
          "item": "kubejs:uranium_capacitor"
        },
        "F": {
          "item": "storagedrawers:upgrade_template"
        }
      },
      "result": {
        "item": "storagedrawers:creative_storage_upgrade",
        "count": 4,
      }
    }
  ).id('storagedrawers:creative_storage_upgrade')

  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "  AABAA  ",
        " AACCCAA ",
        "AADEFGDAA",
        "ACGHIHECA",
        "BCFJKJFCB",
        "ACEHIHGCA",
        "AADGFEDAA",
        " AACCCAA ",
        "  AABAA  "
      ],
      "key": {
        "A": {
          "item": "draconicevolution:chaotic_energy_module"
        },
        "B": {
          "item": "draconicevolution:reactor_stabilizer"
        },
        "C": {
          "item": "draconicevolution:chaotic_energy_core"
        },
        "D": {
          "item": "extendedcrafting:the_ultimate_ingot"
        },
        "E": {
          "item": "kubejs:chroma_matter"
        },
        "F": {
          "item": "projectexpansion:fading_matter"
        },
        "G": {
          "item": "kubejs:creative_catalyst"
        },
        "H": {
          "item": "draconicevolution:chaotic_capacitor"
        },
        "I": {
          "item": "draconicevolution:energy_core"
        },
        "J": {
          "type": "forge:nbt",
          "item": "extendedcrafting:singularity",
          "count": 1,
          "nbt": "{Id:\"extendedcrafting:chaos_shard\"}"
        },
        "K": {
          "item": "draconicevolution:reactor_core"
        }
      },
      "result": {
        "item": "draconicevolution:creative_capacitor"
      }
    }
  ).id('draconicevolution:creative_capacitor')
  //Nuclear Waste Item input
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        "CCACC",
        "CGVGC",
        "AVHVA",
        "CGVGC",
        "CCACC"
      ],
      "key": {
        "C": {
          "item": "pneumaticcraft:compressed_brick_tile"
        },
        "A": {
          "item": "mekanism:alloy_atomic"
        },
        "G": {
          "item": "enderioalloys:item_material_skull_guardian_diode"
        },
        "V": {
          "item": "enderioalloys:item_alloy_ingot_vibrant_alloy"
        },
        "H": {
          "item": "mekanism:qio_drive_hyper_dense"
        }
      },
      "result": {
        "item": "masterfulmachinery:nuclearwaste_nuclearwaste_item_port_items_input"
      }
    }
  ).id(`${id_prefix}nuclearwaste_nuclearwaste_item_port_items_input`)
});
