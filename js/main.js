
let PIN="42325";
let ingresar = false;
function ingreso(){
alert("Bienvenidos a Banco columbia")
for ( let i = 2; i >= 0; i-- ){
    let ingresoPIN = prompt("Ingresa tu PIN");
    if (ingresoPIN == PIN) {
        alert("Disfrute su Estadia");
        ingresar=true;
        break
        }else{
            alert("Error,vuelva a intentar");
        }
        
    }
}

ingreso()

if(ingresar){
    let saldo=45000
    let opcion = prompt (  "Elije una opción.": \n1- saldo. \n2- Retirar de dinero. \n3- Depósito. \ Presiona para Finalizar.)
    
    
    while(opcion !=="x"){
        switch (opcion) {
            case "1":
                alert (" Tu saldo es: "+ saldo)
                break;
                case "2":
                let retiro= parseFloat(prompt("Ingrese el monto que desea Retirar."))
                if(retiro<= saldo){
                    saldo=saldo - retiro
                alert ("Retirado con Éxito")
            } else{
                alert("Saldo Insuficiente")
            }
                break;
                let deposito=parseFloat(prompt("Ingrese el monto que desea Depositar."))
                case "3":
                saldo = saldo + deposito
                alert("Deposito Exitoso")
                break;
            default:
                alert ("Opcion no Valida.")
                break;
        }
        
        
        
        
        
        opcion = prompt (  "Elije una opción.": \n1- saldo. \n2- Retirar de dinero. \n3- Depósito. \ Presiona para Finalizar.)
    }
    alert("Gracias por confiar En Nosotros")
}else{
    alert("Por Seguridad Retrendemos Tú Tarjeta.")
}