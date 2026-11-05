# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?
   answer: the core difference is imperative UI(plain DOM) is tells the browser how to change the interfaces step by step. while declaratively (React) describe what the interface should look like for given step

2. Why must a component name start with a capital letter?
   answer: to differentiate custom React components from built-in HTML tags.

3. What does a fragment <>...</> do, and why not just use a <div>?
   answer: Fragment group multiple elements together without adding extra HTML node. The browser consumes less memory because it has fewer HTML elements to render. <div> also achive grouping but it introduces an unnecessary HTML element to a webpage. Extra <div> wrappers could cause CSS layout break like flexbox and grid, which rely on direct parent-child relationships.

4. Name one benefit of splitting the UI into small components.
   answer: reusability, which allows to use the same component across multiple pages of an application without duplicating code

## Week 2

- What I did: Split the big layout into smaller files like VendorCard, MenuList, and MenuItemCard, and added the basic banner for my stall.
- Challenges: Passing functions like `handleAddToCart` up and down between components without getting confused with parameters.
- What I learned: If two components need the same data (like the menu and the cart counter), that data must live in their parent component.

## Week 3

- What I did: Moved my menu items into `vendors.json`, fetched it on page load, and added the ticking countdown timer to the special banner.
- Challenges: Figuring out how to stop the timer from running in the background when leaving the page, and disabling the button once the deal ended.
- What I learned: Any background task like `setInterval` or `fetch` needs a cleanup return in `useEffect`, or it keeps running and causes errors.

## Week 4

- What I did: Set up multi-page navigation using React Router (`/`, `/vendor/:id`, `/cart`, `/orders`) and moved the cart into Context so it saves to localStorage.
- Challenges: Understanding how `<Outlet />` works and making sure the cart didn't reset to zero every time I refreshed the page.
- What I learned: Context is way easier than passing props through five different files, and `useLocalStorage` lets user data survive a browser reload.
