import React from 'react';


class SearchEmoji extends React.Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
    }

    handleSearch(event) {
        const newSearch = event.target.value
        this.props.emojiFilter(newSearch)
    }

    render() {
        return (
            <div>
                <h2>Find your perfect emoji....</h2>

                <form>
                    <textarea onChange={this.handleSearch}></textarea>
                    <button onClick={this.handleSearch}>New Search</button>

                </form>
            </div>
        );
    }
}

export default SearchEmoji;