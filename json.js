fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then(data =>displayData(data))

function displayData(data){
    const productDetails = document.getElementById('product');
    for (const user of data){
        const div = document.createElement("div");
        div.classList.add('pro');
        div.innerHTML = `
        <h3>AlbumId-${user.albumId}</h3>
        <h4>Id-${user.id}</h4>
        <p>Title-${user.title}</p>
        <img src="${user.url}" style="margin-top:2%"/>
        <img src="${user.thumbnailUrl}"/>
    `;
    productDetails.appendChild(div);
}

}