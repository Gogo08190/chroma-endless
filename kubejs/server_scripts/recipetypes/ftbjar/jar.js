onEvent("recipes", (event) => {
  const jar = event.recipes.ftbjarmod.jar;
  
  //Block Result
  jar("minecraft:cobblestone", [Fluid.of("minecraft:water", 125), Fluid.of("minecraft:lava", 125)]).time(60);
  jar("minecraft:basalt", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60).subzeroTemp()
  jar("minecraft:ice", [Fluid.of("minecraft:water", 1000)]).time(60).subzeroTemp()
  jar("minecraft:stone", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 125)]).time(60);
  jar("minecraft:obsidian", [Fluid.of("minecraft:water", 1000), Fluid.of("minecraft:lava", 1000)]).time(60);
  jar("minecraft:grass_block", ["8x #forge:seeds", "minecraft:dirt"]).time(800);
  jar("8x minecraft:grass_block", ["64x #forge:seeds", "8x minecraft:dirt"]).time(1200);
  jar("32x minecraft:clay_ball", ["1x #minecraft:sand", "1x #forge:gravel", Fluid.of("minecraft:water", 1000)]).time(20);
  
  //Fluid Result
  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(3200).lowTemp();
  jar(Fluid.of("minecraft:lava", 1000), "#forge:cobblestone").time(300).highTemp();
  jar(Fluid.of("minecraft:water", 10), "#minecraft:leaves").time(100).lowTemp();
});
