import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Edit from './Components/Edit';
// import Create from './Components/Create';

import './App.css'
// import Error from './Components/Error';
const App = () => {

  // const booksData = [
  //   {
  //     "id": "1",
  //     "title": "The Great Gatsby",
  //     "author": "F. Scott Fitzgerald",
  //     "author_birthday": "September 24, 1500",
  //     "description": "A classic novel set in the Roaring Twenties, exploring themes of wealth, love, and the American Dream.",
  //     "isbn": "978-0-7432-7356-5",
  //     "publication_date": "April 10, 1925",
  //     "cover_image_url": "https://example.com/great-gatsby-cover.jpg"
  //   },
  //   {
  //     "id": "2",
  //     "title": "To Kill a Mockingbird",
  //     "author": "Harper Lee",
  //     "author_birthday": "April 28, 1926",
  //     "description": "A powerful story about racial injustice and moral growth in the American South during the 1930s.",
  //     "isbn": "978-0-06-112008-4",
  //     "publication_date": "July 11, 1960",
  //     "cover_image_url": "https://example.com/to-kill-a-mockingbird-cover.jpg"
  //   },
  //   {
  //     "id": "3",
  //     "title": "1984",
  //     "author": "George Orwell",
  //     "author_birthday": "June 25, 1903",
  //     "description": "A dystopian novel depicting a totalitarian regime and the struggle for individual freedom.",
  //     "isbn": "978-0-452-28423-4",
  //     "publication_date": "June 8, 1949",
  //     "cover_image_url": "https://example.com/1984-cover.jpg"
  //   },
  //   {
  //     "id": "4",
  //     "title": "Pride and Prejudice",
  //     "author": "Jane Austen",
  //     "author_birthday": "December 16, 1775",
  //     "description": "A timeless romance novel set in early 19th-century England, exploring societal norms and love.",
  //     "isbn": "978-1-59308-325-9",
  //     "publication_date": "January 28, 1813",
  //     "cover_image_url": "https://example.com/pride-and-prejudice-cover.jpg"
  //   },
  //   {
  //     "id": "5",
  //     "title": "The Catcher in the Rye",
  //     "author": "J.D. Salinger",
  //     "author_birthday": "January 1, 1919",
  //     "description": "A coming-of-age novel following the rebellious Holden Caulfield in New York City.",
  //     "isbn": "978-0-316-76948-7",
  //     "publication_date": "July 16, 1951",
  //     "cover_image_url": "https://example.com/catcher-in-the-rye-cover.jpg"
  //   },
  //   {
  //     "id": "6",
  //     "title": "The Hobbit",
  //     "author": "J.R.R. Tolkien",
  //     "author_birthday": "January 3, 1892",
  //     "description": "An epic fantasy adventure about Bilbo Baggins and his quest for treasure guarded by a dragon.",
  //     "isbn": "978-0-618-00221-1",
  //     "publication_date": "September 21, 1937",
  //     "cover_image_url": "https://example.com/the-hobbit-cover.jpg"
  //   },
  //   {
  //     "id": "7",
  //     "title": "To Kill a Mockingbird",
  //     "author": "Harper Lee",
  //     "author_birthday": "April 28, 1926",
  //     "description": "To Kill a Mockingbird is a novel by Harper Lee published in 1960. It was immediately successful, winning the Pulitzer Prize, and has become a classic of modern American literature.",
  //     "isbn": "978-0-061-12008-4",
  //     "publication_date": "July 11, 1960",
  //     "cover_image_url": "to_kill_a_mockingbird.jpg"
  //   }
  // ]

  const [id, setId] = useState(0);

  return (
    <div>


      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/body' element={<Body setId = {setId} />} />
          <Route path='/edit/:id' element={<Edit id ={id} />} />
          {/* <Route path='/create' element={<Create />} /> */}
          {/* <Route path='*' element={<Error />} /> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;