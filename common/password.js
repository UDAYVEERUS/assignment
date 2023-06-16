const bcrypt = require('bcrypt')

const passwordGenerate = async(password) => {
    const salt = await bcrypt.genSaltSync(10)
    const hash = await bcrypt.hashSync(password, salt)
    // console.log(hash,"heyte")
    return hash
}

const passwrodValidate = (password, hash) => {
    return bcrypt.compareSync(password, hash)
}

module.exports = {passwordGenerate, passwrodValidate}