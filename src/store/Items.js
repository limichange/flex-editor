import { observable, action, computed } from 'mobx';
import Item from './Item'
import camelCase from '../utils/camelCase'

export default class Items {
  constructor () {
    this.resetStyle()
    this.addItem()
    this.addItem()
    this.addItem()
  }

  @observable _items = []
  @observable style = {}
  @observable selectItem = {}

  @action select (item) {
    this.selectItem = item
  }

  @action resetStyle () {
    this.style = {
      width: 150,
      height: 150,
      margin: 5,
    }
  }

  @action addItem() {
    let newItem = new Item()
    newItem.setId(this._items.length)
    this._items.push(newItem)
  }

  @action removeItem() {
    this._items.pop()
  }

  @action setNum(num) {
    if (num > this._items.length) {
      this.addItem()
    }

    if (num < this._items.length) {
      this.removeItem()
    }
  }

  @action updateStyle(style) {
    Object.assign(this.style, style)
  }

  @action getAll () {
    return this._items
  }

  @action getStyleToCopyJS() {
    return JSON.stringify(this._items, null, 2)
  }

  @action getStyleToCopyCSS() {
    return camelCase(this.getItemsStyleToCopyJS())
  }
}
