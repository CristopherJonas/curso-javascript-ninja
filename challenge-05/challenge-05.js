/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
// 
var myVar = ['1',1,null,false,'teste'];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// 
function myFunc(arr){
return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myFunc(myVar)[1])

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// 

function myFunction2(arr,index){
return arr[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
// 
var mixTypes = ['1',1,[1,2,'2'],function(){},false]; 

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
// ?
console.log(myFunction2(mixTypes,0));
console.log(myFunction2(mixTypes,1));
console.log(myFunction2(mixTypes,2));
console.log(myFunction2(mixTypes,3));
console.log(myFunction2(mixTypes,4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
//
function book(nomeLivro){
  var variavel = {
     'Livro 01':{
         quantidadePaginas:100,
         autor:'josé da Silva',
         editora:'Nova Mundo'
      },
      'Livro 02':{
          quantidadePaginas:90,
          autor:'maria da Silva',
          editora:'Tempos Modernos'
       },
       'Livro 03':{
          quantidadePaginas:80,
          autor:'Cristopher',
          editora:'Cabeça Feita'
        },
    }
  return !nomeLivro ? variavel : variavel[nomeLivro];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book();

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
