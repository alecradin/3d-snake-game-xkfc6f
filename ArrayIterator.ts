
class arrayIterator{
  Array: any
  index: number;
  constructor(arr= []){
    
    this.index = 0;
  }
  next(){
    return {value: this.index + 1, done: true};
  }
}