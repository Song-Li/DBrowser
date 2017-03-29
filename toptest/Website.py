from splinter import Browser

chromedriver = {'executable_path':'./chromedriver'}
firefoxdriver = {'executable_path':'./geckodriver'}

class Website:
    def __init__(self, url):
        self.url = url
        self.browser = Browser('firefox', path = '/home/jason/mozilla/DBrowser/obj-x86_64-pc-linux-gnu/dist/bin/firefox')
        #self.browser = Browser('/home/sol315/deterministicFox/DBrowser/mach run', **chromedriver)
        #self.browser = Browser('chrome', **chromedriver)

    def get_browser(self):
        return self.browser
    
    def open_login(self, btn_name):
        self.browser.visit(self.url)
        login_btn = self.browser.find_by_text(btn_name)
        login_btn.click()

    def fill_text_by_id(self, id, text):
        self.browser.find_by_id(id).fill(text)

    def click_by_text(self, btn_name):
        login_btn = self.browser.find_by_text(btn_name)
        login_btn.click()

    def open_link(self, link):
        login_btn = self.browser.find_by_text(link)
        assert login_btn.visible
        login_btn.click()

    def visit(self, link):
        self.browser.visit(link)

    def visit(self):
        self.browser.visit(self.url)

