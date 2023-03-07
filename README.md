# Kenny W. Lino's Personal Website

## Overview

This website serves both as a portfolio where I showcase my software development projects and blog about various topics including my daily learnings, data structures & algorithm learnings, etc.

Visit the live version at [kennywlino.dev](http://kennywlino.dev)

## Tech Stack

- [Astro](https://astro.build)
- [tailwindcss](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)


## Template Credit

I'd like to thank the contributors of the [Astro Modern Personal Website](https://github.com/manuelernestog/astro-modern-personal-website) template as it serves as the basis for this website. I've adapted it for my use by adding a tagging system for blog posts and changing the sidebar into a menu bar in the header.

## Project Structure

``` php
├── src/
│   ├── components/
│   │   ├── cs/
│   │   │   ├── TimeLine
│   │   ├── BaseHead.astro
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   └── HorizontalCard.jsx
│   │   └── SideBar.jsx
│   ├── content/
│   │   ├── blog/
│   │   │   ├── post1.md
│   │   │   ├── post2.md
│   │   │   └── post3.md
│   │   ├── store/
│   │   │   ├── item1.md
│   │   │   ├── item2.md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   │   └── PostLayout.astro
│   └── pages/
│   │   ├── blog/
│   │   │   ├── [...page].astro
│   │   │   ├── [slug].astro
│   │   └── cv.astro
│   │   └── index.astro
│   │   └── projects.astro
│   │   └── rss.xml.js
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── social-image.png
│   └── sprofile.jpg
│   └── social_img.webp
├── astro.config.mjs
├── tailwind.config.cjs
├── package.json
└── tsconfig.json
```