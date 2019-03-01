import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

require('../assets/style/test.scss')

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Test',
      list: []
    }
  }
  componentDidMount() {
    // store.subscribe(() =>
    //   console.log(store.getState())
    // ) ;
  }
  toggleState() {
    // store.dispatch(addToCart('Juice 2L', 1, 250))
  }
  handleClick() {
    this.setState((prevState)=>{
      return{
          list: [...prevState.list,'666']
      }
    })
  }
  render() {
    return (
      <div className="test">
        <h2>Test</h2>
        <button onClick={this.toggleState}>click</button>
        {/*第一个例子*/}
        <CSSTransition
          in={this.state.show}
          classNames={{
            enter: 'animated',
            enterActive: 'bounceIn',
            exit: 'animated',
            exitActive: 'bounceOut'
          }}
          timeout={500}
          mountOnEnter={true}
          unmountOnExit={true}
        >
          <div className="box" />
        </CSSTransition>
      </div>
    );
  }
}

export default Test;
