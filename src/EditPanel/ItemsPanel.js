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
    store.app.items.setNum(e)
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
              defaultValue={store.app.items.getAll().length}
              onChange={this.onChange} />
          </FormItem>
          <FormItem {...formItemLayout} label="height">
            <InputNumber min={1}
              defaultValue={store.app.items.style.height}
              onChange={e => store.app.items.updateStyle({ height: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="width">
            <InputNumber min={1}
              defaultValue={store.app.items.style.width}
              onChange={e => store.app.items.updateStyle({ width: e })} />
          </FormItem>
          <FormItem {...formItemLayout} label="margin">
            <InputNumber min={0}
              defaultValue={store.app.items.style.margin}
              onChange={e => store.app.items.updateStyle({ margin: e })} />
          </FormItem>
        </Form>
      </Card>
    )
  }
}

function copyCSS() {
  copy(store.app.items.getStyleToCopyCSS())
}

function copyJS() {
  copy(store.app.items.getStyleToCopyJS())
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
      <div onClick={e => { store.app.items.resetStyle() }}>Reset</div>
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
