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
