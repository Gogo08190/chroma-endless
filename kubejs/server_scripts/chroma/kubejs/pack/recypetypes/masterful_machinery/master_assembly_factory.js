onEvent('recipes', (event) => {
    const id_prefix = 'chroma:pack/masterful_machinery/master_assembly_factory/';
    const recipes = [
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_helmet', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 7 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_helmet', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_helmet'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_chestplate', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 7 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_chestplate', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_chestplate'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_boots', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 4 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_boots', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_boots'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:pneumatic_leggings', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:air_canister', count: 4 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_leggings', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'pneumaticcraft:pneumatic_leggings'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:printed_circuit_board', count: 2 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:unassembled_pcb', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:transistor', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_ingot', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: `${id_prefix}printed_circuit_board`
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_frame', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_base', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:transistor', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:redstone_servo', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'emendatusenigmatica:invar_plate', count: 3 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'rftoolsbase:machine_frame'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'rftoolspower:power_core3', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'rftoolsbase:machine_base', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'undergarden:regalium_ingot', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'rftoolspower:power_core3'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'refinedstorage:crafting_grid', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:advanced_processor', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:grid', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'create:mechanical_crafter', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id: 'refinedstorage:crafting_grid/crafting_grid'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern_grid', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:advanced_processor', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:grid', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:pattern', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'refinedstorage:pattern_grid/pattern_grid'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'refinedstorage:fluid_grid', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:advanced_processor', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'refinedstorage:grid', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:small_tank', count: 4 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'refinedstorage:fluid_grid/fluid_grid'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:basic_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'minecraft:iron_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:basic_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:advanced_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'minecraft:gold_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:advanced_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:elite_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'minecraft:diamond', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:elite_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ultimate_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'minecraft:emerald', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:ultimate_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:redstone_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:redstone_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:ender_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:ender_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:enhanced_ender_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:enhanced_ender_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:crystaltine_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:crystaltine_component'
        },
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_component', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:black_iron_slate', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:luminessence', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'extendedcrafting:the_ultimate_ingot', count: 2 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2500 } }
            ],
            ticks: 240,
            id:  'extendedcrafting:the_ultimate_component'
        },

        //Energized Smelter
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'mekanism:energized_smelter', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:machine_furnace', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:extreme_circuit_board', count: 1 } },
              { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 8 } },
              { type: 'masterfulmachinery:energy', data: { amount: 1600} }
            ],
            ticks: 240,
            id: 'mekanism:energized_smelter'
        },

        //Crusher
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'mekanism:crusher', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:machine_pulverizer', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:extreme_circuit_board', count: 1 } },
              { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 8 } },
              { type: 'masterfulmachinery:energy', data: { amount: 1600} }
            ],
            ticks: 240,
            id: 'mekanism:crusher'
        },

        //Combiner
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'mekanism:combiner', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:machine_press', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:extreme_circuit_board', count: 1 } },
              { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 8 } },
              { type: 'masterfulmachinery:energy', data: { amount: 1200} }
            ],
            ticks: 240,
            id: 'mekanism:combiner'
        },

        //Metallurgic Infuser
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'mekanism:metallurgic_infuser', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:machine_smelter', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:extreme_circuit_board', count: 1 } },
              { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 8 } },
              { type: 'masterfulmachinery:energy', data: { amount: 2400} }
            ],
            ticks: 240,
            id: 'mekanism:metallurgic_infuser'
        },

        //Precision Sawmill
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'mekanism:precision_sawmill', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:capacitor', count: 2 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 4 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'thermal:machine_sawmill', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:extreme_circuit_board', count: 1 } },
              { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 300 * 8 } },
              { type: 'masterfulmachinery:energy', data: { amount: 800} }
            ],
            ticks: 240,
            id: 'mekanism:precision_sawmill'
        },

        // Litherite Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items',data: { item: 'enviroenergy:litherite_solar_cell', count: 1 } }],
            inputs: [
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:litherite_photovoltaic_panel', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
              { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:solar_cell_base', count: 1 } },
              { type: 'masterfulmachinery:energy', data: { amount: 1000} }
            ],
            ticks: 100,
            id: 'enviroenergy:block/solar_cell/ct_litherite'
        },

        // Erodium Solar Cell
         {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:erodium_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:erodium_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:litherite_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 2000 } }
            ],
            ticks: 120,
            id: 'enviroenergy:block/solar_cell/ct_erodium'
        },

        // Kyronite Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:kyronite_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:kyronite_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:erodium_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_kyronite'
        },

        // Pladium Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:pladium_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:pladium_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:kyronite_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_pladium'
        },

        // Ionite Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:ionite_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:ionite_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:pladium_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_ionite'
        },

        // Aethium Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:aethium_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:aethium_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:ionite_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_aethium'
        },

        // Nanorite Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:nanorite_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:nanorite_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:aethium_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_nanorite'
        },

        // Nanorite Solar Cell
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'enviroenergy:xerothium_solar_cell', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:xerothium_photovoltaic_panel', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:advanced_extreme_circuit_board', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'enviroenergy:nanorite_solar_cell', count: 1 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'enviroenergy:block/solar_cell/ct_xerothium'
        },

        // Solar Generator
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:advanced_solar_generator', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanismgenerators:solar_generator', count: 4 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:alloy_infused', count: 2 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:ingot_iron_compressed', count: 3 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:steel_casing', count: 1 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 400 } },
                { type: 'masterfulmachinery:energy', data: { amount: 3000 } }
            ],
            ticks: 140,
            id: 'mekanismgenerators:generator/advanced_solar'
        },

        // Creative Heat
        {
            outputs: [{ type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:creative_compressed_iron_block', count: 1 } }],
            inputs: [
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'mekanism:superheating_element', count: 64 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:compressed_iron_block', count: 1 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:creative_catalyst', count: 4 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'kubejs:chroma_matter', count: 4 } },
                { consumeInstantly: true, type: 'masterfulmachinery:items', data: { item: 'pneumaticcraft:advanced_pcb', count: 32 } },
                { type: 'masterfulmachinery:pncr_pressure', perTick: true, data: { air: 1100 } },
                { type: 'masterfulmachinery:energy', data: { amount: 12000 } }
            ],
            ticks: 140,
            id: 'pneumaticcraft:creative_compressed_iron_block'
        }
    ];

    recipes.forEach((recipe) => {
        recipe.type = 'masterfulmachinery:machine_process';
        recipe.structureId = 'master_assembly';
        recipe.controllerId = 'assemblylaser';
        event.custom(recipe).id(recipe.id);
    });
});
