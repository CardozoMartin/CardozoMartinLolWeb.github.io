const moreOptions = document.querySelector("#bmore");
const bShowMobileLinks = document.querySelector("#bmenu");
const mobileMenu = document.querySelector(".links");
const moreMenu = document.querySelector(".more .menu");

bShowMobileLinks.addEventListener("click", (e)=>{
    e.preventDefault();
    mobileMenu.classList.toggle("show");
});


moreOptions.addEventListener("click", (e) => {
    e.preventDefault();
    moreMenu.classList.toggle("show");
});


// Logica para videos

const video = [
    {
        id:"ioWW0HXStZ8",
    },
    {
        id:"nZzBoIxP5tU",
    },
    {
        id:"KGawda5K8_U",
    },
    {
        id:"u0VkMLg2SY8"
    }

];

const sliderContainer = document.querySelector("#slider");
const currentContainer = document.querySelector("#current");
const videoContainer = document.querySelector("#videos-container");
const bNext = document.querySelector("#next");
const bPrev = document.querySelector("#prev");
let count = 0;

bNext.addEventListener("click", (e)=>{
    count = count + 1 < video.length ? count + 1 : count;

    renderCurrentVideo(video[count].id);
})
bPrev.addEventListener("click", (e)=>{
    count = count - 1 >= 0 ? count -1 : count;
    renderCurrentVideo(video[count].id);

})


renderCurrentVideo(video[count].id);
renderVideo();

//con esta funcion mostramos los videos cargados
function renderCurrentVideo(id){
    currentContainer.innerHTML = `<iframe width="100%" height="720" src="https://www.youtube.com/embed/${id}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
//cargamos la vista previa de los videos
function renderVideo(){
    const html = video.map((video ,index) =>{
        return`
        <div class="item">
        <a href="#" data-id="${index}">
        <img src="https://i3.ytimg.com/vi/${video.id}/mqdefault.jpg" />
        </a>
        </div>`;
    })
    videoContainer.innerHTML = html.join("");
}
document.querySelectorAll(".item a").forEach((item) => {
    item.addEventListener("click", (e) => {
    e.preventDefault();
    const id = +item.getAttribute("data-id");
    current = id;
    renderCurrentVideo(video[current].id);
    });
});





