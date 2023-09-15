import { fastify } from 'fastify'

import { getAllPromptsRoute } from './routes/get-all-prompts'


const app = fastify()

app.register(getAllPromptsRoute)

app.listen( {
port: 3000,
}).then(() =>{
    console.log('HTTP Server Running')
})