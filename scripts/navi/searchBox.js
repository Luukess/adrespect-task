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

function handleMobileNav() {
    const navLayer = document.getElementById('navi-layer');
    const naviBody = document.getElementById('mobile-body-navi');
    const headerNavi = document.getElementById('mobile-header-navi');
    const widthOfNaviLayer = navLayer.offsetWidth;
    if (widthOfNaviLayer !== 0) {
        navLayer.classList.remove('navi-layer-visible');
        navLayer.classList.add('navi-layer-hidden');
        naviBody.classList.remove('mobile-navi-visible');
        naviBody.classList.add('mobile-navi-hidden');
        headerNavi.classList.remove('mobile-header-navi-visible');
        headerNavi.classList.add('mobile-header-navi-hidden');
    } else {
        navLayer.classList.remove('navi-layer-hidden');
        navLayer.classList.add('navi-layer-visible');
        naviBody.classList.remove('mobile-navi-hidden');
        naviBody.classList.add('mobile-navi-visible');
        headerNavi.classList.remove('mobile-header-navi-hidden');
        headerNavi.classList.add('mobile-header-navi-visible');
    }
}

function handleResetMenuResize() {
    const navLayer = document.getElementById('navi-layer');
    const naviBody = document.getElementById('mobile-body-navi');
    const headerNavi = document.getElementById('mobile-header-navi');
    const widthOfNaviLayer = navLayer.offsetWidth;

    if (window.innerWidth >= 768 && widthOfNaviLayer !== 0) {
        navLayer.classList.remove('navi-layer-visible');
        navLayer.classList.add('navi-layer-hidden');
        naviBody.classList.remove('mobile-navi-visible');
        naviBody.classList.add('mobile-navi-hidden');
        headerNavi.classList.remove('mobile-header-navi-visible');
        headerNavi.classList.add('mobile-header-navi-hidden');
    }
}

document.getElementById('close-navi-icon').addEventListener('click', handleMobileNav);
window.addEventListener('resize', handleResetMenuResize);
document.getElementById('navi-mobile-button').addEventListener('click', handleMobileNav);

document.getElementById('lens-mobile').addEventListener('click', handleSearchBox);
document.getElementById('lens-desktop').addEventListener('click', handleSearchBox);