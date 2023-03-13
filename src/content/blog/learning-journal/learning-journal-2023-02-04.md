---
title: Learning Journal - 2023/02/04
description: >-
  Learned how to set up back-end development with TypeScript from FullStack
  Open. Learned how to take Figma designs and convert them into CSS via
  DesignCourse.
pubDate: '2023-02-04T08:00:00.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
---

## What was your goal today? (i.e . time spent studying, or improving certain skills) Did you accomplish it, and if not, what can you do differently next time?

Today, my goal was to continue my momentum from being at Code Fellows and spend at least ~5 hours or so studying. This was also in anticipation of a week-long trip I'm taking from next Wednesday, where I know I won't be able to dedicate as much time studying while I'm away.

I think that I was able to accomplish my goal today by implementing the Day Planner plugin within Obsidian to aid in keep myself on track time-wise and appropriately take breaks as necessary.

## What did you learn or work on today? How does it tie into your goals?

Today, I spent a total of 3 hours learning about TypeScript and its benefits by working on the TypeScript module from [FullStack Open](https://fullstackopen.com/en/part9 "").  I learned that the main benefits of TypeScript are type checking-- meaning that we can assign expected types to functions and variables, as well as implicit code level documentation.
I also learned how to set-up a TypeScript app using `ts-node` and `tsc` as a dev dependencies to help us compile TypeScript and how to install types for external libraries. I also used `ts-node-dev` as the TypeScript equivalent of `nodemon` for watching our server files during development.

I also spent a total of 2 hours working on the Interactive CSS from [DesignCourse](https://designcourse.com/css "") and learning how to take designs from Figma and convert them to appropriate CSS to build a simple card.  In particular, I learned about the importance of using relative values like `rem` and `em` and how to convert static values like pixels. See [Codepen.io: Simple Card from Design Course](https://codepen.io/kennywlino/pen/oNMVjOz "").

I chose to work on these things today since TypeScript is a popular tool used by JS developers and because I wanted to work towards improving my skills in testing, which TypeScript lends itself to by preventing us from having certain bugs in the first place. Working on CSS ties into my goal to be able to enhance my skills as a front-end dev and being able to align myself with my goal of "helping websites dress their best".

## What are some things you'd like to make special note of?

The coolest thing I learned about was using 62.5% as the `font-size` for the HTML tag as this makes the root font-size 10px from the browser default of 16px. This is useful for converting `px`  into `rem` as it allows us to use decimals (e.g. 10px = 1rem so 89.5px = 8.95px) instead of dividing by 16px.

## What are some things you're still curious about?

When working on the simple card, I understood how to convert values over from Figma to CSS for the most part, but for some reason, I couldn't figure out why the text didn't turn out exactly like the mock. From what I learned, it seemed like I should've been able to set the font-size to 3rem (with the HTML `font-size` set to 62.5%) to match the 30px I saw in the mock, but this didn't quite work.

## What do you plan to work on tomorrow?

Tomorrow, I plan on continuing to study TypeScript doing a high-level pass through the [React with types](https://fullstackopen.com/en/part9/react_with_types "") section of the FullStack Open TypeScript module. I then plan to go back to the module on using types with Express apps to deepen my understanding there.

I also plan to continue working on the Interactive CSS course by working on the Flexbox module next and hopefully finishing the module tomorrow if time allows it since I'm already relative familiar with Flexbox thanks to the Odin Project.
