onEvent('item.modification', (event) => {
    const modifyStackSize = [

      /(minecraft|undergarden|betterendforge|atmospheric|upgrade_aquatic|tconstruct|environmental):\w+_sign/,

      'minecraft:ender_pearl',
      'minecraft:bucket',
      'minecraft:snowball',
      'minecraft:honey_bottle',
      'minecraft:egg',

      /industrialforegoing:efficiency_addon/,
      /industrialforegoing:speed_addon/,
      /industrialforegoing:processing_addon/,
      /industrialforegoing:range_addon/,

      'powah:charged_snowball',

      'resourcefulbees:bee_jar',
      /resourcefulbees:\w+_honey_bottle/,

      'rftoolsbase:infused_enderpearl',
      'rftoolsbase:infused_diamond',

      'undergarden:goo_ball'
    ];

    event.modify(modifyStackSize, (item) => {
        item.maxStackSize = 64;
    });
});
