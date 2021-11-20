const board = document.querySelector('#board');
const colors = ['#f8cf06', '#cb0000', '#247ECDFF', '#f60229', '#9A24CDFF', '#9A24CDFF']
const SQURES_NUMBER = 500;

for(let i = 0; i < SQURES_NUMBER; i++){
    const squere = document.createElement('div');
    squere.classList.add('square');

    squere.addEventListener(("mouseover"), () =>
        setColor(squere)
    )
    squere.addEventListener(("mouseleave"), () =>
        removeColor(squere)
    )


    board.append(squere)
}

function setColor(element){
    const color = getRandomColors()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}
function removeColor(element){
    element.style.boxShadow = `0 0 2px #000`
}
function getRandomColors(){
   const index = Math.floor(Math.random() * colors.length) //округляем и рандомно умножаем на длинну массива

    return colors[index]
}