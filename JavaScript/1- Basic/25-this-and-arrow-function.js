// this is current context

const user = {
    username: "Waris",
    price: 999,
    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomeMessage();
user.username = "Sam";
user.welcomeMessage();

// this is node is empty object
// this is window is browser is global object

// function user (){
//     let username = "Waris";
//     // undefined because this is not defined in function
//     console.log(this.username);
// }

// user();


const welcome = () => {
    const username = "Waris";
    console.log(username);
}

welcome();

