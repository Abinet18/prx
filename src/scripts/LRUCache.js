function Node(value) {
  this.value = value;
  this.prev = null;
  this.next = null;
}
function DList() {
  this.head = null;
  this.tail = null;

  this.addAtHead = (node) => {
    if (this.head !== null) {
      this.head.prev = node;
    } else {
      this.tail = node;
    }
    node.next = this.head;
    node.prev = null;
    this.head = node;
  };
  this.addAtTail = (node) => {
    if (this.tail !== null) {
      this.tail.next = node;
    } else {
      this.head = node;
    }
    this.tail = node;
  };
  this.removeAtHead = () => {
    if (this.head !== null) {
      this.head = this.head.next;
    }
    if (this.head == null) {
      this.tail = null;
    }
  };
  this.removeAtTail = () => {
    if (this.tail !== null) {
      if (this.tail.prev != null) {
        this.tail.prev.next = null;
      }
      this.tail = this.tail.prev;
    }
    if (this.tail === null) {
      this.head = null;
    }
  };
  this.addAfter = (node1, node2) => {
    let node3 = node1.next;
    node2.prev = node1;
    node2.next = node3;
    if (node3 !== null) {
      node3.prev = node2;
    } else {
      this.tail = node2;
    }
  };

  this.addBefore = (node1, node2) => {
    let node3 = node1.prev;
    node1.prev = node2;
    node2.next = node1;
    if (node3 !== null) {
      node3.next = node2;
    } else {
      this.head = node2;
    }
  };

  this.remove = (node) => {
    if (node.prev === null) {
      this.removeAtHead();
    } else if (node.next === null) {
      this.removeAtTail();
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }
  };

  this.accessNode = (node) => {
    this.remove(node);
    this.addAtHead(node);
  };

  this.toArray = () => {
    let node = this.head;
    let retArr = [];
    while (node != null) {
      retArr.push(node.value);
      node = node.next;
    }
    return retArr;
  };

  this.isEmpty = () => {
    return this.head == null;
  };
}
function LRUCache(capacity) {
  this.list = new DList(); //double linked list of values
  this.map = new Map();
  this.count = 0;
  this.cap = capacity;

  this.put = (key, val) => {
    let node = new Node({ key, val });
    let added = false;
    if (this.map.has(key)) {
      node = this.get(key);
      node.value.val = val;
      this.list.accessNode(node);
    } else {
      if (this.count === this.cap) {
        let tail = this.list.tail;
        this.map.delete(tail.value.key);
        this.list.removeAtTail();
      } else {
        this.count++;
      }
      this.list.addAtHead(node);
      added = true;
    }
    this.map.set(key, this.list.head);
    console.log(this.list.toArray());
    return added;
  };

  this.get = (key) => {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.list.accessNode(node);
      console.log(this.list.toArray());
      return node.value.val;
    }
    return null;
  };

  this.remove = (key) => {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.list.remove(node);
      this.map.delete(key);
      console.log(this.list.toArray());
      return node.value.val;
    }
    return null;
  };
}

// const test = () => {
//   const cache = new LRUCache(5);
//   cache.put(1, 9);
//   cache.put(2, 5);
//   cache.put(3, 1);
//   cache.put(5, 4);
//   cache.put(12, 18);
//   cache.get(2);
//   cache.get(3);
//   cache.get(5);
//   cache.get(2);
//   cache.put(8, 19);
//   cache.remove(5);
//   cache.put(6, 12);
//   cache.get(2);
// };

// test();

module.exports = {
  Node,
  DList,
  LRUCache,
};
