#include<stdio.h>
#include<stdlib.h>
/*
Escreva um algoritmo para ler o número total de 
eleitores de um município, o número de votos brancos,
nulos e válidos. Calcular e escrever o percentual 
que cada um representa em relação ao total
de eleitores. 
*/

int eleitores;
int votosv;
int votosn;
int votosb;

int main(){
	
	float pvv = 0;
	float pvn = 0;
	float pvb = 0;
	
	printf("Digite o numero de eleitores : ");
	scanf("%d", &eleitores);
	
	printf("Digite o numero de validos : ");
	scanf("%d", &votosv);
	
	printf("Digite o numero de nulos : ");
	scanf("%d", &votosn);
	
	printf("Digite o numero de votos brancos: ");
	scanf("%d", &votosb);
	
	pvv = (votosv * 100.0)/eleitores;
	pvb = (votosb * 100.0)/eleitores;
	pvn = (votosn * 100.0)/eleitores;

	
	printf("Percentual de Votos validos : %0.2f  \%% \n", pvv);
	printf("Percentual de Votos nulos   : %0.2f \n", pvn);
	printf("Percentual de Votos brancos : %0.2f \n", pvb);
	
	system("pause");
	return 0;
}

