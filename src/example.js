function doEverythingWell() {
    var banner = document.getElementById('banner');
    if (banner) {
        banner.style.display = 'block';
        setTimeout(function () {
            location.reload();
        }, 2000);
    }
}
