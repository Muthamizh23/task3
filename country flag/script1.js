const req = new XMLHttpRequest();

req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
req.onload = function() {
    const obj = JSON.parse(this.response);
    for(i = 0; i< obj.length; i ++){
    console.log(obj[i].flags.png);
}
};