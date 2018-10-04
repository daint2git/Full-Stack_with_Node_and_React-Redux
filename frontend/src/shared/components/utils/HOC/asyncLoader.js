import React from 'react'
import getDisplayName from './utils/getDisplayName'

class AsyncLoaderProvider extends React.Component {
  state = { loaded: false }

  runTask() {
    this.props
      .task()
      .then(() => this.setState({ loaded: true }))
      .catch(err => { throw err })
  }

  shouldComponentUpdate(_, nextState) {
    return this.state.loaded || this.state.loaded !== nextState.loaded
  }

  componentDidMount() {
    if (!this.state.loaded) this.runTask()
  }

  render() {
    const { Provider, children } = this.props
    return <Provider value={this.state}>{children}</Provider>
  }
}

const asyncLoader = task => Component => {
  const { Provider, Consumer } = React.createContext()
  const AsyncLoader = props => (
    <AsyncLoaderProvider task={() => task(props)} Provider={Provider}>
      <Consumer>
        {({ loaded }) => loaded && <Component {...props} />}
      </Consumer>
    </AsyncLoaderProvider>
  )
  AsyncLoader.displayName = `asyncLoader(${getDisplayName(Component)})`
  return AsyncLoader
}

export default asyncLoader