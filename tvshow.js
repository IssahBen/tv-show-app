
const form = document.querySelector(".forms")

const input = document.querySelector("input[type=text]")

const container = document.querySelector(".movies")


form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const query = e.target[0].value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${query}`)
    console.log(res.data[0].show);
    for (let show of res.data) {
        const showimage = show.show.image.medium
        const nav = document.createElement("a")
        const imageelement = document.createElement('img')
        nav.href = show.show.url
        imageelement.src = showimage;
        imageelement.classList.add("img");

        nav.append(imageelement)
        container.append(nav)
    }


})

const clear = document.querySelector(".clear")

clear.addEventListener("click", function (e) {
    const collection = document.querySelectorAll(".img")
    const arr = Array.from(collection)
    for (let a of arr) {
        a.remove()
    }
})

