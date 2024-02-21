import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {
    searchInput: '',
  }

  handleInputChange = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const filteredSuggestionsList = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    deleteSuggestion = id => {
      const searchResult = filteredSuggestionsList.filter(
        each => each.id !== id)
    }
    return (
      <div className="google-suggestions">
        <div>
          <img
            className="google-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="search-contianer">
          <img
            className="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            placeholder="Search Google"
            value={searchInput}
            onChange={this.handleInputChange}
            className="search-input"
          />
        </div>
        <ul className="suggestion-list">
          {filteredSuggestionsList.map(suggestion => (
            <SuggestionItem
              key={suggestion.id}
              suggestion={suggestion}
              deleteSuggestion={this.deleteSuggestion}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
