function relogio(){
    let p = document.getElementById("p")
    let date = new Date()
    let hora = date.getHours()
    let minuto = date.getMinutes()
    let segundos = date.getSeconds()
    if(segundos < 10){
        segundos = "0" + segundos
    } else if(hora < 10){
        hora = "0" + hora
    } else if(minuto < 10){
        minuto = "0" + minuto 
    }
    let TextContent = hora + ":" + minuto + ":" + segundos
    p.textContent = TextContent
   console.log(TextContent)
    }
    setInterval(relogio, 100)
    