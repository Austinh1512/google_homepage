const form = document.querySelector("#searchForm");
const search = document.querySelector("#search");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.replace("https://www.google.com/search?q=" + search.value);
});