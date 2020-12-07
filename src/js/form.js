var input = document.getElementById("input");
var btn = document.getElementById("btn");
var btnEdge = document.getElementById("btn-edge");
var box = document.getElementById("box");
var inputBox = document.getElementById("input-box");

btn.addEventListener("click", ajaxRequest);
btnEdge.addEventListener("click", ajaxRequest);

    var term;

setInterval(() => {
    term = input.value;
}, 100);

function ajaxRequest(e){
    e.preventDefault();

    if(input.value == ''){
        inputBox.style.borderColor = 'red';
        box.innerHTML = '<h2>No results found</h2>'
    }else{
        inputBox.style.borderColor = 'white';
                axios.get(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=FueW-mICilVe29vCxpoF4wgL_Rma-EffgVvGHZpL2BM`)
                .then(function (response) {
                const result = response.data.results;
                box.innerHTML = `<img src=${result[0].urls.regular.toString()} "> <img src=${result[1].urls.regular.toString()} ">
                <img src=${result[2].urls.regular.toString()} "> <img src=${result[3].urls.regular.toString()} ">`
                }) 
            }
        }

