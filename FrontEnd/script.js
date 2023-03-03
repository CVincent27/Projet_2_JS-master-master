alert("Hello")

//* Appel à l'api *
async function getWorks(){
    const res = await fetch("http://localhost:5678/api/works");
    const data = await res.json();
    return data;
   }
   
//    Construction de la gallery 
// Test avec tahina 

   const tahinaElement = document.createElement("figure");
   tahinaElement.classList.add("figtahina");
   async function createGallery(){
       const works = await getWorks();
       console.log(works);
       const gallery = document.querySelector(".gallery");
   
       let categories = [];
   
   const parisvElement = document.createElement("figure");
   parisvElement.classList.add("figparisv");
       works.forEach(work=> {
           const element = document.createElement("figure");
           const imgElement = document.createElement("img");
           const captionElement = document.createElement("figcaption");
           captionElement.innerText = work.title;
           imgElement.src = work.imageUrl;
           element.dataset.category = work.category.name;
           element.appendChild(imgElement);
           element.appendChild(captionElement);      
           gallery.appendChild(element);
   
   const sushisenElement = document.createElement("figure");
   sushisenElement.classList.add("figsushisen");
           categories.push(work.category.name);
       });
   
   const balisiereElement = document.createElement("figure");
   balisiereElement.classList.add("figbalisiere");
       console.log(categories);
       const cleanCategories = new Set(categories);
       console.log(cleanCategories);
   
   const thermopolisElement = document.createElement("figure");
   thermopolisElement.classList.add("figthermopolis");
       cleanCategories.forEach(category=> {
           console.log(category);
           buttonFilters.addEventListener("click", function () {
   
   const parisxElement = document.createElement("figure");
   parisxElement.classList.add("figparisxElement");
           })
           
   
    const coteauElement = document.createElement("figure");
    coteauElement.classList.add("figcoteau");
    
    const fernezeElement = document.createElement("figure");
    fernezeElement.classList.add("figferneze");
        });
    
    const parisxviiiElement = document.createElement("figure");
    parisxviiiElement.classList.add("figparisxviii");
        
    const lullabyElement = document.createElement("figure");
    lullabyElement.classList.add("figlullaby");
    
    const arteElement = document.createElement("figure");
    arteElement.classList.add("figarte");
    }
   createGallery();







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