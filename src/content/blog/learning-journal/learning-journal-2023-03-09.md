---
title: Learning Journal - 2023/03/09
description: >-
  Focused on adding more finishing touches to this personal page. Ran into
  interesting cross-browser compatibility issue with DaisyUI dropdown on iOS
  Safari.
pubDate: '2023-03-10T07:24:09.000Z'
heroImage: src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What did you learn or work on today? How does it tie into your goals?

Today, all of my attention went to tidying up this personal page since it's due time to share my progress with everyone! I worked on things like cleaning up the links on the sidebar to redirect to my own socials and did some resizing of the text and icons as it looked a tad small on mobile. I also had a full theme selector available originally courtesy of DaisyUI, but I chose to limit it to just a light/dark theme so the experience is more consistent for everyone.

I also did some readjusting of the display of images with my learning journals as the original set-up was a full-size image for each page. Instead, I replaced them with just smaller icons of a notebook to better suit my own personal style.

Finally, I also added pagination to the tags page. For the tags page, it is set-up to be able to view all of the posts under the blog and also filter by tag. However, since the tags are also dynamic, it was tricky figuring out how to get Astro to handle it. I knew that Astro likes files that will become dynamic paths to use the `[file].astro` or `[...file].astro` format. However, I couldn't quite figure out how this would work with the tagging system since both the tags and the page numbers would be dynamic. Luckily, Astro includes a great example of nested pagination in their documentation: [Astro Nested Pagination](https://docs.astro.build/en/core-concepts/routing/#nested-pagination)

## What are some things you'd like to make special note of?

Today, I noticed something interesting for the first time with browser support differences. With the theme selector, I noticed that there was a bug on iOS Safari that didn't allow the menu to close even when tapping outside of the menu or after making a selection. At first, I thought this was because there was a missing event listener. However, it turns out that this is a known issue with the DaisyUI dropdown and iOS not supporting the \:focus and \:focus-within pseudo-selectors? In the end, I decided to scrap using the theme selector but it was interesting to run into this as I haven't had cross-browser compatibility issues.

## What do you plan to work on tomorrow?

Tomorrow, I plan on doing something similar for PicMySong tomorrow where I try to focus most of my attention there to get as much done for it as possible. I'd ideally also like to find time to improve the documentation and write some tests.
