let shorteUrls = $("#shorted-container")
let urlBase = 'http://localhost:3000/api/'


setInterval(() => {
    console.log($("#url").val())
}, 3000);

async function postNewUrlShort(url) {
    let url_ = $("#url").val()
    if (url_ != "") {
        let newUrlShort = await axios.post('http://localhost:3000/api/short', {
            url: url_
        })
        if (newUrlShort.data.message.urlShort) {
            $("#shorted-container").append(`
            <div class="shorted-box animate__animated animate__bounceIn">
            <div class="url-shorted">${urlBase}s/${newUrlShort.data.message.urlShort}</div>
            <div class="button-short"> GO</div>
            </div>`)
        }
    } else {
        alert("No se puede enviar una URL vacia")
    }
}

(async() => {
    let url = $("#url").val()
    $("#short-url").click((e) => {
        postNewUrlShort(url)
    })
})()