const input = document.querySelector(".inputClass");
const submitBtn = document.querySelector(".submitButton");

submitBtn.addEventListener('click', function(event){
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input.value}`)
    .then(resolve => resolve.json())
    .then(data =>{
        const dishes = data["meals"]
        console.log(dishes)
        // console.log(data)
        dishes.map((meal) =>{
            let result = `<div><h1>Name : ${meal.strMeal}</h1>
            <h1>Instructions: </h1> 
            <p>${meal.strInstructions}</p></div>`
        let container = document.querySelector(".container")
        container.innerHTML += result
        })
    }).catch(err => alert("error"))
})
