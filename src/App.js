import React from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";
import { useState } from "react";
const title = "Favorite Movie Directory";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchQuery, setSearchQuery] = useState(false);
  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform
            movieList={movieList}
            setMovieList={setMovieList}
            filterList={filterList}
            setFilterList={setFilterList}
          />
        </div>
        <div className="layout-column w-30">
          <Search
            movieList={movieList}
            setMovieList={setMovieList}
            filterList={filterList}
            setSearchQuery={setSearchQuery}
          />

          <Movieslist movieList={movieList} setMovieList={setMovieList} />
          {searchQuery && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
