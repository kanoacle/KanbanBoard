/*jshint esversion: 6*/
const makeRequest = (method, url, body) => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    if (body) xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText
      });
    };
    (body) ? xhr.send(body) : xhr.send();
  });
};

const getCards = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/cards/`)
    .then (cards => {
      resolve(JSON.parse(cards));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const getUsers = () => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/`)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const getCardById = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/cards/${id}`)
    .then (cards => {
      resolve(JSON.parse(cards));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const getUserById = (id) => {
  return new Promise(function (resolve, reject) {
    makeRequest('GET', `/api/users/${id}`)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const postCard = (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/cards/`, body)
    .then (cards => {
      resolve(JSON.parse(cards));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const postUser = (body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('POST', `/api/users/`, body)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const putCard = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('PUT', `/api/cards/${id}`, body)
    .then (cards => {
      resolve(JSON.parse(cards));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const putUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('PUT', `/api/users/${id}`, body)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const deleteCard = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('DELETE', `/api/cards/${id}`, body)
    .then (cards => {
      console.log(cards);
      resolve(JSON.parse(cards));
    })
    .catch (err => {
      reject(err);
    });
  });
};

const deleteUser = (id, body) => {
  return new Promise(function (resolve, reject) {
    makeRequest('DELETE', `/api/users/${id}`, body)
    .then (users => {
      resolve(JSON.parse(users));
    })
    .catch (err => {
      reject(err);
    });
  });
};