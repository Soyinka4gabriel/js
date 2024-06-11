from kivy.app import App
from kivy.uix.label import Label

class NewApp(App):
    def build(self):
        label = Label(text="the is a lable")
        return label
app = NewApp()
app.run()