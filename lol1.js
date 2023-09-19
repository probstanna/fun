const node_for_click = document.getElementById("for_click")
function find_edit(){
    const joke = document.getElementsByTagName('p')[0]
    console.log(joke.innerText)
    joke.innerText = '🌷🌷͙֒🌷͙͙֒֒вова лох🌷֒🌷͙֒🌷'
}

node_for_click.addEventListener("click", find_edit)