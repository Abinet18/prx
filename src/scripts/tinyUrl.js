

const fs = require('fs');

let usersMap = new Map();
let urlsMap=new Map();
let hashToIdMap=new Map();
let id=0;
const genId = ()=> {
    id++;
    return `${id}`;
}


const addUser = (user)=> {
    if(!usersMap.get(user.userName)) {
        usersMap.set(user.userName,user);
        save();
    }
}

const getUser = (userName)=> {
   return usersMap.get(userName);
}

const updateUser = (userName,userUpdates)=> {
    if(usersMap.get(userName)) {
        usersMap.set(userName,{...usersMap.get(userName),...userUpdates});
        save();
    }
}

const deleteUser = (userName)=> {
    usersMap.delete(userName);
    save();
}

const getHash=(str)=> {
    return str;
}

const toObject =(m)=> {
    let keys=Array.from(m.keys());
    let obj={};
    for(let i=0;i<keys.length;i++) {
        obj[keys[i]]=m.get(keys[i]);
    }
    return obj;
}

const toMap = (obj)=> {
    let keys=Object.keys(obj);
    let map=new Map();
    for(let i=0;i<keys.length;i++) {
        map.set(keys[i],obj[keys[i]]);
    }
    return map;
}

const getShortUrl = (str)=> {
    return `http://tinyUrl/${str}`;
}
const addUrl=(userName,fullUrl,alias)=> {
if(!usersMap.get(userName)) {
    console.log('Not authorized to create url');
    return 'Error';
}
let hashUrl=getHash(fullUrl);
let _urlId=hashToIdMap.get(hashUrl);
if(_urlId) {
    console.error('already created');
    return getShortUrl(_urlId);
}
else {
    if(alias && urlsMap.get(alias)) {
        console.error('already created');
         return getShortUrl(alias); 
    }
    else if(alias && !urlsMap.get(alias)) {
        _urlId=alias;
    }
    else{
        _urlId=genId();   
    }
   
    urlsMap.set(_urlId,{userName,fullUrl});
    hashToIdMap.set(hashUrl,_urlId);
    save();
    return getShortUrl(_urlId);
}
}

const getUrl = (_urlId)=> {
    const fullUrl =urlsMap.get(_urlId);
    return fullUrl;
}

const save = ()=> {
    const data= {
        id,
        urlsMap:toObject(urlsMap),
        usersMap:toObject(usersMap),
        hashToIdMap:toObject(hashToIdMap)
    }
    console.log(JSON.stringify(data));
    fs.createWriteStream('./tinyUrlData.json',{encoding:'utf8'}).write(
        JSON.stringify(data),
      );
}

const init = ()=> {
    try {
        const data=fs.readFileSync('./tinyUrlData.json',{encoding:'utf8'});
    const json=JSON.parse(data);
    id=json.id;
    urlsMap=toMap(json.urlsMap);
    usersMap=toMap(json.usersMap);
    hashToIdMap=toMap(json.hashToIdMap);
    }
    catch(e) {
        console.log(e);
    }
}


const test = ()=> {
    init();
    addUser({userName:'test1',name:'Test User'});
    console.log(getUser('test1'));
    console.log( addUrl('test1','https://test1.test.com/jdffjdsjflkjffdskjfflkdsjfdsjflkdsjflksd/fldsfdjfjdl'));
    console.log(getUrl('4'));
    console.log( addUrl('test1','https://test1.test.com/anotherWebSiteToShortendfdsfsdfsdsd','saveu'));
    console.log(getUrl('saveu'));
}


test();