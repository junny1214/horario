document.querySelectorAll('td').forEach(cell => {
    cell.addEventListener('click', () => {
        const asignatura = cell.innerText;
        const hora = cell.getAttribute('data-hora');
        
        if (asignatura) {
            alert(`Esa es tu asignatura: ${asignatura}, y te toca a tal hora: ${hora}.`);
        }
    });
});
