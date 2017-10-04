import React from 'react';
import SearchEmoji from './SearchEmoji';
import SearchResults from './SearchResults';
import emojis from '../data/emojiList'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emojis
    }
    this.emojiFilter = this.emojiFilter.bind(this);
  }

  emojiFilter(text) {
    const filteredEmojis = this.state.emojis.filter((emoji) => {
      return emoji.title.includes(text);
    });
    this.setState({
      emojis: filteredEmojis
    })

  }

  render() {
    return (
      <div>
        <h1>Emoji Search</h1>
        <SearchEmoji
          emojiFilter={this.emojiFilter} />
        <SearchResults
          emojis={this.state.emojis} />
      </div>
    );
  }
}

export default App;

