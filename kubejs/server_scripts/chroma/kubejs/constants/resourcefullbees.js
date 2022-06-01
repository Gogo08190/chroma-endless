//priority: 1000

// Items added here will get the 'valid_apiary' tag, and be usable as Apiary multiblock walls.
// This is in addition to all blocks that have collision.
const validApiaryBlocks = [
    'glassential:glass_dark',
    'glassential:glass_dark_ethereal',
    'glassential:glass_ethereal',
    'glassential:glass_light',
    'glassential:glass_redstone'
];

const honeyVarieties = [
    'resourcefulbees:catnip_honey',
    'resourcefulbees:honey',
    'resourcefulbees:rainbow_honey',
    'resourcefulbees:redstone_honey',
    'resourcefulbees:emerald_honey',
    'resourcefulbees:diamond_honey',
    'resourcefulbees:illuminating_honey',
    'resourcefulbees:water_honey',
    'resourcefulbees:lapis_honey',
    'resourcefulbees:occultist_honey'
];

const combVariants = [
    'gold',
    'forest',
    'occultist'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee)
})
