class Medico{
    constructor(nombreApellido, especialidad, diasAtencion, diaTurno, horaTurno){
        this.nombreApellido=nombreApellido
        this.especialidad=especialidad
        this.diasAtencion=diasAtencion
        this.diaTurno=diaTurno      //array
        this.horaTurno=horaTurno    //array
        
    }


}

const medicosDisponibles=[]

//Array que van como dato en cada objeto Medico
const medico1Dia=["05/07/22","05/07/22","05/07/22","05/07/22","05/07/22","05/07/22","05/07/22", "07/07/22","07/07/22","07/07/22","07/07/22", "12/07/22","12/07/22", "14/07/22"]
const medico1Hora=["10:00","10:30","10:45","13:30","14:00","14:15","14:45","10:45","11:30","12:00","14:15","11:15","14:45","14:30"]
const medico2Dia=["04/07/22","04/07/22","05/07/22","05/07/22","07/07/22","07/07/22","12/07/22", "12/07/22","12/07/22","13/07/22","13/07/22", "14/07/22","14/07/22", "14/07/22"]
const medico2Hora=["15:00","16:30","16:45","18:30","18:45","15:15","15:45","18:45","16:30","18:00","18:15","15:15","16:45","17:30"]
const medico3Dia=["05/07/22","05/07/22","05/07/22","08/07/22","08/07/22","08/07/22","12/07/22", "12/07/22","12/07/22","15/07/22","15/07/22", "15/07/22","15/07/22", "15/07/22"]
const medico3Hora=["18:00","18:30","20:15","19:30","19:45","20:00","18:30","18:45","20:15","20:30","20:45","21:00","19:45","20:15"]
const medico4Dia=["04/07/22","04/07/22","04/07/22","06/07/22","06/07/22","06/07/22","13/07/22", "13/07/22","13/07/22","15/07/22","15/07/22", "15/07/22","15/07/22", "15/07/22"]
const medico4Hora=["16:00","17:30","19:45","17:30","17:45","19:15","16:45","17:30","19:30","17:00","18:15","19:15","19:45","20:00"]
const medico5Dia=["05/07/22","05/07/22","06/07/22","06/07/22","06/07/22","07/07/22","12/07/22", "12/07/22","13/07/22","13/07/22","13/07/22", "14/07/22","14/07/22", "14/07/22"]
const medico5Hora=["15:00","15:30","18:45","19:15","19:30","17:15","15:45","16:45","16:30","18:00","17:15","16:15","18:45","19:30"]
const medico6Dia=["05/07/22","05/07/22","05/07/22","05/07/22","12/07/22","12/07/22","12/07/22", "12/07/22","19/07/22","19/07/22","19/07/22", "19/07/22","19/07/22", "19/07/22"]
const medico6Hora=["17:00","17:30","18:45","20:30","18:00","18:15","19:45","20:15","17:30","17:45","18:30","19:15","19:45","20:30"]

//Creo objetos a instancia del constructor Medico
const medico1 = new Medico ("JUAN GOMEZ", "PEDIATRIA", "Martes y Jueves de 10 a 15 Hs",medico1Dia, medico1Hora)
const medico2 = new Medico ("GASTON LOPEZ", "MEDICO CLINICO", "Lunes a Jueves de 15 a 19 Hs" ,medico2Dia, medico2Hora)
const medico3 = new Medico ("ANA GUTIERREZ", "DERMATOLOGIA", "Martes y Viernes de 18 a 21 Hs",medico3Dia, medico3Hora)
const medico4 = new Medico ("MARIANA DUARTE", "PEDIATRIA", "Lunes y Miercoles de 16 a 20 Hs",medico4Dia, medico4Hora)
const medico5 = new Medico ("GABRIELA MISTRAL", "TRAUMATOLOGIA", "Martes a Jueves de 15 a 20 Hs",medico5Dia, medico5Hora)
const medico6 = new Medico ("NICOLAS RODRIGUEZ", "ALERGISTA", "Martes de 17 a 21 Hs",medico6Dia, medico6Hora)

//Objetos que forman el array de medicosDisponibles
medicosDisponibles.push(medico1)
medicosDisponibles.push(medico2)
medicosDisponibles.push(medico3)
medicosDisponibles.push(medico4)
medicosDisponibles.push(medico5)
medicosDisponibles.push(medico6)
