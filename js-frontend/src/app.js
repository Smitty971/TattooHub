class App {
    Posts = []
    comments = []
    url = "http://localhost:3000"


    getPosts() {
        // make a fetch request to /posts
        console.log('something')
        fetch(this.url + '/posts')
        .then(resp => console.log(resp))
        //populate the posts and comments with the returned data
        //call renderPosts
        .catch(err => alert(err))
    }

    renderPosts() {
        //create DOm nodes insert data into them to render in the dom

    }

}
