# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): None
- What I asked for: N/A
- What I kept, changed or rejected, and why: N/A
- One thing the AI got wrong and how I fixed it: N/A

## Week 2

- Tool(s): Gemini
- What I asked for: Help setting up the personal feature for my matric digit feature (5 - Daily special).
- What I kept, changed or rejected, and why: Kept the suggested SpecialBanner layout and hooked its button into handleAddToCart so specials go straight into the cart. Kept the data structure for my vendor with 8 items across 3 categories.
- One thing the AI got wrong and how I fixed it: It didn't include a guard check for when a vendor has no special item, which caused undefined errors. I added an `if (!specialItem) return null` check at the top of SpecialBanner.

## Week 3

- Tool(s): Gemini
- What I asked for: handling cart quantities/totals with reduce, and adding a live countdown timer to the special banner. Later asked how to fix duplicate items between the banner and the menu grid.
- What I kept, changed or rejected, and why: Kept the AbortController fetch pattern and the cart line logic ({ item, qty }). For the special item, instead of removing it from the menu grid entirely, I went with a flash-deal approach: gave the banner a discounted price with the original price struck through, while keeping the regular price on the normal menu card.
- One thing the AI got wrong and how I fixed it: The AI initially hardcoded the countdown end time to 22:00 inside the component and left the button active even after the timer hit "Deal ended." I added an `endsAt` field to each special in vendors.json so vendors can have different deadlines, and disabled the banner button once the countdown reaches zero.