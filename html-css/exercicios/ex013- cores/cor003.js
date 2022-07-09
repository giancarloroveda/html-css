(function(){
    const btnSalmao = document.querySelector("#btn-salmao")
    const btnVerde = document.querySelector("#btn-verde")
    const main = document.querySelector("#main")
    const body = document.querySelector("#body")
    btnSalmao.addEventListener("click", function(e){
        

        if(body.classList.contains("body-2")){
            body.classList.remove("body-2")
            body.classList.add("body-1")
            main.classList.remove("main-2")
            main.classList.add("main-1")
        }
    })

    btnVerde.addEventListener("click", function(e){
        if(body.classList.contains("body-1")){
            body.classList.remove("body-1")
            body.classList.add("body-2")
            main.classList.remove("main-1")
            main.classList.add("main-2")
        }
    })
})()