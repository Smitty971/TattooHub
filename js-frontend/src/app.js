class App {
    static posts = []
    comments = []
    url = "http://localhost:3000"


    getPosts() {
        // make a fetch request to /posts
        fetch(this.url + '/posts')
        .then(resp => resp.json())
        .then(data => {
            data.forEach(post => {
                new Post(post.description, post.artist, post.user)
            });
            this.renderPosts();
        })
        //populate the posts and comments with the returned data
        //call renderPosts
        .catch(err => alert(err))
    }

    renderPosts() {
        //create DOm nodes insert data into them to render in the dom
            AppContainer.posts.forEach.createElement('ul')
                const li = document.createElement("li")
                li.innerText = activity.name;
                ul.appendChild(li);
        })
        document.body.appendChild(ul)
    };
}
