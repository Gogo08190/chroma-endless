onEvent('jei.information', (event) => {
    const recipes = [
        {
            items: ['simplefarming:cheese_slice'],
            text: ['Obtained by right-clicking a Wheel of Cheese.']
        },
        {
            items: ['farmersdelight:ham'],
            text: ['Obtained by killing Pigs or Hoglins with a knife.']
        },
        {
            items: ['buildinggadgets:construction_paste'],
            text: ['Obtained by breaking a Dense Construction Block with a Pickaxe.']
        },
        {
            items: ['thermal:blizz_rod', 'thermal:blizz_spawn_egg'],
            text: [
                'The Blizz spawns naturally in cold biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:blitz_rod', 'thermal:blitz_spawn_egg'],
            text: [
                'The Blitz spawns naturally in warm, dry biomes. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['thermal:basalz_rod', 'thermal:basalz_spawn_egg'],
            text: [
                'The Basalz spawns naturally in barren biomes, such as Badlands. Mechanical Dirt and Nocturnal Powder work wonders for farming them.'
            ]
        },
        {
            items: ['betterendforge:emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can also be created from water placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:dense_emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can also be created from Emerald Ice placed next to Ancient Emerald Ice.'
            ]
        },
        {
            items: ['betterendforge:ancient_emerald_ice'],
            text: [
                'Found naturally in Ice Starfields in the End, it can convert adjacent water blocks to Emerald Ice and those to Dense Emerald Ice.'
            ]
        },
        {
            items: ['simplefarming:habanero'],
            text: ['A very rare drop from farming Peppers.']
        },
        {
            items: ['mekanismgenerators:fusion_reactor_controller'],
            text: [
                'The Fusion Reactor has been nerfed quite heavily.',
                'It produces 60k-250k rf/t passively, but has potential for far higher output when paired with one or multiple Steam Turbines.'
            ]
        },
        {
            items: ['farmersdelight:brown_mushroom_colony', 'minecraft:brown_mushroom'],
            text: [
                'Plant a Brown Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['farmersdelight:red_mushroom_colony', 'minecraft:red_mushroom'],
            text: [
                'Plant a Red Mushroom on Rich Soil in darkness to grow mushroom colonies, which may be broken for a nice yield.'
            ]
        },
        {
            items: ['minecraft:nautilus_shell'],
            text: [
                'Obtained by killing Nautilus, found in Warm Oceans.',
                ' ',
                'Also obtained from Embedded Ammonite, found at any Y level under Oceans and Beaches.'
            ]
        },
        {
            items: ['architects_palette:twisted_sapling'],
            text: ['Obtained by tossing Saplings through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:warpstone'],
            text: ['Obtained by tossing Clay Blocks through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_cactus'],
            text: ['Obtained by tossing Cactus through a Nether Portal from the Overworld']
        },
        {
            items: ['byg:warped_coral', 'byg:warped_coral_fan', 'byg:warped_coral'],
            text: ['Obtained by tossing any coral through a Nether Portal from the Overworld']
        },
        {
            items: ['architects_palette:chiseled_abyssaline_bricks'],
            text: ['May be Charged by Right-Clicking with a Heart of the Sea. Used to power Abyssaline blocks.']
        },
        {
            items: [
                'architects_palette:abyssaline_lamp',
                'architects_palette:abyssaline_tile_slab',
                'architects_palette:abyssaline_tiles',
                'architects_palette:abyssaline_brick_slab',
                'architects_palette:abyssaline_pillar',
                'architects_palette:abyssaline_bricks',
                'architects_palette:abyssaline'
            ],
            text: [
                'Powered by placing next to a Charged Chiseled Abyssaline Bricks. Power is transmitted through to other Abyssaline blocks.'
            ]
        },
        {
            items: [
                'architects_palette:blank_acacia_totem',
                'architects_palette:shocked_acacia_totem',
                'architects_palette:placid_acacia_totem',
                'architects_palette:grinning_acacia_totem'
            ],
            text: ['Right-Click with an Axe to change the face.']
        },
        {
            items: ['betterendforge:silk_fiber'],
            text: ['Obtained by killing Silk Moths which are spawned by Silk Moth Nests.']
        },
        {
            items: [/upgrade_aquatic:\w+_coralstone$/],
            text: ['Obtained by placing Coralstone next to living coral.']
        },
        {
            items: ['upgrade_aquatic:coralstone'],
            text: ['Place next to living coral to infuse.']
        },
        {
            items: [
                'quark:red_crystal',
                'quark:orange_crystal',
                'quark:yellow_crystal',
                'quark:green_crystal',
                'quark:blue_crystal',
                'quark:indigo_crystal',
                'quark:violet_crystal',
                'quark:white_crystal',
                'quark:black_crystal'
            ],
            text: [
                'Will grow up to four blocks tall if placed deep underground. Will emit particles while growing.',
                ' ',
                'May sprout Corundum Clusters as well.'
            ]
        },
        {
            items: [/quark:\w+_crystal_cluster/],
            text: ['Grows occasionally on Corundum Blocks when grown underground.']
        },
        {
            items: ['quark:bottled_cloud'],
            text: ['Obtained by Right-Clicking a Glass Bottle in the air between Y Levels 126 and 132.']
        },
        {
            items: ['quark:root_item'],
            text: [
                'Drops occasionally when breaking Cave Roots.',
                ' ',
                'Cave Roots may be crafted and grown just like Vines, though they require low light to grow.'
            ]
        },
        {
            items: ['quark:root'],
            text: ['May be crafted and grown just like Vines, though they require low light to grow.']
        },
        {
            items: ['meetyourfight:phantoplasm'],
            text: ['Drops from the Bellringer. Craft a Haunted Bell to summon.']
        },
        {
            items: ['meetyourfight:mossy_tooth'],
            text: ['Drops from Swampjaw. Craft a Fossil Bait to summon.']
        },
        {
            items: ['meetyourfight:fortunes_favor'],
            text: [`Drops from Dame Fortuna. Craft a Devil's Ante to summon.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [`Shapeless Crafting: One paper and at least one gunpowder.`]
        },
        {
            items: ['minecraft:firework_rocket'],
            text: [
                `Adding more gunpowder increases the duration of the rocket.`,
                `Up to three gunpowder or up to seven firework stars can be added.`
            ]
        },
        {
            items: ['minecraft:firework_star'],
            text: [`Shapeless Crafting: One gunpowder and at least one dye.`]
        },
        {
            items: ['minecraft:firework_star'],
            text: [
                `Up to eight dyes can be added.`,
                `One head, gold nugget, feather, or fire charge can be added to set a shape.`,
                `A diamond and/or a glowstone dust can be added with any of the other ingredients.`
            ]
        },
        {
            items: ['minecraft:dragon_egg'],
            text: [
                `More eggs may be obtained by summoning the End Dragon again.`,
                ` `,
                `To summon, place an End Crystal on each of the cardinal directions of the End Portal in the End.`
            ]
        },
        {
            items: ['byg:leaf_pile'],
            text: [`Gathered with Shears.`]
        },
        {
            items: ['immersiveengineering:furnace_heater', 'mekanism:fuelwood_heater', 'mekanism:resistive_heater'],
            text: [`May be used to provide Heat for PneumaticCraft machines.`]
        },
        {
            items: ['immersiveengineering:logic_circuit'],
            text: [
                `Used in a Logic Unit to create advanced Redstone Logic.`,
                ` `,
                `Crafted in an Engineer's Circuit Table. Requires Circuit Backplanes and Lead or Copper Wire. Vacuum Tubes are required for all operators except SET.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Obtained by defeating the Warped Mosco.`,
                ` `,
                `Warped Mosco are creatures of nightmare created when a Crimson Mosquito sucks the blood of a Mungus covered in Warped Fungus.`
            ]
        },
        {
            items: ['alexsmobs:hemolymph_sac', 'alexsmobs:warped_muscle'],
            text: [
                `Mungus may be summoned through the Altar of Birthing, while Crimson Mosquitos may be created by bringing a Fly into the Nether.`
            ]
        },
        {
            items: [
                'resourcefulbees:t1_beehive',
                'resourcefulbees:t2_beehive',
                'resourcefulbees:t3_beehive',
                'resourcefulbees:t4_beehive'
            ],
            text: [
                `Tiered Beehives have been depreciated. Use the Hive Upgrade items on nests found in the world instead. Tiered Beehives can be converted to Hive Upgrades in a crafting grid.`
            ]
        },
        {
            items: ['upgrade_aquatic:flare_spawn_egg'],
            text: [`Splash a Phantom with a Potion of Insomnia to convert it to a Flare.`]
        },
        {
            items: ['immersiveengineering:cloche'],
            text: [
                `Available Fertilizers:`,
                ` `,
                `Bone Meal: 1.25x`,
                `Floral Fertilizer: 1.5x`,
                `Green Fertilizer: 1.5x`,
                `Fertilizer: 1.7x`,
                `Red Fertilizer: 2.0x`,
                `Phyto-Gro: 3.0x`
            ]
        },
        {
            items: ['quark:dragon_scale'],
            text: [`Only drops from Ender Dragons after the first one has been killed.`]
        },
        {
            items: [
                'dankstorage:1_to_2',
                'dankstorage:2_to_3',
                'dankstorage:3_to_4',
                'dankstorage:4_to_5',
                'dankstorage:5_to_6',
                'dankstorage:6_to_7'
            ],
            text: [`Sneak Right Click to upgrade a Dank installed in a Dock.`]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [`Scoop up a small slime in an empty bucket.`]
        },
        {
            items: ['alexsmobs:mysterious_worm'],
            text: [
                `Summons a Void Worm when tossed into the void in The End.`,
                ` `,
                `Place a Crimson Mosquito Larva inside a Capsid to obtain.`
            ]
        },
        {
            items: ['alexsmobs:capsid'],
            text: [
                `Dropped by Enderiophage.`,
                ` `,
                `Enderiophage may be found in the wild in the End Midlands biome. They may also be called forth by consuming Otherworldly Honey.`
            ]
        },
        {
            items: ['environmental:thief_hood'],
            text: [`May be repaired with Rabbit Hide.`]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [`When equipped in the belt slot, hold the sneak key while airborne to float.`]
        },
        {
            items: ['create:chromatic_compound', 'create:refined_radiance'],
            text: [
                `Chromatic Compound absorbs light when dropped in the world, transforming into Refined Radiance. Charges slowly from ambient light, faster by consuming nearby light emitting blocks, and instantly when dropped onto an active beacon.`
            ]
        },
        {
            items: ['create:chromatic_compound', 'create:shadow_steel'],
            text: [
                `Chromatic Compound absorbs darkness when dropped into the void, returning as Shadow Steel, floating back up out of the void shortly after falling into the depths.`
            ]
        }
    ];

    recipes.forEach((recipe) => {
        recipe.items.forEach((item) => {
            event.add(item, recipe.text);
        });
    });

    disabledItems.forEach((item) => {
        event.add(
            item,
            "This item has been disabled."
        );
    });

    refinedStorageItems.forEach((item) => {
        event.add(`refinedstorage:${item}`, 'Can be dyed through crafting or by right clicking it with dye in-world.');
    });

    generatableCobblestone.forEach((cobblestone) => {
        event.add(
            cobblestone,
            'Can be generated in a Vanilla Cobblestone Generator. The block below where the Cobblestone generates needs to be a Block of Iron.'
        );
    });

    generatableStone.forEach((stone) => {
        event.add(
            stone,
            'Can be generated in a Vanilla Stone Generator. The block below where the Stone generates needs to be a Block of Diamond.'
        );
    });

    var framedDrawers = [
        'compact_drawer',
        'drawer_controller',
        'slave',
        'trim',
        'full_one',
        'full_two',
        'full_four',
        'half_one',
        'half_two',
        'half_four'
    ];
    framedDrawers.forEach((drawer) => {
        event.add('framedcompactdrawers:framed_' + drawer, [
            'Must be painted with any block to be used. To paint, put in any crafting grid with one block directly above and to its left diagonally.',
            'You can also put a different block directly on top of the drawer and/or directly to its left to customize it even further!'
        ]);
    });
});
