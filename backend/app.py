from flask import Flask, request
import json

# app = Flask(__name__,static_folder="frontend/build",static_url_path="/")

# @app.route("/")
# @app.route('/client')
# def index():
#     return app.send_static_file("index.html")

# @app.route('/api/priori', methods=['POST'])
# def priori():
#     if request.method == 'POST':
#         file = request.files['file']
#         data=request.form.to_dict()


app = Flask(__name__)

############## Postgres Config

# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/flasksql'
# app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
# app.secret_key = 'secret string'


###############



######## Routes

@app.route('/api/items', methods=['GET'])
def items():
    if request.method == 'GET':
        return {"message": "hello"}

@app.route('/api/checkout', methods=['POST'])
def checkout():
    if request.method == 'POST':
        print("here in checkout!!")
        return {"message": "hello"}

@app.route('/api/client', methods=['POST'])
def client():
    if request.method == 'POST':
        return {"message": "hello"}

#######################