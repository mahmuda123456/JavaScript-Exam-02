function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => displayAlbums(data))
}
loadAlbums();

function displayAlbums(data){
    const albumDetails = document.getElementById('albums')
    for(const album of data){
        console.log(album);
        const div = document.createElement('div');
        div.classList.add('comments');
        div.innerHTML = `
            <h3>${album.userId}</h3>
            <h4>${album.id}</h4>
            <p>${album.title}</p>
            
        `;
        albumDetails.appendChild(div);
    }
}