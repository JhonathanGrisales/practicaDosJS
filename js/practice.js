
/* Funcion estanadar

*/

function standar() {

    let name_save = document.getElementById("user_name").value
    let lastname_save = document.getElementById("lastname").value
    console.log(name_save, lastname_save)

}

/* Estructura anonima o clousure
siempre se pone en una constante */

const function_clousure = function () {


    console.log('Ejecutando clousure')

}

/* funcion flecha o arrow */

const function_arrow = () => { console.log('Ejecutando arrow') }



/* funcion flecha o arrow -- saber si es mayor */

const age_validate = () =>{


    let user_age = document.getElementById("user_age").value


    if (user_age < 18) {

        console.log('Usuario  menor de edad');


    } else {

        console.log('Usuario mayor de edad');

    }
}

/* Validar en una sola liena -- saber si es mayor */

const age_validateDos = () =>{


    document.getElementById("user_age").value < 18 ? console.log('menor de edad') : console.log('Mayor de edad');
   
    
}


//git status y git log y ultimo git remot y por ultimo git push


