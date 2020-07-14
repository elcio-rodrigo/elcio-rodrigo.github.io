let numeros = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 1; i < numeros.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numeros[i] < numeros[j]) {
        let position = numeros[i];
    
        numeros[i] = numeros[j];
        numeros[j] = position;
      }
    }
  }
  console.log(numeros);