const { createApp } = Vue;

createApp ({
    data( ) {
        return{
            message : "Hello world!"
        }
    }
}).mount("#app");

createApp ({
    data() {
        return {
            image: 'https://picsum.photos/id/1005/600/200'
        }
    }
}).mount("#bonus");