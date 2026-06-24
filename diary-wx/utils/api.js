const { request } = require('./request')

function listDiaries(since) {
  const query = since ? '?since=' + encodeURIComponent(since) : ''
  return request({ url: '/api/diaries' + query })
}

function getDiary(date) {
  return request({ url: '/api/diaries/' + date })
}

function saveDiary(date, payload) {
  return request({
    url: '/api/diaries/' + date,
    method: 'PUT',
    data: payload
  })
}

function deleteDiary(date) {
  return request({
    url: '/api/diaries/' + date,
    method: 'DELETE'
  })
}

module.exports = {
  listDiaries,
  getDiary,
  saveDiary,
  deleteDiary
}
