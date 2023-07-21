/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import './index.css'
import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {emojiIdList: [], topScore: 0, score: 0, check: true}

  onClickingPlayAgain = () => {
    const {score, topScore} = this.state
    if (score > topScore) {
      this.setState({topScore: score})
    }
    this.setState({score: 0, check: true, emojiIdList: []})
  }

  onClickingTheEmoji = id => {
    const {emojiIdList, score} = this.state
    const checkId = emojiIdList.includes(id)

    if (checkId) {
      this.setState({check: false})
    } else {
      this.setState(prevState => ({
        emojiIdList: [...prevState.emojiIdList, id],
        score: prevState.score + 1,
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  render() {
    const {check, topScore, score} = this.state
    const shuffledList = this.shuffledEmojisList()

    return (
      <div className="bg-container">
        <nav className="nav-bg-container">
          <NavBar check={check} topScore={topScore} score={score} />
        </nav>
        {/* emoji images */}
        {check && (
          <ul className="emoji-bg-container">
            {shuffledList.map(eachItem => (
              <EmojiCard
                onClickingTheEmoji={this.onClickingTheEmoji}
                key={eachItem.emojiName}
                eachEmojiItem={eachItem}
              />
            ))}
          </ul>
        )}
        {/* Win or Lose */}
        {!check && (
          <div className="win-loose-bg-container">
            <WinOrLoseCard
              onClickingPlayAgain={this.onClickingPlayAgain}
              winLoseScore={score}
              winLoseTopScore={topScore}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
