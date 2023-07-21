// Write your code here.
import './index.css'

const WinOrLoseCard = props => {
  const {winLoseScore, onClickingPlayAgain} = props

  const onClickPlayagain = () => {
    onClickingPlayAgain()
  }

  const checkWin = parseInt(winLoseScore) === 12
  const winLoseTitle = checkWin ? 'You Won' : 'You Lose'

  const imgUrl = checkWin
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  return (
    <>
      <div className="contents-card">
        <h1 className="win-lose-title">{winLoseTitle}</h1>
        <p className="win-lose-para">Best Score</p>
        <p className="win-lose-score">{winLoseScore}/12</p>
        <button
          onClick={onClickPlayagain}
          type="button"
          className="win-lose-btn"
        >
          Play Again
        </button>
      </div>
      <img className="win-lose-img" alt="win or lose" src={imgUrl} />
    </>
  )
}

export default WinOrLoseCard
