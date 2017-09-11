import React, { Component } from 'react';
import { Layout, Select, InputNumber } from 'antd';
import store from './store'
import { observer } from 'mobx-react'
const Option = Select.Option;

@observer
export default class EditPanel extends Component {
  onChange (e) {
    store.app.setNum(e)
  }
  handleChange(value) {
    console.log(`selected ${value}`);
  }
  render() {
    return (
      <div>
        <div>
          <Select defaultValue="lucy" style={{ width: 120 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
          </Select>
        </div>
        <label>Div number : </label>
        <InputNumber min={1} max={100} defaultValue={store.app.num} onChange={this.onChange} />
      </div>
    )
  }
}