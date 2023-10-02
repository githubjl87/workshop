import React from 'react';
import SearchBar from './SearchBar';
import GifList from './GifList';
import Gif from './Gif';

const App = () => {
  return (
    <div>
      <div className='left-scene'>
        <SearchBar />
        <Gif />
      </div>
      <div className='right-scene'>
        <GifList />
      </div>

    </div>
  );
};

export default App;
