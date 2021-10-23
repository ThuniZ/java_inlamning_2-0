/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/
//Done

let blue = false;

function taskOne() {
  
  let color = document.getElementById("answer-one");
  
  if (blue) {
    color.style.backgroundColor = "white";
    blue = false
  } else {
    color.style.backgroundColor = "blue";
    blue = true;
  };

 
}

/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/
//Done
//Lägger till ett nytt index med ett nytt random nummer varje gång man klickar på knappen
const numbers = [234, 986, 784];

function taskTwo() {
  numbers.push(Math.floor(Math.random() * 999));
  document.getElementById("answer-two").innerHTML = numbers;
  
  //alert("Replace this alert with a solution");
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/
//Done
function taskThree() {
  //let dayOfWeek = document.getElementById("answer-three")
  //if ( getDay)
  const date = new Date().getDay();
  if (date == (5, 6)) {
    alert("Woohooo it´s weekend")
  } else {
    alert("FML")
  };
  
  //date.getDay()
  //console.log (Date)
  //alert(date);
}

/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/
//Done
function multiplier(valueOne, valueTwo) {
  //alert("Replace this alert with a solution");
  let sum = valueOne * valueTwo
  
  console.log(typeof valueOne);
  console.log(sum);

  if (sum) {
    alert("Produkten är: " +sum)
  } else {
    alert("Jag kan bara multiplicera nummer!")
  };


}

function taskFour() {
  multiplier(10,20);
}


/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/
//Done
//Var tvungen att skapa 4 variabler för att få om arrayen till text samt att få det till bold,
const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

function taskFive() {
  trash.push("apelsin ", "päron");
  eatable.push("banan", " äpple", " citron")

  let textOne = eatable.toString();
  let textTwo = trash.toString();
  const tra = "<b> Skräp:</b>"
  const eat = "<b> Ätligt: </b>"
  

  document.getElementById("answer-five").innerHTML = eat +textOne+ tra +textTwo;
  //document.getElementById("answer-five").innerHTML = "trash: " +this.trash;

  //alert("Replace this alert with a solution");
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/
//Done

const persons = [
  { name: "Christian", age: 31, married: true },
  { name: "Diana", age: 29, married: true },
  { name: "Carl", age: 28, married: false },
  { name: "Karin", age: 29, married: false },
];

const married = [];
const notMarried = [];
const overThirty = [];
const underThirty = [];



function taskSix() {
//loop för att se married
  for (let i = 0; i < persons.length; i++){
    if (persons[i].married === true){
      married.push(persons[i].name)
    } else {
      notMarried.push(persons[i].name)
    };
  };
  console.log(married);

  for (let i = 0; i < persons.length; i++){
    if (persons[i].age >= 30){
      overThirty.push(persons[i].name)
    } else {
      underThirty.push(persons[i].name)
    };
  };
  console.log(overThirty);
  console.log(underThirty);
  
  document.getElementById("answer-six").innerHTML = "<b>Över 30: </b>" +overThirty+ "<br>" + 
    "<b>Under 30: </b>" +underThirty+ "<br>" + "<b>Gift: </b>" +married+ "<br>" +"<b>Ogift: </b>" +notMarried; 

  //alert("Replace this alert with a solution");
};

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

//Done
const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

function taskSeven() {
  
  document.getElementById("answer-seven").innerHTML = addMeSomeLineBreaks.replace(/,/g, "<br>");

  //alert(addMeSomeLineBreaks.replace(","));
};

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/
//Done
function taskEight() {
  document.getElementById("card-eight").style.display = "none";
  setTimeout(function(){document.getElementById("card-eight").style.display = "block";}, 3000);  
 
  //timming hur vi styr
 //metod setTimeout
 //klickar försvinner diven sen vissas efter 3 sek
 //diven försvinner dirr sen visas efter 3 sek 
 //visible
};

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/
//Done

function taskNine() {

  const hour = new Date().getHours();
  let x = document.getElementsByClassName("answer-container");
  
  for (let i = 0; i < x.length; i++){
  if (hour < 17) {
    x[i].style.backgroundColor = "red"
  } else {
    x[i].style.backgroundColor = "blue"
  };
};
  
  //alert("Replace this alert with a solution");
};

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  //alert("Replace this alert with a solution");
  // switch block
  let sum;

  if (typeof valueOne === "string" || typeof valueTwo === "string") {
    alert("Något är fel")
  

  
} else {
  switch (operator) {
    case "add":
     sum = valueOne + valueTwo
     alert(sum)
     break;
    case "subtract":
      sum = valueOne - valueTwo
      alert(sum)
      break;
    case "multiply":
      sum = valueOne * valueTwo
      alert(sum)
      break;
    case "divide":
      sum = valueOne / valueTwo
      alert(sum)
      break;
    default:
      alert("Något är fel")
  }
};
//alert(sum);



};

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(32,20,"divide");

};
