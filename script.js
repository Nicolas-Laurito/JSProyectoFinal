//VARIABLES
let ingreso1, ingreso2, reserva
let usuario = "n"
let claveUsuario = 123456
let m = "Turno Inexistente"
let r






//FUNCIONES
function registrarse(){
    let nuevoUsuario = prompt("Ingrese un nombre de Usuario") 
    let claveNueva = prompt ("Ingrese una Clave")
    alert("Registro Exitoso / Usuario: "+ nuevoUsuario + " ; clave: " + claveNueva)
}

function ingresoRegistrado(valor1, valor2){
    while(valor1!=usuario || (valor2!=claveUsuario )){       //se repite mientras sea verdad
        alert("Usuario o contraseña incorrecta")
        valor1 = prompt("Ingrese su usuario")
        valor2 = prompt("Ingrese su clave")

    }    
    let mensaje ="Usted ingreso al sistema de turnos" 
    return mensaje
}

function mostrarTurnoMC(){
    let mc1 = "17/06/22 a las 15 hs"
    let mc2 = "17/06/22 a las 16 hs"
    let mc3 = "17/06/22 a las 17:30 hs"
    let mc4 = "19/06/22 a las 14:30 hs"    
     
    alert("Turno 1:" + mc1 + " //Turno 2: " + mc2 + " //Turno 3: " + mc3 + " //Turno 4: " + mc4)
    let opcionTurno= parseInt(prompt("Elija el turno"))
    switch(opcionTurno){
        
        case 1:
            r = mc1
            break;
        case 2:
            r= mc2
            break;    
        case 3:
            r= mc3
            break;    
        case 4:
            r= mc4
            break;
        default:
            r = m        
    }
    return r
    
}
function mostrarTurnoP(){
    let p1 = "21/06/22 a las 19:30 hs"
    let p2 = "21/06/22 a las 18:30 hs"
    let p3 = "23/06/22 a las 19: hs"  
      
    alert("Turno 1:" + p1 + " //Turno 2: " + p2 + " //Turno 3: " + p3)
    let opcionTurno= parseInt(prompt("Elija el turno"))
    switch(opcionTurno){
        
        case 1:
            r = p1
            break;
        case 2:
            r= p2
            break;    
        case 3:
            r= p3
            break;    
        default:
            r = m        
    }
    return r
}
function mostrarTurnoC(){
    let c1 = "16/06/22 a las 14:45 hs"
    let c2 = "15/06/22 a las 15:30 hs"
    let c3 = "20/06/22 a las 14 hs"
    alert("Turno 1:" + c1 + " //Turno 2: " + c2 + " //Turno 3: " + c3)
    let opcionTurno= parseInt(prompt("Elija el turno"))
    switch(opcionTurno){
        
        case 1:
            r = c1
            break;
        case 2:
            r= c2
            break;    
        case 3:
            r= c3
            break;    
        default:
            r = m        
    }
    return r
    
}


//PROGRAMA
alert("Para solicitar un turno debe estar registrado")

let registro = prompt("Ingrese 1: si esta registrado / 2: si tiene que registrarse")
if(registro==2){
    
    registrarse()
    alert("Ingresó al sistema de turnos")
   
}else {
    ingreso1 = prompt("Ingrese su usuario")
    ingreso2 = prompt("Ingrese su clave")
    let mostrarMensaje=ingresoRegistrado(ingreso1, ingreso2)
    alert(mostrarMensaje)
}

let opcion= parseInt(prompt("Elija una especialidad: 1-Medico Clinico / 2-Pediatria / 3-Cardiologia /4-Salir Del sistema"))

while(opcion!=4){

switch (opcion) {
    case 1: 
        alert("Turnos Disponibles de Medico Clinico: ");
        reserva = mostrarTurnoMC(r);
        break;
    case 2: 
        alert("Turnos Disponibles de Pediatria: ")
        reserva = mostrarTurnoP(r);
        break;
    case 3: 
        alert("Turnos Disponibles de Cardiologia: ")
        reserva = mostrarTurnoC(r);
        break;
    default:
        alert("opcion invalida")
        break;
}

alert("Turno reservado: " + reserva)
opcion= parseInt(prompt("Elija una especialidad: 1-Medico Clinico / 2-Pediatria / 3-Cardiologia /4-Salir Del sistema"))

}

alert("Usted Salio del Sistema")


