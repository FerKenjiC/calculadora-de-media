function calcular() {
    var aluno = window.document.querySelector('#txtaluno')
    var res = window.document.querySelector('.resultado')
    var aluno = String(aluno.value)
    var notaPrimeiroBimestre = window.document.querySelector('n1')
    var notaPrimeiroBimestre = Number(n1.value)
    var notaSegundoBimestre = window.document.querySelector('n2')
    var notaSegundoBimestre = Number(n2.value)
    var notaTerceiroBimestre = window.document.querySelector('n3')
    var notaTerceiroBimestre = Number(n3.value)
    var notaQuartoBimestre = window.document.querySelector('n4')
    var notaQuartoBimestre = Number(n4.value)
    var notaFinal = notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre
    var media = notaFinal / 4
    var mediaFixada = media.toFixed(1)
    res.innerHTML = `<p>${aluno}, sua média é ${mediaFixada}.</p>`
    if (mediaFixada >= 5) {
        res.innerHTML += '<p>Você está <strong>APROVADO</strong>!</p>'
    } else {
        res.innerHTML += 'Você está <strong>REPROVADO</strong>!</p>'
    }

}