

function clique(){
    alert("Obrigado por clicar!");
}

function alterar(){
    document.getElementById("titulo").innerHTML="Titulo Final";
}

function soma(){
    var a=2;
    var b=3;
    
    document.write(a + b);
}

function lapis(){
    lapis.cor="preto";
    lapis.numero=2;
    lapis.marca="Faber";
    
    document.write(
        "Este lápis é " + lapis.cor +
        ", número " + lapis.numero +
        " e da marca " + lapis.marca + "."       
    );
}

function imprimir(){
    window.print();
}