import axios from 'axios'

const signUpController = async (req, res) => {
  const { username, secret, email } = req.body

  try {
    const r = await axios.post(
      'https://api.chatengine.io/users/',
      { username, secret, email },
      { headers: { 'Private-Key': '3d3150cd-af3f-4fd4-b0e9-9efbba6117e0' } },
    )
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
}

const loginController = async (req, res) => {
  const { username, secret } = req.body

  try {
    const r = await axios.get('https://api.chatengine.io/users/me', {
      headers: { "Project-ID": "f261b10f-c0f4-47e7-b041-5cb942a10c14","User-Name":username ,"User-Secret": secret },
    })
    return res.status(r.status).json(r.data)
  } catch (e) {
    return res.status(e.response.status).json(e.response.data)
  }
}

export { signUpController, loginController }
