function handleSearchBox() {
    const searchContainer = document.getElementById('search-container');
    const searchInput = document.getElementById('search-input');
    const heightSearchContainer = searchContainer.offsetHeight;
    console.log(heightSearchContainer)
    if (heightSearchContainer !== 0) {
        document.getElementById('search-container').classList.remove('search-container-visible');
        document.getElementById('search-container').classList.add('search-container-hidden');
        searchInput.classList.remove('search-input-visible');
        searchInput.classList.add('search-input-hidden');
    } else {
        document.getElementById('search-container').classList.remove('search-container-hidden');
        document.getElementById('search-container').classList.add('search-container-visible');
        searchInput.classList.add('search-input-visible');
        searchInput.classList.remove('search-input-hidden');
    }
};

document.getElementById('lens-mobile').addEventListener('click', handleSearchBox);
document.getElementById('lens-desktop').addEventListener('click', handleSearchBox);