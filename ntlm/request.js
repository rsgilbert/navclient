const httpntlm = require('httpntlm')


async function get(options) {
    return 
}



// Send a request to NAV using NTLM authentication.
// Relies on values stored in environmental variables.
async function getNtlm({ method, url, username, password, domain }) {

    const options = { 
        url, 
        username, 
        password,
        domain
    }
    try {
        const result = await new Promise((resolve, reject) => {
            httpntlm[method](options, (err, res) => {
                if(err) {
                    reject(err)
                }
                resolve(res)
            })
        })
        
        const response = {}     
        const statusCode = result.statusCode   
        response.statusCode = result.statusCode

        if(statusCode >= 200 && statusCode < 300) {
            response.data = JSON.parse(result.body)            
        }

        else if(result.statusCode === 401) {
            console.error(`Authentication failed: username: ${USERNAME}, password: ${PASSWORD}, domain: ${DOMAIN}`)
            response.statusMessage ='Windows Authentication failed'
        }
        else {
            response.statusMessage = 'Web service gave an error'
        }
        return response
    } catch(err) {
        // console.log('failed', err)
        throw err
    }
}

function initialize({ username, password, domain }) {
    return request;
    
    async function request({ method, url }){
        const options = {
            method: method.toLowerCase(), // httpntlm uses lowercase methods
            url, username, password, domain }
        const result = await getNtlm(options)
        return result
    }    
}



module.exports = {
    initialize
}