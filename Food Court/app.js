let searchInput = document.querySelector('.searchInput');
let searchBtn  = document.querySelector(".searchBtn");
let recpieContainer = document.querySelector(".recipe-container");
recpieContainerDetail = document.querySelector(".recipe-deatils-conatiner");
const main = document.querySelector("main");

const dataFecth = async (query)=>{
    recpieContainer.innerText="";
    let apiData = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
    const data = await apiData.json();

    data.meals.forEach( (element) => {
        console.log(element);
        const recipeBlock = document.createElement("div");
        recpieContainer.appendChild(recipeBlock);
        recipeBlock.classList.add("recipeBlock");
        let img = document.createElement("img");
        const foodName = document.createElement("h2");
        const foodCountry = document.createElement("h3");

        const recipeBtn1 = document.createElement("button");
        recipeBtn1.classList.add("recipeBtn");
        recipeBtn1.innerText = "Get Recipe";
        img.setAttribute('src',element.strMealThumb);
        // console.log(img);
        recipeBlock.appendChild(img);
        foodName.innerText = element.strCategory;
        foodCountry.innerText = element.strArea;
        recipeBlock.appendChild(foodName);
        recipeBlock.appendChild(foodCountry);
        recipeBlock.appendChild(recipeBtn1);

        recipeBtn1.addEventListener("click",()=>{
            openRecipeDetails(element);
        })
        
    });
}

const openRecipeDetails = (meals)=> {
   
    recpieContainerDetail.innerHTML = `<h3>${meals.strMeal}</h3>`;
//     for(let i=1;i<=7;i++){
//     recpieContainerDetail.innerHTML = `<p>${meals.strIngredient1
//     }<p/>`
// }
    
    main.appendChild(recpieContainerDetail);
    recpieContainerDetail.style.display = "block";
   
    
} ;


searchBtn.addEventListener("click" ,  (event)=>{
    event.preventDefault();
    let query = searchInput.value;
    console.log(query);
    dataFecth(query); 

})

