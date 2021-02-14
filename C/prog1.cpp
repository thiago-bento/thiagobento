#include<stdio.h>
#include<stdlib.h>
/*
Escreva um algoritmo para ler uma temperatura em graus Fahrenheit, 
calcular e escrever o valor correspondente em graus Celsius 
(baseado na f�rmula abaixo):
 	C			 F - 32
 ---------- = -----------
 	5 				9 

*/

// Global -- Entrada de dados
float fah;

int main(){
	
	// local - inicializada na cria��o 
	// processamento 
	float c=  0;
	
	printf("DIgite a temperatura em f : ");
	scanf("%f", &fah);
	
	c =  ((fah - 32)/ 9) * 5;
	
	printf("O valor da temperatura em c : %0.2f \n", c);
	
	system("break");
	return 0;
}




