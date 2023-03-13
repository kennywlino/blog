---
title: Learning Journal - 2023/02/06
description: >-
  Started working with Astro and set up first project. Tested using vite in
  place of create-react-app. Looked into the concept of a monorepo.
pubDate: '2023-02-06T08:00:00.000Z'
heroImage: /src/icons/notebook.svg
tags:
  - learning-journal
draft: false
---

## What was your goal today? (i.e . time spent studying, or improving certain skills) Did you accomplish it, and if not, what can you do differently next time?

Today, my goals were to work on learning more TypeScript, begin learning about Astro to set-up a blog where I can publish these learning journals and daily code challenges, and begin working on my first portfolio project: PicMySong.

I think what went well for me today was learning about Astro and setting up a basic blog with a template. Although I'm very interested in styling and design, I thought it'd be best to leave a custom design for when I have more time.

I didn't manage to work that long on TypeScript today as I got side-tracked in investigating the Obsidian Callouts and Admonitions features, as I was trying to figure out the best way to format code blocks in my notes. I was able to take notes on the general set-up for an Express server in TypeScript, but I wish I had been able to make more progress applying it.

As for setting-up my first portfolio project, I managed to set up a single repo and began the general structure of the frontend and backend content.

I'm excited that I was able to learn a little about a number of tools today, but I'd like to make sure I focus my attention more on building tomorrow.

## What did you learn or work on today? How does it tie into your goals?

Today, the biggest things I learned about was Astro and Vite.

With Astro, I learned that Astro is extremely fast because it renders server-side and doesn't ship with any client-side JavaScript, even if we use a library like React. For instances we do need interactivity, they use a concept they call [islands](https://docs.astro.build/en/concepts/islands/), which allow us to specify interactivity on a single component and leave the rest of the app as pure HTML.

I also learned a little bit about Vite and began to use it to set up my personal project. However, while I know Vite is primarily used as a sub for `create-react-app` , I was curious whether Vite was also something useful for a Node.js backend with Express, so I began to look at that, and found tooling such as [vite-plugin-node](https://www.npmjs.com/package/vite-plugin-node).

## What are some things you're still curious about?

Something that I was curious about today was why we structure our full-stack applications with two separate repos. In my experience, I've always set up a separate repo for the frontend and backend, but I was wondering what the pros and cons of using a single repo to house both were.

I found a couple of resources regarding this topic, some including this Stack Exchange question titled ["Choosing between Single or multiple projects in a git repository"](https://softwareengineering.stackexchange.com/questions/161293/choosing-between-single-or-multiple-projects-in-a-git-repository) and article from Kinsta about the pros and cons of [Monorepo vs. Multi-Repos](https://kinsta.com/blog/monorepo-vs-multi-repo/). While I didn't read too heavily into them to stay on track, the Stack Exchange discussion highlighted the cons of a monorepo approach, such as it making it harder to discover when bugs are introduced, and tracking the history via `git log` is  harder because of the shared history.

On the flip-side, I have seen a number of repos where people have used a `client` and `server` folder in a single repo such as in the [vite-mern-template](https://github.com/apicgg/vite-mern-template) so I'm inclined to believe that it's up to the developer?

## What do you plan to work on tomorrow?

Tomorrow, I plan on focusing my attention more on TypeScript and working on my PicMySong project.
