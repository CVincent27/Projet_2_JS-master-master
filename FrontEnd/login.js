alert("Hello")

const form = document.forms["formLogIn"];
  const email = document.querySelector("#email2");
  const password = document.querySelector("#mdp2");

form.addEventListener("submit",function(e){
// post valeur des inputs
e.preventDefault();
 fetch("http://localhost:5678/api/users/login", {
  method: "POST",
  headers: {
    "accept": "application/json",
    "content-type":"application/json"
  },
  body: JSON.stringify({
    "email":email.value,
    "password":password.value
  })
})// Partie token reponse
.then(response => response.json())
.then(data => {
  console.log(data)
let erreur;
  if(!email.value || !password.value){
    erreur = "Veuillez saisir tout les champs";
  }
  if(email.value && password.value && !data.token){
    erreur = "Adresse email ou mot de passe incorrect";
  }
  if (erreur) {
    document.querySelector("#erreur").innerHTML=erreur;
  } else {
    document.querySelector("#erreur").innerHTML=""; 
    form.action="http://127.0.0.1:5500/FrontEnd/Html/index.html";
    sessionStorage.setItem("user",JSON.stringify(data));
    let token2 = sessionStorage.getItem('user');
    console.log(token2);
    form.submit();
  } 
})
.catch(error => {
    console.error('Error:', error);
});
});


// async function fetchUsers () {
//     const r = await fetch('http://localhost:5678/api/users/') {
//         method: 'GET',
//         headers: {
//             "Accept": "application/json",
//             "Content-type": "applcation/jason"
//         },
//         body: JSON.stringify({title:'Premier test'})
//     })
//     if (r.ok === true) {
//         return r.json();
//     }
//     throw new Error('connexion impossible dsl')
// }

// fetchUsers().then(users => console.log(users))

// // https://youtu.be/z9pcgJX1DdY?t=572









    

     
// 2eme test
// async function getUsers(names) {
//     let jobs = [];
  
//     for(let name of names) {
//       let job = fetch(`http://localhost:5678/api/users/login`).then(
//         successResponse => {
//           if (successResponse.status != 200) {
//             return null;
//           } else {
//             return successResponse.json();
//           }
//         },
//         failResponse => {
//           return null;
//         }
//       );
//       jobs.push(job);
//     }
  
//     let results = await Promise.all(jobs);
  
//     return results;
//   }