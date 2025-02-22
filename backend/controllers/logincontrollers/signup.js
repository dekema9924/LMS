const Userdb = require('../../models/usermodel')
const bcrypt = require('bcryptjs')



module.exports = signup = async (req, res) => {
    let { username, name, password, email } = req.body

    const findUser = await Userdb.findOne({
        $or: [{ username }, { email }]
    });

    if (findUser) return res.status(400).json({ message: 'account already exists.' })

    bcrypt.hash(password, 10, async function (err, hash) {
        // Store hash in your password DB.
        const newUser = await Userdb.create(
            {
                name, username, password: hash, email

            })
        await newUser.save()
        if (newUser) return res.status(200).json({ message: "account created" })
        res.status(400).json({ message: "failed to create account" })
    });

}

