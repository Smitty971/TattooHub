class Post {
    constructor(description, artist, user) {
        this.description = description
        this.artist = artist
        this.user = user
        App.posts.push(this);
    }
}

