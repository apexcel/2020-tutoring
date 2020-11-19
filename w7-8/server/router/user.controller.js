let id ,pwd;

exports.postUserInfo = (req, resp, next) => {
    console.log(req.body);
    id = req.body.username;
    pwd = req.body.password;
    if (req.body) {
        resp.status(200).json({
            msg: 'success'
        });
    }
    else {
        resp.json({
            msg: 'error'
        })
    }
}

exports.getUserInfo = (req, resp, next) => {
    resp.status(200).json({
        username: id,
        password: pwd
    });
}

exports.getList = (req, resp, next) => {
    resp.status(200).json({
        list: [
            {name: 'Jason Statham', age: 53},
            {name: 'Ryan Reynolds', age: 44},
            {name: 'Arnold Schwarzenegger', age: 73},
            {name: 'Tom Cruise', age: 58},
            {name: 'Chris Hemsworth', age: 37},
        ]
    });
}