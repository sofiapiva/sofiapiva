function calcularTriangulo(){
    let lado1 = document.getElementById ("lado1").value;
    let lado2 = document.getElementById ("lado2").value;
    let lado3 = document.getElementById ("lado3").value;
 
    if (lado1 === lado2 && lado1 === lado3) {
        alert("é um triângulo equilátero");
    }
     else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3){
        alert("é um triângulo isóceles")
     }
       else {( lado1 !== lado2 && lado1 !== lado3 && lado2 !== lado3)
        alert("é um triângulo escaleno");}
       } 


     
            
            
            

            
           
                
            
      
