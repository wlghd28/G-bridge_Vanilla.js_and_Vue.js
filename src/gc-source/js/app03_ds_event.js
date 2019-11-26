document.querySelector("#div").addEventListener("click", function({type, target}){
    console.log(target.tagName);
    console.log(target.innerText);
    console.log(type);
});