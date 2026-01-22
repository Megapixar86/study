import './style.css'
//import './page1.html'
document.getElementById('cub')
//выюерем элемент по классу
const el=(classNames)=>document.getElementsByClassName(classNames)
//console.log(el('cub')[0])
//скопируем элементт
for(let i =0 ; i< 5; i++){
	
	const elem = el('cub')[i]
	//console.log(elem)
	const clone = elem.cloneNode(true)
	//console.log(clone)
	el('wrap')[0].insertBefore(clone, elem)

}
//выбрать перый элемент по типуу
const selector= (element) => document.querySelector(element)

let myFirstEl = selector('div.cub')
//добавить элементт для  html  внутррь элемньта
myFirstEl.innerHTML = "<a href='./page1.html'>Page1</a>"
console.log(myFirstEl.innerText)

