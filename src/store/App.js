import { observable, action, computed } from 'mobx';
import Container from './Container'
import Items from './Items'
import camelCase from '../utils/camelCase'

export default class App { 
  constructor () {
    this.container.resetContainerStyle();
    this.addItem();
    this.addItem();
    this.addItem();
  }

  @observable container = new Container()

  @observable itemsStyle = {
    width: 150,
    height: 150,
    margin: 5,
  }
  @observable items = []

  @action getItemsStyleToCopyJS () {
    return JSON.stringify(this.items, null, 2)
  }

  @action getItemsStyleToCopyCSS () {
    return camelCase(this.getItemsStyleToCopyJS())
  }

  @action addItem (item) {
    this.items.push(item || {
      order: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 'auto',
      alignSelf: 'flex-start'
    })
  }

  @action removeItem() {
    this.items.pop()
  }

  @action setNum(num) {
    if (num > this.items.length) {
      this.addItem()
    }

    if (num < this.items.length) {
      this.removeItem()
    }
  }
  
  @action updateItemsStyle(style){
    Object.assign(this.itemsStyle, style)
  }
}
