onEvent('recipes', (event) => {
    const id_prefex = 'chroma:pack/';
    const recipes = [

        //Enrichment Chamber
        {
          output: 'mekanism:enrichment_chamber',
          pattern: ['IMI','CSC','IEI'],
          key: {
            E: 'kubejs:extreme_circuit_board',
            I: 'pneumaticcraft:ingot_iron_compressed',
            C: 'pneumaticcraft:capacitor',
            S: 'mekanism:steel_casing',
            M: 'mekanism:metallurgic_infuser'
          },
          id: 'mekanism:enrichment_chamber'
        },
        //Osmium Compressor
        {
          output: 'mekanism:osmium_compressor',
          pattern: ['IMI','CSC','IEI'],
          key: {
            E: 'kubejs:extreme_circuit_board',
            I: 'pneumaticcraft:ingot_iron_compressed',
            C: 'pneumaticcraft:capacitor',
            S: 'mekanism:steel_casing',
            M: Item.of('mekanism:basic_chemical_tank').weakNBT()
          },
          id: 'mekanism:osmium_compressor'
        },
        //Basic Tier installer
        {
          output: 'mekanism:basic_tier_installer',
          pattern: ['RBR','CTC','RBR'],
          key: {
            B: 'mekanism:basic_control_circuit',
            T: 'immersiveengineering:treated_wood_horizontal',
            C: 'pneumaticcraft:ingot_iron_compressed',
            R: 'extendedcrafting:redstone_ingot_block'
          },
          id: 'mekanism:tier_installer/basic'
        },
        //Advanced Tier Installer
        {
          output: 'mekanism:advanced_tier_installer',
          pattern: ['CAC','EBE','CAC'],
          key: {
            C: 'enderioalloys:block_alloy_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            B: 'mekanism:basic_tier_installer'
          },
          id: 'mekanism:tier_installer/advanced'
        },
        //Basic Chemical Tank
        {
          output: 'mekanism:basic_chemical_tank',
          pattern: ['RIR','IGI','RIR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'occultism:iesnium_ingot',
            G: 'pneumaticcraft:gas_lift'
          },
          id: 'mekanism:chemical_tank/basic'
        },
        //Advanced Chemical Tank
        {
          output: 'mekanism:advanced_chemical_tank',
          pattern: ['ACA','CBC','ACA'],
          key: {
            B: Item.of('mekanism:basic_chemical_tank').weakNBT(),
            A: 'mekanism:alloy_infused',
            C: 'pneumaticcraft:ingot_iron_compressed'
          },
          id: 'mekanism:chemical_tank/advanced'
        },
        //Elite Chemical Tank
        {
          output: 'mekanism:elite_chemical_tank',
          pattern: ['RER','EAE','RER'],
          key: {
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            R: 'mekanism:alloy_reinforced',
            A: Item.of('mekanism:advanced_chemical_tank').weakNBT()
          },
          id: 'mekanism:chemical_tank/elite'
        },
        //Ultimate Chemical Tank
        {
          output: 'mekanism:ultimate_chemical_tank',
          pattern: ['ANA','NEN','ANA'],
          key: {
            A: 'mekanism:alloy_atomic',
            N: 'createdeco:netherite_sheet',
            E: Item.of('mekanism:elite_chemical_tank').weakNBT()
          },
          id: 'mekanism:chemical_tank/ultimate'
        },
        //Basic Fluid Tank
        {
          output: 'mekanism:basic_fluid_tank',
          pattern: ['RIR','ITI','RIR'],
          key: {
            I: 'occultism:iesnium_ingot',
            R: 'extendedcrafting:redstone_ingot',
            T: 'pneumaticcraft:small_tank'
          },
          id: 'mekanism:fluid_tank/basic'
        },
        //Advanced Fluid Tank
        {
          output: 'mekanism:advanced_fluid_tank',
          pattern: ['ACA','CBC','ACA'],
          key: {
            A: 'mekanism:alloy_infused',
            C: 'pneumaticcraft:ingot_iron_compressed',
            B: Item.of('mekanism:basic_fluid_tank').weakNBT()
          },
          id: 'mekanism:fluid_tank/advanced'
        },
        //Elite Fluid Tank
        {
          output: 'mekanism:elite_fluid_tank',
          pattern: ['RER','EAE','RER'],
          key: {
            R: 'mekanism:alloy_reinforced',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            A: Item.of('mekanism:advanced_fluid_tank').weakNBT()
          },
          id: 'mekanism:fluid_tank/elite'
        },
        //Ultmate Fluid Tank
        {
          output: 'mekanism:ultimate_fluid_tank',
          pattern: ['ANA','NEN','ANA'],
          key: {
            A: 'mekanism:alloy_atomic',
            N: 'createdeco:netherite_sheet',
            E: Item.of('mekanism:elite_fluid_tank').weakNBT()
          },
          id: 'mekanism:fluid_tank/ultimate'
        },
        //Basic Smelting Factory
        {
          output: 'mekanism:basic_smelting_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:energized_smelter'
          },
          id: 'mekanism:factory/basic/smelting'
        },
        //Basic Enriching Factory
        {
          output: 'mekanism:basic_enriching_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:enrichment_chamber'
          },
          id: 'mekanism:factory/basic/enriching'
        },
        //Basic Crushing Factory
        {
          output: 'mekanism:basic_crushing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:crusher'
          },
          id: 'mekanism:factory/basic/crushing'
        },
        //Basic Compressing Factory
        {
          output: 'mekanism:basic_compressing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:osmium_compressor'
          },
          id: 'mekanism:factory/basic/compressing'
        },
        //Basic Combining Factory
        {
          output: 'mekanism:basic_combining_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:combiner'
          },
          id: 'mekanism:factory/basic/combining'
        },
        //Basic Infusing Factory
        {
          output: 'mekanism:basic_infusing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:metallurgic_infuser'
          },
          id: 'mekanism:factory/basic/infusing'
        },
        //Basic Sawing Factory
        {
          output: 'mekanism:basic_sawing_factory',
          pattern: ['RBR','IMI','RBR'],
          key: {
            R: 'extendedcrafting:redstone_ingot',
            I: 'pneumaticcraft:ingot_iron_compressed',
            B: 'mekanism:basic_control_circuit',
            M: 'mekanism:precision_sawmill'
          },
          id: 'mekanism:factory/basic/sawing'
        },
        //Advanced Smelting Factory
        {
          output: 'mekanism:advanced_smelting_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_smelting_factory'
          },
          id: 'mekanism:factory/advanced/smelting'
        },
        //Advanced Enriching Factory
        {
          output: 'mekanism:advanced_enriching_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_enriching_factory'
          },
          id: 'mekanism:factory/advanced/enriching'
        },
        //Advanced Crushing Factory
        {
          output: 'mekanism:advanced_crushing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_crushing_factory'
          },
          id: 'mekanism:factory/advanced/crushing'
        },
        //Advanced Compressing Factory
        {
          output: 'mekanism:advanced_compressing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_compressing_factory'
          },
          id: 'mekanism:factory/advanced/compressing'
        },
        //Advanced Combining Factory
        {
          output: 'mekanism:advanced_combining_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_combining_factory'
          },
          id: 'mekanism:factory/advanced/combining'
        },
        //Advanced Infusing Factory
        {
          output: 'mekanism:advanced_infusing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_infusing_factory'
          },
          id: 'mekanism:factory/advanced/infusing'
        },
        //Advanced Sawing Factory
        {
          output: 'mekanism:advanced_sawing_factory',
          pattern: ['CAC','EME','CAC'],
          key:{
            C: 'enderioalloys:item_alloy_ingot_conductive_iron',
            A: 'mekanism:advanced_control_circuit',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            M: 'mekanism:basic_sawing_factory'
          },
          id: 'mekanism:factory/advanced/sawing'
        },
        //Module base
        {
          output: Item.of('mekanism:module_base', 2 ),
          pattern: ['RER','EHE','RER'],
          key:{
            R: 'undergarden:regalium_nugget',
            E: 'enderioalloys:item_alloy_ingot_energetic_silver',
            H: 'mekanism:hdpe_sheet'
          },
          id: 'mekanism:module_base'
        },
        //Hazmat mask
        {
          output: Item.of('mekanism:hazmat_mask', '{HideFlags:2}'),
          pattern: ['LLL','LOL'],
          key:{
            L: '#forge:ingots/lead',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_mask'
        },
        //Hazmat Gown
        {
          output: Item.of('mekanism:hazmat_gown', '{HideFlags:2}'),
          pattern: ['LOL','LLL','LLL'],
          key:{
            L: '#forge:ingots/lead',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_gown'
        },
        //Hazmat pants
        {
          output: Item.of('mekanism:hazmat_pants', '{HideFlags:2}'),
          pattern: ['LLL','LOL','L L'],
          key:{
            L: '#forge:ingots/lead',
            O: 'botania:orange_petal'
          },
          id: 'mekanism:hazmat_pants'
        },
        //Hazmat Boots
        {
          output: Item.of('mekanism:hazmat_boots', '{HideFlags:2}'),
          pattern: ['L L','LBL'],
          key:{
            L: '#forge:ingots/lead',
            B: 'botania:black_petal'
          },
          id: 'mekanism:hazmat_boots'
        },
        //Energy Tablet
        {
          output: 'mekanism:energy_tablet',
          pattern: ['ARA','IRI','ARA'],
          key:{
            A: 'enderioalloys:item_alloy_ingot_redstone_alloy',
            R: 'undergarden:regalium_ingot',
            I: 'mekanism:alloy_infused'
          },
          id: 'mekanism:energy_tablet'
        },
        //Robit
        {
          output: 'mekanism:robit',
          pattern: ['DSD','EAE','RPR'],
          key:{
            D: 'kubejs:sac',
            S: '#forge:ingots/steel',
            E: 'mekanism:energy_tablet',
            A: 'mekanism:alloy_atomic',
            R: 'mekanism:ingot_refined_obsidian',
            P: 'mekanism:personal_chest'
          },
          id: 'mekanism:robit'
        },
        //Basic Mechanical Pipe
        {
          output: Item.of('mekanism:basic_mechanical_pipe', 8),
          pattern: ['EBE'],
          key:{
            E: 'enderioalloys:item_alloy_ingot_electrical_steel',
            B: 'minecraft:bucket'
          },
          id: 'mekanism:transmitter/mechanical_pipe/basic'
        },
        // Fission reactor logic adapter
        {
          output: 'mekanismgenerators:fission_reactor_logic_adapter',
          pattern: [' B ','BEB',' B '],
          key:{
            E: 'mekanismgenerators:fission_reactor_casing',
            B: 'extendedcrafting:redstone_ingot'
          },
          id: 'mekanismgenerators:fission_reactor/logic_adapter'
        },
        // Turbine vent
        {
          output: Item.of('mekanismgenerators:turbine_vent', 2 ),
          pattern: [' E ','EBE',' E '],
          key:{
            E: 'mekanismgenerators:turbine_casing',
            B: 'dustrial_decor:barbed_iron_bars'
          },
          id: 'mekanismgenerators:turbine/vent'
        },
        // Fuelwood heater
        {
          output: 'mekanism:fuelwood_heater',
          pattern: ['CBC','FSF','CCC'],
          key:{
              C:'pneumaticcraft:ingot_iron_compressed',
              B:'mekanism:basic_control_circuit',
              F:'minecraft:furnace',
              S:'mekanism:steel_casing'
          },
          id: 'mekanism:fuelwood_heater'
        },
        // Isotropic Centrifuge
        {
          output: 'mekanism:isotopic_centrifuge',
          pattern: ['SSS','UCU','SSS'],
          key:{
              S:'enderioalloys:item_alloy_ingot_electrical_steel',
              U:'mekanism:ultimate_control_circuit',
              C:Item.of('mekanism:basic_chemical_tank').weakNBT()
          },
          id: 'mekanism:isotopic_centrifuge'
        },
        // Superheating element
        {
          output: 'mekanism:superheating_element',
          pattern: ['RCR','CSC','RCR'],
          key:{
              R:'bigreactors:ridiculite_ingot',
              C:'#forge:ingots/copper',
              S:'mekanism:steel_casing'
          },
          id: 'mekanism:superheating_element'
        },
        // Basic presurized tube
        {
          output: Item.of('mekanism:basic_pressurized_tube', 8),
          pattern: ['ERE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              R:'bigreactors:basic_reactorglass'
          },
          id: 'mekanism:transmitter/pressurized_tube/basic'
        },
        // Basic logistical transporter
        {
          output: Item.of('mekanism:basic_logistical_transporter', 8),
          pattern: ['ERE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              R:'mekanism:basic_control_circuit'
          },
          id: 'mekanism:transmitter/logistical_transporter/basic'
        },
        // Basic thermodynamic conductor
        {
          output: Item.of('mekanism:basic_thermodynamic_conductor', 8),
          pattern: ['ERE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              R:'#forge:ingots/copper'
          },
          id: 'mekanism:transmitter/thermodynamic_conductor/basic'
        },
        // Basic universal cable
        {
          output: Item.of('mekanism:basic_universal_cable', 8),
          pattern: ['ERE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'mekanism:transmitter/universal_cable/basic'
        },
        // Basic energy cube
        {
          output: 'mekanism:basic_energy_cube',
          pattern: ['RER','CSC','RER'],
          key:{
              R:'extendedcrafting:redstone_ingot',
              E:'mekanism:energy_tablet',
              C:'enderioalloys:item_alloy_ingot_crude_steel',
              S:'mekanism:steel_casing'
          },
          id: 'mekanism:energy_cube/basic'
        },
        // Advanced energy cube
        {
          output: 'mekanism:advanced_energy_cube',
          pattern: ['RER','CSC','RER'],
          key:{
              R:'#mekanism:alloys/infused',
              E:'mekanism:energy_tablet',
              C:'enderioalloys:item_alloy_ingot_energetic_silver',
              S:Item.of('mekanism:basic_energy_cube').ignoreNBT()
          },
          id: 'mekanism:energy_cube/advanced'
        },
        // Elite energy cube
        {
          output: 'mekanism:elite_energy_cube',
          pattern: ['RER','CSC','RER'],
          key:{
              R:'#mekanism:alloys/reinforced',
              E:'mekanism:energy_tablet',
              C:'#forge:ingots/lumium',
              S:Item.of('mekanism:advanced_energy_cube').ignoreNBT()
          },
          id: 'mekanism:energy_cube/elite'
        },
        // Ultimate energy cube
        {
          output: 'mekanism:ultimate_energy_cube',
          pattern: ['RER','CSC','RER'],
          key:{
              R:'#mekanism:alloys/atomic',
              E:'mekanism:energy_tablet',
              C:'botania:mana_diamond',
              S:Item.of('mekanism:elite_energy_cube').ignoreNBT()
          },
          id: 'mekanism:energy_cube/ultimate'
        },
        // Dynamic tank
        {
          output: Item.of('mekanism:dynamic_tank', 4),
          pattern: [' D ','DBD',' D '],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              B:'minecraft:bucket'
          },
          id: 'mekanism:dynamic_tank'
        },
        // Structural glass
        {
          output: 'mekanism:structural_glass',
          pattern: [' D ','DBD',' D '],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              B:'#forge:glass'
          },
          id: 'mekanism:structural_glass'
        },
        // Electrolytic core
        {
          output: 'mekanism:electrolytic_core',
          pattern: ['AOA','SAE','AOA'],
          key:{
              A:'#mekanism:alloys/infused',
              O:'#forge:dusts/osmium',
              S:'#forge:dusts/steel',
              E:'#forge:dusts/electrum'
          },
          id: 'mekanism:electrolytic_core'
        },
        // Teleportation core
        {
          output: 'mekanism:teleportation_core',
          pattern: ['LAL','EME','LAL'],
          key:{
              L:'emendatusenigmatica:lapis_plate',
              A:'#mekanism:alloys/atomic',
              E:'emendatusenigmatica:electrum_ingot',
              M:'botania:mana_diamond'
          },
          id: 'mekanism:teleportation_core'
        },
        // Security desk
        {
          output: 'mekanism:security_desk',
          pattern: ['EME','CSC','ETE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              M:'botania:mana_glass',
              C:'mekanism:elite_control_circuit',
              S:'mekanism:steel_casing',
              T:'mekanism:teleportation_core'
          },
          id: 'mekanism:security_desk'
        },
        // Electric pump
        {
          output: 'mekanism:electric_pump',
          pattern: [' T ','ASA','VVV'],
          key:{
              T:'create:fluid_tank',
              A:'#mekanism:alloys/infused',
              S:'mekanism:steel_casing',
              V:'enderioalloys:item_alloy_ingot_vivid_alloy'
          },
          id: 'mekanism:electric_pump'
        },
        // Fluidic plenisher
        {
          output: 'mekanism:fluidic_plenisher',
          pattern: ['CCC','BEB','CCC'],
          key:{
              C:'enderioalloys:item_alloy_ingot_crude_steel',
              B:'mekanism:basic_control_circuit',
              E:'mekanism:electric_pump'
          },
          id: 'mekanism:fluidic_plenisher'
        },
        // Logistical sorter
        {
          output: 'mekanism:logistical_sorter',
          pattern: ['CPC','CUC','CCC'],
          key:{
              C:'mekanism:ultimate_logistical_transporter',
              P:'minecraft:piston',
              U:'mekanism:ultimate_control_circuit'
          },
          id: 'mekanism:logistical_sorter'
        },
        // Fission fuel assembly
        {
          output: 'mekanismgenerators:fission_fuel_assembly',
          pattern: ['EDE','EUE','EDE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              U:Item.of('mekanism:ultimate_chemical_tank').weakNBT()
          },
          id: 'mekanismgenerators:fission_reactor/fuel_assembly'
        },
        // Control fuel assembly
        {
          output: 'mekanismgenerators:control_rod_assembly',
          pattern: ['DUD','EDE','EDE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              U:'#forge:circuits/elite'
          },
          id: 'mekanismgenerators:fission_reactor/control_rod_assembly'
        },
        // Saturating condenser
        {
          output: 'mekanismgenerators:saturating_condenser',
          pattern: ['DED','EUE','DED'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              U:'create:fluid_tank'
          },
          id: 'mekanismgenerators:saturating_condenser'
        },
        // Turbine rotor
        {
          output: 'mekanismgenerators:turbine_rotor',
          pattern: ['DUD','DUD','DUD'],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              U:'#mekanism:alloys/infused'
          },
          id: 'mekanismgenerators:turbine/rotor'
        },
        // Laser
        {
          output: 'mekanism:laser',
          pattern: ['UE ','USD','UE '],
          key:{
              U:'#mekanism:alloys/atomic',
              E:'mekanism:energy_tablet',
              S:'mekanism:steel_casing',
              D:'botania:dragonstone'

          },
          id: 'mekanism:laser'
        },
        // Rotary condensator
        {
          output: 'mekanism:rotary_condensentrator',
          pattern: ['MBM','CEF','MBM'],
          key:{
              M:'botania:mana_glass',
              B:'mekanism:basic_control_circuit',
              C:Item.of('mekanism:basic_chemical_tank').weakNBT(),
              E:'mekanism:energy_tablet',
              F:Item.of('mekanism:basic_fluid_tank').weakNBT()

          },
          id: 'mekanism:rotary_condensentrator'
        },
        // Radiactive waste barrel
        {
          output: 'mekanism:radioactive_waste_barrel',
          pattern: ['SLS','LAL','SLS'],
          key:{
              L:'#forge:ingots/lead',
              S:'#forge:ingots/steel',
              A:'#mekanism:alloys/infused'

          },
          id: 'mekanism:radioactive_waste_barrel'
        },

        // Mekasuit helmet
        {
          output: 'mekanism:mekasuit_helmet',
          pattern: ['HUH','HAH','PIP'],
          key:{
              H:'mekanism:hdpe_sheet',
              U:'mekanism:ultimate_control_circuit',
              A:Item.of('pneumaticcraft:pneumatic_helmet').weakNBT(),
              P:'mekanism:pellet_polonium',
              I:'mekanism:ultimate_induction_cell'
          },
          id: 'mekanism:mekasuit_helmet'
        },
        // Mekasuit bodyarmor
        {
          output: 'mekanism:mekasuit_bodyarmor',
          pattern: ['HUH','HAH','PIP'],
          key:{
              H:'mekanism:hdpe_sheet',
              U:'mekanism:ultimate_control_circuit',
              A:Item.of('pneumaticcraft:pneumatic_chestplate').weakNBT(),
              P:'mekanism:pellet_polonium',
              I:'mekanism:ultimate_induction_cell'
          },
          id: 'mekanism:mekasuit_bodyarmor'
        },
        // Mekasuit pants
        {
          output: 'mekanism:mekasuit_pants',
          pattern: ['HUH','HAH','PIP'],
          key:{
              H:'mekanism:hdpe_sheet',
              U:'mekanism:ultimate_control_circuit',
              A:Item.of('pneumaticcraft:pneumatic_leggings').weakNBT(),
              P:'mekanism:pellet_polonium',
              I:'mekanism:ultimate_induction_cell'
          },
          id: 'mekanism:mekasuit_pants'
        },
        // Mekasuit boots
        {
          output: 'mekanism:mekasuit_boots',
          pattern: ['HUH','HAH','PIP'],
          key:{
              H:'mekanism:hdpe_sheet',
              U:'mekanism:ultimate_control_circuit',
              A:Item.of('pneumaticcraft:pneumatic_boots').weakNBT(),
              P:'mekanism:pellet_polonium',
              I:'mekanism:ultimate_induction_cell'
          },
          id: 'mekanism:mekasuit_boots'
        },
        // Thermal evaporation block
        {
          output: 'mekanism:thermal_evaporation_block',
          pattern: [' D ','DCD',' D '],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              C:'#forge:ingots/copper'
          },
          id: 'mekanism:thermal_evaporation/block'
        },
        // Induction casing
        {
          output: 'mekanism:induction_casing',
          pattern: [' D ','DCD',' D '],
          key:{
              D:'enderioalloys:item_alloy_ingot_crude_steel',
              C:'mekanism:energy_tablet'
          },
          id: 'mekanism:induction/casing'
        },
        // Basic Induction Cell
        {
          output: 'mekanism:basic_induction_cell',
          pattern: ['LTL','TCT','LTL'],
          key:{
              L: 'kubejs:lithium_dust_block',
              T: 'mekanism:energy_tablet',
              C: 'mekanism:basic_energy_cube'
          },
          id: 'mekanism:induction/cell/basic'
        },
        // Basic Induction Provider
        {
          output: 'mekanism:basic_induction_provider',
          pattern: ['LTL','TCT','LTL'],
          key:{
              L: 'kubejs:lithium_dust_block',
              T: 'mekanism:basic_control_circuit',
              C: 'mekanism:basic_energy_cube'
          },
          id: 'mekanism:induction/provider/basic'
        },
        // Boiler casing
        {
          output: 'mekanism:boiler_casing',
          pattern: [' D ','DCD',' D '],
          key:{
              D:'enderioalloys:item_alloy_ingot_electrical_steel',
              C:'enderioalloys:item_alloy_ingot_crude_steel'
          },
          id: 'mekanism:boiler_casing'
        },
        // Chargepad
        {
          output: 'mekanism:chargepad',
          pattern: ['BBB','CEC'],
          key:{
              E:'mekanism:energy_tablet',
              C:'enderioalloys:item_alloy_ingot_crude_steel',
              B:'darkutils:blank_plate'
          },
          id: 'mekanism:chargepad'
        },
        // Rotational complex
        {
          output: 'mekanismgenerators:rotational_complex',
          pattern: ['DAD','CAC','DAD'],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              A:'#mekanism:alloys/infused',
              C:'mekanism:advanced_control_circuit'
          },
          id: 'mekanismgenerators:rotational_complex'
        },
        // Reactor glass
        {
          output: 'mekanismgenerators:reactor_glass',
          pattern: ['DCD','CGC','DCD'],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              C:'enderioalloys:item_alloy_ingot_crude_steel',
              G:'industrialforegoing:dark_glass'
          },
          id: 'mekanismgenerators:reactor/glass'
        },
        // Supercharged coil
        {
          output: 'mekanism:supercharged_coil',
          pattern: ['EEE','ULU','PPP'],
          key:{
              E:'enderioalloys:item_alloy_ingot_energetic_alloy',
              U:'mekanism:ultimate_control_circuit',
              L:'mekanism:laser',
              P:'#forge:pellets/polonium'
          },
          id: 'mekanism:supercharged_coil'
        },
        // Fission reactor casing
        {
          output: Item.of('mekanismgenerators:fission_reactor_casing', 4),
          pattern: ['ESE','SCS','ESE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              S:'enderioalloys:item_alloy_ingot_stellar_alloy',
              C:'mekanism:steel_casing'
          },
          id: 'mekanismgenerators:fission_reactor/casing'
        },
        // Electromagnetic coil
        {
          output: 'mekanismgenerators:electromagnetic_coil',
          pattern: ['DRD','RER','DRD'],
          key:{
              D:'enderioalloys:item_alloy_ingot_dark_steel',
              R:'#forge:ingots/regalium',
              E:'mekanism:energy_tablet'
          },
          id: 'mekanismgenerators:electromagnetic_coil'
        },
        // Solar neutron activator
        {
          output: 'mekanism:solar_neutron_activator',
          pattern: ['AHA','CSC','EEE'],
          key:{
              A:'#mekanism:alloys/reinforced',
              H:'mekanism:hdpe_sheet',
              C:'mekanism:elite_control_circuit',
              S:'mekanism:steel_casing',
              E:'enderioalloys:item_alloy_ingot_energetic_alloy'
          },
          id: 'mekanism:solar_neutron_activator'
        },
        // Seismic vibrator
        {
          output: 'mekanism:seismic_vibrator',
          pattern: ['SLS','BCB','SSS'],
          key:{
              S:'enderioalloys:item_alloy_ingot_energetic_silver',
              L:'#forge:plates/lapis',
              B:'mekanism:basic_control_circuit',
              C:'mekanism:steel_casing'
          },
          id: 'mekanism:seismic_vibrator'
        },
        // Pressure disperser
        {
          output: 'mekanism:pressure_disperser',
          pattern: ['EIE','IAI','EIE'],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              I:'minecraft:iron_bars',
              A:'#mekanism:alloys/infused'
          },
          id: 'mekanism:pressure_disperser'
        },
        // Basic bin
        {
          output: 'mekanism:basic_bin',
          pattern: ['CBC','R R','CCC'],
          key:{
              C:'#forge:cobblestone',
              B:'mekanism:basic_control_circuit',
              R:'extendedcrafting:redstone_ingot'
          },
          id: 'mekanism:bin/basic'
        },
        // Turbine casing
        {
          output: Item.of('mekanismgenerators:turbine_casing', 4),
          pattern: [' E ','EVE',' E '],
          key:{
              E:'enderioalloys:item_alloy_ingot_electrical_steel',
              V:'enderioalloys:item_alloy_ingot_vivid_alloy'
          },
          id: 'mekanismgenerators:turbine/casing'
        },
        // Ressessive heater
        {
          output: 'mekanism:resistive_heater',
          pattern: ['TRT','RSR','TET'],
          key:{
              T:'#forge:ingots/tin',
              R:'extendedcrafting:redstone_ingot',
              S:'mekanism:steel_casing',
              E:'mekanism:energy_tablet'
          },
          id: 'mekanism:resistive_heater'
        },
        // Pressurizd reaction chamber
        {
          output: 'mekanism:pressurized_reaction_chamber',
          pattern: ['SAS','CEC','TDT'],
          key:{
              S:'enderioalloys:item_alloy_ingot_electrical_steel',
              A:'#mekanism:alloys/infused',
              C:'mekanism:basic_control_circuit',
              E:Item.of('mekanism:enrichment_chamber').weakNBT(),
              T:Item.of('mekanism:basic_chemical_tank').weakNBT(),
              D:'mekanism:dynamic_tank'
          },
          id: 'mekanism:pressurized_reaction_chamber'
        },
        // Electrolytic separator
        {
          output: 'mekanism:electrolytic_separator',
          pattern: ['CRC','AEA','CRC'],
          key:{
              C:'enderioalloys:item_alloy_ingot_crude_steel',
              R:'extendedcrafting:redstone_ingot',
              A:'#mekanism:alloys/infused',
              E:'mekanism:electrolytic_core'
          },
          id: 'mekanism:electrolytic_separator'
        },
        // Chemical injection chamber
        {
          output: 'mekanism:chemical_injection_chamber',
          pattern: ['APA','CSC','AEA'],
          key:{
              A:'#mekanism:alloys/infused',
              P:Item.of('mekanism:purification_chamber').weakNBT(),
              C:'pneumaticcraft:capacitor',
              S:'mekanism:steel_casing',
              E:'kubejs:extreme_circuit_board'
          },
          id: 'mekanism:chemical_injection_chamber'
        },
        // Basic injection factory
        {
          output: 'mekanism:basic_injecting_factory',
          pattern: ['RCR','IMI','RCR'],
          key:{
              R:'extendedcrafting:redstone_ingot',
              C:'mekanism:basic_control_circuit',
              I:'#forge:ingots/compressed_iron',
              M:'mekanism:chemical_injection_chamber'
          },
          id: 'mekanism:factory/basic/injecting'
        },
        // Advanced injection factory
        {
          output: 'mekanism:advanced_injecting_factory',
          pattern: ['CAC','SBS','CAC'],
          key:{
              C:'enderioalloys:item_alloy_ingot_conductive_iron',
              A:'mekanism:advanced_control_circuit',
              S:'enderioalloys:item_alloy_ingot_energetic_silver',
              B:'mekanism:basic_injecting_factory'
          },
          id: 'mekanism:factory/advanced/injecting'
        },
        // Purification chamber
        {
          output: 'mekanism:purification_chamber',
          pattern: ['APA','CSC','AEA'],
          key:{
              A:'#mekanism:alloys/infused',
              P:Item.of('mekanism:enrichment_chamber'),
              C:'pneumaticcraft:capacitor',
              S:'mekanism:steel_casing',
              E:'kubejs:extreme_circuit_board'
          },
          id: 'mekanism:purification_chamber'
        },
        // Basic purifying factory
        {
          output: 'mekanism:basic_purifying_factory',
          pattern: ['RCR','IMI','RCR'],
          key:{
              R:'extendedcrafting:redstone_ingot',
              C:'mekanism:basic_control_circuit',
              I:'#forge:ingots/compressed_iron',
              M:'mekanism:purification_chamber'
          },
          id: 'mekanism:factory/basic/purifying'
        },
        // Advanced purifying factory
        {
          output: 'mekanism:advanced_purifying_factory',
          pattern: ['CAC','SBS','CAC'],
          key:{
              C:'enderioalloys:item_alloy_ingot_conductive_iron',
              A:'mekanism:advanced_control_circuit',
              S:'enderioalloys:item_alloy_ingot_energetic_silver',
              B:'mekanism:basic_purifying_factory'
          },
          id: 'mekanism:factory/advanced/purifying'
        },
        // Laser Amplifier
        {
          output: 'mekanism:laser_amplifier',
          pattern: ['DDD','DCE','DDD'],
          key:{
              D: 'enderioalloys:item_alloy_ingot_dark_steel',
              C: 'mekanism:basic_energy_cube',
              E: 'botanicalmachinery:mana_emerald'
          },
          id: 'mekanism:laser_amplifier'
        }
    ];
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
