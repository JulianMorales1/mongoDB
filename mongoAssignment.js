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

const getPosts = (limit, skip, sortField, sortOrder, filterField, filterValue) => {
    
    const sortObj = {}
    sortObj[sortField] = sortOrder
    
    const filterObj =  {}
    filterObj[filterField] = filterValue
    
    
    console.log("sortObj", sortObj)
   
    const dbResult = db.posts.find(filterObj).sort(sortObj).limit(limit).skip(skip).toArray()
    
    return dbResult
}

console.log(getPosts(2, 0, "createdAt", 1, "author", "Julian Morales"))