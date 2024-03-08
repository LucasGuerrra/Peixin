//aqui eu to importando o math(eu n sei como isso funcionou, foi o unico jeito q eu achei para n travar no browser mas n parecia tar certo)
const math = import ('math.js');

//resposta da pergunta feita pelo professor
var resposta = 'Eu já programo desde 2020, que foi quando meu interesse por programação cresceu e eu aprendi a programar em Python. O tutorial me ajudou bastante, pq mesmo já sabendo programar, usar o ambiente online através desse segundo programa em html foi uma grande dificuldade, principalmente conseguir passar a biblioteca do math.js pq ela n tava funcionando. Mesmo com todos os problemas q eu tive aprendendo java, como formas diferentes d usar comandos q eu já conhecia e o inferno q foi conseguir instalar o node direito, eu me diverti bastante!'
console.log(resposta);

//aqui eu to definindo o tamanho da tela e falando que funções vão ser usadas na cena
var config = {
    type: Phaser.AUTO,

    scene:{
        preload: preload,
        create: create,
        update: update
    },
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }
};

//iniciando o jogo
var game = new Phaser.Game(config);

//essa função adiciona coisas que vão ser usadas no programa para dentro do ambiente web
function preload(){
    this.load.image('mar','assets/bg_azul-escuro.png');
    this.load.image('peixinho','assets/peixinho_roxo.png');
    this.load.image('inteli','assets/logo-inteli_branco.png');
    //link para onde tirei a imagem do polvo(https://clipart-library.com/free/octopus-cartoon-png.html)
    this.load.image('polvinho','assets/polvinho.png');
}

//essa função cria as imagens dentro da tela
function create(){
    this.add.image(400,300,'mar');
    this.add.image(400,540,'inteli').setScale(0.75);
    this.add.image(400,300,'polvinho').setScale(0.03);
    //precisava falar que o peixinho tava atrelado a essa imagem
    peixe = this.add.image(400,300,'peixinho').setOrigin(0.5,0.5);
}

//essa função é aonde as coisas q mudam ficam
function update(){
    //definindo as posições do mouse como variaveis pra ficar mais fácil de usar dps
    var x = this.input.x;
    var y = this.input.y;

    //aqui eu to usando a fórmula (m = (Yb - Ya)/(Xb - Xa)) para achar o coeficiente angular entre o peixe e o polvo(centro da tela)
    var coeficiente = (300 - y)/(400 - x);
    //aqui eu to usando a fórmula (m = tg(ângulo)), assim sendo o ângulo que o peixe precisa virar é o arctan do coeficiente
    coeficiente = Math.atan(coeficiente);

    //definindo a posição do peixe como a do mouse e mandando ele girar em direção do polvo
    peixe.x = x;
    peixe.y = y;
    peixe.setRotation(coeficiente);

    //fazendo o peixe virar para o lado certo dependendo d onde ele tá na tela
    if(x <= 400){
        peixe.setFlip(false);
    }
    else{
        peixe.setFlip(true);
    }
}
