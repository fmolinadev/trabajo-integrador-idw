const $form = document.querySelector('#sendForm');
$form.addEventListener('submit', handlesubmit);

async function handlesubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });
    if (response.ok) {
        this.reset();
        swal.fire({
            Color: "black",
            background: "white",
            confirmButtonColor: 'rgb(237, 148, 85)',
            icon: "success",
            iconColor: 'rgb(255, 187, 112)',
            confirmButtonText: "Cerrar",
            title: 'Gracias por contactarnos, pronto nos pondremos en contacto! :)',
            customClass: {
                title: 'mi-titulo',  
                content: 'mi-contenido'  
            }
        })
    }
}
