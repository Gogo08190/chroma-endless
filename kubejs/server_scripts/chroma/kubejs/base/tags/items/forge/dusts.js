onEvent('item.tags', (event) => {
    event
        .get('forge:dusts')
        .add('immersiveengineering:dust_aluminum')
        .add('immersiveengineering:dust_lead')
        .add('immersiveengineering:dust_silver')
        .add('immersiveengineering:dust_nickel')
        .add('immersiveengineering:dust_uranium')
        .add('immersiveengineering:dust_constantan')
        .add('immersiveengineering:dust_electrum')
        .add('immersiveengineering:dust_coke')
        .add('immersiveengineering:dust_hop_graphite')
        .add('immersiveengineering:dust_saltpeter')
        .add('thermal:ender_pearl_dust')
        .add('#forge:dusts/flour');

    event.get('forge:dusts/lapis').add('mekanism:dust_lapis_lazuli');
    event.get('forge:dusts/netherite_scrap').add('mekanism:dust_netherite');

    event.get('forge:dusts').remove('minecraft:prismarine_shard');
    event.get('forge:dusts/prismarine').remove('minecraft:prismarine_shard');

    event.get('forge:dusts/ender_pearl').add('emendatusenigmatica:ender_dust').add('betterendforge:ender_dust');
    event.get('forge:dusts/ender').add('thermal:ender_pearl_dust').add('betterendforge:ender_dust');

    event.add('forge:dusts/flour', 'create:wheat_flour');
    event.add('forge:dusts/flour', 'pedestals:dustflour');

});
