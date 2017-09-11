import { observable, action, computed } from 'mobx';

export default class App { 
  @observable num = 3
  @observable containerStyle = {}

  @action setNum(num) {
    this.num = num
  }

  @action setContainerStyle(containerStyle) {
    this.containerStyle = containerStyle
  }
}
