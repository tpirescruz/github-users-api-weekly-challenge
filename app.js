document.addEventListener('DOMContentLoaded', _ => {

    let input = document.querySelector('#pop').value
    console.log(input)
    const searchParams = new URLSearchParams(location.search)

    const lang = searchParams.get('lg') ?? "php";

    const loc = searchParams.get('loc') ?? "marseille";

    const perPage = searchParams.get('limit') ?? "100";

    const page = searchParams.get('page') ?? "1";

    fetch(`https://api.github.com/search/users?q=language:${lang}+location:${loc}&per_page=${perPage}&page=${page}`)
    .then(
        function (reponse){
            return reponse.json()
        })
    .then(
        function(data) {
            console.log(data)
            for (let i of data.items) {
                document.querySelector('#main').innerHTML += `<div> <a href='${i.html_url}' target="blank_"> ${i.login}</a> <img src='${i.avatar_url}')> </div> `            
            
            } 
        }
    )
    .catch(
        console.log
    )
})