// Users

let users= new Map();  //{userName,FirstName,lastName,emailAddress,Address}
let userFollows = new Map(); //{userName:[userNames]}
let posts=new Map();// {postText,postImage,userName,postedDate}
let userPosts = new Map();
let usersFeed = new Map();

let postId=0;

const getNextPostId = ()=>{
    postId++;    
    return `${postId}`;
}

const addUser = (user)=> {
    if(!users.has(users.userName)) {
        users.set(user.userName,user);
    }
}

const updateUser = (userName,partialUser)=> {
    if(users.has(userName)) {
        users.set(userName,{...users.get(userName),...partialUser})
    }
}   

const followUser = (user1,user2)=> {
    if(users.has(user1) && users.has(user2)) {
        let usersFollowing=userFollows.get(user1)??new Set();
        usersFollowing.add(user2);
        userFollows.set(user1,usersFollowing);
    } 
}

const createPost=(userName,post)=> {
    const postId=getNextPostId();
    posts.set(postId,{...post,userName,postedDate:new Date()});
    userPosts.set(userName,[postId,...(userPosts.get(userName)??[])]);
}

const getUserPosts = (userName) => {
    return userPosts.get(userName);
}

const getFeed = (userName)=> {
    if(usersFeed.has(userName)) {
        return usersFeed.get(userName);
    }
    else {
        let followedUsers=Array.from(userFollows.get(userName));
        let postIds=getUserPosts(userName);
        for(let i=0;i<followedUsers.length;i++) {
            let user2=followedUsers[i];
            let posts2=userPosts.get(user2);
            let len=Math.min(10,posts2.length);
            postIds=[...postIds,...posts2.slice(0,len)];
        }
        usersFeed.set(userName,postIds);
        return postIds;
    }
}


const test = ()=> {
    addUser({userName:'abinet',emailAddress:'abinet@gmail.com',firstName:'Abinet',lastName:'Debele',address:'398 Boynton Ave, CA, 95117, USA'});
    addUser({userName:'daniel',emailAddress:'daniel@gmail.com',firstName:'Daniel',lastName:'Daba',address:'398 Boynton Ave, CA, 95117, USA'});
    followUser('abinet','daniel');
    followUser('daniel','abinet');
    createPost('daniel',{title:'Test Post',text:'A sample post',image:'Sample Image'});
    createPost('daniel',{title:'Test Post 2',text:'A sample post 2',image:'Sample Image 1'});
    createPost('daniel',{title:'Test Post 3',text:'A sample post 3',image:'Sample Image 2'});
    createPost('abinet',{title:'Test Post by abinet 1',text:'A sample post abinet 4',image:'Sample Image 3'});
    createPost('abinet',{title:'Test Post by abinet 2',text:'A sample post abinet 5',image:'Sample Image 4'});
    console.log(getUserPosts('abinet'));
    console.log(userFollows.get('abinet'));
    console.log(getFeed('abinet'));
    console.log(getFeed('daniel'));
}

test();