import React from 'react';
// import {image} from '../assets/stacked-books.jpeg'
import '../home.css'


const Home = () => {
  return (
    <div className='home container-fluid'>

      <div className=' position d-flex'>
        <div className='content me-6'>
          <h5 className='text-lg'>Start your reading journey tomorrow</h5>
          <h1 className='lg:text-6xl text-4xl pacifico-regular mt-2'>Where every page is a new adventure</h1>
          <br />
          <p>From classics to contemporary, our bookstore offers a wide selection of books to suit every taste and interest.
            Start exploring our shelves today and uncover your next literary gem</p>
        </div>

        <img src='https://cdn.discordapp.com/attachments/1018124413176135700/1214391811565428787/iStock-1087508538.webp?ex=65f8f182&is=65e67c82&hm=5b7f7911c0c27f4c7e69fbf40d1964d4ef9ce5a8a7769463d69d50e7b32690ad&' width={'600px'} className='contentImage rounded' alt='bookstack' />
      </div>

    </div>
  );
};

export default Home;