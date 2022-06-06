// db.posts.insertOne({
//     createdAt: "today",
//       title: "test",
//       text: "test",
//       author: "Julian Morales",
//       id: "6",
// })

// db.posts.find({
//     // id: {$gt: 6}
// })

// db.posts.updateOne({id: {$lt: 6}},{$set:{text:"updated test"}})


// db.posts.deleteOne(
//     {id: "6"})

// const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
    
//     const sortObj = {}
//     sortObj[sortField] = sortOrder
    
//     const filterObj =  {}
//     filterObj[filterField] = filterValue
    
    
//     console.log("sortObj", sortObj)
   
//     const dbResult = db.posts.find(filterObj).sort(sortObj).limit(limit).skip(skip).toArray()
    
//     return dbResult
// }

// console.log(getPosts(2, 0, "createdAt", 1, "author", "Julian Morales"))


// const getSinglePost = (postId)=>{
//     const result = db.posts.find({id:postId});
//     return result
// };

const getPostsCollectionLength = ()=>{
    const posts = db.posts.count()
    let counter=0;
    //console.log(posts)
    return posts
}

//getSinglePost('6')
getPostsCollectionLength()

//console.log(getSinglePost('6'));

const blogId = getPostsCollectionLength()+1;

 const makePost=(blogId,title,text,author,category)=>{
    const today = new Date();
    db.posts.insert({
        id:blogId,
        title:title,
        text:text,
        author:author,
        category:category,
        createdAt:today.toISOString()
    })
}

 //makePost(blogId,'new post','this is new post by julian','julian','test')
 
 const updatePost =(blogId,title,text,author,category)=>{
     db.post.update({id:blogId},{$set:{
         title:title,
         text:text,
         author:author,
         category:category
     }})
 }

//updatePost('5','new title','new test','new author','new category')


const deletePosts=(blogIds)=>{
  
    db.posts.deleteMany({id:{$in:blogIds}})
}




