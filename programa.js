let i

//OBJETOS DE MEDICOS

class Medico{
    constructor(id, nombreApellido, especialidad, diasAtencion, turnosDisponibles){
        this.id=id
        this.nombreApellido=nombreApellido
        this.especialidad=especialidad
        this.diasAtencion=diasAtencion
        this.turnosDisponibles=turnosDisponibles
       
    }


}

const medicosDisponibles=[]

const medico1Disponible=["05/07/22 a las 10 HS", "07/07/22 a las 10:45HS", "12/07/22 a las 14:30 HS"]
const medico2Disponible=["04/07/22 a las 15 HS", "07/07/22 a las 18:45HS", "13/07/22 a las 17:30 HS"]
const medico3Disponible=["08/07/22 a las 19:30 HS", "12/07/22 a las 20:30HS", "15/07/22 a las 20:15 HS"]
const medico4Disponible=["06/07/22 a las 17:30 HS", "13/07/22 a las 16:45HS", "13/07/22 a las 19:30 HS"]
const medico5Disponible=["06/07/22 a las 15;30 HS", "12/07/22 a las 15:45HS", "13/07/22 a las 17:15 HS"]
const medico6Disponible=["05/07/22 a las 17 HS", "12/07/22 a las 18:15HS", "19/07/22 a las 20:30 HS"]


//Creo objetos a instancia del constructor Medico
const medico1 = new Medico (1,"JUAN GOMEZ", "PEDIATRIA", "Martes y Jueves de 10 a 15 Hs",medico1Disponible)
const medico2 = new Medico (2,"GASTON LOPEZ", "MEDICO CLINICO", "Lunes a Jueves de 15 a 19 Hs" ,medico2Disponible)
const medico3 = new Medico (3,"ANA GUTIERREZ", "DERMATOLOGIA", "Martes y Viernes de 18 a 21 Hs",medico3Disponible)
const medico4 = new Medico (4,"MARIANA DUARTE", "PEDIATRIA", "Lunes y Miercoles de 16 a 20 Hs",medico4Disponible)
const medico5 = new Medico (5,"GABRIELA MISTRAL", "TRAUMATOLOGIA", "Martes a Jueves de 15 a 20 Hs",medico5Disponible)
const medico6 = new Medico (6,"NICOLAS RODRIGUEZ", "ALERGISTA", "Martes de 17 a 21 Hs",medico6Disponible)

//Objetos que forman el array de medicosDisponibles
medicosDisponibles.push(medico1)
medicosDisponibles.push(medico2)
medicosDisponibles.push(medico3)
medicosDisponibles.push(medico4)
medicosDisponibles.push(medico5)
medicosDisponibles.push(medico6)





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


const datosUsuario = document.getElementById(`datosUsuario`) //consulto el div donde voy a mostrar los datos del usuario activo

const usuarioActivo = localStorage.getItem(`usuarioActivo`)     //traigo el dni del usuario que inicio cesion
const usuariosRegistrados=JSON.parse(localStorage.getItem(`usuariosRegistrados`))


usuariosRegistrados.forEach(user =>{
        if(user.dni===usuarioActivo){
            datosUsuario.innerHTML=`
                <p>Bienvenido al sistema de turnos ${user.nombre} ${user.apellido}</p>
            `
        }
})



const btnReservar=document.getElementById(`btnReservar`)
const btnCancelar=document.getElementById(`btnCancelar`)
const btnVer=document.getElementById(`btnVer`)
const contenido =document.getElementById(`contenido`)

btnReservar.addEventListener(`click`, ()=>{
    medicosDisponibles.sort(function (a, b) {
        if (a.especialidad > b.especialidad) {
          return 1;
        }                               //ordeno por especialidad y de mayor a menor las cards
        if (a.especialidad < b.especialidad) {
          return -1;
        }
       
        return 0;
    }
    ).forEach (medicos =>{
                                        //agrego las cards con los medicos disponibles
        contenido.innerHTML+=`
            <div class="card" id="cards${medicos.id}" style="width: 18rem; margin: 15px; box-shadow: 10px 10px 5px 5px rgba(0, 0, 255, 0.295) ">
            <img src="./img/persona.jpg" class="card-img-top" alt="...">
                <div class="card-body">                                     
                    <h4 class="card-title">${medicos.nombreApellido}</h4>
                    <h5>${medicos.especialidad}<h5>  
                    <p class="card-text">Dias de atencion ${medicos.diasAtencion}</p>
                    <button class="btn btn-primary" id="btnTurno">Ver Turnos Disponibles</button>
                </div>
            </div>
            `
        })

      
        
    medicosDisponibles.forEach((medicos) => {
        document.getElementById(`cards${medicos.id}`).lastElementChild.lastElementChild.lastElementChild.addEventListener(`click`, () => {
            contenido.innerHTML = `
                <div class="card" id="cards${medicos.id}" style="width: 18rem; margin-left:400px; box-shadow: 10px 10px 5px 5px rgba(0, 0, 255, 0.295) ">
                <img src="./img/persona.jpg" class="card-img-top" alt="...">
                    <div class="card-body">                                     
                    <h4 class="card-title">${medicos.nombreApellido}</h4>
                    <h5>${medicos.especialidad}<h5>  
                    <p class="card-text">Dias de atencion ${medicos.diasAtencion}</p>
                    </div>
                </div>
                `
         


            medicos.turnosDisponibles.forEach((turno,i) => {
            contenido.innerHTML += `
                <form id="forms${i}">  
                <button class="btn-primary estiloBot" >Reservar ${turno}</button>
                </form>
                `
                })
            
                document.getElementById(`forms${i}`).lastElementChild.addEventListener(`click`, ()=>{
                    contenido.innerHTML=`
                    <p>Turno Reservado con exito</p>
                    `   
                    let turnoReservado = medicos.turnosDisponibles[i]
                    usuariosRegistrados.forEach(usuarios=>{
                        if (usuarios.dni===usuarioActivo){
                            let indice = usuarios.indexof(usuarios.dni)
                            console.log(indice)
                          
                        }
                        usuariosRegistrados[indice].turnosAgendados.push(turnoReservado)
                        localStorage.setItem(`usuariosRegistrados`, JSON.stringify(usuariosRegistrados))

                    })
                    

                    

                })
            })
        })
    })
        
