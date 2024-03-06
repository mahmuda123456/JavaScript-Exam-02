function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComments(data))
}
loadPosts();

function displayComments(data){
    const commentDetails = document.getElementById('comments')
    for(const comment of data){
        console.log(comment);
        const div = document.createElement('div');
        div.classList.add('comments');
        div.innerHTML = `
            <h3>${comment.postId}</h3>
            <h4>${comment.id}</h4>
            <h4>${comment.name}</h4>
            <a href="${comment.email}"</a>
            <p>${comment.body}</p>
        `;
        commentDetails.appendChild(div);
    }
}