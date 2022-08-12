var input = document.getElementById("caja-encriptador");

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
  alert(text);
}

var input2 = document.getElementById("caja-encriptador");

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

  alert(text2);
}

input.focus();

var button = document.getElementById("btn-encriptar");
button.onclick = encripter;

var button2 = document.getElementById("btn-desencriptar");
button2.onclick = desencriptar;
