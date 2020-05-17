const { ScanStatus } = require('wechaty-puppet');
const QrcodeTerminal = require('qrcode-terminal');

const scan = (qrcode, status) => {
  if (status === ScanStatus.Waiting) {
    QrcodeTerminal.generate(qrcode, {
      small: true
    })
  }
}

module.exports = scan;