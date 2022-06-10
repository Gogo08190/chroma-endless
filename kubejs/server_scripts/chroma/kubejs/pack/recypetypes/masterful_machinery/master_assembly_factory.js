onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/master_assembly_factory/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_helmet', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_helmet', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 60,
            id: 'pneumaticcraft:pneumatic_helmet'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'master_assembly';
        recipe.controllerId = 'assemblylaser';
        event.custom(recipe).id(recipe.id);
    });
});
