const HashMap = require('./HashMap.js');
// 1. Create a HashMap class

function main() {
  let lotr = new HashMap();

  lotr.MAX_LOAD_RATIO = 0.5;
  lotr.SIZE_RATIO = 3;

  const items = [
    {'Hobbit': 'Bilbo'}, {'Hobbit': 'Frodo'}, {'Wizard': 'Gandalf'},
    {'Human': 'Aragorn'}, {'Elf': 'Legolas'}, {'Maiar': 'The Necromancer'},
    {'Maiar': 'Sauron'}, {'RingBearer': 'Gollum'}, {'LadyOfLight': 'Galadriel'},
    {'HalfElven': 'Arwen'}, {'Ent': 'Treebeard'}
  ];
  for(let i=0; i<items.length; i++)
    lotr.set(Object.keys(items[i])[0], HashMap._hashString(items[i][Object.keys(items[i])[0]]));
  


  for(let key of lotr._hashTable) {
    console.log(key);
  }
  console.log(lotr.get('Maiar'));
  console.log(lotr.get('Hobbit'));
  console.log('capacity:', lotr._capacity);

  const WhatDoesThisDo = function(){
    let str1 = 'Hello World.';
    let str2 = 'Hello World.';
    let map1 = new HashMap();
    map1.set(str1,10);
    map1.set(str2,20);
    let map2 = new HashMap();
    let str3 = str1;
    let str4 = str2;
    map2.set(str3,20);
    map2.set(str4,10);

    console.log(map1.get(str1));
    console.log(map2.get(str3));
  };
  WhatDoesThisDo();
}

main();