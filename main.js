let pizzaContainer = document.getElementsByClassName('pizza-container')[0]; //uso el index [0] porque classname retorna un array
let pastaContainer = document.getElementsByClassName('pasta-container')[0]; //uso el index [0] porque classname retorna un array
let pedidoInfo = document.getElementById('miPedido');
let addButton = document.getElementsByClassName('add-btn');
let successContainer = document.getElementById('success');

const pedido = []

function success(){
    successContainer.style.display = 'block';
}

function pizzaClick() {
    pizzaContainer.style.display = "block";
    pastaContainer.style.display = "none";
}

function pastaClick() {
    pastaContainer.style.display = "block";
    pizzaContainer.style.display = "none";
}

for (let i = 0; i < addButton.length; i++) { //ACCEDIENDO A CADA ELEMENTO DE UNA HTML COLLECTION
    addButton[i].addEventListener('click', function () {
        pedidoInfo.style.display = "block";
        if (addButton[i].parentElement.id.includes('pizza')) {
            if (i == 0) {
                pedido.push('Pizza 1')
            } else if (i == 1) {
                pedido.push('Pizza 2')
            } else if (i == 2) {
                pedido.push('Pizza 3')
            } else if (i == 3) {
                pedido.push('Pizza 4')
            }
        }
        if (addButton[i].parentElement.id.includes('pasta')) {
            if (i == 4) {
                pedido.push('Fideos')
            } else if (i == 5) {
                pedido.push('Sorrentinos')
            } else if (i == 6) {
                pedido.push('Canelones')
            } else if (i == 7) {
                pedido.push('Ravioles')
            }
        
        }
        
        render()
    })

}
const render = () => {
    const pedidoUL = document.getElementById('pedidoList')
    const item_quantity = document.getElementById('item-quantity')
    pedidoUL.innerHTML = ''
    for (let i = 0; i < pedido.length; i++) {
        item_quantity.innerHTML=''
        let node = document.createElement('LI')
        let textNode = document.createTextNode(pedido[i])
        node.appendChild(textNode)
        pedidoUL.appendChild(node)
        // contador de items:
        item_quantity.innerHTML = pedido.length
    }
    
    const cadaLi = document.querySelectorAll('#pedidoList li')
    cadaLi.forEach((elementoli, i) => {
        elementoli.addEventListener('click', () => {
            elementoli.parentNode.removeChild(elementoli) 
            pedido.splice(i, 1)
            if(pedido.length == 0){
                pedidoInfo.style.display = 'none';
                successContainer.style.display = 'none';
            }
            render()
            
        })
    })
}