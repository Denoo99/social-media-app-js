let database = [
  {
    username: "ari123",
    password: "1234",
    email: "ari@gmail.com",
    isAdmin: true,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "elona_g",
    password: "abcd",
    email: "elona@gmail.com",
    isAdmin: false,
    //2) Welcome Message
    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  },

  {
    username: "benny",
    password: "pass123",
    email: "benny@gmail.com",
    isAdmin: false,

    login: function () {
      console.log(`Welcome back, ${this.username}!`);
    }
  }
];


const newsfeed = [
  {
    username: "ari123",
    timeline: "Dita e parë në kodim!",
    likes: 12,
    comments: ["Bravo!", "Suksese!"]
  },

  {
    username: "elona_g",
    timeline: "Pushimet në det...",
    likes: 45,
    comments: ["Shumë bukur"]
  },

  {
    username: "benny",
    timeline: "Kush luan futboll sot?",
    likes: 5,
    comments: ["Unë!", "Ku takohemi?"]
  },

  {
    username: "ari123",
    timeline: "Sapo mbarova projektin e ri.",
    likes: 30,
    comments: ["Super punë"]
  },

  {
    username: "tech_guy",
    timeline: "Lajmet e fundit nga teknologjia.",
    likes: 100,
    comments: ["Interesante"]
  }
];

const usernamePrompt = prompt("Shkruaj username:");
const passwordPrompt = prompt("Shkruaj password:");

//1) Login


//// 8) Admin Check Function
function isUserAdmin (username) {
  for (let i = 0; i<database.length; i++){
    let dbUser = database[i];
    if (dbUser.username === username){
      if (dbUser.isAdmin){
        console.log('Access Granted')
      } else {
        console.log('Access not Granted')
      }
    }
  }
}


let currentUser = null;
database.forEach(function(user){
  
  if (user.username === usernamePrompt && user.password === passwordPrompt ) {
      currentUser = user;
      currentUser.login()
  }

})

// 3) Show all posts
if (currentUser !== null) {

    let option = prompt(
        "Choose an option:\n" +
        "1. Show all posts\n" +
        "2. Show my posts\n" +
        "3. Add post\n" +
        "4. Like first post\n" +
        "5. Check admin\n" +
        "6. Comment on first post"
    );

    switch(option){

        case '1':
    newsfeed.forEach(function(item){
    console.log('Postimi i :', item.username, '; Timeline i tyre eshte: ', item.timeline);
            });
            break;

        case '2':
            // Show only my posts
            for(let i = 0; i < newsfeed.length; i++){
                if (newsfeed[i].username === currentUser.username){
                    console.log(
                        'This is my newsfeed: ',
                        newsfeed[i].timeline
                    );
                }
            }
            break;
        case '3' :
          // 5) Add a new post
let newPost = prompt('New Post:');

let newObject = {
  username: 'New User',
  timeline: newPost,
  likes: 0,
  comments: []
}
newsfeed.push(newObject);
console.log(newsfeed);
        break;

        case '4':
          // 6) Like the first post
newsfeed[0].likes = newsfeed[0].likes + 1;
console.log(newsfeed[0]);
        break;

        case '5' :
          isUserAdmin(currentUser.username)
        break;

        case '6': 
        // 7) Add a comment to the first post
let newComment = prompt ('Shto nje comment');
newsfeed[0].comments.push(newComment)
console.log(newsfeed[0])
      break;
      default:
        console.log('exit')
    }
}





