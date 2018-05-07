function main(){
    var score = 0;
    if(document.getElementById("1.1").innerHTML === '统一建模语言'){
        score = score + 5;
    }

    if(document.getElementById("1.2.1").innerHTML === '封装性'){
        score = score + 5;
    }

    if(document.getElementById("1.2.2").innerHTML === '继承性'){
        score = score + 5;
    }

    if(document.getElementById("1.2.3").innerHTML === '多态性'){
        score = score + 5;
    }

    if(document.getElementById("2.1.2").checked){
        score = score + 10;
    }

    if(document.getElementById("2.2.1").checked){
        score = score + 10;
    }

    if(document.getElementById("3.1.1").checked && document.getElementById("3.1.2").checked && document.getElementById("3.1.4").checked){
        score = score + 10;
    }

    if(document.getElementById("3.2.1").checked && document.getElementById("3.2.2").checked && document.getElementById("3.2.3").checked){
        score = score + 10;
    }

    if(document.getElementById("4.1.2").checked){
        score = score + 10;
    }

    if(document.getElementById("4.2.1").checked){
        score = score + 10;
    }

    if(document.getElementById("5.1").innerHTML === '模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。'){
        score = score + 20;
    }

    document.getElementById("score").innerHTML = score;

    return score;

}

module.exports = main;