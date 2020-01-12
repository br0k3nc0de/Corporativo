import React, { Component } from 'react'
import './../css/Footer.css'


const months = ['Enero','Febrero','Marzo','Abril','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']

let date = new Date()
let today = date.getDate() + " de " + months[ date.getMonth() ] + " del " + date.getFullYear()

class Footer extends Component{

    render(){
        return(
          <div className="footer">
            <p>{ today }</p>
            <p align="center">By Powered React + Express.</p>        
             
          </div>
        )
    }

}
    

export default Footer;