// Write your code here.
import './index.css'

const NavBar = props => {
  const {topScore, score, check} = props

  return (
    <div className="nav-bar-container">
      <div className="nav-img-container">
        <img
          className="nav-logo-style"
          alt="emoji logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
        />
        <h1 className="nav-logo-para">Emoji Game</h1>
      </div>
      {check && (
        <div className="nav-scores-container">
          <p className="scores-style">Score: {score}</p>
          <p className="scores-style">Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
