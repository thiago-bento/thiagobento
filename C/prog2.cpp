#include<stdio.h>
#include<stdlib.h>
/*

Variaveis 
Escopo

Global
s�o variaveis criadas fora de blocos de programa��o,
n�o precisam ser inicializadas e s�o visiveis por todos
os blocos abaixo delas.

Local
S�o variaveis criadas dentro de blocos de programa��o,
precisam ser inicializadas e s�o visiveis somente no 
bloco em foram criadas.


*/

// Global - 
// Declarada 
int n;

int main(){
	// Local - inicializada na cria��o
	int m =  0;
	n = 10;
	
}

void b1(){
	n = 20;
	 // n�o � acessivel 
	//m = 20;

}













