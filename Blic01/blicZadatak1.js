//fun uzima array objekata i vraca listu sa ojektima sa samo jednim kljućem
function one_key(arr) {
  var arr_popunit = [];
  for (var i = 0; i < arr.length; i++) {
    if (Object.keys(arr[i]).length == 1) {
      arr_popunit.push(arr[i]);
    }
  }
  return arr_popunit;
}

console.log(one_key([{ 1: "a" }, { 1: "c", 2: "a" }, { 2: "c" }]));
