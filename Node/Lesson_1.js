process.nextTick(() => {
  console.log('Чемодан,'); 
});

process.nextTick(() => {
  console.log('В чемодане'); 

});

setImmediate(() => {
  console.log('Был диван,'); 
},0);

setTimeout(() => {
  console.log('Выйди вон!'); 
},10);

setImmediate(() => {
  console.log('На диване');
});

setImmediate(() => {
  console.log('Ехал слон.');
});

setImmediate(() => {
  console.log('Кто не верит –');
});

console.log('Плыл по морю'); 
