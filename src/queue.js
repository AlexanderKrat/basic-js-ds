const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
class Queue extends ListNode {
  getUnderlyingList() {
    return this.value;
  }
  enqueue(value) {
    const list = new ListNode(value);
    if(!this.next){
      this.next = list;
      this.value = list;
    } 
      this.next.next = list;
      this.next = list;
  }
  dequeue() {
    const result = this.value.value;
    this.value = this.value.next;
    return result;
  }
  }
module.exports = {
  Queue
};
