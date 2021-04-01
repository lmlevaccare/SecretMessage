
let { hash } = window.location;
let message = atob(hash.replace('#', ''));
    
if (message) {
    document.querySelector("#message-form").classList.add('hide');
    document.querySelector("#message-show").classList.remove('hide');
    document.querySelector('h1').innerHTML = message;
}
 

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide')
    document.querySelector('#link-form').classList.remove('hide')

    let input = document.querySelector("#message-input");
    let encrypted = btoa(input.value)
    let linkInput = document.querySelector("#link-input")
    linkInput.value = `${window.location}#${encrypted}`; 
    linkInput.select();
    
}
)