module.exports ={
    create: (req,res)=> {
        const {productname, price, imgurl} = req.body
        req.app.get('db')
        .create_product([productname, price, imgurl])
        .then(()=>{
            res.status(200).send('Product Created')
        })

    },

    getAll: (req,res)=> {
        req.app.get('db')
        .read_products()
        .then((inventory)=>{
            res.status(200).send(inventory)
        })
    },

    update: (req,res)=> {
        const {id} = req.params
        req.app.get('db')
        .update_product([id]
            )
        .then(()=>{
            res.status(200).send('User Updated')
        })
    },

    delete: (req,res)=> {
        const {id} = req.params
        req.app.get('db')
        .delete_product(id)
        .then(()=>{
            res.status(200).send('User Deleted')
        })
    }

}