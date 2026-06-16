const searchToggle =
document.getElementById("searchToggle");

const searchForm =
document.getElementById("searchForm");

const searchInput =
document.getElementById("searchInput");

searchToggle.addEventListener("click",()=>{

    searchForm.classList.toggle("active");

    if(searchForm.classList.contains("active")){
        searchInput.focus();
    }

});

searchForm.addEventListener("submit",(e)=>{

    e.preventDefault();

    const query = searchInput.value.trim();

    if(query){

        window.location.href =
        `https://www.google.com/search?q=${encodeURIComponent(query)}`;

    }

});