import { InputNumber } from 'antd';
import React, { Component } from 'react';
import { Layout, Card } from 'antd';
import store from './store'
import { observer } from 'mobx-react'

@observer
export default class PlayerPanel extends Component {
  render() {

    let c = []

    for (let i = 0; i < store.app.num; i++) {
      c.push(
        <Card 
          title={`div${i}`} 
          extra={<a href="#">More</a>} 
          key={i} 
          style={{...store.app.itemsStyle}}>
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