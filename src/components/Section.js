export default class Section{
  constructor({items, renderer}, container){
    this._items = items;
    this._renderer = renderer;
    this._container = container;
  }

  addItem(){
    this._container.prepend(element)
  }

  clear(){
    this._container.innerHTML = '';
  }
  renderItems(){
    this.clear();
    this._items.forEach(card => {
      this._renderer(card)
    })
  }
}