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
        <div key={i} style={{...store.app.itemsStyle}}>
          div {i}
        </div>
      )
    }

    return (
      <div style={{...store.app.containerStyle}}>
        { c }        
      </div>
    )
  }
}

const style = {
}