from flask import Flask, request , jsonify
from flask_sqlalchemy import SQLAlchemy 
from sqlalchemy import BigInteger, exc, Date 
from datetime import datetime
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

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:password@localhost/dbv4'
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
app.secret_key = 'secret string'
db = SQLAlchemy(app)


############### Models

class Cliente(db.Model):
    id_cliente = db.Column(db.Integer, primary_key=True)
    rfc = db.Column(db.String(13), nullable=False, unique =True )
    nombre = db.Column(db.String(40), nullable=False)
    ap_paterno= db.Column(db.String(40), nullable=False)
    ap_materno= db.Column(db.String(40), nullable=True)
    estado = db.Column(db.String(20), nullable=False)
    cp = db.Column(db.Integer, nullable=False)
    colonia = db.Column(db.String(30), nullable=False)
    calle = db.Column(db.String(40), nullable=False)
    numero = db.Column(BigInteger , nullable = False)
    correo = db.Column(db.String(30), nullable = False)


    def __init__(self, rfc, nombre , ap_paterno , ap_materno , estado , cp , colonia , calle , numero, correo):
        self.rfc= rfc
        self.nombre= nombre 
        self.ap_paterno= ap_paterno 
        self.ap_materno= ap_materno
        self.estado= estado
        self.cp = cp
        self.colonia = colonia
        self.calle = calle
        self.numero = numero
        self.correo = correo


class Articulo(db.Model):
    id_articulo = db.Column(db.Integer, primary_key=True)
    cod_barras = db.Column(db.String(13), nullable=False , unique = True)
    descripcion = db.Column(db.String(30), nullable=False)
    marca = db.Column(db.String(20), nullable=False)
    stock = db.Column(db.Integer, nullable= False)
    utilidad = db.Column(BigInteger, nullable=False)
    costo_compra = db.Column(BigInteger, nullable=False)
    fecha_compra = db.Column(Date, nullable=False)
    id_categoria = db.Column(db.Integer, nullable=False)
    id_proveedor = db.Column(db.Integer, nullable = False)
    precio_venta= db.Column(BigInteger , nullable = False)


    def __init__(self,cod_barras , descripcion , marca , stock , utilidad_c , costo_compra , fecha_compra , id_categoria , id_proveedor , precio_venta):
        self.cod_barras= cod_barras
        self.descripcion= descripcion 
        self.marca = marca
        self.stock=  stock
        self.utilidad = utilidad_c 
        self.costo_compra= costo_compra
        self.fecha_compra= fecha_compra
        self.id_categoria= id_categoria
        self.id_proveedor= id_proveedor 
        self.precio_venta = precio_venta




#######Testing db

#newClient = Cliente("fdsafdas2", "Juan" , "Perez" , "Martinex", "DF", "30230", "Las flores", "revolucion", 343434)
# newClient = Cliente("fyzf223123", "Juanlfd" , "Pekrefdz" , "Martidfsnexk", "DFkf", "30160", "Lask florfes", "revofdsaluciojn", 32432434)
# db.session.add(newClient)
# db.session.commit()


# newArticulo = Articulo("212927", "Impresion Color", "Pape", 2 , 2, 2,datetime.today().strftime('%Y-%m-%d'), 1 , 1 , 4);
# db.session.add(newArticulo)
# db.session.commit()

######## Routes

def row2dict(row):
    d = {}
    for column in row.__table__.columns:
        d[column.name] = str(getattr(row, column.name))

    return d

@app.route('/api/items', methods=['GET'])
def items():
    if request.method == 'GET':
        items = Articulo.query.all()
        arrayJson = []
        for item in items : 
            arrayJson.append(row2dict(item))
            
        return jsonify(arrayJson) ;

@app.route('/api/checkout', methods=['POST'])
def checkout():
    if request.method == 'POST':
        print("here in checkout!!")
        return {"message": "hello"}

@app.route('/api/client', methods=['POST'])
def client():
    if request.method == 'POST':
        data = request.json
        try:
            newClient = Cliente(data["rfc"], data["name"] , data["lastName"] , data["lastName2"], data["state"] , int(data["cp"]), data["colony"] , data["street"], int(data["number"]), data["mail"]);
            response = db.session.add(newClient)
            db.session.commit()
        except (exc.SQLAlchemyError):
            return "Error",404
        return {"message": "Se realizo exitosamente"}

#######################