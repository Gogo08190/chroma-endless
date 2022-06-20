const moddedTools = [
  Ingredient.of(/prefab:item_swift_blade_(wood|stone|iron|gold|diamond|netherite|copper|osmium|bronze|steel|obsidian)/),
  Ingredient.of(/mekanismtools:(bronze|lapis_lazuli|osmium)_(sword|shovel|(pick)?axe|paxel)/),
  Ingredient.of(/mekanismtools:(wood|stone|iron|diamond|gold|netherite)_paxel/)
];
for (let i; i<=moddedTools.length; i++){
  onEvent("item.modification", (event) => {
      event.modify(moddedTools[i], (tool) => {
          tool.setMaxDamage(1);

          tool.setTier((tier) => {
              tier.uses = 1;
              tier.speed = 0;
              tier.attackDamageBonus = 0;
              tier.level = 0;
              tier.enchantmentValue = 0;
          });
      });
  });
};
