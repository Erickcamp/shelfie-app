module.exports = {
get: (req, res) => {
    const db = req.app.get('db')

    db.get_inventory()
    .then((inventory) => res.status(200).send(inventory))
    .catch((err) => {
        res.status(500).send(err)
    })
},
create: (req, res) => {
    const db = req.app.get('db')
    const {name, price, imgurl} = req.body

    db.create_inventory([name, price, imgurl])
    .then(() => res.sendStatus(200))
    .catch((err) => {
        res.status(500).send(err)
    })
},
update: (req, res) => {},
delete: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params

    db.delete_inventory(id)
    .then(() => res.sendStatus(200))
    .catch((err) =>{
        res.status(500).send(err)
    })
}
}