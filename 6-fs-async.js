const { readFile, writeFile} = require('fs')


readFile('./content/first.txt','utf-8',(err,result)=>{
    const first = result
    if(err)
    {
        console.log(err)
        return
    }
    console.log(result)

    console.log('1')

    readFile('./content/second.txt','utf-8',(err,result)=>{
        const second = result
        if(err)
        {
            console.log(err)
            return
        }
        console.log(result)
        console.log('2')
        writeFile('./content/third.txt',
        `Here is the two files combined : ${first} and ${second}`,
        (err,result)=>{
            if(err)
            {
                console.log(err)
                return
            }
            console.log('3')
        })

    })

})

console.log('4')



