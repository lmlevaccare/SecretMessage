 let input = document.querySelector("input");

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();

    console.log(input.value)
}
)