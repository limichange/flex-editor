import React, { Component } from 'react';
import { Layout, Select, InputNumber, Input, Card, Row, Col, Form, Menu, Dropdown, Icon } from 'antd';
import store from '../store'
import { observer } from 'mobx-react'
import copy from '../utils/copy'
import formItemLayout from './formItemLayout'
import PanelMenu from './PanelMenu'

const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  render() {
    let selectItem = store.app.items.selectItem
    let title = ''
    let content = {}

    if (selectItem.id === undefined) {
      title = 'Please select a div'
      content = <div></div>
    } else {
      title = `div${selectItem.id}`
      content = (
        <Form>
          <FormItem {...formItemLayout} label="order">
            <InputNumber
              value={selectItem.style.order}
              onChange={e => selectItem.updateStyle({ order: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="flexGrow">
            <InputNumber
              value={selectItem.style.flexGrow}
              onChange={e => selectItem.updateStyle({ flexGrow: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="flexShrink">
            <InputNumber
              value={selectItem.style.flexShrink}
              onChange={e => selectItem.updateStyle({ flexShrink: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="flexBasis">
            <Input
              value={selectItem.style.flexBasis}
              onChange={e => selectItem.updateStyle({ flexBasis: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="alignSelf">
            <Select value={selectItem.style.alignSelf} onChange={e => selectItem.updateStyle({ alignSelf: e })}>
              <Option value="flex-start">flex-start</Option>
              <Option value="flex-end">flex-end</Option>
              <Option value="center">center</Option>
              <Option value="auto">auto</Option>
              <Option value="baseline">baseline</Option>
              <Option value="stretch">stretch</Option>
            </Select>
          </FormItem>
        </Form>
      )
    }

    const extra = <PanelMenu object={store.app.items.getSelectItem()} />

    return (
      <Card extra={extra}
        title={title}>
        { content }
      </Card>
    )
  }
}
