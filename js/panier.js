

function get_cart(){
    let cart = localStorage.getItem('cart')
    if(cart){
        return JSON.parse(cart);
    }
    return {};
}

function save_cart(cart){
    localStorage.setItem('cart', JSON.stringify(cart))
}

let products = document.getElementsByClassName('product')
let cart = get_cart();
for(let prod of products){
    const panier = prod.querySelector('.panier')
    const ajouter_panier = prod.querySelector('.ajouter_panier')
    const image = prod.querySelector('.image')

    panier.addEventListener('mouseenter', () => {
        ajouter_panier.style.display = 'flex'
        image.style.opacity = 0.3
    })

    panier.addEventListener('mouseleave', () => {
        ajouter_panier.style.display = 'none'
        image.style.opacity = 1
    })

    ajouter_panier.addEventListener('click', () => {
        ajouter_panier.classList.add('active')
        setTimeout(() => ajouter_panier.classList.remove('active'), 600)
        const ref = prod.querySelector('.reference').textContent
        const price = prod.dataset.price
        const category = prod.dataset.category
        if(ref in cart){
            cart[ref].quantity ++;
        }
        else{
            cart[ref] = {reff: ref, quantity: 1, price: price, category: category}
        }
        save_cart(cart);
        console.log(cart);
    })
}


// const panier = document.querySelector('.panier')
//         const ajouter_panier = document.querySelector('.ajouter_panier')
//         const image = document.querySelector('.image')
        
//         panier.addEventListener('mouseenter', () => {
//             ajouter_panier.style.display = 'block'
//             image.style.opacity = 0.3
//         })

//         panier.addEventListener('mouseleave', () =>{
//             ajouter_panier.style.display = 'none'
//             image.style.opacity = 1
//         })