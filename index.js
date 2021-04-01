 let input = document.querySelector("#message-input");

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();


    const encrypted = btoa(input.value)
    document.querySelector("#link-input").value = encrypted; 
    
}
)