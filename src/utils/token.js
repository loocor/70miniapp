import Taro from "@tarojs/taro";

// Get a token from FileMaker Server
export const getFmsToken = async (database) => {
  // Get the FileMaker Server connection details from environment variables
  // More info: https://taro-docs.jd.com/docs/next/env-mode-config
  const fms_protocol = process.env.TARO_APP_PROTOCOL
  const fms_host = process.env.TARO_APP_FMS_HOST
  const fms_username = process.env.TARO_APP_FMS_USERNAME
  const fms_password = process.env.TARO_APP_FMS_PASSWORD

  // Base64 encode the username and password
  const auth_string = base64Encode(`${fms_username}:${fms_password}`)

  // Request a token from FileMaker Server
  return Taro.request({
    url: `${fms_protocol}://${fms_host}/fmi/data/v2/databases/${database}/sessions`,
    header: {'Authorization': `Basic ${auth_string}`},
    method: 'POST',
  }).then(res => {
    return res.data.response.token
  }).catch(err => {
    console.error('err:', err)
    throw err
  })
}

// Base64 encode a string
function base64Encode(str) {
  let buffer = new ArrayBuffer(str.length);
  let bufferView = new Uint8Array(buffer);
  for (let i = 0; i < str.length; i++) {
    bufferView[i] = str.charCodeAt(i);
  }
  return Taro.arrayBufferToBase64(buffer);
}
