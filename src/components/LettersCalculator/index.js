/* eslint-disable no-unused-vars */
// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {count: 0}

  onCount = event => {
    console.log(event.target.value)
    this.setState(prevSate => ({count: prevSate.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div>
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div className="label">
            <label className="heading" htmlFor="joinHead">
              Enter the phrase
            </label>
            <input
              type="text"
              placeholder="Enter the phrase"
              className="search-bar"
              onChange={this.onCount}
              id="joinHead"
            />
          </div>

          <p className="counting">No.of letters: {count}</p>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
