const crudazonApi = "https://striveschool-api.herokuapp.com/api/product/";
const pForm = document.getElementById("pForm");

let productID = new URLSearchParams(window.location.search).get('productID');

const removeProduct = async () => {
    try {
        let response = await fetch(crudazonApi + productID, {
            method: 'DELETE',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1YTAzODNkYWRhMDAwMThhNjljMGMiLCJpYXQiOjE3MDIyMDc1NDQsImV4cCI6MTcwMzQxNzE0NH0._93l3tdbTmhbP32y9oL2JE_zqSidfAb-VdvQ1LvAM-I"
            }
        });

        if (response.ok) {
            alert('Prodotto eliminato correttamente');
            window.location.replace('./index.html');
            return true;
        } else {
            alert("Problema nell'eliminazione del prodotto");
            return false;
        }
    } catch (error) {
        console.log(error);
        return false;
    }
};

const addProduct = async function (newProduct) {
    try {
        let completeURL = crudazonApi + (productID ? productID : '');

        let response = await fetch(completeURL, {
            method: 'POST',
            body: JSON.stringify(newProduct),
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTc1YTAzODNkYWRhMDAwMThhNjljMGMiLCJpYXQiOjE3MDIyMDc1NDQsImV4cCI6MTcwMzQxNzE0NH0._93l3tdbTmhbP32y9oL2JE_zqSidfAb-VdvQ1LvAM-I",
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            alert('Prodotto è stato aggiunto correttamente!');
        } else {
            alert("Prodotto NON è stato aggiunto");
        }
    } catch (error) {
        console.log(error);
    }
};

pForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let newProduct = {
        userID : "admin@crudazon.com",
        name: document.getElementById('pName').value,
        description: document.getElementById('pDescription').value,
        imageUrl: document.getElementById('pImage').value,
        brand: document.getElementById('pBrand').value,
        price: document.getElementById('pPrice').value,
    };

    addProduct(newProduct);
});

let removeBtn = document.getElementById('removeBtn');
removeBtn.addEventListener('click', async () => {
    if (await removeProduct()) {
        alert('Il prodotto è stato rimosso correttamente');
    } else {
        alert('Il prodotto NON è stato rimosso!');
    }
});