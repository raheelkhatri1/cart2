var main_div = document.getElementById("main__div")
var div1 = document.createElement("div")

var imagediv = document.createElement("div")
var image = document.createElement("img")
var h5 = document.createElement("h5")
var h6 = document.createElement("h6")
var cartbtn = document.createElement("button")

image.setAttribute("src","https://cdn.shopify.com/s/files/1/0274/4637/8561/products/smaxpro-bluetooth-earbuds-for-iphone-samsung-android-wireless-earphones-waterproof-f9-32-bluetooth-earbuds-smaxpro-150160.jpg")
var h5text = document.createTextNode("Earbuts")
var h6text = document.createTextNode("RS 750")
var btnValue = document.createTextNode("ADD TO CART")

imagediv.appendChild(image)
h5.appendChild(h5text)
h6.appendChild(h6text)
cartbtn.appendChild(btnValue)

imagediv.setAttribute("class","imgdiv")
div1.setAttribute("class","card1")
image.setAttribute("class","img")
h5.setAttribute("class","h5")
h6.setAttribute("class","h6")
cartbtn.setAttribute("class","btn")

div1.appendChild(imagediv)
main_div.appendChild(div1)
div1.appendChild(h5)
div1.appendChild(h6)
div1.appendChild(cartbtn)

