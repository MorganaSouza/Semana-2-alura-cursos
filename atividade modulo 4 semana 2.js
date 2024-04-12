//Uma array no JavaScript é uma estrutura de dados que permite 
//armazenar e organizar vários valores em uma única variável. 
//Os valores em uma array podem ser de qualquer tipo de dado, como números, strings, objetos, outras arrays e assim por diante. 
//As arrays em JavaScript são indexadas, o que significa que cada valor dentro dela é associado a um índice numérico, começando geralmente do índice 0.

//Criando uma array
//Você pode criar uma array em JavaScript declarando uma variável e atribuindo-lhe valores entre colchetes [].

let frutas = ["Maçã", "Uva", "Laranja"];

///Acessando os valores
//Os elementos de uma array são acessados usando índices numéricos, que começam em 0.

//Índice	Elemento
0	"Maçã"
1	"Uva"
2	"Laranja"
console.log(frutas[0]); // Saída: "Maçã"
console.log(frutas[2]); // Saída: "Laranja"

//Adicionando novos elementos
//Para adicionar um elemento ao final da array, você pode usar o método push.

frutas.push("Morango");
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja", "Morango"]

//Removendo o último elemento
//Para remover o último elemento, você pode usar o método pop.

frutas.pop();
console.log(frutas); // Saída: ["Maçã", "Uva", "Laranja"]

//Quais linguagens de programação usam arrays?
//Aqui está uma lista de algumas linguagens de programação que utilizam arrays:

JavaScript
Python
Java
C++
C#
Ruby
PHP
Swift
Kotlin
Go
