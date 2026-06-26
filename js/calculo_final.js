const calcResiduo = (objEmpresa) => {
    let resultCalc =''

    if ((objEmpresa.residuo <= 4)){
        resultCalc = 'NÃO ATINGIU A META MÍNIMA'
    }else if((objEmpresa.residuo <= 46)){
         resultCalc = `PARABENS! VOCÊ RECEBEU :${((objEmpresa.residuo * 220)* 0.08).toFixed(2).replace('.',',')}R$ DE BONÛS`
    }else if((objEmpresa.residuo <= 68)){
          resultCalc = `PARABENS! VOCÊ RECEBEU :${((objEmpresa.residuo * 220)* 0.10).toFixed(2).replace('.',',')}R$ DE BONÛS`
    }else if((objEmpresa.residuo <= 113)){
         resultCalc = `PARABENS! VOCÊ RECEBEU :${((objEmpresa.residuo * 220)* 0.15).toFixed(2).replace('.',',')}R$ DE BONÛS`
    }else {
         resultCalc = `PARABENS! VOCÊ RECEBEU :${((objEmpresa.residuo * 220)* 0.20).toFixed(2).replace('.',',')}R$ DE BONÛS`
    }
     return resultCalc
}

export{calcResiduo}