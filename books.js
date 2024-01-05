'use strict';

const DELAY = 1000;

const bookCatalog = [
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    category: 'Programming',
    likes: 25,
    dislikes: 3,
  },
  
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    category: 'Self-Development',
    likes: 18,
    dislikes: 2,
  },
  
  {
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    category: 'Fantasy',
    likes: 17,
    dislikes: 6,
  },
  
  {
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    category: 'Programming',
    likes: 28,
    dislikes: 4,
  },
  
  {
    title: 'The 7 Habits of Highly Effective People',
    author: 'Stephen R. Covey',
    category: 'Self-Development',
    likes: 22,
    dislikes: 5,
  },
];

const simulateFetch = (data) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, DELAY);
  });

const main = async () => {
  const fetched = await simulateFetch(bookCatalog);
};

main();
