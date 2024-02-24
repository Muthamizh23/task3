const req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    console.log(JSON.parse(this.response));
    let obj=JSON.parse(this.response);
    for(i=0; i < obj.length; i++){
        console.log(obj[i].region);
        console.log(obj[i].subregion);
        console.log(obj[i].population);
        console.log(obj[i].name.common);
    }
    
}