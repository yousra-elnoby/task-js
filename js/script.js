var allproducts = document.querySelectorAll(".list li")
var content =document.querySelector("#content")
var btn = document.querySelector("#btn1")
var result = document.querySelector("#result")
var totalprice = 0

allproducts.forEach(function(item){
    item.onclick = function(){
        totalprice += +(item.getAttribute("price"))
        content.innerHTML +=  item.textContent +"<br>"
        if(content.innerHTML !="" ){
            btn.style.display = "block"
            result.style.display = "block"
            content.style.display = "block"
        }
    }

}
)

    btn.onclick = function (){
        console.log(totalprice)
        document.getElementById("result").innerHTML = totalprice;
    }