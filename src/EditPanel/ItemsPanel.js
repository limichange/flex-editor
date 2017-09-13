import React, { Component } from 'react'
import { InputNumber, Card, Form } from 'antd'
import store from '../store'
import { observer } from 'mobx-react'
import formItemLayout from './formItemLayout'
import PanelMenu from './PanelMenu'

const FormItem = Form.Item

@observer
export default class EditPanel extends Component {
  onChange(e) {
    store.app.items.setNum(e)
  }

  render() {
    return (
      <Card extra={<PanelMenu object={store.app.items} />}
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
