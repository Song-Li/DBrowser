from splinter import Browser
import time

class catch:
    def __init__(self):
        self.browser = Browser()

    def set_url(self, url):
        self.url = url

    def get_href(self):
        self.browser.visit(self.url)
        hrefs = self.browser.find_by_css('.desc-paragraph')
        for href in hrefs:
            print (href.find_by_tag('a').text)

