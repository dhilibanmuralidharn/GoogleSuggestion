import './index.css'

const SuggestionItem = props => {
  const {suggestionObject} = props
  const {suggestion, id} = suggestionObject

  onDelete = () => {
    deleteSuggestion(id)
  }

  return (
    <li className="suggestion-item">
      {suggestion}
      <img
        className="arrow-icon"
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        onClick={onDelete}
      />
    </li>
  )
}

export default SuggestionItem
