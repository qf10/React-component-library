// 1、闭包计数器
function createCounter() {
  let count = 0;
  function increment() {
    count++;
    console.log(`当前计数：${count}`);
  }
  function decrement() {
    count--;
    console.log(`当前计数：${count}`);
  }
  return {
    increment,
    decrement,
  };
}
// 创建计数器实例
const counter = createCounter();
// 使用计数器
counter.increment(); // 输出：当前计数：1
counter.increment(); // 输出：当前计数：2
counter.decrement(); // 输出：当前计数：1

// 2、数组去重
const array = ["1", "2", "1", "3"];

// 方法一
function test(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (arr.indexOf(array[i]) === -1) {
      arr.push(array[i]);
    }
  }
  console.info(arr);
}

// 方法3
function test2(array) {
  const obj = {};
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!obj[array[i]]) {
      obj[array[i]] = array[i];
      newArray.push(array[i]);
    }
  }
  console.info(newArray);
}
test2(array);

// 方法二
function test1(array) {
  const setArray = Array.from(new Set(array));
  console.info(setArray);
}

test(array);
test1(array);
