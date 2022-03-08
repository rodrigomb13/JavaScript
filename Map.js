var nomes = ["Ben", "Jafar", "Matthews", "Priya", "Brian"]

 var inverte = nomes.map((inver) => inver.split('').reverse().join('') )
 console.log(inverte) 


 var maior = nomes.reduce((acum,atual) => acum > atual.length ? acum : atual.length, 0)
 const resultado = nomes.filter(resu => resu.length == maior)
 
 console.log(resultado);