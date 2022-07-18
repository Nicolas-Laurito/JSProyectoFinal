// import {Usuario, usuariosRegistrados} from "./objetos.js"
//OBJETOS DE USUARIOS
class Usuario{
    constructor(nombre, apellido, dni, telefono,mail, clave,turnosAgendados){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
        this.telefono=telefono
        this.mail=mail
        this.clave=clave
        this.turnosAgendados=turnosAgendados   //array

    }
}

let usuarioNuevo=[]        //defino un array vacio donde voy a ir guardando los objetos usuarios
const turnosAgendados=[]    //array vacio que va a ir como propiedad de los objetos usuariosRegitrados

//PROGRAMA

if(localStorage.getItem(`usuariosRegistrados`)){
    usuarioNuevo=JSON.parse(localStorage.getItem(`usuariosRegistrados`))

}else{
    localStorage.setItem(`usuariosRegistrados`,JSON.stringify(usuarioNuevo))
}


const formRegistro = document.getElementById(`formRegistro`)

formRegistro.addEventListener(`submit`, (event)=>{
    event.preventDefault()
    let nombre =document.getElementById(`inputNombre`).value
    let apellido =document.getElementById(`inputApellido`).value
    let dni =document.getElementById(`inputDNI`).value
    let contacto =document.getElementById(`inputContacto`).value
    let email =document.getElementById(`inputEmail`).value
    let clave =document.getElementById(`inputClave`).value

    const turnoAgendado = []
    const userNuevo = new Usuario (nombre,apellido, dni, contacto, email, clave, turnoAgendado) //cargo los datos que saco de los input a un nuevo objeto
    formRegistro.reset()
    usuarioNuevo.push(userNuevo)    //cargo en el array definido antes al nuevo usuario

    localStorage.setItem(`usuariosRegistrados`,JSON.stringify(usuarioNuevo))    //Piso en el local storage el aray de usuarios ya actualizado con el nuevo usuario
    const mensaje2 = document.getElementById(`mensaje2`)
    mensaje2.innerHTML=`
    <p>Registro Exitoso</p>
   `

   setTimeout(function(){       //vuelvo al indexz principal para iniciar cesion
    window.location="index.html"
} , 2500 )


})



