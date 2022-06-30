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
});
