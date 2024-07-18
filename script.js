function toggleMode() {
    const html= document.documentElement
    html.classList.toggle("lighty")


    const img= document.querySelector("#profile img")

  if(html.classList.contains("lighty")) {
 
    img.setAttribute("src","gatitin.png")
  } else {
   
    img.setAttribute("src","choro.png")
  }
  
   
}