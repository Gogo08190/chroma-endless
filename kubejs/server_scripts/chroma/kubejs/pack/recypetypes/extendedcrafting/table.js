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
});
