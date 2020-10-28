const fs = require('fs');
const path = require('path')


jsonFormat = (data) => { 
    return data.replace(/\n/g, "")
}


const dataObj = [
    {
        id: 1,
        title: 'Innovation at Scale',
        content: fs.readFileSync(path.resolve(__dirname, "./IDC.txt"), 'UTF8', function(err, data) {return data})
    },
    {
        id: 2,
        title: 'Project Milestones',
        content:  fs.readFileSync(path.resolve(__dirname, "./milestones.txt"), 'UTF8', function(err, data) {return data})
    },
    {
        id: 3,
        title: 'Teaching Code',
        content: fs.readFileSync(path.resolve(__dirname, "./teaching_code.txt"), 'UTF8', function(err, data) {return data})    
    }
]



// const formatedData = jsonFormat(dataObj[0].content)


fs.writeFileSync('./data/data.json', JSON.stringify(dataObj))



console.log(dataObj)