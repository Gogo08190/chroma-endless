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
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_helmet'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_chestplate', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 7 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_chestplate', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_chestplate'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_boots', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_boots', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_boots'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_leggings', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_leggings', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_leggings'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 2 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:unassembled_pcb', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:transistor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_ingot', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: `${id_prefix}printed_circuit_board`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_frame', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:transistor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
                { type: 'masterfulmachinery:items', data: { item: 'thermal:redstone_servo', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:invar_plate', count: 3 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'rftoolsbase:machine_frame'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'rftoolspower:power_core3', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_base', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'undergarden:regalium_ingot', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'rftoolspower:power_core3'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'refinedstorage:crafting_grid', count: 1 } }],
            inputs: [
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:advanced_processor', count: 1 } },
                { type: 'masterfulmachinery:items', data: { item: 'refinedstorage:grid', count: 4 } },
                { type: 'masterfulmachinery:items', data: { item: 'create:mechanical_crafter', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 4 } }
            ],
            ticks: 240,
            id: 'refinedstorage:crafting_grid'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'master_assembly';
        recipe.controllerId = 'assemblylaser';
        event.custom(recipe).id(recipe.id);
    });
});
