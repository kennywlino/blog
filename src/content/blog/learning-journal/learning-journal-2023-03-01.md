---
title: Learning Journal - 2023/03/01
description: >-
  Got personal website in working condition. Set-up endpoint to handle image
  upload with Multer on PicMySong back-end.
pubDate: '2023-03-01T08:00:00.000Z'
heroImage: "/assets/notebook.png"
tags:
  - learning-journal
---

## What did you learn or work on today? How does it tie into your goals?

Today, I was able to wrap up the bug I was experiencing from yesterday where I couldn't save posts when editing via the Tina interface. After slowly rebuilding the Tina config.js piece-by-piece, I finally found that the culprit was the pubDate field on my defaultItem. I also spent time adding some small touches like adding buttons for LinkedIn and GitHub as well.

In terms of code challenges, this week, I've been working on the Two Pointer problems from [NeetCode](https://neetcode.io ""). Today, I did the [Container with the Most Water](https://leetcode.com/problems/container-with-most-water/ "") problem. At first, it was a bit hard to take in since it was more conceptual, but after spending time digesting, I think I was finally able to see a pattern in how to use pointers to solve a problem like this. By using two pointers starting from each end, we can use the distance between the two pointers and the height values, keep track of a max value and update it whenever the amount of water is larger until we reach the middle.

Finally, I returned to working on my PicMySong project by spending time on the back-end and adding Multer to handle image file uploads. Perhaps it was the change of scenary from wrestling with Tina and a little of Astro, but this went pretty smoothly. I was able to test a POST request via Thunderclient by uploading an image file to my endpoint, which was then processed by the AWS Rekognition API to return labels.

## What are some things you'd like to make special note of?

Today, I think I'd like to make special note of the concept of minimally viable product (MVP). This was something that we used a lot in my coding bootcamp, Code Fellows, to figure out what elements we needed to get our projects up and running.

The reason I wanted to make note of this today was because although I think I finally have my website in a good place where I can finally implement a workflow to publish posts, there are still a number of features I'd like to add in order to improve the whole experience.

For example, I was really aiming to integrate the contextual editing feature from Tina, but I also wanted to write and integrate a schema for project posts like I have for my learning journal and data structure & algorithms posts. I also wanted to include tags on the cards I have on each post, and I thought having some micro-animations could be intriguing as well to add more character to the page.

However, as much as I'd like to continue to build these features out now, I'd also like to find time to work on other projects and get those off the ground as I'd also like to have projects for my portfolio. In other words, I think working on this project for the past two weeks or so has been a great learning experience as I venture back into self-studying, as it's helped me see how I can prioritize my time and ideas better to get the most accomplished.

## What are some things you're still curious about?

Thinking about my PicMySong project again, I think my mind is thinking a little bit about system design. I believe I mentioned it previously, but I am curious about how to utilize Supabase and how it would make building the back-end of the application easier.

I'm also thinking about how this could be done via AWS tools since I'm already using the AWS Rekognition API. However, as I mentioned above about trying to keep focus on the MVP, I'd like to come back to these ideas a little later, once I have a more concrete version of my app working.

## What do you plan to work on tomorrow?

Tomorrow, I plan on focusing my attention back on PicMySong. Since I was able to get the endpoint for getting labels from images working, I want to find a music database API that could help me find any relevant entities, whether artist, songs, albums or even song lyrics that contain the labels.

At first, I saw the the [MusixMatch API](https://developer.musixmatch.com/documentation/api-reference/track-search "") allows you to search for a track using a keyword, and it can check artists, tracks and lyrics all through a single search. It also allows you to sort the results by popularity, which seems important since we also want to return songs that users are likely to know. However, after looking closely, this particular search is only available with their commercial plan, so I need to find an alternative.
