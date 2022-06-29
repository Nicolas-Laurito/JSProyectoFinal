//VARIABLES
let ingreso1, ingreso2, reserva, registro, indice, flag, opcionTurno, bandera, indiceRegistro, dias, turnoSolicitado
const especialidades = ["ALERGISTA", "DERMATOLOGIA", "MEDICO CLINICO", "PEDIATRIA", "TRAUMATOLOGIA"]



//FUNCIONES
function registrarse(){
    let nuevoNombre = prompt("Ingrese su Nombre")           //pido datos al usuario
    let nuevoApellido = prompt ("Ingrese su Apellido")
    let nuevoDNI = prompt ("Ingrese su DNI")
    let nuevoTel = prompt ("Ingrese su Telefono")
    let nuevoEmail = prompt ("Ingrese su email")
    let nuevoUser = prompt ("Ingrese un Nombre de Usuario")
    let nuevoClave = prompt ("Ingrese una Clave")
    const tAgendados=[]
    const usuarioNuevo = new Usuario(nuevoNombre, nuevoApellido, nuevoDNI, nuevoTel, nuevoEmail, nuevoUser, nuevoClave, tAgendados) //creo un objeto nuevo a instacias del contructor
    usuariosRegistrados.push(usuarioNuevo)      //guardo el nuevo objeto a la ultima posicion del array
    alert("Registro Exitoso")
   
}

function ingresoRegistrado(valor1, valor2){
    for(let user of usuariosRegistrados ){     //recorro todas las posiciones del array usuarios
        let dato1= user.user               //guardo en una variable el dato de user y clave para luego comparar si existe
        let dato2= user.clave
                       
        if(valor1===dato1 && valor2===dato2){
          indice = usuariosRegistrados.indexOf(user)       //me guardo el indice del usuario con el que inicie cesion
          console.log(indice)
          let flagInterno = 1
          return(flagInterno)
       
          
        }else{
         dato1=0
         dato2=0
         
        }
      }
      alert("Usuario Incorrecto")
}

function buscarTurno(especialidadBuscada){

    const turnos=[]
    medicosDisponibles.forEach((tipoEspecialidad)=>{        //recorro el array de medicos 
        if(especialidadBuscada===tipoEspecialidad.especialidad){    //comparo la especialidad recibida con la que esta guardada en cada objeto del array
            tipoEspecialidad.diaTurno.forEach((dia,i) =>{        //si existe recorrolos dias disponibles y los guardo en una variable   
                let unDia=dia
                let unaHora = tipoEspecialidad.horaTurno[i]     //guardo tambien la hora del mismo indice
                let arrayFH=(`Turno disponible el ${unDia} a las ${unaHora} con el profesional ${tipoEspecialidad.nombreApellido} `)    //guardo uno por uno esos datos en un nuevo array
                turnos.push(arrayFH)    //cargo esos datos en un nuevo array para mostrar al usuario que hay disponible
                 })  
            }
        })
    turnos.sort()       //antes de devolverlo lo ordeno por fecha
    return(turnos)  
}


function reservarTurno(turnoSolicitado,turnoDisponible, indice){    //recibo el turno ingresado por el usuario, el array de turnos disponjibles y el indice del usuario que inicio cesion
    let ind=indice
    let agendado=turnoDisponible.includes(turnoSolicitado)      //busco si el solicitado esta en el disponible y lo guardo en una variable
    console.log(agendado)
    if(agendado===true){        //si esta entonces guardo ese turno en el array almacenado en la propiedad del objeto usuario
        usuariosRegistrados[ind].turnosAgendados.push(turnoSolicitado)
        return("Turno Reservado")
    }else{
        return("No se encontro el turno Indicado")
    }

}



//PROGRAMA

alert("Para solicitar un turno debe estar registrado")
do{
flag=0
registro = prompt("Ingrese 1: Para Ingresar / 2: Para Registrarse")

while(registro==2){
    registrarse()           //llamo a la funcion para registrarse
    registro = prompt("Ingrese 1: Para Ingresar / Ingrese 2: Para Registrarse")
}

if(registro==1){
    ingreso1 = prompt("Ingrese su usuario")
    ingreso2 = prompt("Ingrese su clave")
    flag= ingresoRegistrado(ingreso1, ingreso2)     //llamo a la funcion que comprueba que el usuario existe
    if(flag>-1){
        indiceRegistro=indice
        flag=1
    }                   
    
}else{
    alert("Opcion Invalida")
}


}while(flag!=1)

alert("Usted ingreso al Sistema de Turno")
console.table(usuariosRegistrados)
   


do{
    opcionTurno= parseInt(prompt(`1 : Buscar Turno por Especialidad ${especialidades} / 2 : Consultar turnos Reservados / 3 : Salir`))   //despues puedo agregar mas opciones, como dar de baja un turno, editar perfil

switch(opcionTurno){
    case 1:

   do{
        bandera=0
        let especialidad = prompt("Ingrese la especialidad deseada").toUpperCase()
        dias = buscarTurno(especialidad)
        if(dias.length!=0){     //si el array de turno que me devolvio la funcion no esta vacio entonces lo muestro
            console.table(dias)
   
        }else{
            alert("No existe la especialidad ingresada")
           bandera=1
        }
    }while(bandera!=0)

    
    let diaSolicitado= prompt("Ingrese el dia deseado dentro de los disponibles (dd/mm/aa)")
    let horaSolicitada= prompt("Ingrese el horario deseado dentro de los disponibles (hh:mm)") 
    let medicoSolicitado= prompt("Ingrese el especialista deseado").toUpperCase() 
    turnoSolicitado=(`Turno disponible el ${diaSolicitado} a las ${horaSolicitada} con el profesional ${medicoSolicitado} `)
    let mensaje=reservarTurno(turnoSolicitado, dias, indiceRegistro)
    alert(mensaje)
    
  break;


case 2:
    usuariosRegistrados[indiceRegistro].mostrarTurno()      //llamo al metodo de usuarios para mostrar los turnos agendados
  
    break;

case 3:    
alert("Gracias por Visitar el portal de reserva de Turnos")
break;
default:
    alert("Opcion Invalida")
    break;


}
}while(opcionTurno!=3)

