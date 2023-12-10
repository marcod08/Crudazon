const crudazonApi = "https://striveschool-api.herokuapp.com/api/product/";
let productID = new URLSearchParams(window.location.search).get('productID');


const pDetail = async () => {

    try {
        let response = await fetch(crudazonApi + productID, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1YTAzODNkYWRhMDAwMThhNjljMGMiLCJpYXQiOjE3MDIyMDc1NDQsImV4cCI6MTcwMzQxNzE0NH0._93l3tdbTmhbP32y9oL2JE_zqSidfAb-VdvQ1LvAM-I"
            }
        })
        if (response.ok) {
            let product = await response.json();
            console.log('prodotto:', product);
            console.log(product.imageUrl);
            let productImageReference = document.getElementById('pImage');
            let productImage = document.createElement('img');
            productImage.setAttribute('src', product.imageUrl);
            productImage.classList.add('w-100');
            productImageReference.appendChild(productImage);
            let productInfoReference = document.getElementById('pInfo');
            productInfoReference.innerHTML = `
                    <h2>${product.brand} - ${product.name}</h2>
                    <p>${product.description}</p>
                    <p>Price: $${product.price}</p>`
        }
        else {
            return new Error('Errore nel fetch dei dati');
        }
    }
    catch (error) {
        console.log(error);
    }
}

pDetail();