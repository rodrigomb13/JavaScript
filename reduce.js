var apartamento = [
    { label: "sala"     , largura: 4.5, comprimento:5 },
    { label: "quarto1"  , largura: 3.5, comprimento:2 },
    { label: "quarto2"  , largura: 2.7, comprimento:2 },
    { label: "banheiro" , largura: 1.5, comprimento:2 }]
    
    var metro = apartamento.map((m) => m.largura * m.comprimento) .reduce((acum,atual) => acum>atual ? acum:atual)
    
    console.log(metro)
    
     var metro_total = apartamento.map((m) => m.largura * m.comprimento).reduce((acum, atual) =>  acum + atual)
    console.log(metro_total) 
    
    
     var metro_quarto = apartamento.filter((quarto) => quarto.label ==="quarto1" ||
     quarto.label ==="quarto2" ).map((m) => m.largura * m.comprimento)
     
    console.log(metro_quarto) 