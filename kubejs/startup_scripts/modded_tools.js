const moddedTools = Ingredient.of(/prefab:item_swift_blade_(wood|stone|iron|gold|diamond|netherite|copper|osmium|bronze|steel|obisdian);

onEvent("item.modification", (event) => {
    event.modify(moddedTools, (tool) => {
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
