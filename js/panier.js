const panier = document.querySelector('.panier')
        const ajouter_panier = document.querySelector('.ajouter_panier')
        const image = document.querySelector('.image')
        
        panier.addEventListener('mouseenter', () => {
            ajouter_panier.style.display = 'block'
            image.style.opacity = 0.3
        })

        panier.addEventListener('mouseleave', () =>{
            ajouter_panier.style.display = 'none'
            image.style.opacity = 1
        })

        // panier.addEventListener('click', () => {
        //     ajouter_panier.classList.toggle('active');
        // })

// const products = [
//     {
//         titre: T-shirt,
//         prix: 60^$,
//         description: T-shirt
//         images: ,
//         avis_clients: avis,
//     }
// ]