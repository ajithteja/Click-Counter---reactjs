import './index.css'
import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  onclickIncrease = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="flex-container">
          <h1 className="heading2 heading">
            The Button has been clicked{' '}
            <span className="countNum">{count} </span>
            times
          </h1>

          <p className="description">Click the button to increase the count!</p>
          <button
            onClick={this.onclickIncrease}
            className="button"
            type="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
