import React, { Component } from 'react'
import NvdUseState from './components/NvdUseState'
import NvdUseEffect from './components/NvdUseEffect'
import NvdUseContext from './components/NvdUseContext'
import './App.css'
export default class App extends Component {
  render() {
    return (
      <div className='constrainer border mt-3'>
        <h1 className='text-center'>Nguyễn Văn Được-Hook</h1>
        <hr/>
        <NvdUseState/>
        <hr/>
        <NvdUseEffect/>
        <hr/>
        <NvdUseContext/>
      </div>
    )
  }
}
