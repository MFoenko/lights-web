
const socket = new WebSocket(process.env.REACT_APP_LIGHTS_SOCKET_URL!!)

async function establishConnection(){
  while(socket.readyState == WebSocket.CONNECTING){
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  socket.send(JSON.stringify(
    {
      type: "connect",
      deviceType: "controller",
      id: Math.random().toString(16),
    }
  ))
}
establishConnection()


const lightsService = {
  setColor: (color: String) => {
    socket.send(JSON.stringify(
      {
        type: "update",
        color: color,
      }
    ))
  },
}

export default lightsService