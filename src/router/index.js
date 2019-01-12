import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { TransitionGroup, CSSTransition } from 'react-transition-group'
import asyncComponent from '../utils/asyncComponent'
import Header from '../components/header'

const Home = asyncComponent(() => import('../pages/home'))
const Gallery = asyncComponent(() => import('../pages/gallery'))
const About = asyncComponent(() => import('../pages/about'))
const Topics = asyncComponent(() => import('../pages/topics'))
const Test = asyncComponent(() => import('../pages/test'))

function router() {
  return(
    <Router>
        <Fragment>
          <Header></Header>
          <Route exact path='/' component={Home}></Route>
          <Route path='/gallery' component={Gallery}></Route>
          <Route path='/about' component={About}></Route>
          <Route path='/topics' component={Topics}></Route>
          <Route path='/test' component={Test}></Route>
        </Fragment>
    </Router>
  )
}

export default router