import { observable, action, computed } from 'mobx';

export default class App { 
  @observable num = 3
  @observable containerStyle = {
    flexDirection: 'row'
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
}
