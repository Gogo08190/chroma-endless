onEvent('recipes', (event) => {
    const id_prefix = 'chroma:base/create/compacting/';

    const recipes = [
        {
            inputs: [
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                '#forge:dusts/wood',
                { fluidTag: 'minecraft:water', amount: 250 }
            ],
            output: Item.of('minecraft:paper', 6),
            type: 'unheated',
            id: `${id_prefix}paper`
        },
        {
            inputs: [Fluid.of('immersiveengineering:concrete', 500)],
            output: 'immersiveengineering:slab_concrete',
            type: 'unheated',
            id: `${id_prefix}slab_concrete`
        },
        {
            inputs: [Fluid.of('immersiveengineering:concrete', 1000)],
            output: 'immersiveengineering:concrete',
            type: 'unheated',
            id: `${id_prefix}concrete`
        },
        {
            inputs: ['minecraft:vine'],
            output: Fluid.of('industrialforegoing:latex', 50),
            type: 'heated',
            id: `${id_prefix}latex_from_vine`
        },
        {
            inputs: ['minecraft:dandelion'],
            output: Fluid.of('industrialforegoing:latex', 50),
            type: 'heated',
            id: `${id_prefix}latex_from_dandelion`
        }
    ];

    honeyVarieties.forEach((honeyVariety) => {
        if (honeyVariety == 'resourcefulbees:honey') {
            return;
        }

        recipes.push({
            inputs: [Fluid.of(honeyVariety, 1000)],
            output: Item.of(honeyVariety + '_block'),
            type: 'unheated',
            id: `${id_prefix}${honeyVariety.split(':')[1]}`
        });
    });

    recipes.forEach((recipe) => {
        const re = event.recipes.create.compacting(recipe.output, recipe.inputs).id(recipe.id);
        if (recipe.type == 'heated') {
            re.heated();
        }
        if (recipe.type == 'superheated') {
            re.superheated();
        }
    });
});
