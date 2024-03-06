for (let sicl = 0; sicl < 101; sicl = sicl + 1) {
    console.log(sicl);
  }
  ///2///
  console.log("2 - тапшырма");
  //
  for (let sicl2 = 0; sicl2 < 100; sicl2 = sicl2 + 2) {
    console.log(sicl2);
  }
  
  ///--3---///
  console.log("3 - тапшырма");
  //
  let third = 0;
  for (let a = 0; a < 100; a = a + 2) {
    third += a;
  }
  console.log(third);
  
  ///--4---///
  console.log("4 - тапшырма");
  //
  const nums = [10, 20, 30];
  let i = (nums[2] = 99);
  console.log(i);
  console.log(nums);
  
  ///---5---///
  console.log("5 - тапшырма");
  
  const array = ["hi", "hello", "good"];
  
  function getLastValue(array) {
    console.log(array[array.length - 1]);
  }
  getLastValue(array);
  
  ///----6----///
  console.log("6 - тапшырма");
  
  for (mySicl = 5; mySicl <= 5 && mySicl >= 0; mySicl = mySicl - 1) {
    console.log(mySicl);
  }
  
  ///--7---///
  console.log("7 - тапшырма");
  
  let whileSicl = 1;
  
  while (mySicl < 101) {
    console.log(mySicl);
    mySicl = mySicl + 1;
  }
  
  ///-----8----///
  console.log("8 - тапшырма");
  
  //
  let mySicl2 = 0;
  
  while (mySicl2 < 102) {
    console.log(mySicl2);
    mySicl2 = mySicl2 + 2;
  }
  
  ///---9-----///
  console.log("9 - тапшырма");
  ///
  
  const task = [1, 2, 3, 4, 5, 6, , 7, 8, 9, 10];
  const result = [];
  for (let home = 0; home < task.length; home = home + 1) {
    result.push(home + 2);
  }
  
  console.log(result);
  
  ///--10---///
  console.log("10 - тапшырма");
  //
  const array1 = [10, 20, 30, 40, 50, 60, 70];
  let num = 10;
  const addNum1 = (array1, num) => {
    let newArray = [];
  
    for (i = 0; i < array1.length; i++) {
      newArray.push(array1[i] + num);
    }
    return newArray;
  };
  console.log(addNum1(array1, 5));
  