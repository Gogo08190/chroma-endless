onEvent('recipes', (event) => {
  const id_prefix = 'chroma:base/botania/mana_infusion/';
  const recipes = [
    /*{
      input: "minecraft:diamond",
      output: "botania:mana_diamond"
      mana: 10000
      id:'botania:mana_infusion/mana_diamond'
      catalyst : ''
    }*/
  ];
  recipes.forEach((recipe) => {
      recipe.type = 'botania:mana_infusion';
      recipe.input_item = Ingredient.of(recipe.input).toJson();
      recipe.output_item = Ingredient.of(recipe.output).toJson();
      recipe.mana_cost = Ingredient.of(recipe.mana).toJson();
      recipe.catalyst = Ingredient.of(recipe.catalyst).toJson();


      event.custom(recipe).id(recipe.id);
  });
});
