import React, { Component } from 'react';
import { Card, Icon } from 'antd';
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

    store.app.items.getAll().forEach((item, index) => {
      c.push(
        <Card
          key={index}
          onClick={e => store.app.items.select(item)}
          bodyStyle={{ height: '100%' }}
          style={{ ...store.app.items.style, ...item.style }}>
          <div style={this.cardStyle}>
            div{index}
          </div>
        </Card>
      )
    })

    return (
      <div style={{...store.app.container.style}}>
        { c }        
      </div>
    )
  }
}