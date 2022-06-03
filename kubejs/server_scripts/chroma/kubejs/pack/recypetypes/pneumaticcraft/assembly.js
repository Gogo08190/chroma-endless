onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/pneumaticcraft/assembly/';

    /*{
        input: { item: '', count: nb },
        output: { item: '', count: nb },
        program: '', (drill ou laser)
        id: ``
    }*/

    const recipes = [

    ];

    recipes.forEach((recipe) => {
        recipe.input.type = 'pneumaticcraft:stacked_item';
        event
            .custom({
                type: `pneumaticcraft:assembly_${recipe.program}`,
                input: recipe.input,
                result: recipe.output,
                program: recipe.program
            })
            .id(recipe.id);
    });
});
