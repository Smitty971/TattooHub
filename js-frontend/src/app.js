class App {
    posts = []
    comments = []
    url = "http://localhost:3000"


    getPosts() {
        // make a fetch request to /posts
        fetch(this.url + '/posts')
        .then(resp => resp.json())
        .then(data => console.log(data))
        //populate the posts and comments with the returned data
        //call renderPosts
        .catch(err => alert(err))
    }

    renderPosts() {
        //create DOm nodes insert data into them to render in the dom

    }

}
