//Redirecionamentos

function r_dashboards(){
    window.location.href = '/dashboards'

    if(window.location.pathname === '/dashboards'){
        window.alert ("Você ja está nessa página")
    }
}

function r_home(){
    window.location.href = '/home'

    if(window.location.pathname === '/home'){
        window.alert ("Você ja está nessa página")
    }
}

function r_contato(){
    window.location.href = '/contato'

    if(window.location.pathname === '/contato'){
        window.alert ("Você ja está nessa página")
    }
}

function r_saibamais(){
    window.location.href = '/saibamais'
}

function r_sair(){
    window.location.href = '/'
}

// fim de redirecionamentos

