---
title: Learning Journal - 2023/03/13
description: Summary of top 2-3 topics today.
pubDate: '2023-03-14T01:01:03.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What did you learn or work on today? How does it tie into your goals?

Today, I worked on figuring out how the best ways to embed SVGs into my projects. Last week, I initially chose to add some style to my personal page by using icons from Icons8, but on second glance I realized I didn't like the look after all. After looking at the various free options out there, I realized the icons I was the most pleased with were the icons from The Noun Project as they all held a level of cleanliness and consistency that wasn't necessarily true of all the other icon libraries out there. Since the free icons they offer include embedded text within the SVG images themselves, I bit the bullet and purchased a year-long subscription since it seemed like it would quickly pay itself off in value.

However, as I started try and embed them, I ran into the issue of figuring out how to style them, as \<img> tags won't let you target the SVG via CSS. CSS Tricks had a great article on [Using SVGs](https://css-tricks.com/using-svg/ ""). After trying these methods out, I realized that this was a common issue for front-end development in general as I ran into packages like [SVGR](https://react-svgr.com/ "") that comes built-in with `create-react-app` and converts all SVG files into a React component for you. Since I've been using Astro for my personal page and Vite for PicMySong, I found SVGR replacements for each: [Astro Icon](https://github.com/natemoo-re/astro-icon "") and [vite-plugin-svgr](https://www.npmjs.com/package/vite-plugin-svgr "").

After replacing the icons with the new SVGs, I also worked on a few smaller updates within my personal page project, including adding in drafts on my posts, restructuring some components to be more flexible, and removing the about me page. Finally, I started setting up my Projects collection and components so that I can have individual pages for my projects.

From there, I switched to PicMySong for a bit, where I also intended to replace the preliminary icons I had with new ones from The Noun Project. I also wanted to see how to make a small animation with the SVGs in order to make the page slightly more interactive, so I read some of the MDN documentation and did some additional research.

## What are some things you'd like to make special note of?

One really cool thing I learned today as I was looking into how to animate SVGs is that we can target individual elements within an SVG graphic. In this YouTube video, [Learn To Build An SVG Animation With CSS](https://www.youtube.com/watch?v=gWai7fYp9PY ""), the creator shows how to animate a person on a bicycle by creating groups within the SVG itself for the wheels, person, frame, etc. and targeting each one via the CSS and creating keyframes.

I knew that animated SVG was possible, but it never quite clicked to me that it could get quite sophisticated, so I'm glad I skimmed this video today.

## What are some things you're still curious about?

Running into this issue with figuring out the best way to work with SVGs, especially if I want to have styling control over them, made me curious about other quirks about JavaScript and web development that are out there. In the end, the solution to my problem of changing SVGs into React components ended up being very handy, but it was a bit of a pain to finally get to the solution. 

I considered a number of hacky ways including switching over to  .png files and creating a dark version and light version and having a variable that would load the correct version, but in the end I chose to figure out the bigger problem.

I feel like I had a similar issue where something I thought would be easy ended up being quite confusion when I was trying to read image files on the back-end for PicMySong. I couldn't understand what format the file needed to be in as I kept running into various jargon like blob and base64 that something that seemed like it should just be "function takes image and gives labels" ended up taking me a while to solve.

Hopefully running into these issues now has helped me prepare for other similar ones in the future.

## What do you plan to work on tomorrow?

The past few days, I think my main goal has been to complete the set-up for this personal page and PicMySong, but it has certainly been challenging to lockdown how much time I need to finish everything, especially since everything just takes longer than it seems. However, I think it's safe to say that the only thing really left for my personal page is to upload my projects. 

Originally, I planned to highlight just PicMySong once I wrapped it up, but I realized that it's also important to share some of the other projects I've worked on along the way, so I'd like to find time to do some polishing on some older projects from my bootcamp and add them to my portfolio as well.
