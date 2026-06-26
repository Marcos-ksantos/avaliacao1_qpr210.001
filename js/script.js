const formColeta = document.querySelector('#form-coleta')
const divResult = document.querySelector('#div-result')

const empresas = []

formColeta.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objFormColeta = new FormData(formColeta)

    const empresa = {
    nome: objFormColeta.get('nome'),
    descricao: objFormColeta.get('descricao'),
    residuo: objFormColeta.get('residuo')
}

    addEmpresa(empresa)

    formColeta.reset()
})

const addEmpresa = (objEmpresa) => {

    empresas.push(objEmpresa)

    listEmpresas()
}

const calc

const listEmpresas = () => {

    divResult.innerHTML = '' 

    empresas.forEach((elem, i) => {
        divResult.innerHTML += `${i + 1} ${elem.nome} <br> ${elem.descricao} <br> ${elem.residuo}t`
    })
}