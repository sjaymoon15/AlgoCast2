// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    const newNode = new Node(data);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
  }

  size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode) {
      size++;
      currentNode = currentNode.next;
    }
    return size;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) { return; }
    const firstNode = this.head;
    this.head = firstNode.next;
  }

  removeLast() {
    if (!this.head) { return; }
    if (this.size() === 1) {
      this.head = null;
      return;
    }
    let currentNode = this.head;
    let nextNode = currentNode.next;

    while(nextNode) {
      if (!nextNode.next) {
        break;
      }
      currentNode = currentNode.next;
      nextNode = nextNode.next;
    }
    currentNode.next = null;
  }

  insertLast(data) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    // if (!this.head.next) {
    //   this.head.next = new Node(data);
    //   return;
    // }

    let node = this.head;
    while(node) {
      if (!node.next) {
        break;
      }
      node = node.next;
    }
    node.next = new Node(data);
  }

  getAt(index) {
    if (!this.head) { return null; }
    if (index === 0) {
      return this.head || null;
    }
    let counter = 0;
    let node = this.head;
    while (counter < index) {
      if (!node.next) {
        return null;
      }
      node = node.next;
      counter++;
    }
    return node;
  }

  removeAt(index) {
    if (!this.head || !this.getAt(index)) { return; }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const nodeToBeRemoved = this.getAt(index);
    const prevNode = this.getAt(index - 1);
    prevNode.next = nodeToBeRemoved.next;
    return;
  }

  insertAt(data, index) {
    if (index === 0) {
      const node = new Node(data, this.head);
      this.head = node;
      return;
    }

    // // 0 1 2 3
    // // size 4
    // // index 4
    // if (this.size < index) {
    //   this.insertLast(data);
    //   return;
    // }

    if (!this.head) {
      this.head = new Node(data, null);
      return;
    }

    // const prevOldNode = this.getAt(index - 1);
    // if (!prevOldNode) {

    // }
    // if (!prevOldNode || !prevOldNode.next) {
    //   prevOldNode.next = new Node(data, null);
    //   return;
    // }
    // const oldNodeAtIndex = prevOldNode.next;
    // const node = new Node(data, oldNodeAtIndex);
    // prevOldNode.next = node;
    // return;

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    if (!this.head) {
      return;
    }
    let node = this.head;
    while(node) {
      fn(node);
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
