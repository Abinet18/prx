
const {SortedArrWithCapacity} = require( './SortedArr.js');

let keyId = 0;
let getNextKey = () => {
  keyId++;
  return keyId - 1;
};

function TrieNode(val, parentKey, freq) {
  this.key = getNextKey();
  this.val = val;
  this.children = {};
  this.addChild = (key, val) => {
    this.children[val] = key;
  };
  this.getChildKey = (val) => {
    return this.children[val];
  };
  this.freq=freq;
  this.parentKey = parentKey;
  this.freqWords=[];
}

function Trie() {
  this.root = new TrieNode('*', null, 0);
  this.map = new Map();
  this.map.set(this.root.key, this.root);
  this.addNode = (parentKey, val, isEnd) => {
    let node = new TrieNode(val, parentKey, isEnd);
    this.map.set(node.key, node);
    this.map.get(parentKey).addChild(node.key,node.val);
    return node;
  };
  this.getNode = (key) => {
    return this.map.get(key);
  };
}

function searchWordIntoTrie(word, trie) {
  // console.log('adding word to trie',word);
  let node = trie.root;
  for (let i = 0; i < word.length; i++) {
    let key = node.getChildKey(word[i]);
    if (key) {
      node = trie.getNode(key);
      if(i===word.length-1) {
        node.freq++;
      }
    } else {
      node = trie.addNode(node.key, word[i], i===word.length-1?1:0);
    }
  }
  // console.log(trie.map);
}

function searchWordsIntoTrie(words, trie) {
  for (let i = 0; i < words.length; i++) {
    searchWordIntoTrie(words[i].toLowerCase(), trie);
  }
}

const getAllChildrenWords = (trie,node) => {
  let words=[];
  if(node.isEnd) {
    words.push(node.val);
  }
  let chVals=Object.keys(node.children);
  for(let i=0;i<chVals.length;i++) {
    let key=node.getChildKey(chVals[i]);
    let chNode=trie.getNode(key);
    let chNodeWords=getAllChildrenWords(trie,chNode);
    for(let i=0;i<chNodeWords.length;i++) {
      words.push(`${node.val}${chNodeWords[i]}`);
    }
  }
  return words;
}

const populateFrequentWords = (trie,node,topN) => {
  let words=new SortedArrWithCapacity((kf1,kf2)=>kf1.f-kf2.f,topN);
  if(node.freq>0) {
    words.push({k:node.key,f:node.freq});
  }
  let chVals=Object.keys(node.children);
  for(let i=0;i<chVals.length;i++) {
    let key=node.getChildKey(chVals[i]);
    let chNode=trie.getNode(key);
    let chNodeWords=populateFrequentWords(trie,chNode,topN);
    for(let i=0;i<chNodeWords.length;i++) {
      words.push(chNodeWords[i]);
    }
  }
  node.freqWords=words.sortedArr.arr;
  console.log('top words for val',node.val,words.sortedArr.arr);
  return words.sortedArr.arr;
}

const getParentWord=(trie,node) =>{
  let word='';
  let curNode=node;
  while(curNode.parentKey!==null) {
      word=`${curNode.val}${word}`;
      curNode=trie.getNode(curNode.parentKey);
  }
  return word;
}

const getAllWordsFor=(trie,node)=> {
  let ch=getAllChildrenWords(trie,node);
  let curWord=getParentWord(trie,node);
  return ch.map(w=>`${curWord}${w}`);
}

const getNodeForWord = (word,trie)=> {
  let node = trie.root;
  for (let i = 0; i < word.length; i++) {
    let key = node.getChildKey(word[i]);
    if (key) {
      node = trie.getNode(key);
    } 
    else {
      return null;
    }
  }
  return node;
}

const suggestAll = (word,trie)=> {
  let node = getNodeForWord(word,trie);
  if(node==null) {
    return [];
  }
  return getAllWordsFor(trie,node);
}

const suggestTop = (trie,word)=> {
  let words=[];
  let node = getNodeForWord(word,trie);
  if(node==null) {
    return [];
  }
  for(let i=0;i<node.freqWords.length;i++) {
    let key=node.freqWords[i].k;
    let curNode=trie.getNode(key);
    words.push(getParentWord(trie,curNode));
  }

  return words;
}

function test() {
  let trie = new Trie();
  let words = ['captain', 'cap', 'caption','cap','caption','capable','caption','capitulate','capitulate','capitulate'];
  searchWordsIntoTrie(words,trie);
  populateFrequentWords(trie,trie.root,2);
  // console.log(suggestAll('cap',trie));
  console.log(suggestTop(trie,'cap'));
}

test();