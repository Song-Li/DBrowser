payload = 1e6

f = open('1e6.js', 'w')

for i in range(int(payload)):
    f.write("hello world\n")
