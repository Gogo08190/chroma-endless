onEvent('item.tags', (event) => {
    var items = [
        'patchouli:guide_book',
        'immersiveengineering:manual',
        'botania:lexicon',
        'solcarrot:food_book',
        'powah:book',
        'rftoolsbase:manual',
        'alexsmobs:animal_dictionary',
        'occultism:dictionary_of_spirits'
    ];
    event.get('forge:manuals').add(items);
});
