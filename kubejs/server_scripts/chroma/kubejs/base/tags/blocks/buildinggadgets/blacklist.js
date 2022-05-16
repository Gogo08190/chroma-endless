onEvent('block.tags', (event) => {
    // Documentation: https://github.com/Direwolf20-MC/BuildingGadgets/tree/master/src/main/resources/data/buildinggadgets/tags/blocks/blacklist
    // Generic affects all tools
    const blocks = [
        'immersiveengineering:alloy_smelter',
        'immersiveengineering:arc_furnace',
        'immersiveengineering:assembler',
        'immersiveengineering:auto_workbench',
        'immersiveengineering:bottling_machine',
        'immersiveengineering:bucket_wheel',
        'immersiveengineering:coke_oven',
        'immersiveengineering:blast_furnace',
        'immersiveengineering:crusher',
        'immersiveengineering:diesel_generator',
        'immersiveengineering:excavator',
        'immersiveengineering:fermenter',
        'immersiveengineering:advanced_blast_furnace',
        'immersiveengineering:lightning_rod',
        'immersiveengineering:metal_press',
        'immersiveengineering:mixer',
        'immersiveengineering:refinery',
        'immersiveengineering:sawmill',
        'immersiveengineering:silo',
        'immersiveengineering:squeezer',
        'immersiveengineering:tank',
        'immersivepetroleum:hydrotreater',
        'immersivepetroleum:distillationtower',
        'immersivepetroleum:cokerunit',
        'immersivepetroleum:pumpjack'
    ];
    event.get('buildinggadgets:blacklist/generic').add(blocks);
});
