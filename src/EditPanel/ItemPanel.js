import React, { Component } from 'react';
import { Layout, Select, InputNumber, Card, Row, Col, Form, Menu, Dropdown, Icon } from 'antd';
import store from '../store'
import { observer } from 'mobx-react'
import copy from '../utils/copy'

const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  onChange(e) {
    store.app.setNum(e)
  }

  render() {
    return (
      <Card extra={
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            More <Icon type="down" />
          </a>
        </Dropdown>}
        title="Items">
        <Form>
          <FormItem {...formItemLayout} label="number">
            <InputNumber min={1}
              defaultValue={store.app.items.length}
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

function copyCSS() {
  copy(store.app.getItemsStyleToCopyCSS())
}

function copyJS() {
  copy(store.app.getItemsStyleToCopyJS())
}

const menu = (
  <Menu>
    <Menu.Item>
      <div onClick={copyCSS}>Copy CSS</div>
    </Menu.Item>
    <Menu.Item>
      <div onClick={copyJS}>Copy JS</div>
    </Menu.Item>
    <Menu.Item>
      <div onClick={e => { store.app.resetContainerStyle() }}>Reset</div>
    </Menu.Item>
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
