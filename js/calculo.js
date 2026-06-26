const calcResiduo = (objEmpresa) => {
    let resultCalc =''

    if ((objEmpresa.residuo <= 4)){
        resultCalc = 0
    }else if((objEmpresa.residuo <= 46)){
         resultCalc = (parseFloat(objEmpresa.residuo * 220)* 0.08)
    }else if((objEmpresa.residuo <= 68)){
          resultCalc = (parseFloat(objEmpresa.residuo * 220)* 0.10)
    }else if((objEmpresa.residuo <= 113)){
         resultCalc = (parseFloat(objEmpresa.residuo * 220)* 0.15)
    }else {
         resultCalc = (parseFloat(objEmpresa.residuo * 220)* 0.20)
    }
     return resultCalc
}

export{calcResiduo}