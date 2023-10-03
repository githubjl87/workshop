import React, { useState } from "react";
import SearchBar from "./SearchBar";
import GifList from "./GifList";
import Gif from "./Gif";

const App = () => {
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  // const selectedGifId = "gG6OcTSRWaSis"
  const [selectedGifId, setSelectedGifId] = useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  return (
    <div>
      <div className='left-scene'>
        <SearchBar />
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
