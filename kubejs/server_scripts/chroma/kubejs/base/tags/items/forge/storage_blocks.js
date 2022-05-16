onEvent('item.tags', (event) => {
    var storageBlocks = 'forge:storage_blocks';
    event.add(storageBlocks, [
        'minecraft:glowstone',
        'immersiveengineering:storage_aluminum',
        'immersiveengineering:storage_lead',
        'immersiveengineering:storage_silver',
        'immersiveengineering:storage_nickel',
        'immersiveengineering:storage_uranium',
        'immersiveengineering:storage_constantan',
        'immersiveengineering:storage_electrum',
        'immersiveengineering:coke',
        'powah:uraninite_block',
        'occultism:iesnium_block',
        'betterendforge:aeternium_block',
        'betterendforge:terminite_block',
        'betterendforge:ender_block',
        'betterendforge:aurora_crystal',
        'betterendforge:amber_block',
        'betterendforge:thallasium_block',
        'powah:energized_steel_block',
        'powah:blazing_crystal_block',
        'powah:niotic_crystal_block',
        'powah:spirited_crystal_block',
        'powah:nitro_crystal_block',
        'architects_palette:ender_pearl_block'
    ]);

    event.get(storageBlocks + '/glowstone').add('minecraft:glowstone');

    event.add(storageBlocks + '/aeternium', ['betterendforge:aeternium_block']);
    event.add(storageBlocks + '/terminite', ['betterendforge:terminite_block']);
    event.add(storageBlocks + '/thallasium', ['betterendforge:thallasium_block']);
    event.add(storageBlocks + '/ender', ['betterendforge:ender_block', 'architects_palette:ender_pearl_block']);
    event.add(storageBlocks + '/aurora', ['betterendforge:aurora_crystal']);
    event.add(storageBlocks + '/amber', ['betterendforge:amber_block']);

    event.add(storageBlocks + '/sunmetal', ['architects_palette:sunmetal_block']);
    event.add(storageBlocks + '/tinkers_bronze', ['tconstruct:tinkers_bronze_block']);
    event.add(storageBlocks + '/energized_steel', ['powah:energized_steel_block']);

    event.add(storageBlocks + '/blazing', ['powah:blazing_crystal_block']);
    event.add(storageBlocks + '/niotic', ['powah:niotic_crystal_block']);
    event.add(storageBlocks + '/spirited', ['powah:spirited_crystal_block']);
    event.add(storageBlocks + '/nitro', ['powah:nitro_crystal_block']);

    event.add(storageBlocks + '/bronze', ['#chisel:metals/bronze']);
    event.add(storageBlocks + '/emerald', ['#chisel:emerald']);
    event.add(storageBlocks + '/glowstone', ['#chisel:glowstone']);
    event.add(storageBlocks + '/redstone', ['#chisel:redstone']);
    event.add(storageBlocks + '/coal', ['#chisel:coal']);
    event.add(storageBlocks + '/glowstone', ['#chipped:glowstone']);
});
