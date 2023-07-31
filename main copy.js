function mudar() {
    window.location.href = "cardapio.html"
}
async function userData() {
    var urlApi = 'https://api.jsonbin.io/v3/b/64c745978e4aa6225ec8162c'

    await fetch(urlApi)
        .then((response) => {
            return response.json();
        })

        .then((data) => {
            // console.log(data)
            let root = document.getElementById("root")
            let nameproduct = data["record"]["TotiLunch"]["0"]["name"]
            let imageproduct = data["record"]["TotiLunch"]["0"]["avatar"]

            let name = document.createElement('p')
            name.textContent = nameproduct
            // root.append(name)

            let image = document.createElement('img')
            // image.classList.add('classImagem');
            image.style.borderRadius = '50%';
            image.style.width = '25%'
            image.style.height = '25%'
            image.src = imageproduct
            // root.append(image)

            root.append(name, image)
        })
        .catch((error) => {
            console.error(error)
        })
}

userData()