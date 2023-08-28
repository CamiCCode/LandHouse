function envia(){
    var nombre = document.getElementById('uname')
    var psw =document.getElementById('psw')
    console.log(nombre.value)
    console.log(psw.value)
}

function usuario_valido() {
    var user = document.getElementById("uname")
      
    if (user.value != "usuario") {
  
      document.getElementById("uname").value = "";
      alert("Usuario no valido");
    } else {
      pass
    }
  }

  function contraseña_valido() {
    var pass = document.getElementById("psw")
      
    if (pass.value != "psw") {
  
      document.getElementById("psw").value = "";
      alert("Contraseña no valido");
    } else {
      pass
    }
  }