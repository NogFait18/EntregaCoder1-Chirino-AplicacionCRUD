const usuarios = []
function menu(){
    let opcion = 0;
    while(opcion != 5){
        opcion=parseInt(prompt("Ingrese una opción: \n1-Ingresar usuario\n2-Eliminar usuario\n3-Actualizar usuario\n4-Mirar usuarios\n5-Salir"));
        switch(opcion){
            case 1:
                console.log("INGRESAR");
                let cant = parseInt(prompt("Ingrese la cantidad de usuarios a agregar: "))
                for(let i = 1;i <= cant;i++){
                    let nombre = prompt(`Ingrese el nombre del usuario: ${i}`);
                    let apellido = prompt(`Ingrese el nombre del usuario: ${i}`);
                    let edad = parseInt(prompt(`Ingrese la edad del usuario: ${i}`));
                    if(edad <= 0){
                        alert("Por favor, ingresa una edad válida...")
                    }else {
                        ingresarDatos(nombre,apellido,edad);
                    }
                }
                break
            case 2:
                if(usuarios.length === 0){/* verifica si hay usurios, si no hay no se puede agregar,eliminar ni actualizar */
                    alert("No hay usuarios registrados para eliminar");
                }else{
                    console.log("ELIMINAR USUARIO");
                    console.log("Lista de usuarios:")
                    for(let usuario of usuarios){
                        console.log(`${usuario.nombre} ${usuario.apellido}, Edad: ${usuario.edad}`);
                    }
                    eliminarDatos();
                }
                break
            case 3:
                
                if(usuarios.length === 0){
                    alert("No hay usuarios registrados para modificar");/* verifica si hay usuarios, si no hay no se puede agregar,eliminar ni actualizar */
                }else{
                    console.log("ACTUALIZAR USUARIO");
                    console.log("Lista de usuarios:");
                    for(let usuario of usuarios){
                        console.log(`${usuario.nombre} ${usuario.apellido}, Edad: ${usuario.edad}`);
                    }
                    actualizarDatos();
                    
                }
                break
            case 4:
                if(usuarios.length === 0){
                    alert("No hay usuarios registrados");
                }else{
                    console.log("MOSTRAR USUARIOS");
                    console.log("Lista de usuarios:");
                    mostrarDatos();
                }
                break;
        }
    }
    
}

function ingresarDatos(nombre,apellido,edad){
        usuarios.push({nombre,apellido,edad});
        alert(`Usuario: ${nombre} agregado con éxito!!!`);
        console.log(`${nombre} ${apellido}, Edad: ${edad}`);
}

function eliminarDatos() {
    let nombreBuscado = prompt("Ingrese el nombre del usuario que quiere eliminar:");
    for (let usuario of usuarios) {
        if (usuario.nombre.toLowerCase() === nombreBuscado.toLowerCase()) {
            let index = usuarios.indexOf(usuario);
            usuarios.splice(index, 1);
            alert(`Se eliminó con éxito al usuario: ${nombreBuscado}`);
            encontrado = true;
            break;
        }
    }
}

function actualizarDatos(){
    let nombreBuscado = prompt("Ingrese el nombre del usuario que quiere actualizar: ");
    for(let usuario of usuarios){
        if(usuario.nombre.toLowerCase() === nombreBuscado.toLocaleLowerCase()){
            usuario.nombre = prompt("Ingrese el nuevo nombre: ")
            usuario.apellido = prompt("Ingrese el nuevo apellido:");
            usuario.edad = parseInt(prompt("Ingrese la nueva edad:"));
            if(usuario.edad <= 0){
                alert("Por favor, ingresa una edad valida...")
            }else{
                alert(`Usuario ${nombreBuscado} actualizado con éxito a: ${usuario.nombre}, ${usuario.apellido}, ${usuario.edad}`);
            }
        }
        break;
        }
    }


function mostrarDatos(){
    for(let usuario of usuarios){
        console.log(`${usuario.nombre} ${usuario.apellido}, Edad: ${usuario.edad}`);
    }
    }


/* Programa principal */
menu();
alert("¡Hasta pronto!")