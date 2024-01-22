function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  
  console.log("1. formato de la " +  fechaNacimiento)
  //Obtengo la fecha actual medienta el Objeto date
  var fechaActual = new Date()
  console.log("2. fecha actual " +  fechaNacimiento)
  
  if (fechaActual.getFullYear() - fechaNacimiento.getFullYear() > 18){
    return true
  }else return false
   


}

module.exports = esMayorDeEdad;