function creareStelle () {
    const container = document.querySelector('body');
    for (let i = 0; i < 1000; i ++){
        const stelle = document.createElement("div");
        stelle.className = "stelle";
        stelle.style.width = ".4px"
        stelle.style.height = ".4px"

        stelle.style.top = Math.random() * 100 + "%";
        stelle.style.left = Math.random() * 100 + "%";

        container.appendChild(stelle)
    }
}

creareStelle();
