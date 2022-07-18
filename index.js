
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
 
const turnosAgendados=[]    //array vacio que va a ir como propiedad de los objetos usuariosRegitrados


const bntInicio = document.getElementById(`btnInicio`)
const idUsuario = document.getElementById(`idUsuario`)
const idClave = document.getElementById(`idClave`)
const mensaje1 = document.getElementById(`mensaje1`)

let usuarioNuevo=[]

if(localStorage.getItem(`usuariosRegistrados`)){
    usuarioNuevo=JSON.parse(localStorage.getItem(`usuariosRegistrados`))
                                                            //con esto veo si esta creado el localStorage lo guardo en una variable y sino lo creo
}else{
    localStorage.setItem(`usuariosRegistrados`,JSON.stringify(usuarioNuevo))
}

bntInicio.addEventListener(`click`, ()=>{

    let flag = usuarioNuevo.some(user =>user.dni ===idUsuario.value && idClave.value===user.clave)
                            //guardo en una variable true o False que devuelve some del comparar lo que ingreso por teclado el usuario con lo archivado en el localStorage
    if(flag===true){
        mensaje1.innerHTML=`
        <p> Ingreso Exitoso</p>
    `
    let usuarioActivo = idUsuario.value         //guardo en una variable el usuario que ingreso

    localStorage.setItem(`usuarioActivo`, usuarioActivo)       //lo guardo en el localStorage para luego consultarlo en el programa
    

    idUsuario.value=""
    idClave.value=""

    setTimeout(function(){
        window.location="programa.html"     //cambia a otra ventana y le doy unos segundos de tiempo para que se vea el mensaje de ingreso
    } , 1500 )
   
    } else {
        mensaje1.innerHTML=`
        <p> Error de usuario y/o contraseña</p>
    `
    idUsuario.value=""
    idClave.value=""
    }
        
        
})
    




