//C107
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //es necesario escribir /model.json al final del enlace
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w2AnvkP5m/model.json', modelReady);
//https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json
  }

function modelReady(){
  classifier.classify( gotResults);
}
//////

//////C108

function gotResults(error, results) {
  //VERIFICAREMOS SI OCURRIÓ UN ERROR AL CARGAR EL MODELO
  //en caso de que haya ocurrido, mostraresmos un mensaje en la consola
  if (error) {
    console.error(error);
  } else {
    //si no hubo error, cargaremos los resultados en la consola
    //esta es la matriz de las coincidencias de los resultados
    console.log(results);


    //estos numeros aleatorios son para que las letras cambien a numeros al azar
    //MATH.random entrega un valor decimal entre el 0 y 1, por eso lo redondeamos y multiplicamos
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    //para actualizar la etiqueta del titulo 
    //de la matriz, queremos obtener el titulo del primer elemento, 
    //por eso requerimos "results[0].label"
    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    //para mostrar el porcentaje de coincidencia, multiplicamos el valor de confidence por 100
    //y lo redondeamos a dos decimales con "toFixed"
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";

    //para cambiarles los colores de las etiquetas
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";


    //para llamar mas facilmente a los elementos, los guardamos en variables
    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')


    //si, el valor de la etiqueta es "aplausos"
    //cambiaremos las imagenes de uno los aliens por un gif
    if (results[0].label == "Aplauso") {
      img.src = 'aliens-01.gif';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "Voz") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.gif';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.png';
    } else if (results[0].label == "chasquidos") {
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.gif';
      img3.src = 'aliens-04.png';
      //sino coincide con ninguno, entonces se moverá el ultimo
    }else{
      img.src = 'aliens-01.png';
      img1.src = 'aliens-02.png';
      img2.src = 'aliens-03.png';
      img3.src = 'aliens-04.gif';
    }
  }
}
