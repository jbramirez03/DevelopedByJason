const accordionItems = document.querySelectorAll('.technologies__item');

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.technologies__content');

    if (item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style');
        item.classList.remove('accordion-open');
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordion-open');
    }

}

accordionItems.forEach(i => {
    const accordionHeader = i.querySelector('.technologies__header');

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open');
        toggleItem(i)

        if (openItem && openItem !== i) {
            toggleItem(openItem)
        }
    });
});

