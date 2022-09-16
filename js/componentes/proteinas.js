var activarse = document.getElementById("galeria");

//FUNCIÓN PARA ABRIR Y CERRAR LA VENTANA
export function ActivarDesactivar() {    
    
    var explorer = document.getElementById("menu");
    
    console.log("valor x",explorer);

    //Activa y desactiva la ventana
    if (explorer.style.display === "none") {
        explorer.style.display = "block";
        
    } else {
        explorer.style.display = "none";
        document.getElementById("proteinas").innerHTML=
            
        /* KIMBERLY */
        '<section>'+
            '<h1 class="tituloProteina">PROTEINAS</h1>'+
            '<div class="padreEsquema">'+
                '<h2>Esquema de los alimentos</h2>'+
                '<div class="esquema"></div>'+
            '</div>'+
        '</section>'+

        /* GENESIS */
        '<section>'+
            '<div class="padreProteinas">'+

                '<div class="subVdProteina">'+
                    '<h3>Video Funciones de la proteina en el organismo</h3>'+
                '</div>'+
                
                '<video class="vdProteinas" width="784" height="458" controls>'+
                    // '<source src="./img/Portada.mp4" type="video/mp4">'+
                    'Tu navegador no es compatible con videos HTML5'+
                '</video>'+
            '</div>'+
        '</section>'+
            
        /* NATALI */
        '<section>'+
            '<div class="padreTexProt">'+
                '<div class="imgProteText">'+
                    '<img>'+
                '</div>'+
                '<div>'+
                    '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrs standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply dummy text of the printing and typesetting i.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took  .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took .Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took.Lorem Ipsum is simply dummy text of the printing and typesetting i</p>'+
                '</div>'+
            '</div>'+
        '</section>';
    }

}

/* EVENTO */
activarse.addEventListener('click', ActivarDesactivar);