const crudazonApi = "https://striveschool-api.herokuapp.com/api/product/";

const cardContainer = document.getElementById("cardContainer")

const showProducts = (results) => {
    results.forEach(product => {
        let card = document.createElement('div');
        card.classList.add('col', 'my-3');
        card.innerHTML =
            `<div class="card" style="width: 18rem;">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.name}">
            <div class="card-body">
              <h5 class="card-title">${product.brand} ${product.name}</h5>
              <p class="card-text text-primary">$${product.price}</p>
              <p class="card-text text-end">
                <a href="./backoffice.html?productID=${product._id}" class="btn btn-warning">Modifica</a>
                <a href="./details.html?productID=${product._id}" class="btn btn-info">Dettagli</a>
              </p>
            </div>
          </div>`
        cardContainer.appendChild(card);
    });
}


const getProducts = async () => {
    try {
        let response = await fetch(crudazonApi, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1YTAzODNkYWRhMDAwMThhNjljMGMiLCJpYXQiOjE3MDIyMDc1NDQsImV4cCI6MTcwMzQxNzE0NH0._93l3tdbTmhbP32y9oL2JE_zqSidfAb-VdvQ1LvAM-I"
            }
        })

        if (response.ok) {
            console.log('Connessione avvenuta! Status code:', response.status);
            let results = await response.json();
            console.log('Hai ottenuto: ', results);
            showProducts(results);
        }
        else {
            return new Error('Errore nel fetch dei dati');
        }

    }
    catch (error) {
        console.log(error);
    }
}

getProducts();