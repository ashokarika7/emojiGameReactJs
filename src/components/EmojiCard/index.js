// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {eachEmojiItem, onClickingTheEmoji} = props
  const {emojiUrl, emojiName, id} = eachEmojiItem

  const onClickingEmojiBtn = () => {
    onClickingTheEmoji(id)
  }

  return (
    <li className="emoji-bg-card">
      <button
        onClick={onClickingEmojiBtn}
        type="button"
        className="emoji-img-button"
      >
        <img className="emoji-img" alt={emojiName} src={emojiUrl} />
      </button>
    </li>
  )
}

export default EmojiCard
