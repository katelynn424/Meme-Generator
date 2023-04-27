
const form = document.querySelector("#meme-generator");




document.addEventListener('DOMContentLoaded', function(e){
    form.addEventListener("submit", function(e){
    e.preventDefault();
    // console.log(imgInput, topText.value, btmText.value);
        const newDiv = document.createElement('div');
        const img = document.createElement('img');
        const topLine = document.createElement('div');
        const btmLine = document.createElement('div');
        // const url = document.getElementById('img-url');

        let btn = document.createElement("button");
        btn.setAttribute("type", "button");

        // console.log(url.value);


        img.src = document.getElementById('img-url').value;
        topLine.classList.add('new-top-text');
        topLine.innerHTML = document.getElementById('top-text').value;


        btmLine.classList.add('new-btm-text');
        btmLine.innerHTML = document.getElementById('btm-text').value;

        btn.innerHTML = "Remove";

        newDiv.classList.add("meme-generated");
        newDiv.appendChild(topLine);
        newDiv.appendChild(btmLine);
        newDiv.appendChild(img);
        newDiv.appendChild(btn);

        let memeCreated = document.getElementById('meme');
        memeCreated.appendChild(newDiv);

        document.getElementById('img-url').value = "";
        document.getElementById('top-text').value = "";
        document.getElementById('btm-text').value = "";

        btn.addEventListener('click', function(e){
            newDiv.remove();
        })

    form.reset();
});

});

// function createMeme(img, topText, btmText){
//     const createImg = document.createElement("img");
//     img.src = imgInput.value;
//     document.body.appendChild(img);
// }