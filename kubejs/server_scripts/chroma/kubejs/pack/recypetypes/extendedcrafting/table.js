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
        "item": "3x ctiers:centrifuge_casing_tier_3"
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
        " A     A ",
        "ABA   ABA",
        "ACA   ACA",
        "ADAEFGADA",
        "AHAEFGAHA",
        "AIAJKJAIA",
        "ALAGFEALA",
        "AMAGFEAMA",
        " A     A "
      ],
      "key": {
        "A": {
          "item": "enderioalloys:item_alloy_ingot_stellar_alloy"
        },
        "B": {
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "C": {
          "item": "ironjetpacks:elite_coil"
        },
        "D": {
          "item": "enderioalloys:item_material_gear_vibrant"
        },
        "E": {
          "item": "enderioalloys:item_alloy_ingot_melodic_alloy"
        },
        "F": {
          "item": "enderioalloys:item_alloy_ingot_dark_steel"
        },
        "G": {
          "item": "enderioalloys:item_alloy_ingot_end_steel"
        },
        "H": {
          "item": "enderioalloys:item_material_skull_ender_resonator"
        },
        "I": {
          "item": "mekanism:pellet_polonium"
        },
        "J": {
          "item": "mekanism:hdpe_sheet"
        },
        "K": {
          "type": "forge:nbt",
          "item": "ironjetpacks:inanite_jetpack",
          "count": 1,
          "nbt": ""
        },
        "L": {
          "item": "ironjetpacks:stellar_capacitor"
        },
        "M": {
          "item": "ironjetpacks:stellar_thruster"
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
        "BCBCB",
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
          "item": "extendedcrafting:crystaltine_ingot"
        },
        "D": {
          "item": "enderioalloys:item_alloy_ingot_melodic_alloy"
        },
        "E": {
          "item": "mekanism:ultimate_induction_provider"
        },
        "F": {
          "item": "enderioalloys:item_alloy_ingot_end_steel"
        },
        "G": {
          "item": "mekanism:ultimate_induction_cell"
        }
      },
      "result": {
        "item": 'ironjetpacks:stellar_capacitor'
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
          "item": "mekanism:ultimate_energy_cube"
        },
        "C": {
          "item": "mekanism:ultimate_induction_provider"
        },
        "D": {
          "item": "mekanism:pellet_polonium"
        },
        "E": {
          "item": "mekanism:superheating_element"
        },
        "F": {
          "item": "mekanismgenerators:heat_generator"
        }
      },
      "result": {
        "item": 'ironjetpacks:stellar_thruster'
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
});
