import Peer from 'peerjs';

class MyPeer extends Peer {
  constructor(_isProd: boolean) {
    if (_isProd === true) {
      super('share', {
        host: 'binaryrenko.herokuapp.com',
        path: '/myapp',
        port: 443,
        secure: true,
        key: 'peerjs',
        debug: 3,
      });
      return
    }
    super({
      host: 'binaryrenko.herokuapp.com',
      path: '/myapp',
      port: 443,
      secure: true,
      key: 'peerjs',
      debug: 3,
    });
  }
}

export default MyPeer;
