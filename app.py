import pandas as pd
from flask import (
    Flask,
    render_template,
    jsonify,
    request,
    redirect)

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/send")
def send():
    input = request.args.get('textbox')
    print ('Got: ', input)
    return jsonify('success')

if __name__ == "__main__":
    app.run(debug=True)
