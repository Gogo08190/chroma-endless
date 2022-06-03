onEvent('recipes', (event) => {
  const id_prefix = 'chroma:pack/botania/mana_infusion/';
  /*{
      input: '',
      output: '',
      count: 1,
      mana: 10,
      catalyst: '' Bloc en dessous de la mana pool non obligatoire,
      id: ''
  }*/
  const recipes = [

  ];
  recipes.forEach((recipe) => {
        let constructed_recipe = {
            type: 'botania:mana_infusion',
            input: Ingredient.of(recipe.input).toJson(),
            output: { item: recipe.output, count: recipe.count },
            mana: recipe.mana
        };

        if (recipe.catalyst) {
            constructed_recipe.catalyst = {
                type: 'block',
                block: recipe.catalyst
            };
        }

        const re = event.custom(constructed_recipe);

        if (recipe.id) {
            re.id(recipe.id);
        } else {
            fallback_id(re, id_prefix);
        }
    });
});
