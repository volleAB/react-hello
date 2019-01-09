import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
import Header from '../components/header'

const Gallery = asyncComponent(() => import('../pages/gallery'))
const Test = asyncComponent(() => import('../pages/test'))

export default class RouteConfig extends Component{
    render(){
      return(
        <BrowserRouter>
            <div id='App'>
                <Header></Header>
                <Route exact path='/' component={Gallery}></Route>
                <Route path='/test' component={Test}></Route>
            </div>
        </BrowserRouter>
      )
    }
  }