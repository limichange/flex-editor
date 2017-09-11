import { InputNumber } from 'antd';
import React, { Component } from 'react';
import { Layout } from 'antd';
import store from './store'
import { observer } from 'mobx-react'

@observer
export default class PlayerPanel extends Component {
  render() {

    let c = []

    for (let i = 0; i < store.app.num; i++) {
      c.push(
        <div key={i} style={style.div}>
          div {i}
        </div>
      )
    }

    return (
      <div style={style.container}>
        { c }        
      </div>
    )
  }
}

const style = {
  div: {
    borderRadius: '3px',
    width: '100px',
    height: '100px',
    margin: '5px',
    background: '#eee',
  },
  container: {
    display: 'flex',
    background: '#ccc',
  }
}