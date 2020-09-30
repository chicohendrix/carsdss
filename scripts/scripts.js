//alert("JS loaded");
var car1 = {
    model:"Volkswagen Golf",
    price: 9,
    performance: 9,
    reliability:8,
    score:function(){
        return this.price;
    }
};

    
var CarText = car1.model + " - Score: " + car1.score();
document.getElementById("car1").innerText = carText; 
    
    

var car2 = {
    model:"Benz c200",
    price: 4,
    performance: 6,
    reliability:9,
    score:function(){
        return this.price;
    }
};

    
var CarText = car2.model + " - Score: " + car2.score();
document.getElementById("car2").innerText = carText; 
    
var car3 = {
    model:"Audi A6",
    price: 3,
    performance: 8,
    reliability:7,
    score:function(){
        return this.price;
    }
};

    
var CarText = car3.model + " - Score: " + car3.score();
document.getElementById("car1").innerText = carText; 
    
    
    