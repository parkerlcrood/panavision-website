async function openCartMenu () {
    
    cartItems.replaceChildren();

    cartMenu.classList.toggle('open');
    if (cartMenu.classList.contains('open')){
        buttonText.innerText = 'Close Cart'; 
    } else {
        buttonText.innerText = 'Cart'; 
    }

    for(let i=0; i<cartArray.length; i+=1){
        const index = i;
        item = document.createElement('li');
        itemText = document.createElement('p');
        itemText.innerText = cartArray[i];
        const itemName = cartArray[i];
        item.appendChild(itemText);
        deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerText = 'Delete Item';
        item.appendChild(deleteButton);
        cartItems.appendChild(item);
        deleteButton.addEventListener('click', () => {

            cartArray.splice(index, 1);

            localStorage.setItem('shoppingCart', JSON.stringify(cartArray));

            openCartMenu();
        });
    }

    cartContainer.classList.toggle('hidden');
}

const cartItemsString = localStorage.getItem('shoppingCart');
let cartArray = JSON.parse(localStorage.getItem('shoppingCart')) || [];

cartMenu = document.querySelector('.cartmenu');
cartButton = document.querySelector('.cartbutton');
buttonText = document.querySelector('.buttontext');
buttonText.innerText = 'Cart'; 
cartItems = document.querySelector('#cartitems');
cartContainer = document.querySelector('#cartcontainer');
cartButton.addEventListener('click', () => openCartMenu());

