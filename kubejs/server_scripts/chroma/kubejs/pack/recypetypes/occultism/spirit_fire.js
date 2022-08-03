/*
{
  ingredient: {
    "occultism:chalk_gold_impure"
  },
  result: {
    "occultism:chalk_gold"
  }
}
*/
onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/occultism/spirit_fire/';
    const recipes = [
      {
        ingredient: {
          'ironjetpacks:mechanical_cell'
        },
        result: {
          'ironjetpacks:otherworldian_cell'
        },
        id: `${id_prefix}otherworldian_cell`
      }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'occultism:spirit_fire';
        recipe.ingredients = recipe.ingredients.map((input) => Ingredient.of(input).toJson());
        recipe.result = Item.of(recipe.result).toJson();

        event.custom(recipe).id(recipe.id);
    });
});
