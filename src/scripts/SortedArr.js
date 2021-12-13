function SortedArr(compare) {
  this.arr = [];
  this.find = (val) => {
    return this.findIndex(val, 0, this.arr.length - 1);
  };
  this.push = (val) => {
    let index = this.findInsertIndex(val, 0, this.arr.length - 1);
    // console.log('pushing', val, this.arr, index);
    this.arr.splice(index, 0, val);
  };
  this.pop = () => {
    this.arr.splice(0, 1);
  };
  this.length = () => {
    return this.arr.length;
  };
  this.findIndex = (val, st, en) => {
    if (st > en) {
      return -1;
    }
    if (compare(this.arr[st], val) === 0) {
      return st;
    }
    if (st === en) {
      return -1;
    }
    if (compare(this.arr[st], val) > 0 || compare(this.arr[en], val) < 0) {
      return -1;
    }
    let mid = Math.floor((st + en) / 2);
    if (compare(this.arr[mid], val) === 0) {
      return mid;
    }
    if (compare(this.arr[mid], val) > 0) {
      return this.findIndex(val, st, mid - 1);
    } else {
      return this.findIndex(val, mid + 1, en);
    }
  };

  this.findInsertIndex = (val, st, en) => {
    console.log(st, en, val, this.arr);
    if (st > en) {
      return st;
    }
    if (st === en) {
      return compare(this.arr[st], val) >= 0 ? st : st + 1;
    }
    if (compare(this.arr[st], val) >= 0) {
      return st;
    }
    if (compare(this.arr[en], val) <= 0) {
      return en + 1;
    }
    let mid = Math.floor((st + en) / 2);
    // console.log(st, en, val, this.arr, mid);
    if (compare(this.arr[mid], val) > 0) {
      return this.findInsertIndex(val, st, mid - 1);
    } else {
      return this.findInsertIndex(val, mid + 1, en);
    }
  };
}

function SortedArrWithCapacity(compare,capacity) {
  this.capacity=capacity;
  this.sortedArr=new SortedArr(compare);
  this.push = (val)=> {
    if(this.sortedArr.length()===this.capacity) {
      if(compare(val,this.sortedArr.arr[0])>0) {
        this.sortedArr.pop();
        this.sortedArr.push(val);
      }
    }
    else {
      this.sortedArr.push(val);
    }
  }
  this.pop= ()=> {
    this.sortedArr.pop();
  }
}

module.exports={SortedArr,SortedArrWithCapacity};

// const test = new SortedArr((v1, v2) => v1 - v2);
// test.push(10);
// test.push(3);
// test.push(9);
// test.push(12);
// test.push(4);
// test.push(8);
// test.push(6);
// test.pop();
// test.push(11);
// test.push(3);
// console.log('10 at ', test.find(10));
// console.log('9 at ', test.find(9));
// console.log('3 at ', test.find(3));
// console.log(test.arr);
