//TODO: no se puede realizar las acciones infinitas veces
var input = document.getElementById("caja-encriptador");
var input2 = document.getElementById("caja-encriptador");
var input3 = document.getElementById("caja-respuesta");

function encripter() {
  var text = "";
  for (var i = 0; i < input.value.length; i++) {
    var letra = input.value.charAt(i).toLowerCase();

    if (
      letra != "a" &&
      letra != "e" &&
      letra != "i" &&
      letra != "o" &&
      letra != "u"
    ) {
      text += letra;
    }
    switch (letra) {
      case "e":
        text += "enter";
        break;
      case "i":
        text += "imes";
        break;
      case "a":
        text += "ai";
        break;
      case "o":
        text += "ober";
        break;
      case "u":
        text += "ufat";
        break;
    }
  }
  input3.append(text);
}

function desencriptar() {
  var text2 = "";
  var word = input2.value.toLowerCase();

  for (var j = 0; j < input2.value.length; j++) {
    if (word.includes("ai")) {
      text2 = word.replace("ai", "a");
    }
  }

  for (var t = 0; t < input2.value.length; t++) {
    if (word.includes("enter")) {
      text2 = text2.replace("enter", "e");
    }
  }
  for (var t = 0; t < input2.value.length; t++) {
    if (word.includes("imes")) {
      text2 = text2.replace("imes", "i");
    }
  }

  for (var t = 0; t < input2.value.length; t++) {
    if (word.includes("ober")) {
      text2 = text2.replace("ober", "o");
    }
  }
  for (var t = 0; t < input2.value.length; t++) {
    if (word.includes("ufat")) {
      text2 = text2.replace("ufat", "u");
    }
  }

  for (var t = 0; t < input2.value.length; t++) {
    if (text2.includes("ai")) {
      text2 = text2.replace("ai", "a");
    }
  }

  input3.append(text2);
}

function copiarTexto() {
  input3.select();
  document.execCommand("copy");
}

input.focus();

var button_encriptar = document.getElementById("btn-encriptar");
button_encriptar.onclick = encripter;

var button_desencriptar = document.getElementById("btn-desencriptar");
button_desencriptar.onclick = desencriptar;

var button_copiar = document.getElementById("btn-copiar");
button_copiar.onclick = copiarTexto;
