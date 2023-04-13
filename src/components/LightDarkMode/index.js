import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {buttonName: 'Dark Mode'}

  buttonClick = () => {
    let {buttonName} = this.state
    if (buttonName === 'Dark Mode') {
      buttonName = 'Light Mode'
    } else {
      buttonName = 'Dark Mode'
    }

    this.setState({buttonName})
  }

  render() {
    const {buttonName} = this.state

    return (
      <div className="bgMain">
        <div className={buttonName === 'Dark Mode' ? 'cardD' : 'cardL'}>
          <h1 className={buttonName === 'Dark Mode' ? 'headingD' : 'headingL'}>
            Click To Change Mode
          </h1>
          <button
            className={buttonName === 'Dark Mode' ? 'buttonD' : 'buttonL'}
            onClick={this.buttonClick}
            type="button"
          >
            {buttonName === 'Dark Mode' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
