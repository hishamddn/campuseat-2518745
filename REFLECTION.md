# Week 1 reflection

1. What is the difference between building a UI imperatively (plain DOM code) and declaratively (React)?

answer: the core difference is imperative UI(plain DOM) is tells the browser how to change the interfaces step by step. while declaratively (React) describe what the interface should look like for given step

2. Why must a component name start with a capital letter?

answer: to differentiate custom React components from built-in HTML tags.

3. What does a fragment <>...</> do, and why not just use a <div>?

answer: Fragment group multiple elements together without adding extra HTML node. The browser consumes less memory because it has fewer HTML elements to render. <div> also achive grouping but it introduces an unnecessary HTML element to a webpage. Extra <div> wrappers could cause CSS layout break like flexbox and grid, which rely on direct parent-child relationships.

4. Name one benefit of splitting the UI into small components.

answer: reusability, which allows to use the same component across multiple pages of an application without duplicating code
