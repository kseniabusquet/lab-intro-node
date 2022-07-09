class SortedList {

  constructor() {
    this.items = []
    this.length = 0
  }

  add(item) {
    this.items.push(item)
    this.length = this.items.length
    this.items.sort( (a, b) =>  a - b)
  }

  get(pos) {
    if((pos >= 0) && pos < (this.length)){
      return this.items[pos]
    } else{
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return this.items[this.items.length - 1]
    }
  }

  min() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return this.items[0]
    }
  }

  sum() {
    return this.items.reduce((acc,current) => acc + current, 0)
  }

  avg() {
    if(this.items.length === 0){
      throw new Error('EmptySortedList');
    } else{
      return this.sum()/this.length
    }
  }
}

module.exports = SortedList;