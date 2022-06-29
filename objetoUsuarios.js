class Usuario{
    constructor(nombre, apellido, dni, telefono,mail, user, clave,turnosAgendados){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
        this.telefono=telefono
        this.mail=mail
        this.user=user
        this.clave=clave
        this.turnosAgendados=turnosAgendados   //array

    }

    //Metodo
   mostrarTurno(){
    alert(`Sus turnos reservados son : ${this.turnosAgendados} // `)
   }
}

const usuariosRegistrados=[]        //defino un array vacio donde voy a ir guardando los objetos usuarios
const turnosAgendados=[]    //array vacio que va a ir como propiedad de los objetos usuariosRegitrados
const usuarioAlmacenado = new Usuario("Nicolas", "Laurito", "32152341", "1161527288","nlaurito@hotmail.com", "nlaurito", "123456" , turnosAgendados )   //creo un objeto nuevo para que forme parte del array
usuariosRegistrados.push(usuarioAlmacenado)     //mando este primer objeto al array