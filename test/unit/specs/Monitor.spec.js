import {
  Monitor
} from '@/js/Monitor.js'

describe('Monitor', function () {
  describe('#start', function () {
    it('should be ok to start monitor', function (done) {
      let source = {
        test: ''
      }
      var evt = {}
      let inst = new Monitor({
        key: 'test',
        interval: 50,
        onchange: function (val) {
          evt = val
        }
      })
      inst.start()
      var value = 'test'
      window.location.hash = value
      var url = window.location.host + value
      expect(evt.newValue).to.equal(url)
      done()
      source.test = value
    })
  })
})
