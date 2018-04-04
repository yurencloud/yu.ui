function hello() {
  for(let i = 0;i<10;i++){
    if(i===5) continue;
    console.log(i);
  }
  console.log('end');
}

hello();
