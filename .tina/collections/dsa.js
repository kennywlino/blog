import blogCollection from './blog.js';

const learningJournal = {
  name: "dsa",
  label: "Data Structures & Algorithms",
  path: "src/content/blog/dsa",
  defaultItem: () => {
    return {
      title: `[Problem Type] - Problem Title`,
      description: `Summary of the problem.`,
      heroImage: 'itemPreview.png',
      tags: ['dsa', 'neetcode150'],
      body: {
        type: 'root',
        children: [
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Problem Domain',
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Input/Output',
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Tests'
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Visualization'
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Algorithm'
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'Code'
              },
            ],
          },
        ],
      },
    }
  },
}

export default Object.assign({}, blogCollection, learningJournal);
