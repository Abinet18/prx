const { DList, Node } = require('./LRUCache.js');
function LFUCache(capacity) {
  //   this.list = new DList(); //double linked list of values
  this.map = new Map(); //key to value
  this.freqMap = new Map(); //freq to list
  this.count = 0;
  this.minFreq = 0;
  this.cap = capacity;

  this.accessNode = (node) => {
    let freq = node.value.freq;
    node.value.freq = freq + 1;
    let curList = this.freqMap.get(freq);
    let nextList = this.freqMap.get(freq + 1) || new DList();
    curList.remove(node);
    nextList.addAtHead(node);
    this.freqMap.set(freq + 1, nextList);
    if (freq === this.minFreq && curList.isEmpty()) {
      this.minFreq = freq + 1;
    }
    console.log('next list', freq + 1, nextList.toArray());
  };

  this.put = (key, val) => {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.value.val = val;
      this.accessNode(node);
    } else {
      let node = new Node({ key, val, freq: 1 });
      let curList = this.freqMap.get(1) || new DList();
      if (this.count === this.cap) {
        let minList = this.freqMap.get(this.minFreq);
        let node = minList.tail;
        this.map.delete(node.value.key);
        minList.removeAtTail();
      } else {
        this.count++;
      }
      curList.addAtHead(node);
      this.map.set(key, curList.head);
      this.freqMap.set(1, curList);
      this.minFreq = 1;
      console.log(curList.toArray());
    }
  };
  this.get = (key) => {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      this.accessNode(node);
      return node.value.val;
    }
    console.log('get ', key);
    return null;
  };

  this.findMinFreq = () => {
    let arr = Array.from(this.freqMap.keys());
    if (arr.length === 0) {
      return 1;
    } else if (arr.length === 1) {
      return arr[0];
    } else {
      let min = arr[0];
      for (let i = 1; i < arr.length; i++) {
        min = Math.min(min, arr[i]);
      }
      return min;
    }
  };

  this.remove = (key) => {
    if (this.map.has(key)) {
      let node = this.map.get(key);
      let curList = this.freqMap.get(node.value.freq);
      curList.remove(node);
      if (this.minFreq === node.value.freq && curList.isEmpty()) {
        this.minFreq = this.findMinFreq();
      }
      this.count--;
      this.map.delete(key);
    }
  };
}

const test = () => {
  let lfu = new LFUCache(5);
  lfu.put(1, 2);
  lfu.put(2, 3);
  lfu.put(3, 4);
  lfu.put(4, 5);
  lfu.put(1, 5);
  lfu.put(6, 7);
  console.log(lfu.get(1));
  console.log(lfu.get(2));
  lfu.remove(4); 
  console.log(lfu.map);
};

test();
