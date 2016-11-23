import React from 'react'
import Infinite from 'react-infinite'
import { Link } from 'react-router'

const Post = props => {
  return (
    const ListItem = React.createClass({
      render () => {
        return <div className="infin-list-item">
          Blog Post {this.props.num}
        </div>
      }
    })

    const InfiniteList = React.createClass({
      getInitialState () => {
        return {
          elements: this.buildElements( 0, 20 ),
          isInfiniteLoading: false
        }
      },

      buildElements (start, end) => {
        const elements = []
        for (var i = start; i < end; i++) {
          elements.push(<ListItem key={i} num={i}/>)
        }
        return elements
      },

      handleInfiniteLoad () => {
        let that = this
        this.setState({
          isInfiniteLoading: true
        })
        setTimeout(() => {
          const elemLength = that.state.elements.length,
              newElements = that.buildElements(elemLength, elemLength + 1000)
          that.setState({
            isInfiniteLoading: false,
            elements: that.state.elements.concat(newElements)
          })
        }, 1000)
      },

      elementInfiniteLoad () => {
        return
        <div className="infin-list-item">
          Loading...
        </div>
      },

      render () {
        return <Infinite elementHeight={40}
                         containerHeight={250}
                         infiniteLoadBeginEdgeOffset={200}
                         onInfiniteLoad={this.handleInfiniteLoad}
                         loadingSpinnerDelegate={this.elementInfiniteLoad()}
                         isInfiniteLoading={this.state.isInfiniteLoading}
                         >
            {this.state.elements}
        </Infinite>;
      }
    })
  )

ReactDOM.render(<InfiniteList/>, document.getElementById('react-example-one'))
export default Post
