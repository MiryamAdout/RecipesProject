
const fs = require('fs');

function get(req, res) {
    fs.readFile("products.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file student ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
// exports.getById = (req, res) => {

//     fs.readFile("products.json", "utf-8", (err, data) => {
//         if (err) {
//             res.status(500).send("error read file student ")
//         } else {
//             let id = req.params.id;
//             data = JSON.parse(data);
//             let product = data.find(st => st.id == id)
//             if (product == undefined) {
//                 res.status(500).send("not found student by tz " + id);
//             } else {
//                 res.send(product);
//             }

//         }


//     })
// }


exports.post = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        //המרה של טקסט למערך
        let products = JSON.parse(data);
        //body =  לתוכן שנשלח בפונקציה פןסט 
        products.push(req.body);
        fs.writeFile("products.json", JSON.stringify(products), (err) => {
            if (err) {
                res.status(500).send("error in add products ");
            } else {
                res.send("sucess add");
            }
        })
    })
}

exports.delete = (req, res) => {

    fs.readFile("products.json", "utf-8", (err, data) => {
        let products = JSON.parse(data);
        let c=req.params.code;
        let p=products.filter(prod=>prod.code!=c);
        fs.writeFile("products.json", JSON.stringify(p), (err) => {
            if (err) {
                res.status(500).send("error in delete product");
            } else {
                res.status(200).send("succes to delete!!"+p);
            }
        })
    })
}

//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
