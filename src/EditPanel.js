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
          <Col span={8}>
            <Card extra={<a href="#">More</a>} title="Container">
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
          <Col span={8}>
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
          </Col>
          <Col span={8}>
            <Card title="Models">
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
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};
