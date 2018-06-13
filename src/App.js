import React, { Component } from 'react'
import { hot } from 'react-hot-loader'

import './styles.less'

class App extends Component {
  state = {
    message: 'hello',
  }

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ message: e.target.value })} />
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default hot(module)(App)
