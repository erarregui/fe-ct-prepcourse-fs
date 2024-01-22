function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  //if (Number.isInteger(numero) === true){
  //  return true
  //}else{
  //  return false
  if(typeof(numero) !== 'number' ){
    return false
  } 

  if (numero % 1 === 0){
    return true
  }else{
    return false
   }
 
}

module.exports = esNumeroEntero;