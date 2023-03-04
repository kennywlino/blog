---
title: Learning Journal - 2023/02/21
description: Summary of top 2-3 topics today.
pubDate: '2023-02-21T08:00:00.000Z'
heroImage: /assets/milad-fakurian-3iFOosUelfk-unsplash.jpeg
tags:
  - learning-journal
---

## What was your goal today? (i.e . time spent studying, or improving certain skills) Did you accomplish it, and if not, what can you do differently next time?

Today, my main goal was to get the AWS Rekognition API working by making sure I can pass in a local image and get results back from the API call. I also wanted to figure out what I wanted to do about my blog since I originally intended to have it ready a while ago.

I was able to finally get the AWS API working which was great as it's an important part of getting my PicMySong application working.

As for my blog, I thought I would just revert back to using my old Hugo set-up, but in doing that, I realized that making new posts with the necessary YAML, although easier with a VSCode plug-in was still a little lacking in experience. This pushed me in the direction of figuring out how to use a CMS to manage my content after all, since figuring out the filenames and asset management gets a little tedious after a while.

## What did you learn or work on today? How does it tie into your goals?

Today, I learned about a couple of new things, one which was Multer, an Express middleware used to handle uploading files. Since I'm intending to allow users to give URLs or upload images to generate songs with PicMySong, I needed to figure out how to allow that on an endpoint which is how I discovered Multer.

Aside from that, I was brought back yet again to a technology I saw when considering using Astro to make my blog-- Cloudinary. At first, I was planning to store the images in the MongoDB database directly, but online discussions like this thread from Reddit, [Do I need to use Cloudinary?](https://www.reddit.com/r/learnprogramming/comments/uc0jj2/do\_i\_need\_to\_use\_cloudinary\_in\_order\_to\_store/) suggest using Cloudinary as it reduces the load on the database.

I also finally bit the bullet and chose to learn about the content management system, Tina, which is a Git-based CMS that is replacing another popular one called Forestry. I considered using the Netlify CMS, but since Netlify CMS requires you to deploy to Netlify to use it, I thought it'd be nice to have a little more freedom and thus I chose Tina.

At first I hesitated to go this direction as I felt like I was getting side-tracked from working on my main project, but the initial set-up was easier than I expected.

## What are some things you'd like to make special note of?

I would say that being able to take a break from a project and coming back to it the day after or whenever has been very helpful. Last week, when I initially started working with the AWS SDK, I felt a bit overwhelmed as I wasn't understanding how to get an image in the right format to use the Rekognition API correctly.

That also made me want to prioritize working on PicMySong and deferring working on setting up my portfolio/blog later, but in the end I realized that using a CMS could make managing the posts and assets a lot easier.

In the end, I was pleasantly surprised by my experiencing trying to set up Tina, and I got the AWS API to finally work, so sometimes it really just takes time.

## What are some things you're still curious about?

I think in general, I've been feeling very eager to learn more about some of the recently popular JS technologies like Next.js and Vercel as a whole. Although I've decided to use Astro for my blog since I expect it to be pretty static, Next.js seems to be more common and popular so I briefly weighed the options. Given that Astro doesn't ship a website with any JS if it's not necessary, the final bundle is much smaller than a Next.js app according to posts like [Migrating from Next.js to Astro](https://johnzanussi.com/posts/nextjs-to-astro-migration "") from John Zanussi.

I'm sure I'll have time to revisit Next.js, but it has been nice getting familiar with these technologies.

## What do you plan to work on tomorrow?

Tomorrow, I plan on making more progress on setting up an endpoint to upload images using Multer. I also plan on spending more time getting more familiar with Tina in hopes of making my blogging process more smoother.
