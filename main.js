const { createApp } = Vue;

createApp ({
    data( ) {
        return{
            message : "Hello world!",
            image: 'https://picsum.photos/id/1005/600/200'
        }
    }
}).mount("#app");

