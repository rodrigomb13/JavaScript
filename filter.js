var filmes = [{"id": 70111470,"title": "Die Hard","rating": [4.0]},
{"id": 654356453,"title": "Bad Boys","rating": [5.0]},
{"id": 65432445,"title": "The Chamber","rating": [3.0]}]


var rank = filmes.filter((ranque) => ranque.rating >=4 ).map((titu)  => titu.title )
 console.log(rank)

 var melhores = filmes.filter((melhor) => melhor.rating >= 4).map((m) => `${m.id} " / "${m.title}` );
 console.log(melhores)
