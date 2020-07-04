import { userFilter, chatUsersFilter, usersFilter } from './hashUtil'

const API_URL = process.env.API_URL || 'http:localhost:8000';

export const apiService = {
  logout,
  login,
  register,
  loadChatUsers,
  loadChatChannel
}

function logout() {
  localStorage.removeItem('user');
  localStorage.removeItem('authToken');
}

 function login(credentials) {
  return postAuthRequest(credentials, 'signin')
}

function register(userProfile) {
  return postAuthRequest(userProfile, 'signup')
}

function loadChatUsers() {
  return getDataApi('users')
  .then(({data}) => {
    return chatUsersFilter(data);
  })
}

function loadChatChannel(id) {
  return getDataApi('channels', id)
  .then(({data}) => {
    const {users, name, description, websocket, chatBot, ID } = data;
    return {users: usersFilter(users), name, description, websocket, chatBot, channelId: ID };
  })
}

const getDataApi = (page, id=null) => {
  const authToken = localStorage.authToken;
  console.log('AUTHTOKEN', authToken)
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'Authorization': `Bearer ${authToken}`,
      // mode: 'cors',
      // cache: 'default',
    }
  }
// console.log(`${API_URL}/api/v1/${page}${id ? `/${id}` : ''}?`)
  return fetch(`${API_URL}/api/v1/${page}${id ? `/${id}` : ''}?`, requestOptions)
    .then(handleResponse)
}

const postAuthRequest = (content, page) => {
  const headers = { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
  return postRequesApi(content, page, headers)
  .then(({data, authToken}) => {
    const user = userFilter(data);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('authToken', JSON.stringify(authToken));
    return user;
  })
}

const postRequesApi = (content, page, headers) => {
  const requestOptions = {
    method: 'POST',
    headers,
    body: JSON.stringify(content)
  };
  return fetch(`${API_URL}/${page}?`, requestOptions)
    .then(handleResponse)
}

// const postUserApi = (content, page, headers) => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//     },
//     body: JSON.stringify(content)
//   };
//   return fetch(`${API_URL}/${page}?`, requestOptions)
//     .then(handleResponse)
//     .then(({data}) => {
//       const user = userFilter(data);
//       localStorage.setItem('user', JSON.stringify(user));
//       return user;
//     })
// }

const handleResponse = (response) => {
  return response.text().then( content => {
    const data = content && JSON.parse(content);
    if(!response.ok){
      if(response.status === 401){
        // Unauthorized exit platform
        logout();
        location.reload(true);
      }
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }
      console.log('DATA', JSON.stringify(data))
    return data;
  });
}
