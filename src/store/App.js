import { observable, action, computed } from 'mobx';

export default class App { 
  constructor () {
    this.addItem();
    this.addItem();
    this.addItem();
  }

  @observable num = 3
  @observable containerStyle = {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '30px',
    display: 'flex',
    background: '#ddd',
    minHeight: 350
  }
  @observable itemsStyle = {
    width: 150,
    height: 150,
    margin: 5,
  }
  @observable itmes = []

  @action addItem (item) {
    this.itmes.push(item || {

    })
  }

  @action removeItem(item) {
    this.itmes.pop()
  }

  @action setNum(num) {
    this.num = num
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
