onEvent('item.tags', (event) => {
    stonecuttables.forEach((stoneType) => {
        event.add(`chisel:${stoneType.name}`, [`#chroma:stonecuttables/${stoneType.name}`]);
    });
});
