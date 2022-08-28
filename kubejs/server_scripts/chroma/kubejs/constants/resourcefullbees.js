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
    'resourcefulbees:occultist_honey',
    'resourcefulbees:blazing_crystal_honey',
    'resourcefulbees:energized_steel_honey',
    'resourcefulbees:niotic_crystal_honey',
    'resourcefulbees:nitro_crystal_honey',
    'resourcefulbees:crystal_spirited_honey',
    'resourcefulbees:gaia_honey',
    'resourcefulbees:uraninite_honey',
    'resourcefulbees:elementium_honey',
    'resourcefulbees:manasteel_honey',
    'resourcefulbees:terrasteel_honey',
    'resourcefulbees:xion_honey',
    'resourcefulbees:cloggrum_honey',
    'resourcefulbees:regalium_honey',
    'resourcefulbees:utherium_honey',
    'resourcefulbees:froststeel_honey',
    'resourcefulbees:forgotten_honey',
    'resourcefulbees:steel_honey',
    'resourcefulbees:electrum_honey',
    'resourcefulbees:uranium_honey',
    'resourcefulbees:copper_honey',
    'resourcefulbees:aluminum_honey',
    'resourcefulbees:silver_honey',
    'resourcefulbees:lead_honey',
    'resourcefulbees:nickel_honey',
    'resourcefulbees:osmium_honey',
    'resourcefulbees:cobalt_honey',
    'resourcefulbees:nether_quartz_honey',
    'resourcefulbees:tin_honey',
    'resourcefulbees:zinc_honey',
    'resourcefulbees:fluorite_honey',
    'resourcefulbees:potassium_honey',
    'resourcefulbees:bitumen_honey',
    'resourcefulbees:enderium_honey',
    'resourcefulbees:invar_honey',
    'resourcefulbees:constantan_honey',
    'resourcefulbees:lumium_honey',
    'resourcefulbees:signalum_honey',
    'resourcefulbees:bronze_honey',
    'resourcefulbees:brass_honey',
    'resourcefulbees:starry_honey',
    'resourcefulbees:catnip_honey',
    'resourcefulbees:swift_alloy_honey',
    'resourcefulbees:drenched_iron_honey',
    'resourcefulbees:refined_obsidian_honey',
    'resourcefulbees:refined_glowstone_honey',
    'resourcefulbees:source_steel_honey',
    'resourcefulbees:slime_honey',
    'resourcefulbees:ender_slime_honey',
    'resourcefulbees:sky_slime_honey',
    'resourcefulbees:ichor_slime_honey',
    'resourcefulbees:terminite_honey',
    'resourcefulbees:thallasium_honey',
    'resourcefulbees:aeternium_honey',
    'resourcefulbees:compressed_iron_honey',
    'resourcefulbees:fairy_honey',
    'resourcefulbees:guardian_honey',
    'resourcefulbees:chaotic_honey',
    'resourcefulbees:awakened_honey',
    'resourcefulbees:draconium_honey',
    'resourcefulbees:dragon_honey',
    'resourcefulbees:ghast_honey',
    'resourcefulbees:blizz_honey',
    'resourcefulbees:blitz_honey',
    'resourcefulbees:basalz_honey',
    'resourcefulbees:fireite_honey',
    'resourcefulbees:glowstone_honey',
    'resourcefulbees:obsidian_honey',
    'resourcefulbees:clay_honey',
    'resourcefulbees:netherite_honey',
    'resourcefulbees:iron_honey',
    'resourcefulbees:gold_honey',
    'resourcefulbees:coal_honey',
    'resourcefulbees:rose_gold_honey',
    'resourcefulbees:hepatizon_honey',
    'resourcefulbees:manyullyn_honey',
    'resourcefulbees:cyanite_honey',
    'resourcefulbees:blutonium_honey',
    'resourcefulbees:magentite_honey',
    'resourcefulbees:ludicrite_honey',
    'resourcefulbees:ridiculite_honey',
    'resourcefulbees:inanite_honey',
    'resourcefulbees:magma_honey',
    'resourcefulbees:lava_honey',
    'resourcefulbees:nether_honey',
    'resourcefulbees:seared_honey',
    'resourcefulbees:end_honey',
    'resourcefulbees:stone_honey',
    'resourcefulbees:sand_honey',
    'resourcefulbees:gravel_honey',
    'resourcefulbees:experience_honey',
    'resourcefulbees:graphite_honey',
    'resourcefulbees:vibranium_honey',
    'resourcefulbees:unobtainium_honey',
    'resourcefulbees:allthemodium_honey',
    'resourcefulbees:soul_lava_honey',
    'resourcefulbees:mystical_honey'   

];

const combVariants = [
    'gold',
    'forest',
    'occultist',
    'blazing',
    'energized',
    'niotic',
    'nitro',
    'spirited',
    'uraninite',
    'elementium',
    'gaia',
    'manasteel',
    'terrasteel',
    'xion',
    'iron',
    'wither',
    'redstone',
    'emerald',
    'diamond',
    'cloggrum',
    'regalium',
    'utherium',
    'froststeel',
    'forgotten',
    'uranium',
    'steel',
    'electrum',
    'coal',
    'creeper',
    'dragon',
    'ender',
    'lapis',
    'pigman',
    'netherite',
    'rgbee',
    'skeleton',
    'water',
    'zombie',
    'blaze',
    'aluminum',
    'silver',
    'copper',
    'lead',
    'nickel',
    'osmium',
    'cobalt',
    'nether_quartz',
    'tin',
    'zinc',
    'fluorite',
    'potassium',
    'bitumen',
    'invar',
    'enderium',
    'constantan',
    'lumium',
    'signalum',
    'brass',
    'bronze',
    'catnip',
    'swift_alloy',
    'drenched_iron',
    'refined_obsidian',
    'refined_glowstone',
    'source_steel',
    'slime',
    'sky_slime',
    'ender_slime',
    'ichor_slime',
    'thallasium',
    'terminite',
    'aeternium',
    'compressed_iron',
    'fairy',
    'draconium',
    'chaotic',
    'awakened',
    'guardian',
    'dragon',
    'ghast',
    'blizz',
    'blitz',
    'basalz',
    'fireite',
    'glowstone',
    'obsidian',
    'clay',
    'rose_gold',
    'hepatizon',
    'manyullyn',
    'cyanite',
    'blutonium',
    'magentite',
    'ridiculite',
    'ludicrite',
    'inanite',
    'creeper',
    'rainbow_glass',
    'magma',
    'stone',
    'lava',
    'nether',
    'seared',
    'end',
    'starry_lexxie',
    'experience',
    'sand',
    'gravel',
    'graphite',
    'soul_lava',
    'vibranium',
    'allthemodium',
    'unobtainium',
    'mystical'
];

const bees = [];

combVariants.forEach((bee) => {
    bees.push(bee)
})

let moreBees = [
    'kitten',
    'oreo',
    'yeti',
    'abbee'
];

moreBees.forEach((bee) => {
    bees.push(bee);
});
