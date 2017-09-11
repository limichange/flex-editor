import { observable, action, computed } from 'mobx';

export default class App { 
  @observable num = 3
  @observable containerStyle = {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: '50px',
    display: 'flex',
    background: '#ddd',
    minHeight: '250px'
  }
  @observable itemsStyle = {
    width: '100px',
    height: '100px',
    margin: '5px',
    background: '#eee',
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
