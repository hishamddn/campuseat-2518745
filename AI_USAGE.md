# AI usage log

Using AI never costs marks; a vague or missing log does.
Add a new section every week, before you tag. Did not use AI? Write "None" under Tool(s).

## Week 1

- Tool(s): None
- What I asked for: 
- What I kept, changed or rejected, and why: 
- One thing the AI got wrong and how I fixed it: 

## Week 2

- Tool(s): Gemini
- What I asked for: How to implement Week 2 components, lift state, and add the digit 5 Daily Special feature.
- What I kept, changed or rejected, and why: Add item in my restaurant with at least 8 menu items in at least 3 categories. Kept the SpecialBanner component and vendors.js data structure; wired handleAddToCart to the banner button so specials can be added directly to the cart.
- One thing the AI got wrong and how I fixed it: Initially forgot to check whether specialItem exists before rendering, added a guard condition inside SpecialBanner.

## Week 3
- Tool(s): Gemini
- What I asked for: Implementation of Week 3 API fetch, lifted cart state, checkout form with validation, and digit 5 countdown timer using useEffect and setInterval.
- What I kept, changed or rejected, and why: Kept the AbortController cleanup in useEffect for fetching, and setInterval cleanup for the countdown banner. Used reduce for derived cart totals and count instead of extra state variables.
- One thing the AI got wrong and how I fixed it: Verified that pickup time bounds string comparisons ('07:00' to '22:00') correctly evaluate 24-hour time format values.
