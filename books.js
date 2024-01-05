'use strict';

const DELAY = 1000;
const MAX_RATING = 5;
const MIN_RATING = 0;
const RED = '\x1b[31m';

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

const calculateRating = ({ likes, dislikes }) => {
  const totalVotes = likes + dislikes;
  const rating = totalVotes ? (likes / totalVotes) * MAX_RATING : MIN_RATING;
  return rating;
};

const formulateRatings = (items) => {
  const itemsWithRatings = items.map((item) => {
    const rating = calculateRating(item);
    return {
      ...item,
      rating,
    };
  });
  return itemsWithRatings;
};

const filterBooks = (category, books) => {
  const booksInCategory = [];
  for (const book of books) {
    if (book.category === category) {
      booksInCategory.push({
        title: book.title,
        author: book.author,
        rating: book.rating,
      });
    }
  }
  return booksInCategory;
};

const checkEmpty = (items) => {
  if (items.length === 0) throw 'No items found.';
};

const printBooks = (books) => {
  for (const { title, author, rating } of books) {
    console.log(
      `Title: ${title}, Author: ${author}, Rating: ${rating.toFixed(1)}`,
    );
  }
};

const main = async () => {
  try {
    const fetched = await simulateFetch(bookCatalog);
    const rated = formulateRatings(fetched);
    const category = 'Programming';
    const filtered = filterBooks(category, rated);
    checkEmpty(filtered);
    printBooks(filtered);
  } catch (err) {
    console.error(`${RED}${err}`);
  }
};

main();
