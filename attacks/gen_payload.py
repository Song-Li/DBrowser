
for size in range(1, 21):
    payload = size * 1024 / 2 * 512 * 1
    print size
    f = open(str(size * 1) + 'M.js', 'w')
    img = open(str(size * 1) + '.jpg', 'w')
    for i in range(int(payload)):
        f.write("a\n")
        img.write("abc\n")
