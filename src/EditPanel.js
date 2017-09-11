import React, { Component } from 'react';
import { Layout, Select, InputNumber, Card, Row, Col, Form } from 'antd';
import store from './store'
import { observer } from 'mobx-react'
const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  onChange (e) {
    store.app.setNum(e)
  }
  handleChange(value) {
    store.app.updateContainerStyle({
      flexDirection: value
    })
  }
  handleFlexWrapChange(value) {
    store.app.updateContainerStyle({
      flexWrap: value
    })
  }
  handleJustifyContentChange(value) {
    store.app.updateContainerStyle({
      justifyContent: value
    })
  }
  handleAlignItemsChange(value) {
    store.app.updateContainerStyle({
      alignItems: value
    })
  }
  render() {
    return (
      <div>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Container">
              <Form>
                <FormItem {...formItemLayout} label="flex-direction">
                  <Select defaultValue="row" onChange={this.handleChange}>
                    <Option value="row">row</Option>
                    <Option value="row-reverse">row-reverse</Option>
                    <Option value="column">column</Option>
                    <Option value="column-reverse">column-reverse</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="flex-wrap">
                  <Select defaultValue="nowrap" onChange={this.handleFlexWrapChange}>
                    <Option value="nowrap">nowrap</Option>
                    <Option value="wrap">wrap</Option>
                    <Option value="wrap-reverse">wrap-reverse</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="justify-content">
                  <Select defaultValue="flex-start" onChange={this.handleJustifyContentChange}>
                    <Option value="flex-start">flex-start</Option>
                    <Option value="flex-end">flex-end</Option>
                    <Option value="center">center</Option>
                    <Option value="space-between">space-between</Option>
                    <Option value="space-around">space-around</Option>
                    <Option value="space-evenly">space-evenly</Option>
                  </Select>
                </FormItem>
                <FormItem {...formItemLayout} label="align-items">
                  <Select defaultValue="flex-start" onChange={this.handleAlignItemsChange}>
                    <Option value="flex-start">flex-start</Option>
                    <Option value="flex-end">flex-end</Option>
                    <Option value="center">center</Option>
                    <Option value="baseline">baseline</Option>
                    <Option value="stretch">stretch</Option>
                  </Select>
                </FormItem>
              </Form>
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Items">
              <label>Div number : </label>
              <InputNumber min={1} max={100} defaultValue={store.app.num} onChange={this.onChange} />
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
