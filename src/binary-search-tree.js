const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');
class BinarySearchTree {
  constructor(){
    this.list = null;
  }
  root() {
    return this.list;
  }

  add(data) {
    const node = this.list;

    if(!node){
      return this.list = new Node(data);
    } else {
      const searchNode = (node) => {
        if(data > node.data){
          if(!node.right){
          return node.right = new Node(data);
          } else {
            return searchNode(node.right);
            }
        } else if (data < node.data) {
            if(!node.left ){
              return node.left =  new Node(data);
            } else {
              return searchNode(node.left);
            }
        } else {
          return null;
        };
    };
      return searchNode(node);

    };
  }
  has(data) {
    let curr = this.list;
     while(curr) {
       if(data === curr.data) {
         return true;
       }
       if(data < curr.data) {
         curr = curr.left;
       } else {
         curr = curr.right;
       }
     }
     return false;
   }
 
   find(data) {
     let curr = this.list;
     while (curr) {
       if (curr.data === data) {
         return curr;
       } else if (data < curr.data) {
         curr = curr.left;
       } else {
         curr = curr.right;
       }
     }
     return null;
   }
 
   remove(data) {
 
     const removeData = (node, data) => {
 
       if(!node){
         return null;
       } else if(data === node.data){
         if(!node.left && !node.right) { 
           return null;
         } 
         if(!node.left) {
           return node.right;
         };
         if(!node.right){
           return node.left;
         };
 
         let tmp = node.right;
         while(tmp.left){
 
           tmp = tmp.left;
         }
 
         node.data = tmp.data;
 
         node.right = removeData(node.right, tmp.data);
 
         return node;
       }
 
       else if(data < node.data){
         node.left = removeData(node.left, data);
 
         return node;
       } else {
         node.right = removeData(node.right, data);
 
         return node;
       }
     }
 
     removeData(this.list, data);
   }
 
   min() {
     let curr = this.list;
 
     while(curr.left){
       curr = curr.left;
     }
     return curr.data;
   }
 
   max() {
     let curr = this.list;
 
     while(curr.right){
       curr = curr.right;
     }
     return curr.data;
   }
 }
 
 module.exports = {
   BinarySearchTree
 };