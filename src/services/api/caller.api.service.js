import Constants from '../../utils/constants';

async function authAPI(method, path, data, callback, errorCallback) {
  var token = Constants.API.TOKEN;
  var link = Constants.API.BASE_URL + path;
  var sendParam = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Auth-Token': token,
    },
  };
  if (
    method == Constants.API.METHOD.POST ||
    method == Constants.API.METHOD.PUT
  ) {
    sendParam.body = JSON.stringify(data);
  }
  if (method == Constants.API.METHOD.GET && data) {
    data = {...data, api_key: Constants.API.KEY};
    let query = Object.keys(data)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
             .join('&');
    link += `?${query}`;
  }
  console.log(link);
  console.log(sendParam);
  fetch(link, sendParam)
    .then(response => response.json())
    .then(responseJson => {
      // console.log('Auth API Server response data = ' + JSON.stringify(responseJson));
      if (
        responseJson.errors &&
        responseJson.errors[0] &&
        responseJson.errors[0] == 'User not authorized'
      ) {
        errorCallback(responseJson.errors[0]);
      } else callback(responseJson);
    })
    .catch(error => {
      console.error(error);
      errorCallback(error);
    });
}
exports.authAPI = authAPI;

async function generalAuthAPI(url, method, path, data, callback, errorCallback) {
  var token = Constants.API.TOKEN;
  var link = url + path;
  var sendParam = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Auth-Token': token,
    },
  };
  if (
    method == Constants.API.METHOD.POST ||
    method == Constants.API.METHOD.PUT
  ) {
    sendParam.body = JSON.stringify(data);
  }
  if (method == Constants.API.METHOD.GET && data) {
    data = {...data, api_key: Constants.API.KEY};
    let query = Object.keys(data)
             .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
             .join('&');
    link += `?${query}`;
  }
  console.log(link);
  console.log(sendParam);
  fetch(link, sendParam)
    .then(response => response.json())
    .then(responseJson => {
      // console.log('Auth API Server response data = ' + JSON.stringify(responseJson));
      if (
        responseJson.errors &&
        responseJson.errors[0] &&
        responseJson.errors[0] == 'User not authorized'
      ) {
        errorCallback(responseJson.errors[0]);
      } else callback(responseJson);
    })
    .catch(error => {
      console.error(error);
      errorCallback(error);
    });
}
exports.generalAuthAPI = generalAuthAPI;

async function publicAPI(method, path, data, callback, errorCallback) {
  var link = Constants.API.BASE_URL + path;
  console.log(link);

  var sendParam = {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  switch (method) {
    case Constants.API.METHOD.POST || Constants.API.METHOD.PUT:
      sendParam.body = JSON.stringify(data);
      break;

    case Constants.API.METHOD.GET:
      if (Object.keys(data).length === 0) {
        console.log('data  empty');
      } else {
        link += data;
        console.log('data not empty');
      }
      break;
    default:
      break;
  }
  console.log(link);
  console.log(sendParam);
  fetch(link, sendParam)
    .then(response => response.json())
    .then(responseJson => {
      console.log(
        'Public API Server Response data' + JSON.stringify(responseJson),
      );
      callback(responseJson);
    })
    .catch(error => {
      console.error(error);
      errorCallback(error);
    });
}
exports.publicAPI = publicAPI;
