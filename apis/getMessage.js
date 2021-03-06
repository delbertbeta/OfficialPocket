const getMessage = (openId, officialAccountId, callback) => {
  wx.request({
    // url: 'https://dsn.apizza.net/mock/be28017e647358c1dfe41415fd8a2ab6/get-message',
    url: 'http://ali.delbertbeta.cc:5000/api/v1/get-message',
    method: 'POST',
    dataType: 'json',
    data: {
      openId: openId,
      officialAccountId: officialAccountId
    },
    success: (res) => {
      callback(res.data)
    }
  })
}

module.exports = {
  getMessage: getMessage
}