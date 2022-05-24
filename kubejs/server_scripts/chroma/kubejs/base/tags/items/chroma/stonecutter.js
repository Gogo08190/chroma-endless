onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        let tag = `chroma:stonecuttables/${stoneType.name}`;
        event.add('chroma:stonecuttables', ['#' + tag]);
        event.add(tag, stoneType.stones);
        event.add(tag, stoneType.onlyAsInput);
    });
});
