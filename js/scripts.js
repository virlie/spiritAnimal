// Sloth = 1  Owl = 2  Honey Badger = 3
var slothCount = 0;
var owlCount = 0;
var hbCount = 0;

function add(animalNumber){
  if (animalNumber == 1){
    slothCount = slothCount + 1;
    console.log("sloth count: " + slothCount)
  } else if (animalNumber == 2) {
    owlCount = owlCount + 1;
    console.log("owl count: " + owlCount)
  } else if (animalNumber == 3){
    hbCount = hbCount + 1;
    console.log("honey badger count: " + hbCount)
  } else {
    alert("Please fill out the whole form")
  }
}

$(document).ready(function(){
  $("form.quiz").submit(function(event){
    event.preventDefault();
    for(i = 1; i < 6; i++){
      add($("#"+i).val());

    }
  })
})
