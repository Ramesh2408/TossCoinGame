// Write your code here
import {Component} from 'react'
import './index.css'

const head_image = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tail_image = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: head_image,
    headsCount: 0,
    tailsCount: 0,
  }
  onclickcoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latesttailCount = tailsCount

    if (toss === 0) {
      tossImage = head_image
      latestHeadCount += 1
    } else {
      tossImage = tail_image
      latesttailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latesttailCount,
    })
  }
  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading"> Coin Toss Game </h1>
          <p className="para"> Heads (or) Tails </p>
          <img src={tossResultImage} className="image" alt="toss result" />
          <br />
          <button className="button" onClick={this.onclickcoin}>
            {' '}
            Toss Coin{' '}
          </button>

          <p className="para1"> Total: {totalCount} </p>
          <p className="para1"> Heads: {totalCount} </p>
          <p className="para1"> Tails: {totalCount} </p>
        </div>
      </div>
    )
  }
}
export default CoinToss
