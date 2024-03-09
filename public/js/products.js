const socket = io()

const render = (data) => {
    let html = data.map(elem =>  {
        return (
            `<div>
                <strong>${elem.name} </strong> <br/>
                <em>Precio: ${elem.price}</em> <br/>
                <em>Cantidad: ${elem.stock}</em> <br/>
                <em>Categoria: ${elem.category}</em>
            </div>`
        )
    }).join(' ')

    document.getElementById('caja').innerHTML = html
}

socket.on('prods', (data) => {
    console.log(data);
    render(data)
})