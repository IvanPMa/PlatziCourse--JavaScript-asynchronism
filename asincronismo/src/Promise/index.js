const somethingWillHapen = () =>{
 return new Promise((resolve, reject) => {
     if (true) {
        resolve('Hey!');
     } else {
         reject('Whooops!');
     }
 });
};

somethingWillHapen()
    .then(response => console.log(response))
    .catch(err => console.error(err));