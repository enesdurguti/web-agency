const servicesSectionImage = document.querySelector('.services-section-image');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-intersecting');
        } else {
            entry.target.classList.remove('is-intersecting');
        }
    });
});

observer.observe(servicesSectionImage);

// Services section images
const servicesImages = document.querySelectorAll('.services-images');
const webDesginService = document.querySelector('.web-desgin-service');
const brandingService = document.querySelector('.branding-service');
const digitalMarketingService = document.querySelector('.digital-marketing-service');
const servicesSectionOverlay = document.querySelector('.services-section-overlay');

const addActiveServicesImageClass = index => {
    servicesImages[index].classList.add('active-services-image');
    servicesImages[index].classList.add('bg-zoom');
}

webDesginService.addEventListener('mouseover', () => {
    servicesImages.forEach(image => {
        if (!servicesImages[0].classList.contains('active-services-image') && image.classList.contains('active-services-image')) {
            image.classList.remove('active-services-image');
        }
    });
    if (!servicesImages[0].classList.contains('active-services-image')) {
        addActiveServicesImageClass(0);
    } 
});

brandingService.addEventListener('mouseover', () => {
    servicesImages.forEach(image => {
        if (!servicesImages[1].classList.contains('active-services-image') && image.classList.contains('active-services-image')) {
            image.classList.remove('active-services-image');
        }
    });
    if (!servicesImages[1].classList.contains('active-services-image')) {
        addActiveServicesImageClass(1);
    } 
});

digitalMarketingService.addEventListener('mouseover', () => {
    servicesImages.forEach(image => {
        if (!servicesImages[2].classList.contains('active-services-image') && image.classList.contains('active-services-image')) {
            image.classList.remove('active-services-image');
        }
    });
    if (!servicesImages[2].classList.contains('active-services-image')) {
        addActiveServicesImageClass(2);
    } 
});