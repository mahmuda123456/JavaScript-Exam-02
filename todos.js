function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>res.json())
    .then(data => displayUsers(data))

}
loadUsers();
function displayUsers(data){
    const seeId = document.getElementById('at')
 for(const users of data){
    const div =document.createElement('div');
    div.innerHTML=`
    <h1>${users.userId}</h1>
    <h3>${users.id}</h3>
    <h4>${users.title}</h4>
    <h4>${users.completed}</h4>
    `;
    div.classList.add('at')
    seeId.appendChild(div);

 console.log(users);

 }
}