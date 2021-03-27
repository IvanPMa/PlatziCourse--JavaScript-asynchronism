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




const somethingWillHapen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() =>{
                resolve('True');
            }, 2000);
        } else{
            const error = new Error('Whoop! ');
            reject(error);
        }
    });
}

somethingWillHapen2 ()
    .then( response => console.log(response))
    .catch(err => console.error(err));