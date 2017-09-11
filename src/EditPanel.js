import { InputNumber } from 'antd';
import React, { Component } from 'react';
import { Layout } from 'antd';
import store from './store'
import { observer } from 'mobx-react'

@observer
export default class EditPanel extends Component {
  onChange (e) {
    console.log(e)
  }
  render() {
    return (
      <div>
        <InputNumber min={1} max={10} defaultValue={3} onChange={this.onChange} />
      </div>
    )
  }
}