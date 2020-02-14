/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

function CalcularPrecio () {
    var lamparitas;
    var precio;
    var precioConDescuento;
    var importeFinal;
    var marca;
    var impuesto;

    lamparitas = parseInt(document.getElementById("Cantidad").value);
    precio = lamparitas*35;
    marca = document.getElementById("Marca").value;
    impuesto = 0;
    
    //Inicio de punto A
    if (lamparitas >= 6){ 
        precioConDescuento = precio-precio*0.5;
    }

    //Inicio de punto B
    else if (lamparitas == 5 && marca == "ArgentinaLuz") {
        precioConDescuento = precio-precio*0.4;
    }
    else if (lamparitas == 5 && marca != "ArgentinaLuz") {
        precioConDescuento = precio-precio*0.3;
    }

    //Inicio de punto C
    else if (lamparitas == 4 && marca == "ArgentinaLuz" ^ "FelipeLamparas") {
        precioConDescuento = precio-precio*0.25;
    }
    else if (lamparitas == 4 && marca != "ArgentinaLuz" ^ "FelipeLamparas") {
        precioConDescuento = precio-precio*0.2;
    }

    //Inicio de punto D
    else if (lamparitas == 3 && marca == "ArgentinaLuz") {
        precioConDescuento = precio-precio*0.15;
    } 
    else if (lamparitas == 3 && marca == "FelipeLamparas"){
        precioConDescuento = precio-precio*0.1;
    }
    else if (lamparitas == 3){
        precioConDescuento = precio-precio*0.05;
    }

    importeFinal = precioConDescuento;
   
    //Inicio de punto E
    if (importeFinal > 120) {
        impuesto = importeFinal*0.1;
        alert("Usted pagó " + impuesto + " en IIBB.");
    }

    document.getElementById("precioDescuento").value = importeFinal + impuesto;

}
