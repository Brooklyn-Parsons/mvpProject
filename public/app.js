fetch("/shrek").then((res) => 
res.json()
).then((characters) => {
    console.log(characters);
});