import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Gif from "./Gif";

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "gG6OcTSRWaSis"
  const [selectedGifId, setSelectedGifId] = useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  const searchGifs = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // this.setState({ giIdList: res.data.map(gif => gif.id) });
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  };

  return (
    <div>
      <div className='left-scene'>
        <SearchBar searchGifs={searchGifs} />
        <div className='selected-gif'>
        <Gif gifId={selectedGifId} />
        </div>
      </div>
      <div className='right-scene'>
        <GifList gifIds={gifIds} setSelectedGifId={setSelectedGifId} />
      </div>

    </div>
  );
};

export default App;
