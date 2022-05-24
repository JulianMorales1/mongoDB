// db.posts.insertOne({
//     createdAt: "today",
//       title: "test",
//       text: "test",
//       author: "Julian Morales",
//       id: "6",
// })

// db.posts.find({
//     id: {$gt: 6}
// })

// db.posts.updateOne({id: {$lt: 6}},{$set:{text:"updated test"}})


// db.posts.deleteOne(
//     {id: "6"})

// const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
    
//     const sortObj = {}
//     sortObj[sortField] = sortOrder
    
    
//     console.log("sortObj", sortObj)
   
//     const dbResult = db.posts.find({}).sort(sortObj).limit(limit).skip(skip).toArray()
    
//     return dbResult
// }

// console.log(getPosts(2, 2, "createdAt", 1, "author", "Julian Morales"))