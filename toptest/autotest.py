from splinter import Browser
import time

chromedriver = {'executable_path':'./chromedriver'}
browser = Browser('firefox', path = '/usr/bin/firefox')
for i in range(6): 
  #browser = Browser('firefox', path = './chromium')
  url = 'http://google.com'
  start = time.time()
  browser.visit(url)
  end = time.time()
  print (end - start)
  time.sleep(1)
