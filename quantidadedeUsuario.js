const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuario.json"
const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = Object.keys(dados)

const data = [{
    x = nomeDasRedes,
    y = quantidadeDeUsuarios,
    type: 'bar',
    marker: {
        color: getCSS('--primary-color')
        
    }

}

]
