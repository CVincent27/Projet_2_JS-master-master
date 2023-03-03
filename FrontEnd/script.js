
alert("Hello")

// test gallery
// async function getWorks(){

// async function createGallery(){
//     const works = await getWorks();
//     const gallery = document.querySelector(".gallery");

//     let categories = [];
//         works.forEach(work=> {
//         const element = document.createElement("figure");
//         const imgElement = document.createElement("img");
//         const captionElement = document.createElement("figcaption");
//         captionElement.innerText = work.title;
//         imgElement.src = work.imageUrl;
//         element.dataset.category = work.category.name;
//         element.appendChild(imgElement);
//         element.appendChild(captionElement);      
//         gallery.appendChild(element);

//         categories.push(work.category.name);
//     });

//     categories.unshift('Tous');
//     const cleanCategories = new Set(categories);

//     cleanCategories.forEach(category=> {

//         const buttonElement = document.createElement("button");
//         buttonElement.innerText = category;
//         buttonElement.dataset.category = category;
//         if(category === 'Tous'){
//             buttonElement.classList.add("activefilter");
//         }
//         document.querySelector(".filtersdiv").appendChild(buttonElement);

//         buttonElement.addEventListener("click", function(e) {
//             e.preventDefault();
//             console.log(buttonElement.dataset.category);
//             const filters = document.querySelector(".filtersdiv");
//             const filtersArray = Array.from(filters.children);
//             filtersArray.forEach(buttonElement=> {
//                 buttonElement.classList.remove("activefilter");
//             }); 
//             buttonElement.classList.add("activefilter");

//             let figure = document.querySelectorAll('.gallery figure');
//             figure.forEach(figurework=> {
//                 if(buttonElement.dataset.category === 'Tous') {
//                     figurework.classList.remove("no-show"); 
//                 }
//                 else if(figurework.dataset.category === buttonElement.dataset.category) {
//                     figurework.classList.remove("no-show"); 
//                 }
//                 else {
//                     figurework.classList.add("no-show");
//                 }
//         });
//     });
// });

//     createGallery();














// Test filtre 
const tousElement = document.createElement("button");
tousElement.innerText = "Tous";
tousElement.classList.add("filters");

const objetsElement = document.createElement("button");
objetsElement.innerText = "Objets";
objetsElement.classList.add("filters");

const appartementsElement = document.createElement("button");
appartementsElement.innerText = "Appartements";
appartementsElement.classList.add("filters");

const hotelsElement = document.createElement("button");
hotelsElement.innerText = "Hôtels & restaurants";
 hotelsElement.classList.add("filters");

document.querySelector(".filtersdiv").appendChild(tousElement);
document.querySelector(".filtersdiv").appendChild(objetsElement);
document.querySelector(".filtersdiv").appendChild(appartementsElement);
document.querySelector(".filtersdiv").appendChild(hotelsElement);


const buttonFilters = document.querySelector("filters");
buttonFilters.addEventListener("click", function() {


});