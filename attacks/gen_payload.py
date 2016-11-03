
for size in range(1, 21):
    payload = size * 1024 * 512 * 5
    print size
    f = open(str(size * 5) + 'M.js', 'w')
    for i in range(int(payload)):
        f.write("0\n")
