<script>
    const images = document.querySelector('.images');

    let isMouseDown = false;
    let startX;
    let scrollLeft;

    images.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        startX = e.pageX - images.offsetLeft;
        scrollLeft = images.scrollLeft;
    });

    images.addEventListener('mouseleave', () => {
        isMouseDown = false;
    });

    images.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    images.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return;
        e.preventDefault();
        const x = e.pageX - images.offsetLeft;
        const walk = (x - startX) * 2;
        images.scrollLeft = scrollLeft - walk;
    });
</script>
