const path =  require('path')

//path.sep returns platform specific separator  
console.log(path.sep)

//path.join() joins the folders/files based on separator
const filepath = path.join('/content/','subfolder','temp.txt') 
console.log(filepath)

//path.basename() base file that the path points to 
const base = path.basename(filepath)
console.log(base)

// path.resolve() to get the absolute path to a file
const absoulte = path.resolve(__dirname,'content','subfolder','temp.txt')
console.log(absoulte)

