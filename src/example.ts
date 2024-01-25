type BannerElement = HTMLElement | null;

function doEverythingWell(): void {
  const banner: BannerElement = document.getElementById('banner');
  if (banner) {
    banner.style.display = 'block';

    setTimeout(() => {
      location.reload();
    }, 5000);
  }
}
