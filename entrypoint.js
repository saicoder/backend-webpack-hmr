import http from 'http'
import server from './server'


const port = process.env.PORT || 3000
const httpServer = http.createServer(server)

httpServer.listen(port, () => console.log(`Application is listening on http://localhost:${port}`))

let currentServer = server

// ================== HOT RELOADING ==================
if (typeof module !== 'undefined' && module.hot) {
  module.hot.accept('./server', () => {
    httpServer.removeListener('request', currentServer)
    httpServer.on('request', server)
    currentServer = server
  })
}
