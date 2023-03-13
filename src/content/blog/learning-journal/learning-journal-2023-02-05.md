---
title: Learning Journal - 2023/02/05
description: >-
  Learned new CSS tricks from DesignCourse's CSS course. Found interesting
  discussion on when to use Redux vs React state management.
pubDate: '2023-02-05T08:00:00.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
---

## Links

* [Codepen.io Navigation Bar from Design Course](https://codepen.io/kennywlino/pen/zYLbaOZ "")
* [Codepen.io User Avatar from Design Course](https://codepen.io/kennywlino/pen/LYBaQQg "")

## Questions

### What was your goal today? (i.e . time spent studying, or improving certain skills) Did you accomplish it, and if not, what can you do differently next time?

Originally, I planned to spend more time working on TypeScript and learning CSS from the DesignCourse, but in the end I only spent a total of ~ 3 hours. I decided it'd be good to take it slightly easier since it was Sunday and because I intend to keep Sunday open to take care of myself and other personal matters.

In terms of hitting my goals, I think I was able to still make progress in my learning so I feel successful in that regard.

### What did you learn or work on today? How does it tie into your goals?

I learned a new way to center items horizontally & vertically using grid:

```css
body {
	height: 100vh;
	display: grid;
	place-content: center;
}
```

I also learned how to use pseudo-selectors to create a watermark using the ` ::before`
pseudo-selector and CSS positioning. On the main element, we set ` position: relative` and then used ` position: absolute` to position the pseudo-selected items by using the top, left, right, bottom properties and using the main element as a basis. For example, to move the pseudo-selected item 5rem to the left of the main element, we can use:

```css

h1.main {
	position: relative;
}

h1.main::before {
	position: absolute:
	top: -10rem;
	left: -5rem;
}

```

I also skimmed through a video from Web Dev Simplified about [XState](https://youtu.be/s0h34OkEVUE ""), another tool for state management. It allows us to create finite state machines to define various states, such as logged in / logged out / error, and visualize them as such. This is in contrast to concepts like Redux or functional state hooks. I thought I'd watch this video as it mentioned that it makes state management easier, and because I wanted to know more about what the pros and cons are about various state management tools.

### What are some things you'd like to make special note of?

One thing I'd like to make note of is something I learned from skimming Leon Noel's [One Project That Will Get You Hired](https://www.youtube.com/watch?v=zjxo_-wNZHE ""). In this video, he mentioned a couple of amazing tips to help get to our MVP faster, which include focusing on the functionality and the overall system over scaffolding the designs.

A couple of useful hints he gave included using components from [Tailwind UI](https://tailwindui.com/ "")  as well as [Daisy UI](https://daisyui.com/ ""), which has free, open-source versions of components that may not be free. A search turned up [Tailwind UI Kit](https://tailwinduikit.com/ "") as well, which seems slightly different from Tailwind UI.

He also suggested checking out [Dribbble](https://dribbble.com/ "") or [Envato Elements](https://elements.envato.com/ "") for finding inspiration for layouts that have been created by designers and other professionals. For example, if we were trying to build a website for a gym, we could search that and find theming and layouts people have used for gym websites.

Although I heard the advice about focusing on function over form for building MVP and had been familiar with tools like Bootstrap, Material UI and Mantine, working with those tools also has their own quirks and ramp up before you can become effective with them, so I like the idea of Tailwind which seems more flexible.

### What are some things you're still curious about?

I'm definitely still curious about the pros and cons of the various ways to manage state in our applications after watching the Web Dev Simplified video on XState. While it seems like libraries like Redux has gained popularity over the years, and React have tried to improve their state management over time by bringing in things like the useState and useReducer hooks and Context API to mimic Redux, state management isn't perfect.

I saw this interesting discussion on Reddit about this topic titled [To Redux or not to Redux. To useReducer or useState](https://www.reddit.com/r/reactjs/comments/10uf6vf/to_redux_or_not_to_redux_to_usereducer_or_usestate/ "").

### What do you plan to work on tomorrow?

Tomorrow, I plan on starting my daily plan of working on a code challenge in the morning, studying, and working on a project. I intend to continue to work on studying TypeScript from FullStack Open and working on the Flexbox content on the CSS course from Design Course.

I also would like to begin setting up a portfolio / blog so I can upload these journals and my daily code challenges, as well as document my progress in my projects.
