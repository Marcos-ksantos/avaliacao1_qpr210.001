import {calcResiduo} from "./calculo.js"


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



const listEmpresas = () => {

    divResult.innerHTML = '' 

    empresas.forEach((elem, i) => {

        const valorResiduo = elem.residuo * 220;
        const valorF = valorResiduo + calcResiduo(elem);

        divResult.innerHTML += `${i + 1} - ${elem.nome} <br>
         DESCRIÇÃO:${elem.descricao} <br>
         SUA EMPRESA COLETOU:${parseFloat(elem.residuo).toFixed(0).replace('.',',')}t <br> 
        RECEBERA :${parseFloat(valorResiduo).toFixed(2).replace('.',',')}R$ <br>
        COM BONÛS DE :${calcResiduo(elem).toFixed(2).replace('.',',')}R$ <br>
        VALOR TOTAL DE :${parseFloat(valorF).toFixed(2).replace('.',',')}R$ <br>`
    })
}
