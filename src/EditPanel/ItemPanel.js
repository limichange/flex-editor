import React, { Component } from 'react';
import { Layout, Select, InputNumber, Card, Row, Col, Form, Menu, Dropdown, Icon } from 'antd';
import store from '../store'
import { observer } from 'mobx-react'
import copy from '../utils/copy'

const Option = Select.Option;
const FormItem = Form.Item;

@observer
export default class EditPanel extends Component {
  render() {
    return (
      <Card>
        <Form>
        </Form>
      </Card>
    )
  }
}
