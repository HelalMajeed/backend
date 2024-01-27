const express = require('express');

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: true,
}));

app.listen(53742, () => {
    console.log("server is running at http://localhost/53742");
});

app.post("/api/add_product", (req, res)=> {
    console.log("Result", req.body);
    const pdata = {
        "id": productData.length+1,
        "pname": req.body.pname,
        "pprice": req.body.pprice,
        "pdesc": req.body.pdesc,
    }

    productData.push(pdata);
    console.log("Final", pdata);
    res.status(200).send({
        "status_code": 200,
        "massege": "Product add successfully",
        "product": pdata,
    })
});
    
//something has chaneged