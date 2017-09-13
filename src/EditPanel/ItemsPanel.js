import React, { Component } from 'react';
import { Layout, Select, InputNumber, Card, Row, Col, Form, Menu, Dropdown, Icon } from 'antd';
import store from '../store'
import { observer } from 'mobx-react'
const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  render() {
    return (
      <Card title="Items">
        <Form>
          <FormItem {...formItemLayout} label="number">
            <InputNumber min={1}
              defaultValue={store.app.num}
              onChange={this.onChange} />
          </FormItem>
          <FormItem {...formItemLayout} label="height">
            <InputNumber min={1}
              defaultValue={store.app.itemsStyle.height}
              onChange={e => store.app.updateItemsStyle({ height: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="width">
            <InputNumber min={1}
              defaultValue={store.app.itemsStyle.width}
              onChange={e => store.app.updateItemsStyle({ width: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="margin">
            <InputNumber min={0}
              defaultValue={store.app.itemsStyle.margin}
              onChange={e => store.app.updateItemsStyle({ margin: e })} />
          </FormItem>
        </Form>
      </Card>
    )
  }
}

const menu = (
  <Menu>
    <Menu.Item>Copy css</Menu.Item>
    <Menu.Item>Reset</Menu.Item>
  </Menu>
);

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
