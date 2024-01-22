fetch("/api/work")
    .then(res => res.json())
    .then(workData => {
        console.log(workData);
        renderWork(workData);
    });



const renderWork = (workData) => {
    const workListContainer = document.body.querySelector('.work-list_wrapper');

    const workArray = workData.map((work) => {
        const div = document.createElement("div");
        const h3 = document.createElement("h3");
        const img = document.createElement("img");
        const p = document.createElement("p");

        h3.textContent = `${work.name}`;
        img.setAttribute("src", work.albumCover);
        p.textContent = `${work.releaseYear}`
        div.append(h3, img, p);
        return div
    });

    workListContainer.append(...workArray);
};