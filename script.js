const fecha = document.querySelector("#fecha");
const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonenter = document.querySelector("#enter");
const check="fa-check-circle";
const uncheck="fa-circle";
const linethough="line-though";
var id=0;
var megalist= [{
    nombre: "Jugar lol toda la noche",
    id: id,
    realizado: false,
    eliminado: false
}]
const bdark= document.querySelector("#bdarkmode");//variables darkmode
const body = document.querySelector("body");
const dactive= document.querySelector(".descativado")
console.log(bdark)
console.log(body)
//fecha navegador 
const FECHA = new Date ()
fecha.innerHTML=FECHA.toLocaleDateString("es-MX",{weekday:"long",month:"short",day:"numeric"})
//funcion agregar tarea
function agregarTarea(tarea,id,realizado,eliminado){
    if(eliminado){
        return
    }
    const REALIZADO = realizado ?check :uncheck //si realizado es true check si es falso uncheck
    const LINE = realizado ?linethough :""
    const elemento = `<li> <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                    <p class="text ${LINE}">${tarea}</p>
                    <i class="fas fa-trash" data="eliminado" id="${id}" ></i></li>`
    lista.insertAdjacentHTML("beforeend",elemento)
}
//funcion tarearealizada
function tareaRealizada(element) {
    element.classList.toggle(check)
    console.log(element.classList)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector(".text").classList.toggle(linethough)
    console.log(megalist[element.id].realizado)
    megalist[element.id].realizado=megalist[element.id].realizado ?flaso :true
    console.log(megalist[element.id].realizado)
}

//funcion tarea eliminada
function tareaEliminada(element) {
    element.parentNode.parentNode.removeChild(element.parentNode)
    megalist[element.id].eliminado=true
}

botonenter.addEventListener("click" , ()=>{
    const tarea = input.value
    id++
    if(tarea){
        agregarTarea(tarea,id,false,false)
        megalist.push({
            nombre: tarea,
            id: id,
            realizado: false,
            eliminado: false
        })
        console.log(megalist)
        console.log("fodkfo")
    }
    //localStorage.setItem('TODO',JSON.stringify(megalist))
    input.value=""
    
})
document.addEventListener("keyup",function(event){
    if(event.key=="Enter"){
        const tarea = input.value
        id++
        if(tarea){
            agregarTarea(tarea,id,false,false)
            megalist.push({
                nombre: tarea,
                id: id,
                realizado: false,
                eliminado: false
            })
            console.log("fodkfo")
            console.log(megalist)

        }
        //localStorage.setItem('TODO',JSON.stringify(megalist))
        input.value=""
        
    }
})
lista.addEventListener("click",function(event){
    const element= event.target
    const elementData = element.attributes.data.value
    console.log(element)
// console.log(element.attributes)
//console.log(element.attributes.data)
//console.log(element.attributes.data.value)
//console.log(element.attributes.id)
if(elementData==="realizado"){
    tareaRealizada(element)
}else if(elementData==="eliminado"){
    tareaEliminada(element)
}
//localStorage.setItem('TODO',JSON.stringify(megalist))
})
//boton darkmode
bdark.addEventListener("click",()=>{
    var f = body.classList.toggle("darkmode")
    bdark.classList.toggle("activado")
    //estadodia=bdark.classList.toggle("activado")

})
/*let data = localStorage.getItem('TODO')
if(data){
    megalist = JSON.parse(data)
    console.log(megalist)
    id = megalist.length
    cargarLista(megalist)
}else {
    megalist = []
    id = 0
}


function cargarLista(array) {
    array.forEach(function(item){
        agregarTarea(item.nombre,item.id,item.realizado,item.eliminado)
    })
}*/