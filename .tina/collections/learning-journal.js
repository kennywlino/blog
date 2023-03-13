import blogCollection from './blog.js';

const learningJournal = {
  name: "learning_journal",
  label: "Learning Journal",
  path: "src/content/blog/learning-journal",
  defaultItem: () => {
    return {
      title: `Learning Journal - ${new Date().toLocaleDateString('en-ZA')}`,
      description: `Summary of top 2-3 topics today.`,
      heroImage: '/src/icons/notebook.svg',
      pubDate: new Date().toString(),
      tags: ['learning-journal'],
      body: {
        type: 'root',
        children: [
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'What did you learn or work on today? How does it tie into your goals?',
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'What are some things you\'d like to make special note of?'
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'What are some things you\'re still curious about?'
              },
            ],
          },
          {
            type: 'h2',
            children: [
              {
                type: 'text',
                text: 'What do you plan to work on tomorrow?'
              },
            ],
          },
        ],
      },
    }
  },
}

export default Object.assign({}, blogCollection, learningJournal);
