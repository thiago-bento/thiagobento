#include<stdio.h>
#include<stdlib.h>
/*
Faça um algoritmo que leia três notas de um aluno, calcule e escreva a 
média final deste aluno. Considerar que a média é ponderada e que o 
peso das notas é 2, 3 e 5. Fórmula para o cálculo da média

final é:           n1 * 2 + n2 * 3 + n3 * 5
 	mediafinal = -----------------------------------
 					10 

*/

// Global -> Declaradas
float n1;
float n2;
float n3;

int main(){
	
	// Local -> Processamento
	// Inicializada na criação
	float mp = 0;
	
	printf("Digite a nota 1 do aluno  : ");
	scanf("%f", &n1);
	
	printf("Digite a nota 1 do aluno  : ");
	scanf("%f", &n2);

	printf("Digite a nota 1 do aluno  : ");
	scanf("%f", &n3);
	
	mp = ((n1  * 2) + (n2 * 3) + (n3 * 5) ) / 10;
	
	printf("Media ponderada : %0.2f \n", mp);
	
	system("pause");
	return 0;
}



