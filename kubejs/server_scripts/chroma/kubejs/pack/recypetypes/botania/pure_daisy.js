onEvent('recipes', (event) => {
    /*{
        input: '',
        output: '',
        id: ''
    }*/

    const recipes = [
      {
        input: 'occultism:otherstone',
        output: 'botania:livingrock',
        id: 'botania:pure_daisy/livingrock'
      }

    ];

    recipes.forEach((recipe) => {
        let ingredient =
            recipe.input.charAt(0) == '#'
                ? { type: 'tag', tag: recipe.input.slice(1) }
                : { type: 'block', block: recipe.input };

        const re = event.custom({
            type: 'botania:pure_daisy',
            input: ingredient,
            output: { name: recipe.output }
        });
        if (recipe.id) {
            re.id(recipe.id);
        }
    });
});
