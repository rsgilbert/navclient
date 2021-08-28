const { initialize } = require('./ntlm')

const authOptions = {
    username: 'GilbertS',
    password: ' ',
    domain: 'JUNIT'
}

const req = initialize(authOptions)

const reqOptions = {
    method: 'PATCH',
    url: "http://junit:7148/BC140/ODataV4/Company('AVSI%20Kampala')/MyTimesheetList",
    json: {
        Description: "Greetings"
    }
}

req(reqOptions).then(value => {
    console.log(JSON.stringify(value))
})
.catch(err => {
    console.log(err)
})
