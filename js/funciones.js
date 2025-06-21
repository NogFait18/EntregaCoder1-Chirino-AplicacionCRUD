const usuarios = []
export default function menu(){
    let opcion = 0;
    while(opcion != 5){
        opcion=parseInt(prompt("Ingrese una opción: \n1-Ingresar usuario\n2-Eliminar usuario\n3-Actualizar usuario\n4-Mirar usuarios\n5-Salir"));
        switch(opcion){
            case 1:
                ingresarDatos();
                break
            case 2:
                eliminarDatos();
                break
            case 3:
                actualizarDatos();
                break
            case 4:
                mostrarDatos();
                break
        }
    }
    alert("¡Hasta pronto!")
}

function ingresarDatos(){
    console.log("INGRESAR");
    let cant = parseInt(prompt("Ingrese la cantidad de usuarios a agregar: "))
    for(let i = 1;i <= cant;i++){
        let nombre = prompt("Ingrese el nombre del usuario "+i+": ");
        let apellido = prompt("Ingrese el apellido del usuario "+i+": ");
        let edad = parseInt(prompt("Ingrese la edad del usuario "+i+": "));
        usuarios.push([nombre,apellido,edad]);
        alert("Usuario: "+usuarios[i-1][0]+" agregado con exito!!!")
    }
    console.log("Lista de usuarios:")
    for(let i = 0; i < usuarios.length;i++){
        console.log(`${i+1} - ${usuarios[i][0]} ${usuarios[i][1]}, Edad: ${usuarios[i][2]}`);
    }
}

function eliminarDatos(){
    console.log("ELIMINAR");
    console.log("Lista de usuarios:")
    for(let i = 0; i < usuarios.length;i++){
        console.log(`${i+1} - ${usuarios[i][0]} ${usuarios[i][1]}, Edad: ${usuarios[i][2]}`);
    }
    let indice = parseInt(prompt("Ingrese el usuario que desea eliminar: "));
    alert("Se elemino con exito al usuario: "+usuarios[indice-1][0])
    usuarios.splice(indice-1,1);
}

function actualizarDatos(){
    console.log("ACTUALIZAR");
    console.log("Lista de usuarios:");
    for(let i = 0; i < usuarios.length;i++){
        console.log(`${i+1} - ${usuarios[i][0]} ${usuarios[i][1]}, Edad: ${usuarios[i][2]}`);
    }
    let indice = parseInt(prompt("Ingrese el usuario a actualizar: "));
    let nombreUpt = prompt("Ingrese el  nuevo nombre del usuario: ");
    let apellidoUpt = prompt("Ingrese el nuevo apellido del usuario: ");
    let edadUpt = parseInt(prompt("Ingrese la nueva edad del usuario: "));
    alert("Se actualizo con exito al usuario: "+usuarios[indice-1])
    usuarios[indice-1] = [nombreUpt,apellidoUpt,edadUpt];
}

function mostrarDatos(){
    console.log("MOSTRAR");
    console.log("Lista de usuarios:")
    for(let i = 0; i < usuarios.length;i++){
        console.log(`${i+1} - ${usuarios[i][0]} ${usuarios[i][1]}, Edad: ${usuarios[i][2]}`);
    }
}

