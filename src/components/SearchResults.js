import React from 'react';
import EmojiMatch from './EmojiMatch';
import PT from 'prop-types';

class SearchResults extends React.Component {
    render() {
        return (
            <div>
                <h3>Search Results</h3>
                <ul>
                    {this.props.emojis.map((emoji, index) => {
                        return (
                            <li
                                key={emoji.title}>
                                <EmojiMatch
                                    index={index}
                                    keywords={emoji.keywords}
                                    symbol={emoji.symbol}
                                    title={emoji.title}
                                />
                                {emoji.symbol}
                                {emoji.title}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
    static propTypes = {
        emojis: PT.array.isRequired
    }
}

export default SearchResults;