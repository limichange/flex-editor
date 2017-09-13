import { observable } from 'mobx'
import Container from './Container'
import Items from './Items'

export default class App { 
  @observable container = new Container()
  @observable items = new Items()
}
