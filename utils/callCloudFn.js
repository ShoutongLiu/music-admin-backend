const getAccessToken = require('./getAccessToken')
const rp = require('request-promise')

const callCloudFn = async (ctx, fnName, params) => {
    const ACCESS_TOKEN = await getAccessToken()
    const URL = `https://api.weixin.qq.com/tcb/invokecloudfunction?access_token=${ACCESS_TOKEN}&env=${ctx.state.env}&name=${fnName}`
    const options = {
        method: 'POST',
        uri: URL,
        body: {
            ...params,
        },
        json: true
    }
    return await rp(options).then(res => {
        return res
    }).catch(err => {
        console.log(err);
    })
}

module.exports = callCloudFn