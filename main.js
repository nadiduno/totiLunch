function mudar() {
    console.log('Oi')
    window.location.href = "cardapio.html"
}
console.log('OI')
async function userData() {
    var urlApi = 'https://api.jsonbin.io/v3/b/64c745978e4aa6225ec8162c'

    await fetch(urlApi)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            console.log(data)
            let nameproduct = data["record"]["TotiLunch"]["0"]["name"]
            let imageproduct = data["record"]["TotiLunch"]["0"]["avatar"]
            let name = document.createElement('p')
            let image = document.createElement('img')
            image.classList.add('classe-da-imagem');
            image.style.borderRadius = '50%';
            name.textContent = nameproduct
            image.src = imageproduct
            let root = document.getElementById("root")
            root.append(name)
            root.append(image)
        })
        .catch((error) => {
            console.error(error)
        })
}

userData()