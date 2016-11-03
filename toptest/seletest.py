from selenium import webdriver
import time

#browser =  webdriver.Firefox(firefox_binary = '/home/jason/mozilla/DBrowser/obj-x86_64-pc-linux-gnu/dist/bin/firefox')
browser =  webdriver.Firefox()
hrefs = open('./top.res')

for href in hrefs:
    start = time.time()
    href = 'http://www.' + href
    try:
        browser.set_page_load_timeout(20)
        browser.get(href)
    except:
        print (href + ' Time out')
        browser.execute_script("window.stop()")

    end = time.time()
    print(end - start)
