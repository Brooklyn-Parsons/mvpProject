let rsc = document.querySelector('.btn');
//console.log(rsc);
let card = document.querySelector(".card");

fetch("/shrek").then((res) => 
res.json()
).then((characters) => {
    console.log(characters);
});

rsc.onclick = () => {
    card.innerHTML = "";
    //console.log("hello");
    fetch("/shrek/random").then((res) =>
    res.json() 
    ).then((characters) => {
        card.append(randomCharacter(characters));

    });
    //console.log("clicked");
    
    //randomCharacter(characters);
};

function randomCharacter(characters){
    // for (let i = 0; i <= characters.length; i++){

    // }
    console.log(characters);
    const div = document.createElement("div");
    div.innerHTML = `
    <h1 class="card-name">Name: ${characters[0].name}</h1>
    <h2 class="card-age">Age: ${characters[0].age}</h2>
    <h3 class="card-quote">Quote: ${characters[0].quote}</h3>`
    return div;
    // `
    // Name: ${characters[0].name} 
    // Age: ${characters[0].age}
    // Quote: ${characters[0].quote}
    // `;
    //   <span class="result-card">
        // <h1 class="card-name">${characters[0].name}</h1>
        // <h2 class="card-age">${characters[0].age}</h2>
        // <h3 class="card-quote">${characters[0].quote}</h3>
    //     </span>
  }

// let RSC = document.getElementById("RSC");
// RSC.addEventListener("click", function() {
//     clickButton 
// });

// function RSC() {
//     const clickButton = "SELECT * FROM characters RANDOM() LIMIT 1";
//     db.get(clickButton, (err, row) => {
//       console.log(clickButton);
//       if (err) {
//         console.error(err);
//       } else {
//         console.log(row);
//       }
//     });
//   };
  
//   RSC();