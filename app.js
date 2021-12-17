console.log('funcionando')

let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('me diste un click')

    let datos = new FormData(formulario)

    console.log(datos)
    console.log(datos.get('usuario'))
    console.log(datos.get('pass'))

    fetch('post.php', {
        method: 'POST',
        body: datos
    })
        .then(res=> res.json())
        .then(data => {
            console.log(data)
        })
})