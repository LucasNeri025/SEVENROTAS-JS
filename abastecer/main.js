function requisicao() {
    fetch('https://rotas.onrender.com', {
        mode: 'cors',
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Content-Type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => teste(data.reverse()))
        .catch(error => console.error(error));
}
requisicao()

caixa1 = document.querySelector('.caixa1')
caixa2 = document.querySelector('.caixa2')
caixa3 = document.querySelector('.caixa3')
caixa4 = document.querySelector('.caixa4')
caixa5 = document.querySelector('.caixa5')

function inicio(){
    caixa1.classList.remove('disable')
    caixa2.setAttribute('class','disable')
    caixa3.setAttribute('class','disable')
    caixa4.setAttribute('class','disable')
    caixa5.setAttribute('class','disable')
}
inicio()

function Hr(){
    caixa1.classList.remove('disable')
    caixa2.setAttribute('class','disable')
    caixa3.setAttribute('class','disable')
    caixa4.setAttribute('class','disable')
    caixa5.setAttribute('class','disable')
}
function unoPrata(){
    caixa1.setAttribute('class','disable')
    caixa2.classList.remove('disable')
    caixa3.setAttribute('class','disable')
    caixa4.setAttribute('class','disable')
    caixa5.setAttribute('class','disable')
}
function unoAzul(){
    caixa1.setAttribute('class','disable')
    caixa2.setAttribute('class','disable')
    caixa3.classList.remove('disable')
    caixa4.setAttribute('class','disable')
    caixa5.setAttribute('class','disable')
}

function fiorino(){
    caixa1.setAttribute('class','disable')
    caixa2.setAttribute('class','disable')
    caixa3.setAttribute('class','disable')
    caixa4.classList.remove('disable')
    caixa5.setAttribute('class','disable')
}
function strada(){
    caixa1.setAttribute('class','disable')
    caixa2.setAttribute('class','disable')
    caixa3.setAttribute('class','disable')
    caixa4.setAttribute('class','disable')
    caixa5.classList.remove('disable')
}



function teste(data) {
    for (i of data) {
        if (i.carro == 'HR - OGI-2885' & i.chegadaSaida == 'abastecimento') {
            conteiner = document.querySelector('.hr')
            div = document.createElement('div')
            div.setAttribute('class', 'item')
            funci = document.createElement('p')
            datehours = document.createElement('p')
            kms = document.createElement('p')
            locs = document.createElement('p')
            rote = document.createElement('p')
            statstop = document.createElement('p')
            observacao = document.createElement('p')

            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs)
        }
        if (i.carro == 'Uno Prata - JJK-2356' & i.chegadaSaida == 'abastecimento') {
            conteiner = document.querySelector('.unoprata')
            div = document.createElement('div')
            div.setAttribute('class', 'item')
            funci = document.createElement('p')
            datehours = document.createElement('p')
            kms = document.createElement('p')
            locs = document.createElement('p')
            rote = document.createElement('p')
            statstop = document.createElement('p')
            observacao = document.createElement('p')

            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs)
        }
        if (i.carro == 'Uno Azul - AOL7A76' & i.chegadaSaida == 'abastecimento') {
            conteiner = document.querySelector('.unoazul')
            div = document.createElement('div')
            div.setAttribute('class', 'item')
            funci = document.createElement('p')
            datehours = document.createElement('p')
            kms = document.createElement('p')
            locs = document.createElement('p')
            rote = document.createElement('p')
            statstop = document.createElement('p')
            observacao = document.createElement('p')

            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs)
        }
        if (i.carro == 'Fiorino Branca - JNK-6013' & i.chegadaSaida == 'abastecimento') {
            conteiner = document.querySelector('.fiorino')
            div = document.createElement('div')
            div.setAttribute('class', 'item')
            funci = document.createElement('p')
            datehours = document.createElement('p')
            kms = document.createElement('p')
            locs = document.createElement('p')
            rote = document.createElement('p')
            statstop = document.createElement('p')
            observacao = document.createElement('p')

            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs)
        }
        if (i.carro == 'Strada Branca - JGR-1245' & i.chegadaSaida == 'abastecimento') {
            conteiner = document.querySelector('.strada')
            div = document.createElement('div')
            div.setAttribute('class', 'item')
            funci = document.createElement('p')
            datehours = document.createElement('p')
            kms = document.createElement('p')
            locs = document.createElement('p')
            rote = document.createElement('p')
            statstop = document.createElement('p')
            observacao = document.createElement('p')

            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs)
        }

    }
}