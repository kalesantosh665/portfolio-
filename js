window.addEventListener('scroll', () => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        if (itemPosition < window.innerHeight) {
            item.classList.add('fade-in');
        }
    });
});
