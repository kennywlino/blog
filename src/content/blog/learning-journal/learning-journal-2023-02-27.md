---
title: Learning Journal - 2023/02/27
description: >-
  Implemented tagging system within Astro personal page. Fixed issue with Astro
  params not working by reading documentation more closely.
pubDate: '2023-02-27T08:00:00.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I worked on implementing tags within my blog so I can tag posts with them and filter posts by tag. This wasn't too bad as there's an article  [Generate tag pages](https://docs.astro.build/en/tutorial/5-astro-api/2/ "") in the Astro docs that walks you through the process.

After following this documentation, I also spent time adding a component to create buttons for each of the tags which redirect to a page with all of the blog posts tagged with the relevant tag. This was slightly interesting since in plain React, we could filter the blog posts and trigger a re-render on-click of the tag buttons, but since Astro encourages static pages, this just redirected to a new URL.

Working on creating the buttons component was also fun as it helped me get to know Astro more in terms of how to query for all posts by using either `Astro.glob()` or `getCollection()` from `astro:content`.  It also helped me understand how to work with the `getStaticPaths()`function better to generate static paths for dynamic routes.

I also learned more about TailwindCSS and DaisyUI as they both came as part of the Astro theme I'm using. Using these two together made adding buttons that fit the theme perfectly without having to fiddle around too much, which made me feel happy as I usually tend to spend too much time tweaking my CSS.

## What are some things you'd like to make special note of?

One thing I'd like to make note of today in general is that it's important to read documentation closely.

For example, I was stuck on the following error for a bit:

```javascript
Possible dynamic routes being matched: src/pages/tags/[tags].astro.
**[getStaticPaths]** A `getStaticPaths()` route pattern was matched, but no matching static path was found for requested [pathname].
```

I was getting this error when trying to access a path I defined via the params I included inside the `getStaticPaths()` function inside `[...tags].astro`.  Since the code for this section was relatively short, I had a hard time troubleshooting what was wrong, until I noticed that the docs said `[tag].astro`instead of `[tags].astro`.
While the name of the param can be anything, this needs to match the key inside the `params` object.

For example with the following code, the file name should be `[tag].astro` and not `[tags]`.

```javascript
export async function getStaticPaths() {
  return [
    { params: { tag: "astro" } },
    { params: { tag: "successes" } },
    { params: { tag: "community" } },
    { params: { tag: "blogging" } },
    { params: { tag: "setbacks" } },
    { params: { tag: "learning in public" } },
  ];
}
```

Later, I ran into the same error with a route pattern being matched but no matching static path. This time, it was when
I was trying to generate the static paths for my blog posts. I noticed that the static paths worked fine for content at the top level of my `src/content/blog` folder, but didn't work for my `dsa` and `learning-journal` folders nested inside.

This was tricky to solve as the solution wasn't the same as before, but I noticed that there were dynamic routes that used the `[param].astro` convention vs. `[...param].astro`convention. I got curious about why, and when I looked this up in the Astro docs, I found this part about [Rest parameters](https://docs.astro.build/en/core-concepts/routing/#rest-parameters "") that allows Astro to match file paths of *any depth* with the `[...param]`convention as opposed to one level like `[param].astro`.  When I tested this out, my links to my DS\&A posts and  learning journals worked fine again.

Simply put, reading and digging through the documentation really helped me solved my issues. In a way, I think it's just the natural progression of getting familiar with new tools-- much like a chef or a baker getting familiar with a new recipe and taking time to understand the process until they can cook it without hardly looking at the recipe card.

## What are some things you're still curious about?

I'd like to know a little bit more about DaisyUI and TailwindCSS, but so far my experience with them both has been very smooth and easy to use.

## What do you plan to work on tomorrow?

Tomorrow, I plan to finish incorporating contextual editing from Tina which will allow me to live preview any draft blog posts as I write them. Although it's an extra feature, I think it'd be cool to implement it since it's a core advantage of using Tina.
