export default function initializeNavigation() {
  const navLinks = document.querySelectorAll('.xnav-link, .xnav-icon');
  const mainSections = document.querySelectorAll('.xmain > div');

  function showSectionByHash() {
    const hash = window.location.hash.substr(1);

    if (!hash) {
      return;
    }

    mainSections.forEach(section => {
      section.classList.remove('active-section');
    });

    const targetSection = document.querySelector(`.xmain > .${hash}`);

    if (targetSection) {
      targetSection.classList.add('active-section');
    }

    navLinks.forEach(navLink => {
      navLink.classList.remove('active-link');
    });

    const correspondingLink = document.querySelector(`.xnav-link[href="#${hash}"], .xnav-icon[href="#${hash}"]`);

    if (correspondingLink) {
      correspondingLink.classList.add('active-link');
    }
  }

  function handleMediaLinkClick() {
    const mediaLinks = document.querySelectorAll('.mediax-link');

    mediaLinks.forEach(mediaLink => {
      mediaLink.addEventListener('click', function (event) {
        event.preventDefault();

        const targetUrl = mediaLink.getAttribute('href');

        window.location.href = targetUrl;
        location.reload(true);
      });
    });
  }

  showSectionByHash();
  window.addEventListener('hashchange', showSectionByHash);

  navLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      window.location.hash = this.getAttribute('href');
      location.reload(true);
    });
  });

  handleMediaLinkClick();
}

initializeNavigation();
