import {togglePassword} from "./password.js"
import {User} from "./password.js"

    document.addEventListener("DOMContentLoaded", e =>{
        
        
        const btn_form = document.querySelector(".btn_form")
        let btn = document.getElementsByName('password')[0]
        // Event password
        // Fonction fléchée pour gérer l'événement de changement du type de mot de passe
        
        // Ajout d'un gestionnaire d'événements pour le champ de mot de passe
        btn.addEventListener('click', togglePassword);

        //control form
       
        btn_form.addEventListener("click",(e)=>{
            e.preventDefault()
            User.control_form()
           
        })
    })