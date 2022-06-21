
const fs = require('fs');

function get(req, res) {
    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            res.send(JSON.parse(data));
        }

    })
}
//אפשרות ראשונה ליצא פונקציה מדף
exports.getById = (req, res) => {

    fs.readFile("users.json", "utf-8", (err, data) => {
        if (err) {
            res.status(500).send("error read file users ")
        } else {
            let id = req.params.id;

            data = JSON.parse(data);
            let user = data.find(us => us.password == id)

            if (user)
                res.status(200).send(user);
            else
                res.status(500).send("not found user by this password " + id);
        }
    })
}

exports.postLogin = (req, res) => {
    fs.readFile("users.json", "utf-8", (err, data) => {
        data = JSON.parse(data);
        let pass = req.body.password;
        let name = req.body.name;
        let response = data.find(user => user.password == pass && user.name == name)
        if (response)
            return res.status(200).send(response);
        response = data.find(user => user.password == pass || user.name == name)
        if (response)
            return res.send(null);
        res.status(500).send("the user isn't exist!!!")

    })

}

exports.post = (req, res) => {

    fs.readFile("users.json", "utf-8", (err, data) => {
        let users = JSON.parse(data); //המרה של טקסט למערך
        users.push(req.body);//body =  לתוכן שנשלח בפונקציה פןסט 
        fs.writeFile("users.json", JSON.stringify(users), (err) => {
            if (err) {
                res.status(500).send("error  in add users ");
            } else {
                res.send("sucess add user ");
            }
        })
    })
}

// exports.login=(req, res)
//אפשרות שניה ליצא פונקציה מדף
exports.get = get;
