console.log("Executa de imediato");

function primeiraFunc() {
  console.log("função 1");
}

function segundaFunc() {
  console.log("função 2");
}

function terceiraFunc() {
  console.log("função 3");
}

// setTimeout(() => {
//   console.log("executou");
// }, 3000); // ms

setTimeout(() => console.log("teste"), 1000); 
setTimeout(segundaFunc, 2000); 
 setTimeout(terceiraFunc, 3000); 