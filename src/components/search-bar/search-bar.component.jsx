import React from 'react';
import './search-bar.style.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {search: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({search: event.target.value});
      }
    
      handleSubmit(event) {
        event.preventDefault();
        var str = this.state.search
        var replaced = str.replace(' ', '+');
        fetch(`https://api.spotify.com/v1/search?q=${replaced}&type=track`, {
            method: 'GET',
            headers: { 
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization' : 'Bearer ' + this.props.token}
        }).then(response => response.json()).then(output => this.props.updateItems(output.tracks.items) );
    
      }
    
      render() {
        return (
            <div className="search-bar">
                <form className="search-form" onSubmit={this.handleSubmit}>
                    <label>
                    <input className="input" placeholder="Search you Favourite Music" type="text" value={this.state.search} onChange={this.handleChange} />
                    </label>
                    <button className="submit-button" type="submit"><FontAwesomeIcon className="submit-icon"  icon={faSearch} /></button>
                </form>

                <h2 className="title">Search In from the wide range of collections.</h2>
            </div>

        );
      }
}

export default SearchBar;