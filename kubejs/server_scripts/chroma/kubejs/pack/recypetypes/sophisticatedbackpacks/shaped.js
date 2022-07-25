onEvent('recipes', (event) => {

    const recipes = [
      {
          output: 'sophisticatedbackpacks:iron_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/iron',
              B: 'sophisticatedbackpacks:backpack'
          },
          id: 'sophisticatedbackpacks:iron_backpack'
      },
      {
          output: 'sophisticatedbackpacks:gold_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/gold',
              B: 'sophisticatedbackpacks:iron_backpack'
          },
          id: 'sophisticatedbackpacks:gold_backpack'
      },
      {
          output: 'sophisticatedbackpacks:diamond_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/diamond',
              B: 'sophisticatedbackpacks:gold_backpack'
          },
          id: 'sophisticatedbackpacks:diamond_backpack'
      },
      {
          output: 'sophisticatedbackpacks:netherite_backpack',
          pattern: ['PPP', 'PBP', 'PPP'],
          key: {
              P: '#forge:plates/netherite',
              B: 'sophisticatedbackpacks:diamond_backpack'
          },
          id: 'sophisticatedbackpacks:netherite_backpack'
      },
      {
          output: 'sophisticatedbackpacks:upgrade_base',
          pattern: ['SPS', 'PLP', 'SPS'],
          key: {
              P: '#forge:plates/iron',
              S: '#forge:string',
              L: '#forge:leather'
          },
          id: 'sophisticatedbackpacks:upgrade_base'
      },
      // Pump Upgrade
      {
          output: 'sophisticatedbackpacks:pump_upgrade',
          pattern: ['ABA', 'CDE', 'AFA'],
          key: {
              A: '#forge:glass',
              B: 'immersiveengineering:fluid_pump',
              C: 'create:mechanical_piston',
              D: 'sophisticatedbackpacks:upgrade_base',
              E: 'create:sticky_mechanical_piston',
              F: 'minecraft:bucket'
          },
          id: 'sophisticatedbackpacks:pump_upgrade'
      },
      // Advanced Pump Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_pump_upgrade',
          pattern: ['ABA', 'CDC', 'EEE'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'minecraft:dispenser',
              C: 'emendatusenigmatica:gold_plate',
              D: 'sophisticatedbackpacks:pump_upgrade',
              E: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_pump_upgrade'
      },
      // Experience Pump Upgrade
      {
          output: 'sophisticatedbackpacks:xp_pump_upgrade',
          pattern: ['ABA', 'CDC', 'ABA'],
          key: {
              A: 'extendedcrafting:redstone_ingot',
              B: 'minecraft:ender_eye',
              C: 'minecraft:experience_bottle',
              D: 'sophisticatedbackpacks:advanced_pump_upgrade'
          },
          id: 'sophisticatedbackpacks:xp_pump_upgrade'
      },
      // Battery Upgrade
      {
          output: 'sophisticatedbackpacks:battery_upgrade',
          pattern: ['ABA', 'CDC', 'AEA'],
          key: {
              A: 'emendatusenigmatica:gold_plate',
              B: 'thermal:rf_potato',
              C: 'extendedcrafting:redstone_ingot',
              D: 'sophisticatedbackpacks:upgrade_base',
              E: 'thermal:flux_capacitor'
          },
          id: 'sophisticatedbackpacks:battery_upgrade'
      },
      // Tank Upgrade
      {
          output: '#sophisticatedbackpacks:upgrades',
          pattern: ['ABA', 'ACD', 'AEA'],
          key: {
              A: '#forge:glass',
              B: 'create:fluid_tank',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'rsgauges:glass_vertical_bar_gauge',
              E: 'minecraft:bucket'
          },
          id: 'sophisticatedbackpacks:tank_upgrade'
      },
      // Advanced Tool Swapper Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:tool_swapper_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_tool_swapper_upgrade'
      },
      // Tool Swapper Upgrade
      {
          output: 'sophisticatedbackpacks:tool_swapper_upgrade',
          pattern: ['ABA', 'CDE', 'FGF'],
          key: {
              A: 'extendedcrafting:redstone_ingot',
              B: Item.of('minecraft:golden_sword', '{Damage:0}').weakNBT(),
              C: Item.of('minecraft:golden_pickaxe', '{Damage:0}').weakNBT(),
              D: 'sophisticatedbackpacks:upgrade_base',
              E: Item.of('minecraft:golden_axe', '{Damage:0}').weakNBT(),
              F: 'emendatusenigmatica:steel_plate',
              G: Item.of('minecraft:golden_shovel', '{Damage:0}').weakNBT()
          },
          id: 'sophisticatedbackpacks:tool_swapper_upgrade'
      },
      // Jukebox Upgrade
      {
          output: 'sophisticatedbackpacks:jukebox_upgrade',
          pattern: [' A ', 'BCB', ' D '],
          key: {
              A: 'minecraft:jukebox',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:jukebox_upgrade'
      },
      // Stonecutter Upgrade
      {
          output: 'sophisticatedbackpacks:stonecutter_upgrade',
          pattern: [' A ', 'BCB', ' D '],
          key: {
              A: 'minecraft:stonecutter',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:stonecutter_upgrade'
      },
      // Crafting Upgrade
      {
          output: 'sophisticatedbackpacks:crafting_upgrade',
          pattern: [' A ', 'BCB', ' D '],
          key: {
              A: '#forge:workbench',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: '#forge:chests/wooden'
          },
          id: 'sophisticatedbackpacks:crafting_upgrade'
      },
      // Blasting Upgrade
      {
          output: 'sophisticatedbackpacks:blasting_upgrade',
          pattern: ['ABA', 'BCB', 'ADA'],
          key: {
              A: 'extendedcrafting:redstone_ingot',
              B: 'emendatusenigmatica:steel_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'minecraft:blast_furnace'
          },
          id: 'sophisticatedbackpacks:blasting_upgrade'
      },
      // Auto-Smoking Upgrade
      {
          output: 'sophisticatedbackpacks:auto_smoking_upgrade',
          pattern: ['ABA', 'CDB', 'EBE'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'minecraft:hopper',
              C: 'extendedcrafting:redstone_ingot',
              D: 'sophisticatedbackpacks:smoking_upgrade',
              E: 'emendatusenigmatica:gold_plate'
          },
          id: 'sophisticatedbackpacks:auto_smoking_upgrade'
      },
      // Smoking Upgrade
      {
          output: 'sophisticatedbackpacks:smoking_upgrade',
          pattern: ['ABA', 'BCB', 'ADA'],
          key: {
              A: 'extendedcrafting:redstone_ingot',
              B: 'emendatusenigmatica:steel_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'minecraft:smoker'
          },
          id: 'sophisticatedbackpacks:smoking_upgrade'
      },
      // Auto-Smelting Upgrade
      {
          output: 'sophisticatedbackpacks:auto_smelting_upgrade',
          pattern: ['ABA', 'CDB', 'EBE'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'minecraft:hopper',
              C: 'extendedcrafting:redstone_ingot',
              D: 'sophisticatedbackpacks:smelting_upgrade',
              E: 'emendatusenigmatica:gold_plate'
          },
          id: 'sophisticatedbackpacks:auto_smelting_upgrade'
      },
      // Smelting Upgrade
      {
          output: 'sophisticatedbackpacks:smelting_upgrade',
          pattern: ['ABA', 'BCB', 'ADA'],
          key: {
              A: 'extendedcrafting:redstone_ingot',
              B: 'emendatusenigmatica:steel_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'minecraft:furnace'
          },
          id: 'sophisticatedbackpacks:smelting_upgrade'
      },
      // Inception Upgrade
      {
          output: 'sophisticatedbackpacks:inception_upgrade',
          pattern: ['ABA', 'CDC', 'ACA'],
          key: {
              A: 'minecraft:ender_eye',
              B: 'minecraft:nether_star',
              C: 'emendatusenigmatica:diamond_plate',
              D: 'sophisticatedbackpacks:upgrade_base'
          },
          id: 'sophisticatedbackpacks:inception_upgrade'
      },
      // Refill Upgrade
      {
          output: 'sophisticatedbackpacks:refill_upgrade',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A: 'minecraft:ender_eye',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot',
              E: '#forge:chests/wooden'
          },
          id: 'sophisticatedbackpacks:refill_upgrade'
      },
      // Advanced Deposit Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_deposit_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:deposit_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_deposit_upgrade'
      },
      // Deposit Upgrade
      {
          output: 'sophisticatedbackpacks:deposit_upgrade',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A: 'create:mechanical_piston',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot',
              E: '#forge:chests/wooden'
          },
          id: 'sophisticatedbackpacks:deposit_upgrade'
      },
      // Advanced Restock Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_restock_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:restock_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_restock_upgrade'
      },
      // Restock Upgrade
      {
          output: 'sophisticatedbackpacks:deposit_upgrade',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A: 'create:sticky_mechanical_piston',
              B: 'emendatusenigmatica:iron_plate',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot',
              E: '#forge:chests/wooden'
          },
          id: 'sophisticatedbackpacks:deposit_upgrade'
      },
      // Advanced Void Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_void_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:void_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_void_upgrade'
      },
      // Void Upgrade
      {
          output: 'sophisticatedbackpacks:void_upgrade',
          pattern: [' A ', 'BCB', 'DED'],
          key: {
              A: 'minecraft:ender_eye',
              B: '#forge:obsidian',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot',
              E: 'trashcans:item_trash_can'
          },
          id: 'sophisticatedbackpacks:void_upgrade'
      },
      // Advanced Compacting Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_compacting_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:compacting_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_compacting_upgrade'
      },
      // Compacting Upgrade
      {
          output: 'sophisticatedbackpacks:compacting_upgrade',
          pattern: ['ABA', 'BCB', 'DBD'],
          key: {
              A: 'emendatusenigmatica:steel_plate',
              B: 'create:mechanical_piston',
              C: 'sophisticatedbackpacks:upgrade_base',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:compacting_upgrade'
      },
      // Advanced Feeding Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_feeding_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:feeding_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_feeding_upgrade'
      },
      // Advanced Magnet Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_magnet_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:magnet_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_magnet_upgrade'
      },
      // Advanced Filter Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_filter_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:filter_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_filter_upgrade'
      },
      // Advanced Pickup Upgrade
      {
          output: 'sophisticatedbackpacks:advanced_pickup_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'emendatusenigmatica:diamond_plate',
              B: 'emendatusenigmatica:gold_plate',
              C: 'sophisticatedbackpacks:pickup_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:advanced_pickup_upgrade'
      },
      // Pickup Upgrade
      {
          output: 'sophisticatedbackpacks:pickup_upgrade',
          pattern: [' A ', 'BCB', 'DDD'],
          key: {
              A: 'create:sticky_mechanical_piston',
              B: 'minecraft:string',
              C: 'sophisticatedbackpacks:pickup_upgrade',
              D: 'extendedcrafting:redstone_ingot'
          },
          id: 'sophisticatedbackpacks:pickup_upgrade'
      }
    ];

    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
});
