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

function testando(e){
    console.log(e)
}

function teste(data) {
    const senha = '85595520'
    for (i of data) {
        if (i.carro == 'HR - OGI-2885') {
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
            btnDelete = document.createElement('button')
            btnDelete.setAttribute('value', i.id)
            btnDelete.setAttribute('class', 'btnDelete')
            btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>'
            btnDelete.addEventListener('click',(e)=>{
                var id = e.currentTarget.value
                console.log(id)
                var idade = prompt('Digite a Senha:')
                idade == senha ? requeste() : alert('Senha Errada')
                function requeste(){
                    fetch('https://rotas.onrender.com/'+id, {
                        mode: 'cors',
                        method: 'DELETE',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => data.message == 'SUCCESS' ? alert('Apagado Com Sucesso')+window.location.reload() : null )
                        .catch(error => console.error(error));
                    }
            })
            
            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs); div.append(btnDelete)
        }
        if (i.carro == 'Uno Prata - JJK-2356') {
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
            btnDelete = document.createElement('button')
            btnDelete.setAttribute('value', i.id)
            btnDelete.setAttribute('class', 'btnDelete')
            btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>'
            btnDelete.addEventListener('click',(e)=>{
                var id = e.currentTarget.value
                var idade = prompt('Digite a Senha:')
                idade == senha ? requeste() : alert('Senha Errada')
                function requeste(){
                    fetch('https://rotas.onrender.com/'+id, {
                        mode: 'cors',
                        method: 'DELETE',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => data.message == 'SUCCESS' ? alert('Apagado Com Sucesso')+window.location.reload() : null )
                        .catch(error => console.error(error));
                    }
            })
            
            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs); div.append(btnDelete)
        }
        if (i.carro == 'Uno Azul - AOL7A76') {
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
            btnDelete = document.createElement('button')
            btnDelete.setAttribute('value', i.id)
            btnDelete.setAttribute('class', 'btnDelete')
            btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>'
            btnDelete.addEventListener('click',(e)=>{
                var id = e.currentTarget.value
                var idade = prompt('Digite a Senha:')
                idade == senha ? requeste() : alert('Senha Errada')
                function requeste(){
                    fetch('https://rotas.onrender.com/'+id, {
                        mode: 'cors',
                        method: 'DELETE',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => data.message == 'SUCCESS' ? alert('Apagado Com Sucesso')+window.location.reload() : null )
                        .catch(error => console.error(error));
                    }
            })
            
            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs); div.append(btnDelete)
        }
        if (i.carro == 'Fiorino Branca - JNK-6013') {
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
            btnDelete = document.createElement('button')
            btnDelete.setAttribute('value', i.id)
            btnDelete.setAttribute('class', 'btnDelete')
            btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>'
            btnDelete.addEventListener('click',(e)=>{
                var id = e.currentTarget.value
                var idade = prompt('Digite a Senha:')
                idade == senha ? requeste() : alert('Senha Errada')
                function requeste(){
                    fetch('https://rotas.onrender.com/'+id, {
                        mode: 'cors',
                        method: 'DELETE',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => data.message == 'SUCCESS' ? alert('Apagado Com Sucesso')+window.location.reload() : null )
                        .catch(error => console.error(error));
                    }
            })
            
            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs); div.append(btnDelete)
        }
        if (i.carro == 'Strada Branca - JGR-1245') {
            console.log(i)
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
            btnDelete = document.createElement('button')
            btnDelete.setAttribute('value', i.id)
            btnDelete.setAttribute('class', 'btnDelete')
            btnDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30px" height="30px"><path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"/></svg>'
            btnDelete.addEventListener('click',(e)=>{
                var id = e.currentTarget.value
                var idade = prompt('Digite a Senha:')
                idade == senha ? requeste() : alert('Senha Errada')
                function requeste(){
                    fetch('https://rotas.onrender.com/'+id, {
                        mode: 'cors',
                        method: 'DELETE',
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            "Content-Type": "application/json"
                        }
                    })
                        .then(res => res.json())
                        .then(data => data.message == 'SUCCESS' ? alert('Apagado Com Sucesso')+window.location.reload() : null )
                        .catch(error => console.error(error));
                    }
            })
            
            funci.innerText = 'Motorista: ' + i.motorista
            datehours.innerText = i.dataHora
            kms.innerText = `${i.km}KM`
            locs.innerText = 'Loc: ' + i.loc
            rote.innerText = 'Rota: ' + i.rota
            statstop.innerText = i.chegadaSaida
            observacao.innerText = 'OBS: ' + i.obs

            div.append(funci); div.append(datehours); div.append(kms)
            div.append(rote); div.append(statstop); div.append(observacao)
            conteiner.append(div); div.append(locs); div.append(btnDelete)
        }

    }
}