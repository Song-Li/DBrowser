
for size in range(1, 21):
    payload = size * 1e5 / 1.2
    f = open(str(size) + 'M.js', 'w')
    for i in range(int(payload)):
        f.write("hello world\n")
