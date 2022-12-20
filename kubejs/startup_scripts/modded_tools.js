const moddedTools = [
  Ingredient.of(/prefab:item_swift_blade_(wood|stone|iron|gold|diamond|netherite|copper|osmium|bronze|steel|obsidian)/),
  Ingredient.of(/mekanismtools:(bronze|lapis_lazuli|osmium|steel)_(sword|shovel|(pick)?axe|paxel)/),
  Ingredient.of(/immersiveengineering:(steel)_(sword|shovel|(pick)?axe|hoe)/),
  Ingredient.of(/mekanismtools:(wood|stone|iron|diamond|gold|netherite)_paxel/)
];

onEvent("item.modification", (event) => {
    event.modify(moddedTools, (tool) => {
        tool.setMaxDamage(1);

        tool.setTier((tier) => {
            tier.uses = 0;
            tier.speed = 0;
            tier.attackDamageBonus = 0;
            tier.level = 0;
            tier.enchantmentValue = 0;
        });
    });
});
