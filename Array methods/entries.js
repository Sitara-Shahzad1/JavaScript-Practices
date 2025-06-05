let arr = [1,2,3,4,5,6];
let entries = arr.entries();
for (const [index, value] of entries) {
  console.log(`index : ${index} -  value : ${value} `);
};