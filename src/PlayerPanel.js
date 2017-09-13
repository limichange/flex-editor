import { InputNumber } from 'antd';
import React, { Component } from 'react';
import { Layout, Card, Icon } from 'antd';
import store from './store'
import { observer } from 'mobx-react'

@observer
export default class PlayerPanel extends Component {
  cardStyle = {
    fontSize: 24,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
  }

  render() {

    let c = []

    for (let i = 0; i < store.app.items.getAll().length; i++) {
      c.push(
        <Card 
          key={i} 
          onClick={e => alert(1)}
          bodyStyle={{ height: '100%' }}
          style={{...store.app.items.style}}>
          <div style={this.cardStyle}>
            div{i} 
            <Icon type="setting" />
          </div>
        </Card>
      )
    }

    return (
      <div style={{...store.app.container.style}}>
        { c }        
      </div>
    )
  }
}