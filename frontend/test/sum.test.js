const sum = require('./sum');

let open, send, onload, onerror;

function createXHRmock() {
       open = jest.genMockFn();

       // test de la function send et onload
       send = jest.genMockFn().mockImpl(function(){
           onload = this.onload.bind(this);
           onerror = this.onerror.bind(this);
       });

       const xhrMockClass = function () {
           return {
               open,
               send
           };
       };

       window.XMLHttpRequest = jest.genMockFn().mockImpl(xhrMockClass);
}

it('XHR success', () => {
       createXHRmock();

       // appel de la méthode GET

       expect(open).toBeCalledWith('GET', 'http://example.com', true);
       expect(send).toBeCalled();

       // call onload or onerror
       onload();

       // here you can make your assertions after onload
});
