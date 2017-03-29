from catcher import catch

base = 'http://www.alexa.com/topsites/global;'
c = catch()
for i in range(20):
    url = base + str(i)
    print(url)
    c.set_url(url)
    c.get_href()
