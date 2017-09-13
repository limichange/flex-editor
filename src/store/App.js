import { observable, action, computed } from 'mobx';
import Container from './Container'
import Items from './Items'
import camelCase from '../utils/camelCase'

export default class App { 
  constructor () {
    this.resetContainerStyle();
    this.addItem();
    this.addItem();
    this.addItem();
  }

  @observable containerStyle = {}

  @observable itemsStyle = {
    width: 150,
    height: 150,
    margin: 5,
  }
  @observable items = []

  @action resetContainerStyle () {
    this.containerStyle = {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      marginTop: '30px',
      display: 'flex',
      background: '#ddd',
      minHeight: 350
    }
  }

  @action getItemsStyleToCopyJS () {
    return JSON.stringify(this.items, null, 2)
  }

  @action getItemsStyleToCopyCSS () {
    return camelCase(this.getItemsStyleToCopyJS())
  }

  @action getContainerStyleToCopyJS () {
    let style = Object.assign({}, this.containerStyle)

    delete style.minHeight;
    delete style.background;
    delete style.marginTop;

    return JSON.stringify(style, null, 2)
  }

  @action getContainerStyleToCopyCSS () {
    return camelCase(this.getContainerStyleToCopyJS())
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

  @action setContainerStyle(containerStyle) {
    this.containerStyle = containerStyle
  }

  @action updateContainerStyle(style){
    Object.assign(this.containerStyle, style)
  }
  
  @action updateItemsStyle(style){
    Object.assign(this.itemsStyle, style)
  }
}
