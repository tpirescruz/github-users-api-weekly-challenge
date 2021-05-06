document.addEventListener('DOMContentLoaded', _ => {

    let input = document.querySelector('#pop').value
    console.log(input)

    fetch('https://api.github.com/search/users?q=location:tours&per_page=200')
    .then(
        function (reponse){
            return reponse.json()
        })
    .then(
        function(data) {
            console.log(data)
            for (let i of data.items) {

                document.querySelector('#main').appendChild(document.createElement('div')).textContent = ` <a href='${i.html_url}' target="blank_"> ${i.login}</a> <img src='${i.avatar_url}')>`

            } 
        }
    )
    .catch(
        console.log
    )
})