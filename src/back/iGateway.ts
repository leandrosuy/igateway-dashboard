import axios from 'axios'

const iGateway = axios.create({
  headers: {
    keyInspell: 'ueFMKeLZgmNjgXYNwGkCTAaq9C5Z0wicMPRtF3uXmtJhai4sCMANZSuU1RpcT',
  },
  timeout: 1000,
})

export const getLogs = async (igatewayPort:string) => {
  try {
    const ret = await iGateway.get(`http://${window.location.hostname}:${igatewayPort}/logs`)
    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const login = async (acessKey: string, cnpjCpf: string, igatewayPort:string) => {
  try {
    const ret = await iGateway.post(`http://${window.location.hostname}:${igatewayPort}/login`,{
      acessKey,
      cnpjCpf
    })
    if (ret.status == 200) {
      return ret.data
    } else {
      return 'ERROIGATEWAY'
    }
  } catch (err: any) {
    return 'ERROIGATEWAY'
  }
}

export const getInfoIgateway = async (igatewayPort:string) => {
  try {
    const ret = await iGateway.get('http://' + window.location.hostname + ':' + igatewayPort)
    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const setPlaceIgateway = async (id:string,igatewayPort:string) => {
  try {
    const ret = await iGateway.post('http://' + window.location.hostname + ':' + igatewayPort +'/setPlace',{
      id
    },{
      timeout : 5000
    })
    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

export const playPauseIgateway = async (igatewayPort:string) => {
  try {
    const ret = await iGateway.post('http://' + window.location.hostname + ':' + igatewayPort +'/playPause')
    if (ret.status == 200) {
      return ret.data
    } else {
      return false
    }
  } catch (err: any) {
    return false
  }
}

