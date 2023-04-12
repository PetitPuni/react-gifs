import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: null //"3o7TKSjRrfIPjeUGic"
    };
  }

  search = (query) => {
    giphy('UL3meAUSJDRMDUITWfrFvKNuwj9zsKzc').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  changeSelectedGif = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} changeSelectedGif={this.changeSelectedGif} />
        </div>
      </div>
    );
  }
}

export default App;
