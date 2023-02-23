---
author: Kenny W. Lino
title: Learning Journal - 2023/02/16
description: >-
  First day back after a vacation. Worked on PicMySong project wireframes and
  fleshing out image-to-words.
pubDatetime: 2023-02-16T08:00:00.000Z
tags:
  - learning-journal
---

## What was your goal today? (i.e . time spent studying, or improving certain skills) Did you accomplish it, and if not, what can you do differently next time?

Today, my goal was to get back into a consistent routine after being away on vacation for the past week. I was able to work on a few coding challenges during my time away, but I still have some notes to add to those challenges so I'd like to go back and fix them soon.

I was able to work a full-day and feel productive by working on my daily coding challenge and project.

## What did you learn or work on today? How does it tie into your goals?

Today, I worked on a coding challenge that took me quite sometime to fully digest called [Valid Sudoku](https://leetcode.com/problems/valid-sudoku/). While I had an idea of how to solve the issue of checking rows and columns, understanding how to check each 3 x 3 grid was tricky, so I took a look at the NeetCode solution to get an idea before finishing. Seeing the Python solution in the video made it seem simple, but since JS doesn't have a method like Python's defaultdict, my code ended up being a little more cumbersome in the end. I did find the NeetCode JS solution a little confusing as well, but overall I think the trick for the 3 x 3 grids-- using the (column // 3 and row // 3) to find the current 3 x 3 grid -- was quite straightforward.

I also was able to do a lot more brainstorming for my PicMySong project. A week ago, when I initially started working on this project, I got curious about what would be the appropriate set-up so I started looking into things like Vite and the Spotify API. However, coming back to the project again today, I thought it was important to get a clear idea of possible features and the minimum viable product (MVP) especially since I can get carried away. I organized these into priorities and wrote out some user stories that help shape the vision for the app.

I did some research to figure out what an optimal layout would be for the front page and history page and did some wireframing. I also took a look at the Tailwind UI components to quickly set up the front page with a template for now.

I also gave some thought as to what my image-to-words algorithm would be like. Since the point of the PicMySong application is to find a song given an image, I need to devise a way to get useful information from an image that can be used to search for songs. This can take the shape of labels as seen with most image ML APIs, but some also offer options like a description/caption generator. Depending on how generic or how specific these parameters are, the type and amount of songs we get can be really limited or too broad for an image.
To start, I began setting up my AWS account to use the Rekognition API for images.

## What are some things you'd like to make special note of?

Today, what I found particularly useful was UX Stack Exchange. I was particularly curious about what a good UI would be for URL / file upload since that would be the main display for PicMySong and I found [Least confusing UI for URL and file upload](https://ux.stackexchange.com/questions/21930/whats-the-least-confusing-ui-for-offering-to-either-enter-a-url-or-upload-a-fil) . With a little digging, I also found some inspiration to find [ways of showing linear history](https://ux.stackexchange.com/questions/96302/ways-of-showing-linear-history) as well.

As a full-stack developer, sometimes it feels like we have to wear a lot of hats and then some, especially when it comes to knowing what good front-end practices are. Finding this website gave me some quick knowledge on UI/UX without having to dig deep into a UI/UX course so I'm glad I found it.

## What are some things you're still curious about?

Right now, I'm really curious about Firebase and Supabase. From what I was researching, I learned from Fireship's [I tried 5 Firebase alternatives](https://youtu.be/SXmYUalHyYk) video that Firebase is a backend-as-a-service (BaaS) and offers integrations for authentication, but locks you into the Google atmosphere. Supabase seems to be like Firebase but open-source with some missing features.

I'm considering using one of these for my PicMySong project as I didn't enjoy hand-coding auth functionality and because I like the idea of having a platform-backed form of auth as that would provide users with better security.

## What do you plan to work on tomorrow?

Tomorrow, I'm planning finally deploying a blog for this content and cleaning any DS\&A/whiteboard posts I'd like to include as well.

Aside from that, I plan to work on my usual daily coding challenge and continue working on PicMySong by continuing my work with the AWS Image Rekognition API and looking into possible music database APIs. Before, I used Spotify with my team for this app, but I'd like to see if there's a way to make the app less restrictive.
