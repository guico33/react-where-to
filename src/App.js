import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { getNews } from './api'

import styles from './styles.less'

class App extends Component {
  state = {
    message: 'hello',
  }

  componentDidMount() {
    getNews('se').then(console.log)
  }

  render() {
    return (
      <div>
        <input onChange={e => this.setState({ message: e.target.value })} />
        <p className={styles.purple}>{this.state.message}</p>
      </div>
    )
  }
}

export default hot(module)(App)
