document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('posts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (blogPosts.length > 0) {
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <h3>by ${post.username}</h3>
                <p>${post.content}</p>
            `;
            postsContainer.appendChild(postElement);
        });
    } else {
        postsContainer.innerHTML = '<p>No blog posts yet.</p>';
    }
});
