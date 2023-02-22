const fs = require('fs');
const readline = require('readline');

async function askQuestion(question) {
    return new Promise((resolve) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      rl.question(question, (answer) => {
        rl.close();
        resolve(answer);
      });
    });
  }
  
  async function createPost() {
    const title = await askQuestion('Post title: ');
    const description = await askQuestion('Description: ');
    const contentDir = await askQuestion('Content directory: ');
    const date = new Date().toISOString();
    const content = 
  `---
  title: ${title}
  description: ${description}
  pubDatetime: ${date}
  ---
  `;
    const fileName = `src/content/blog/${contentDir}/${title.toLowerCase().replace(/ /g, '-')}.md`;
    fs.writeFile(fileName, content, (error) => {
      if (error) {
        console.error(error);
      } else {
        console.log(`Post created: ${fileName}`);
      }
    });
  }
  
  createPost();
