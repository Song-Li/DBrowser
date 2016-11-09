import time
import http.server
import socketserver

class myHandler(http.server.SimpleHTTPRequestHandler):

    def do_OPTIONS(self):
        s = str(time.time())
        self.send_response(200,"OK")
        self.send_header('Content-Type', 'text')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', '*');
        self.send_header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        self.end_headers()
        print(s)
        #self.wfile.write(s.encode("utf-8"))

    def do_GET(self):
        self.send_response(200, 'OK')
        self.send_header('Content-type', 'html')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', '*');
        self.send_header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        self.end_headers()
        s = str(time.time()*1000)
        print(s)
        self.wfile.write(s.encode("utf-8"))

    def do_POST(self):
        s = str(time.time())
        self.send_response(200,"OK")
        self.send_header('Content-Type', 'text')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Headers', '*');
        self.send_header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        self.end_headers()
        print(s)
        #self.wfile.write(s.encode("utf-8"))

PORT = 5000
Handler = myHandler

pywebserver = socketserver.TCPServer(("",PORT), Handler)
pywebserver.serve_forever()
