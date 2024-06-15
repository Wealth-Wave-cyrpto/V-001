 let url = "https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid= 860b59f410fcba0274d69b08069cbf7e";


 fetch(url).then(resp =>{
    resp.json();
 }).then(data =>{
    console.log(data);
 }).catch(err =>{
    console.log(err);
 })