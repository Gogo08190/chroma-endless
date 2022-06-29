onEvent("recipes", (event) => {
  event.custom(
    {
      "type": "extendedcrafting:shaped_table",
      "pattern": [
        " A     ",
        "  A  AA",
        "AAAAA  ",
        "A      ",
        "AA     ",
        "  AA AA",
        "    AA "
      ],
      "key": {
        "A": {
          "item": "kubejs:inert_luminessence"
        }
      },
      "result": {
        "item": ""
      }
    }
  ).id('recipeID')
});
