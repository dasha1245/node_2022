const fs = require('node:fs');

// fs.mkdir('./boys', (err) => {
//     console.log(err);
// })

// fs.appendFile('./boys/Natalya.txt', 'female',  (err) => {
//     console.log(err);
// })

// fs.readdir('./girls', (err, files) => {
//     console.log(err);
//     for (const file of files) {
//         fs.stat(`./girls/${file}`, (err, stats) => {
//             console.log(err);
//             if(stats.isFile()){
//                 fs.readFile(`./girls/${file}`, (err, data) => {
//                     console.log(err);
//                     if(data.toString() === 'male'){
//                         fs.rename(`./girls/${file}`, `./boys/${file}`, (err)=>{
//                             console.log(err);
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// fs.readdir('./boys', (err, files) => {
//     console.log(err);
//     for (const file of files) {
//         fs.stat(`./boys/${file}`, (err, stats) => {
//             console.log(err);
//             if(stats.isFile()){
//                 fs.readFile(`./boys/${file}`, (err, data) => {
//                     console.log(err);
//                     if(data.toString() === 'female'){
//                         fs.rename(`./boys/${file}`, `./girls/${file}`, (err)=>{
//                             console.log(err);
//                         })
//                     }
//                 })
//             }
//         })
//     }
// })

// fs.unlink('./boys/Orest.txt', (err)=>{
//     console.log(err);
// })