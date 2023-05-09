// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {status: true}

  getBtnTxt = () => {
    const {status} = this.state

    console.log(status)

    return status ? 'Light Mode' : 'Dark Mode'
  }

  changeStatus = () => {
    this.setState(prevState => ({status: !prevState.status}))
  }

  bgEle = () => {
    const {status} = this.state

    return status ? 'white' : 'black'
  }

  headEle = () => {
    const {status} = this.state

    return status ? 'black-head' : 'white-head'
  }

  render() {
    const buttonText = this.getBtnTxt()
    const bgEl = this.bgEle()
    const headEl = this.headEle()

    return (
      <div className={bgEl}>
        <h1 className={headEl}>Click To Change Mode</h1>
        <button type="button" onClick={this.changeStatus}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default LightDarkMode
