const fs = require('fs');
var services = require('./../data/services')
var express = require("express");
var router = express.Router();

let date = new Date()
let today = date.getDate() + '/' + mes(date.getMonth()) + '/' + date.getFullYear()
var AllServices = services.services

router.get("/", function(req, res, next) {
    res.send("API is working properly");
});

router.get("/all", function(req, res, next) {
    res.send(JSON.stringify(services));
});

router.get("/get", function(req, res, next) {
    let service = getService(req.query.service)

    console.log(service)

   if( service !== null && service !== undefined ){
        res.send(service)
   }else{
        res.sendStatus(404)
   }
});

router.post("/add", function(req, res, next) {

    let service = req.body

    if( !existService(service) ){
        addService(service)
        res.send('Se ha guardado el Servicio.')
    }else{
        res.send('Ya existe un Servicio con estos datos')
    }
    
});

router.post("/update", function(req, res, next) {

    let oldNameService = req.query.oldname 

    let oldService = getService(oldNameService)
    let newService = req.body

    if( oldService != null ){
        updService(oldService, newService)
        res.send('Se ha guardado el Servicio.')
    }else{
        res.status(404).send('NO existe ningun Servicio con estos datos')
    }
    
});

router.delete("/delete", function(req, res, next) {

    let name = req.query.service
    let service = getService(name)

    if( service == null ) {
        res.sendStatus(403).send("No se encontro ningun servicio con esta informacion.")
    }else{
        remService(service)
        if(existService(service))
            res.sendStatus(403).send("NO se pudo eliminar el servicio")
        else
            res.send("Se ha eliminado el servicio")
    }
    
});

function updateFileServices(){
    fs.writeFile('./data/services.json', JSON.stringify(services,null,5), (err) => {
        if (err) throw err;
        console.log('Archivo actualizado Satisfactoriamente: services.json'); 
    });
}

function getService(nameService){
    let service

    for(let it in AllServices){
        if(nameService === AllServices[it].name){
            service = AllServices[it]
            break
        }
    }
    
    return service
}

function existService(service){
    let exist = getService(service.name) != null 
    
    return exist
}

function addService(service){

    let demoService = {
        image: service.image,
        name: service.name,
        description: service.description,
        created: today,
        update: ''
    }

    AllServices.push(demoService)
    updateFileServices()
}

function remService(service){
    const index = AllServices.findIndex(x => x.name === service.name);
    if (index !== undefined) AllServices.splice(index, 1);
    updateFileServices()
}

function updService(oldService ,newService){
    remService(oldService)
    let optService = {
        image: newService.image,
        name: newService.name, 
        description: newService.description,
        created: newService.created,
        updated: today
    }
    addService(optService)
    updateFileServices()
}

function mes(date){
    if( date < 10)
        return "0" + (date + 1)
    else
        return (date + 1)
}


module.exports = router;