//C107
function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  //hay que agregarle "model.json" al final
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/w2AnvkP5m/model.json', modelReady);
//https://teachablemachine.withgoogle.com/models/oY9h3yP6J/model.json
//Actualizado con maullidos
//https://teachablemachine.withgoogle.com/models/w2AnvkP5m/
  }

function modelReady(){
  classifier.classify( gotResults);
}
//////


function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Escucho:  '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Presición:  '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('alien1') 
    img1 = document.getElementById('alien2')
    img2 = document.getElementById('alien3')
    img3 = document.getElementById('alien4')

    if (results[0].label == "Aplauso") {
      img.src = 'bulbasaur.gif';
      img1.src = 'charmander-0000.jpg';
      img2.src = 'squirtle-0000.jpg';
      img3.src = 'pikachu-0006.jpg';
    } else if (results[0].label == "Voz") {
      img.src = "bulbasaur-0014.jpg";
      img1.src = 'charmander.gif';
      img2.src = 'squirtle-0000.jpg';
      img3.src = 'pikachu-0006.jpg';
    } else if (results[0].label == "Maullidos") {
      img.src = 'bulbasaur-0014.jpg';
      img1.src = "charmander-0000.jpg";
      img2.src = 'squirtle.gif';
      img3.src = 'pikachu-0006.jpg';
    }else{
      img.src = 'bulbasaur-0014.jpg';
      img1.src = 'charmander-0000.jpg';
      img2.src = 'squirtle-0000.jpg';
      img3.src = 'pikachu.gif';
    }
  }
}
