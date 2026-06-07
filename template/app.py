import os

from flask import Flask, render_template


app = Flask(
    __name__,
    template_folder=os.path.join(os.path.dirname(__file__)),
    static_folder=os.path.join(os.path.dirname(__file__), 'static'),
)


@app.route('/')
def home():
    return render_template('home.html', title='Home | TRON Portfolio')


@app.route('/about')
def about():
    return render_template('about.html', title='About | TRON Portfolio')


@app.route('/projects')
def projects():
    return render_template('projects.html', title='Projects | TRON Portfolio')


@app.route('/contact')
def contact():
    return render_template('contact.html', title='Contact | TRON Portfolio')


@app.route('/login')
def login():
    return render_template('login.html', title='Login | TRON Portfolio')


if __name__ == '__main__':
    app.run(debug=True)

