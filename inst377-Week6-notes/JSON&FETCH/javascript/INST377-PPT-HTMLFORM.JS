function populateForm() {
    const productForm = document.getElementById('productId');

    fetch("https://inst377-lab4-server.vercel.app/api/product/all")
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            res.forEach((product) => {
                console.log(product)
                const option = document.createElement('option')
                option.value = product.id;
                option.innerHTML = product.name;
                productForm.appendChild(option)
                console.log("Success!")
            });
        });
}

window.onload = populateForm;