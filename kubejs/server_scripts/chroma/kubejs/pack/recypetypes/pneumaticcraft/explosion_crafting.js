onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    /*{
        input: item ,
        output: item,
        poucentage_lost: ,
        id: ``
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        event
            .custom({
                type: `pneumaticcraft:explosion_crafting`,
                pourcentage_lost: recipe.pourcentage_lost,
                input: recipe.input,
                output: recipe.output,
            })
            .id(recipe.id);
    });
});
