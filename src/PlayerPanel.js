import { InputNumber } from 'antd';
import React, { Component } from 'react';
import { Layout, Card } from 'antd';
import store from './store'
import { observer } from 'mobx-react'
import * as copy from 'copy-text-to-clipboard'

@observer
export default class PlayerPanel extends Component {
  render() {

    let c = []

    for (let i = 0; i < store.app.num; i++) {
      c.push(
        <Card 
          onClick={e => copy('1')}
          bodyStyle={{ padding: 2 }}
          key={i} 
          style={{...store.app.itemsStyle}}>
          <div>div{i}</div>
          <div>order: 0</div>
        </Card>
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