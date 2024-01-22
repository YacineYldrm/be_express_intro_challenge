fetch("/api/gallery")
    .then(res => res.json())
    .then(galleryImages => {
        console.log(galleryImages);
        renderGallery(galleryImages)
    });

const renderGallery = (galleryImages) =>{
    const galleryContainer = document.body.querySelector('.gallery_wrapper');

    const galleryArray = galleryImages.map((image) => {
        const img = document.createElement("img");
        img.setAttribute("src", image.link);
        return img;
    })
    galleryContainer.append(...galleryArray);
};