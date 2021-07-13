const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults() {
    
        let newElement = document.createElement("div");
        newElement.className = "kata";    

        
        let newText = document.createTextNode(arrayModel);
        newElement.appendChild(newText);

        let destination = document.getElementById("katas-03");
        destination.appendChild(newElement);
    }   


function kata1() {
    
    arrayModel = []
    for(let i = 1; i <= 25; i++ ) {
        arrayModel.push(i); 
    }
    showResults();
    return arrayModel;
}
kata1()


function kata2() {
    
    arrayModel = []
    
    for(let i = 25; i > 0; i-- ) {
        arrayModel.push(i);       
    }
    showResults();
    return arrayModel;
}

kata2()


function kata3() {
    
    arrayModel = []
    
    for(let i = -1; i >= -25; i-- ) {
        arrayModel.push(i);       
    }
    showResults();
    return arrayModel;
  
}
kata3();


function kata4() {
    
    arrayModel = []
    
    for(let i = -25; i <= -1; i++ ) {
        arrayModel.push(i); 
    }
    showResults();
    return arrayModel;
}
kata4();

function kata5() {
    
    arrayModel = []
    
    for(let i = 25; i >= -25; i-- ) {
    
         
        if(i % 2 !== 0) {

            arrayModel.push(i);
        } else {

        }
    }
    showResults();
    return arrayModel;
}
kata5();

function kata6() {
    
    arrayModel = []
    
    for(let i = 1; i <= 100; i++ ) {
    
         
        if(i % 3 === 0) {

            arrayModel.push(i);
        } else {
            
        }
    }
    showResults();
    return arrayModel;
}

kata6();

function kata7() {
    arrayModel = []
    
    for(let i = 1; i <= 100; i++ ) {
    
         
        if(i % 7 === 0) {

            arrayModel.push(i);
        } else {
            
        }
    }
    showResults();
    return arrayModel;
}
kata7();

function kata8() {
    
        arrayModel = []
        
        for(let i = 100; i >= 1; i-- ) {
        
             
            if((i % 3 === 0) || (i % 7 === 0)) {
    
                arrayModel.push(i);
            } else {
                
            }
        }
        showResults();
        return arrayModel;
}
kata8();

function kata9() { 
    arrayModel = []    
    for(let i = 1; i <= 100; i++ ) {     
            if((i % 2 !== 0) && (i % 5 === 0)) {
                arrayModel.push(i);
            } else {
                
            }
    }
    showResults();
    return arrayModel;
}
kata9();

function kata10() {
    arrayModel = sampleArray;
    showResults();
    return arrayModel;
}
kata10();

function kata11() {
    arrayModel = [];
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 2 === 0) {
            arrayModel.push(sampleArray[i])
        } else {
        } 
    }

    showResults();
    return arrayModel;
}
kata11();

function kata12() {
    arrayModel = [];
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 2 !== 0) {
            arrayModel.push(sampleArray[i])
        } else {
        } 
    }

    showResults();
    return arrayModel;
}
kata12();

function kata13() {
    arrayModel = [];
    for(let i = 0; i < sampleArray.length; i++ ){
        if(sampleArray[i] % 8 === 0) {
            arrayModel.push(sampleArray[i])
        } else {
        } 
    }

    showResults();
    return arrayModel;
}
kata13();

function kata14() {
    arrayModel = [];
    for(let i = 0; i < sampleArray.length; i++ ){
        arrayModel.push((sampleArray[i]) ** 2)
         
    }

    showResults();
    return arrayModel;
}
kata14();

function kata15() {
    soma = 0
    for (let i = 0; i <= 20; i++){
        soma = soma + i;
    }
    arrayModel = soma;
    showResults();
    return arrayModel;
    
}
kata15();

function kata16() {
    soma = 0;
    arrayModel = sampleArray
    for(let i = 0; i < sampleArray.length; i++ ){
        soma = soma + arrayModel[i];
    }
    arrayModel = soma;
    showResults();
}
kata16();

function kata17() {
    arrayModel = sampleArray
    let menornum = arrayModel[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(menornum > sampleArray[i]) {
           
           menornum = sampleArray[i]; 
         }
    }
    arrayModel = menornum;
    showResults();
    
}
kata17();

function kata18() {
    arrayModel = sampleArray
    let maiornum = arrayModel[0];
    for(let i = 0; i < sampleArray.length; i++){
        if(maiornum < sampleArray[i]) {
           
           maiornum = sampleArray[i]; 
         }
    }
    arrayModel = maiornum;
    showResults();
}
kata18();

/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
