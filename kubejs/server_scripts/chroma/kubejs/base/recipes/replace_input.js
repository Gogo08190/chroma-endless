onEvent('recipes', (event) => {
    const recipes = [
        {
            replaceTarget: { id: 'immersivecooking:fried_potato_cubes' },
            toReplace: 'immersivecooking:potato_slice',
            replaceWith: 'immersivecooking:potato_cubes'
        },
        {
            replaceTarget: {
                not: [{ id: 'minecraft:dried_kelp_block' }]
            },
            toReplace: 'minecraft:dried_kelp',
            replaceWith: ['minecraft:dried_kelp', 'sushigocrafting:dried_seaweed']
        }
    ];
    event.replaceInput({}, 'thermal:sawdust', 'emendatusenigmatica:wood_dust');
    event.replaceInput({}, 'architects_palette:withered_bone', '#forge:bones/wither');
    event.replaceInput({}, 'refinedstorage:silicon', '#forge:silicon');
    event.replaceInput({}, 'refinedstorage:crafter', '#refinedstorage:crafter');
    event.replaceInput({}, 'betterendforge:thallasium_ore', '#forge:ores/thallasium');
    event.replaceInput({}, 'thermal:rubber', 'industrialforegoing:dryrubber');
    event.replaceInput({}, 'thermal:cinnabar', '#forge:gems/cinnabar');
    event.replaceInput({}, 'thermal:sulfur', '#forge:gems/sulfur');
    event.replaceInput({}, 'thermal:apatite', '#forge:gems/apatite');
    event.replaceInput({}, 'thermal:niter', '#forge:gems/niter');
    event.replaceInput({}, 'thermal:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'thermal:coal_coke', '#forge:gems/coal_coke');
    event.replaceInput({}, 'rftoolsbase:dimensionalshard', '#forge:gems/dimensional');
    event.replaceInput({}, 'immersivepetroleum:bitumen', '#forge:gems/bitumen', true);
    event.replaceInput({}, 'immersiveengineering:slag', '#forge:slag');
    event.replaceInput({}, 'thermal:slag', '#forge:slag');
    event.replaceInput({}, 'simplefarming:cooked_egg', '#forge:cooked_eggs');
    event.replaceInput({}, 'farmersdelight:fried_egg', '#forge:cooked_eggs');
    event.replaceInput({}, 'farmersdelight:brown_mushroom_colony', '#forge:mushroom_colonies/brown');
    event.replaceInput({}, 'farmersdelight:red_mushroom_colony', '#forge:mushroom_colonies/red');
    event.replaceInput({}, 'betterendforge:ender_dust', '#forge:dusts/ender');
    event.replaceInput({}, 'minecraft:iron_ore', '#forge:ores/iron');
    event.replaceInput({}, 'minecraft:gold_ore', '#forge:ores/gold');
    event.replaceInput({}, 'upgrade_aquatic:beachgrass', '#forge:beach_grass');
    event.replaceInput({}, 'environmental:cattail', '#forge:cattails');
    event.replaceInput({}, 'pneumaticcraft:wheat_flour', '#forge:dusts/flour');
    event.replaceInput({}, 'create:wheat_flour', '#forge:dusts/flour');
    event.replaceInput({}, 'pedestals:dustflour', '#forge:dusts/flour');
    event.replaceInput({}, 'create:dough', '#forge:doughs');
    event.replaceInput({}, 'farmersdelight:wheat_dough', '#forge:doughs');
    event.replaceInput({}, 'create:bar_of_chocolate', '#forge:chocolate_bars');
    event.replaceInput({}, 'simplefarming:chocolate', '#forge:chocolate_bars');
    event.replaceInput({}, 'simplefarming:noodles', '#forge:pasta/raw_pasta');
    event.replaceInput({}, 'simplefarming:jam', '#forge:jams');
    event.replaceInput({}, 'simplefarming:raw_bacon', '#forge:raw_bacon');
    event.replaceInput({}, 'simplefarming:cooked_bacon', '#forge:cooked_bacon');
    event.replaceInput({ mod: 'simplefarming' }, 'minecraft:cooked_chicken', '#forge:cooked_chicken');
    event.replaceInput({ id: '/simplefarming:\\w+burger/' }, 'minecraft:cooked_beef', 'farmersdelight:beef_patty');
    event.replaceInput({}, 'tconstruct:cobalt_nugget', '#forge:nuggets/cobalt');
    event.replaceInput({}, 'minecraft:nether_bricks', '#forge:netherbricks');
    event.replaceInput(
        {
            type: 'minecraft:crafting_shaped',
            not: [{ id: 'minecraft:stone_slab' }, { id: 'minecraft:stone_stairs' }]
        },
        'minecraft:stone',
        '#forge:stone',
        true
    );
    event.replaceInput({ type: 'minecraft:crafting_shapeless' }, 'minecraft:stone', '#forge:stone', true);
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'powah:uraninite', '#forge:ingots/radioactive');
    event.replaceInput({ type: 'minecraft:crafting_shaped' }, 'minecraft:netherrack', '#forge:netherrack');
    event.replaceInput({ id: 'tetra:hammer/stone' }, 'minecraft:cobblestone', '#quark:stone_tool_materials');


    event.replaceInput(
        { type: 'minecraft:crafting_shaped', output: 'minecraft:piston' },
        '#forge:cobblestone',
        '#quark:stone_tool_materials'
    );

    ['quark:tallow', 'occultism:tallow'].forEach((tallow) => {
        event.replaceInput({}, tallow, '#forge:tallow');
    });

    event.replaceInput(
        { id: 'dustrial_decor:iron_bar_trapdoor' },
        'minecraft:iron_bars',
        'dustrial_decor:barbed_iron_bars'
    );

    event.replaceInput(
        { id: 'create:mixing/chromatic_compound' },
        'create:powdered_obsidian',
        Ingredient.of('#forge:dusts/obsidian')
    );

    event.replaceInput({ id: 'minecraft:nether_bricks' }, '#forge:ingots/nether_brick', 'minecraft:nether_brick');
    event.replaceInput(
        { id: 'thermal:machine/press/packing2x2/press_nether_bricks_packing' },
        '#forge:ingots/nether_brick',
        'minecraft:nether_brick'
    );
    event.replaceInput(
        { id: 'thermal:machine/press/unpacking/press_wool_unpacking' },
        'minecraft:white_wool',
        '#forge:wool'
    );

    sharedDies.forEach((die) => {
        var dieTag = `#thermal:crafting/dies/${die.thermalName}`;
        event.replaceInput({}, `immersiveengineering:mold_${die.immersiveEngineeringName}`, dieTag);
        event.replaceInput({}, `thermal:press_${die.thermalName}_die`, dieTag);
    });
    thermalDies.forEach((dieName) => {
        event.replaceInput({}, `thermal:press_${dieName}_die`, `#thermal:crafting/dies/${dieName}`);
    });
    immersiveEngineeringDies.forEach((dieName) => {
        event.replaceInput({}, `immersiveengineering:mold_${dieName}`, `#thermal:crafting/dies/${dieName}`);
    });

    colors.forEach((color) => {
        var dyeTag = `#forge:dyes/${color}`;

        // Replaces recipes not using forge:dyes tag for inputs
        event.replaceInput({}, `minecraft:${color}_dye`, dyeTag, true);

        event.remove({
            id: `minecraft:${color}_carpet_from_white_carpet`
        });
        event.shaped(Item.of(`minecraft:${color}_carpet`, 3), ['WW'], {
            W: `minecraft:${color}_wool`
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass_pane`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass_pane',
            D: dyeTag
        });

        event.shaped(Item.of(`minecraft:${color}_stained_glass`, 8), ['GGG', 'GDG', 'GGG'], {
            G: 'minecraft:glass',
            D: dyeTag
        });

        ['stained_glass', 'stained_glass_pane', 'terracotta', 'concrete_powder', 'wool', 'carpet'].forEach(
            (blockName) => {
                var itemTag = `#forge:${blockName}`;
                var block = `minecraft:${color}_${blockName}`;

                if (blockName == 'stained_glass_pane') {
                    event.remove({ id: `${block}_from_glass_pane` });
                } else {
                    event.remove({ id: block });
                }

                event.shaped(Item.of(block, 8), ['SSS', 'SDS', 'SSS'], {
                    S: itemTag,
                    D: dyeTag
                });
                event.shapeless(Item.of(block, 1), [dyeTag, itemTag]);
            }
        );

        event.shapeless(Item.of(`minecraft:${color}_concrete_powder`, 8), [
            dyeTag,
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:sand',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel',
            '#forge:gravel'
        ]);
    });
});
