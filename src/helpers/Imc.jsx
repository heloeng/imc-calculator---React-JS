

//categorias de imc
//tipou o "levels" que será um array de Level
export const levels =[
//quatro niveis de imc
//4 objetos/4 categorias
//objeto com suas propriedades
//imc vai entre zero e 18,5
{title: 'Magreza', color: '#96A3AB', icon: 'down', imc: [0, 18.5]},
{title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9]},
{title: 'Sobrepeso', color: '#E2B039', icon: 'down', imc: [25, 30]},
{title: 'Obesidade', color: '#3423FF', icon: 'down', imc: [30.1, 99]},

];


//função calcular imc vai receber altura  e peso: height weight
//tipei "height" e "weight"
export const calculaImc = (height, weight)=>{
//retorna o level correspondente da pessoa
const imc = weight / (height * height);

for(let i in levels) {
    //levels tem um array de categoria
 //o imc de 'magreza' está dentro de um array que vai tem índice  zero="0"  e índice 1="1.5"
//está comparando a categoria magreza o  índice zero do imc com índice um do imc
//se o imc for maior ou igual ao índíce do levels que pode ser qualquer uma 
//dessas categorias "ponto" índice "zero" do imc=0
//e se o imc for menor ao índice do levels que pode ser
//qualquer um  "ponto" índice levels do imc=18.5
//"levels[i]" qualquer umas das categorias do levels
//se o índice zero for maior ou igual ao primeiro ítem
    if(imc >= levels[i].imc[0] && imc < levels[i].imc[1]){
       //retorna o próprio level
        //depois que achar o level da pessoa
        //imc da pessoa
        levels[i].yourImc = imc;
        //retornar a categoria com o imc da pessoa
return levels[i]
}       

}
//retorna nulo caso não encontre nada
return null;
}