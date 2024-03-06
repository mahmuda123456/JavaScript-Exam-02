function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayusers(data))
}
loadUser();

function displayusers(data){
    const postDetails = document.getElementById('users')
    for(const user of data){
        console.log(user);
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h3>${user.id}</h3>
            <h4>${user.name}</h4>
            <h4>${user.username}</h4>
            <a href="${user.email}"</a>
            <p>${user.address}</p>
            <p>${user.phone}</p>
            <a href="${user.website}"</a>
            <p>${user.company}</p>
        `;
        postDetails.appendChild(div);
    }
}                   
