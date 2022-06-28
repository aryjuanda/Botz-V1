const fetchh = require('node-fetch')

const axios = require('axios')
exports.fetch = fetch = (url) => new Promise(async (resolve, reject) => {
    fetchh(url)
        .then(response => response.json())
        .then(res => {
             resolve(res)
         })
         .catch((err) => {
             reject(err)
         })
 })
exports.fetchJson = fetchJson = (url, options) => new Promise(async (resolve, reject) => {
    fetch(url, options)
        .then(response => response.json())
        .then(json => {
            // console.log(json)
            resolve(json)
        })
        .catch((err) => {
            reject(err)
        })
})
exports.getBuffer = getBuffer = async (url) => {
	const res = await fetch(url, {headers: { 'User-Agent': 'okhttp/4.5.0'}, method: 'GET' })
//	const anu = fs.readFileSync('./src/emror.jpg')
	if (!res.ok) return { type: 'image/jpeg'}
	const buff = await res.buffer()
	if (buff)
		return { type: res.headers.get('content-type'), result: buff }
}