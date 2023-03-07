---
title: Learning Journal - 2023/03/03
description: >-
  Updated PicMySong image upload component to be a dropzone. Worked on
  readjusting get labels function on back-end to better suit music search later.
pubDate: '2023-03-03T08:00:00.000Z'
heroImage: '' 
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I spent some more time working on setting up the front-end of my PicMySong application by changing my image upload component to be a dropzone to allow users to drag-and-drop images if possible, and have the keyword 'upload' be an option too. Setting this up with TailwindCSS made things easier than expected, but I did notice that the drag-and-drop didn't work out of the box, even though I was able to follow TailwindCSS component libraries like [Flowbite](https://flowbite.com/docs/forms/file-input/ "") whose dropzone component made it seem like it would.

I also spent some time wiring up the image upload form with the back-end to ensure that the image was getting upload as expected, and then I checked whether the images were getting processed by the AWS Rekognition API as expected after.

From there, I also worked with readjusting the `getLabels()` functionality I had by adding a helper function to filter the data that comes back from the API in order to get  search for music.

## What are some things you'd like to make special note of?

One thing I want to make note of is that Vite has a different pattern for using environment variables compared to vanilla React. I don't know if it's my brain playing tricks on me, but when I was first testing using my environment variables to point to my server, I swore that it had worked with using `process.env`, so I ended up trying a few things such as installing `dotenv` or `npm install --save @types/node` following this question [Using process.env in TypeScript](https://stackoverflow.com/questions/45194598/using-process-env-in-typescript "").

After that didn't work, I started to check the Vite docs where I learned that Vite uses `import.meta.env` instead of `process.env` as documented on the [Env Variables and Modes](https://vitejs.dev/guide/env-and-mode.html "") page.

## What are some things you're still curious about?

I'm a little bit curious about how to make my front-end layout snap to each section. For the layout, I have it set up to be a full-screen page for each the hero, the image upload and the results. Since I'm playing it by ear so far with TailwindCSS and CSS in general, I didn't know that there was already a tool that existed: [Scroll Snap](https://tailwindcss.com/docs/scroll-snap-type ""). I'm excited to incorporated this when I get a chance.

Since I wanted to get better with TailwindCSS and styling the front-end overall, I also was considering some small animations I could add to the PicMySong project to have a more unique touch. I had seen example layouts with blurry colors in the background, and when I was reading through a discussion on one of the tech subreddits I peruse occasionally, I saw someone point to this tutorial from TailwindCSS on YouTube: [Building Blurry, Animated Background Shapes with Tailwind CSS](https://www.youtube.com/watch?v=Tmkr2kKUEgU "").

## What do you plan to work on tomorrow?

Tomorrow, I'd like to work on seeing if I can clean up the back-end a little more by organizing the helper functions and routes better. I also would like to add some tests in order to rely on automated testing instead of having to manual run checks. I also plan on incorporating the scroll snap I was discussing, as well as seeing how I can get the drag-and-drop to work for the image upload if possible.
