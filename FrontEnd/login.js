alert("Hello")

const formElement = document.querySelector('.form');

formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(formElement);
    const data = Object.fromEntries(formData);

    console.log(data);

    fetch("http://localhost:5678/api/users/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/Json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));

});

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