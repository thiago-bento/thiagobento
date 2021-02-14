#include<stdio.h>
#include<stdlib.h>
/*

Variaveis 
Escopo

Global
são variaveis criadas fora de blocos de programação,
não precisam ser inicializadas e são visiveis por todos
os blocos abaixo delas.

Local
São variaveis criadas dentro de blocos de programação,
precisam ser inicializadas e são visiveis somente no 
bloco em foram criadas.


*/

// Global - 
// Declarada 
int n;

int main(){
	// Local - inicializada na criação
	int m =  0;
	n = 10;
	
}

void b1(){
	n = 20;
	 // não é acessivel 
	//m = 20;

}













