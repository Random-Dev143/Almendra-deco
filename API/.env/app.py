from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from collections import defaultdict

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:password@127.0.0.1:3306/almendra-deco'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    categoria = db.Column(db.String(45))
    nombre = db.Column(db.String(45))
    descripcion = db.Column(db.String(200))
    precio = db.Column(db.Integer)
    imagenes = db.relationship('ImagenProducto', backref='producto', lazy=True)

    def __init__(self, categoria, nombre, descripcion, precio):
        self.categoria = categoria
        self.nombre = nombre
        self.descripcion = descripcion
        self.precio = precio

class ImagenProducto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    urlimg = db.Column(db.String(400))
    producto_id = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)

    def __init__(self, urlimg, producto_id):
        self.urlimg = urlimg
        self.producto_id = producto_id


class Carrousel(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    titulo=db.Column(db.String(200))
    subtitulo=db.Column(db.String(400))
    urlimg=db.Column(db.String(400))
    def __init__(self,titulo,subtitulo,urlimg):
        self.titulo=titulo
        self.subtitulo=subtitulo
        self.urlimg=urlimg

class Hero(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    titulo=db.Column(db.String(200))
    texto=db.Column(db.String(400))
    img=db.Column(db.String(400))
    def __init__(self,titulo,texto,img):
        self.titulo=titulo
        self.texto=texto
        self.img=img


class ProductoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'categoria', 'descripcion', 'precio', 'nombre')

class ImagenProductoSchema(ma.Schema):
    class Meta:
        fields=('id','urlimg','producto_id')
imagenProductoSchema = ImagenProductoSchema()
imagenProductoSchemas = ImagenProductoSchema(many=True)

producto_schema = ProductoSchema()
productos_schema = ProductoSchema(many=True)
imagen_producto_schema = ImagenProductoSchema()

class CarrouselSchema(ma.Schema):
    class Meta:
        fields=('id','titulo','subtitulo','urlimg')

carrousel_schema= CarrouselSchema()
carrouseles_schema = CarrouselSchema(many=True)

class HeroSchema(ma.Schema):
    class Meta:
        fields=('id','titulo','texto','img')
    
hero_schema = HeroSchema()
heros_schema = HeroSchema(many=True)

@app.route('/carrousel',methods=['GET'])
def get_carrouseles():
    all_carrouseles=Carrousel.query.all()
    result=carrouseles_schema.dump(all_carrouseles)

    return jsonify(result)

@app.route('/carrousel/<id>', methods=['GET'])
def get_carrousel(id):
    carrousel=Carrousel.query.get(id)
    return carrousel_schema.jsonify(carrousel)

@app.route('/carrousel/<id>',methods=['DELETE'])
def delete_carrusel(id):
    carrousel=Carrousel.query.get(id)
    db.session.delete(carrousel)
    db.session.commit()
    return carrousel_schema.jsonify(carrousel)

@app.route('/carrousel',methods=['POST'])
def create_registro():
    titulo= request.json['titulo']
    subtitulo = request.json['subtitulo']
    urlimg= request.json['urlimg']
    new_carrousel=Carrousel(titulo,subtitulo,urlimg)
    db.session.add(new_carrousel)
    db.session.commit()
    return carrousel_schema.jsonify(new_carrousel)

@app.route('/carrousel/<id>', methods=['PUT'])
def update_carrousel(id):
    carrousel=Carrousel.query.get(id)

    titulo = request.json['titulo']
    subtitulo=request.json['subtitulo']
    urlimg=request.json['urlimg']

    carrousel.titulo=titulo
    carrousel.subtitulo=subtitulo
    carrousel.urlimg=urlimg
   
    db.session.commit()
    return carrousel_schema.jsonify(carrousel)

############################################# -------HERO --------##############################################

@app.route('/hero', methods=["GET"])
def get_heros():
    all_heros=Hero.query.all()
    result=heros_schema.dump(all_heros)
    return jsonify(result)

@app.route('/hero/<id>', methods=['GET'])
def get_hero(id):
    hero=Hero.query.get(id)
    return hero_schema.jsonify(hero)

@app.route('/hero/<id>',methods=['DELETE'])
def delete_hero(id):
    hero=Hero.query.get(id)
    db.session.delete(hero)
    db.session.commit()
    return hero_schema.jsonify(hero)

@app.route('/hero',methods=['POST'])
def create_hero():
    titulo= request.json['titulo']
    texto = request.json['texto']
    img= request.json['img']
    new_hero=Hero(titulo,texto,img)
    db.session.add(new_hero)
    db.session.commit()
    return hero_schema.jsonify(new_hero)

@app.route('/hero/<id>', methods=['PUT'])
def update_hero(id):
    hero=Hero.query.get(id)

    titulo = request.json['titulo']
    texto=request.json['text']
    img=request.json['img']

    hero.titulo=titulo
    hero.texto=texto
    hero.img=img
   
    db.session.commit()
    return hero_schema.jsonify(hero)

    #####################################################------------Products--------------#################################################

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask (__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI']='mysql+pymysql://root:password@127.0.0.1:3306/almendra-deco'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Producto(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    categoria=db.Column(db.String(45))
    nombre=db.Column(db.String(45))
    descripcion=db.Column(db.String(200))
    precio=db.Column(db.Integer)
    def __init__(self,categoria,nombre,descripcion,precio):
        self.categoria=categoria
        self.nombre=nombre
        self.descripcion=descripcion
        self.precio=precio

class ImagenProducto(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    urlimg= db.Column(db.String(400))
    producto_id = db.Column(db.Integer, db.ForeignKey('producto.id'), nullable=False)
    def __init__(self,urlimg,producto_id):
        self.urlimg=urlimg
        self.producto_id=producto_id
       

class Carrousel(db.Model):
    id=db.Column(db.Integer, primary_key=True)
    titulo=db.Column(db.String(200))
    subtitulo=db.Column(db.String(400))
    urlimg=db.Column(db.String(400))
    def __init__(self,titulo,subtitulo,urlimg):
        self.titulo=titulo
        self.subtitulo=subtitulo
        self.urlimg=urlimg

class Hero(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    titulo=db.Column(db.String(200))
    texto=db.Column(db.String(400))
    img=db.Column(db.String(400))
    def __init__(self,titulo,texto,img):
        self.titulo=titulo
        self.texto=texto
        self.img=img

with app.app_context():
    db.create_all()

class ProductoSchema(ma.Schema):
    class Meta:
        fields=('id','categoria','descripcion','precio','nombre')

producto_schema = ProductoSchema()
productos_schema = ProductoSchema(many=True)

class ImagenProductoSchema(ma.Schema):
    class Meta:
        fields=('id','urlimg','producto_id')
imagenProductoSchema = ImagenProductoSchema()
imagenProductoSchemas = ImagenProductoSchema(many=True)

class CarrouselSchema(ma.Schema):
    class Meta:
        fields=('id','titulo','subtitulo','urlimg')

carrousel_schema= CarrouselSchema()
carrouseles_schema = CarrouselSchema(many=True)

class HeroSchema(ma.Schema):
    class Meta:
        fields=('id','titulo','texto','img')
    
hero_schema = HeroSchema()
heros_schema = HeroSchema(many=True)

@app.route('/carrousel',methods=['GET'])
def get_carrouseles():
    all_carrouseles=Carrousel.query.all()
    result=carrouseles_schema.dump(all_carrouseles)

    return jsonify(result)

@app.route('/carrousel/<id>', methods=['GET'])
def get_carrousel(id):
    carrousel=Carrousel.query.get(id)
    return carrousel_schema.jsonify(carrousel)

@app.route('/carrousel/<id>',methods=['DELETE'])
def delete_carrusel(id):
    carrousel=Carrousel.query.get(id)
    db.session.delete(carrousel)
    db.session.commit()
    return carrousel_schema.jsonify(carrousel)

@app.route('/carrousel',methods=['POST'])
def create_registro():
    titulo= request.json['titulo']
    subtitulo = request.json['subtitulo']
    urlimg= request.json['urlimg']
    new_carrousel=Carrousel(titulo,subtitulo,urlimg)
    db.session.add(new_carrousel)
    db.session.commit()
    return carrousel_schema.jsonify(new_carrousel)

@app.route('/carrousel/<id>', methods=['PUT'])
def update_carrousel(id):
    carrousel=Carrousel.query.get(id)

    titulo = request.json['titulo']
    subtitulo=request.json['subtitulo']
    urlimg=request.json['urlimg']

    carrousel.titulo=titulo
    carrousel.subtitulo=subtitulo
    carrousel.urlimg=urlimg
   
    db.session.commit()
    return carrousel_schema.jsonify(carrousel)

############################################# -------HERO --------##############################################

@app.route('/hero', methods=["GET"])
def get_heros():
    all_heros=Hero.query.all()
    result=heros_schema.dump(all_heros)
    return jsonify(result)

@app.route('/hero/<id>', methods=['GET'])
def get_hero(id):
    hero=Hero.query.get(id)
    return hero_schema.jsonify(hero)

@app.route('/hero/<id>',methods=['DELETE'])
def delete_hero(id):
    hero=Hero.query.get(id)
    db.session.delete(hero)
    db.session.commit()
    return hero_schema.jsonify(hero)

@app.route('/hero',methods=['POST'])
def create_hero():
    titulo= request.json['titulo']
    texto = request.json['texto']
    img= request.json['img']
    new_hero=Hero(titulo,texto,img)
    db.session.add(new_hero)
    db.session.commit()
    return hero_schema.jsonify(new_hero)

@app.route('/hero/<id>', methods=['PUT'])
def update_hero(id):
    hero=Hero.query.get(id)

    titulo = request.json['titulo']
    texto=request.json['text']
    img=request.json['img']

    hero.titulo=titulo
    hero.texto=texto
    hero.img=img
   
    db.session.commit()
    return hero_schema.jsonify(hero)

    #####################################################------------Products--------------#################################################

@app.route('/producto', methods=["GET"])
def get_productos():
    productos_con_imagenes = db.session.query(Producto, ImagenProducto).\
        join(ImagenProducto, Producto.id == ImagenProducto.producto_id).\
        all()

    productos_con_imagenes_json = defaultdict(list)

    for producto, imagen_producto in productos_con_imagenes:
        producto_json = producto_schema.dump(producto)
        imagen_producto_json = imagen_producto_schema.dump(imagen_producto)
        productos_con_imagenes_json[producto_json['id']].append(imagen_producto_json['urlimg'])

    final_result = [
        {
            'id': key,
            **producto_schema.dump(Producto.query.get(key)),
            'urlimg': imagenes
        }
        for key, imagenes in productos_con_imagenes_json.items()
    ]

    return jsonify(final_result)

@app.route('/producto/<id>', methods=['GET'])
def get_producto(id):
    
    producto = Producto.query.get(id)
    if not producto:
        return jsonify({"message": "Producto no encontrado"}), 404

    
    imagenes = ImagenProducto.query.filter_by(producto_id=id).all()

    
    producto_json = {
        "id": producto.id,
        "categoria": producto.categoria,
        "nombre": producto.nombre,
        "descripcion": producto.descripcion,
        "precio": producto.precio,
        "urlimg": [imagen.urlimg for imagen in imagenes]
    }

    return jsonify(producto_json)


@app.route('/producto/<id>', methods=['DELETE'])
def delete_producto(id):
    producto = Producto.query.get(id)

    if not producto:
        return jsonify({"message": "Producto no encontrado"}), 404


    imagenes = ImagenProducto.query.filter_by(producto_id=id).all()

    try:

        for imagen in imagenes:
            db.session.delete(imagen)


        db.session.delete(producto)

        db.session.commit()

        return jsonify({"message": "Producto y sus imágenes borrados correctamente"}), 200

    except Exception as e:

        db.session.rollback()
        return jsonify({"message": "Error al borrar el producto"}), 500
    

    
@app.route('/producto/<int:id>', methods=['PUT'])
def update_producto(id):
    
    producto = Producto.query.get(id)

    if not producto:
        return jsonify({"message": "Producto no encontrado"}), 404

    try:
        
        if 'categoria' in request.json:
            producto.categoria = request.json['categoria']
        if 'nombre' in request.json:
            producto.nombre = request.json['nombre']
        if 'descripcion' in request.json:
            producto.descripcion = request.json['descripcion']
        if 'precio' in request.json:
            producto.precio = request.json['precio']

        ImagenProducto.query.filter_by(producto_id=id).delete()

        if 'urlimg' in request.json and isinstance(request.json['urlimg'], list):
            for urlimg in request.json['urlimg']:
                nueva_imagen = ImagenProducto(urlimg=urlimg, producto_id=id)
                db.session.add(nueva_imagen)

      
        db.session.commit()

        return jsonify({"message": "Producto y sus imágenes modificados correctamente"}), 200

    except Exception as e:

        db.session.rollback()
        return jsonify({"message": f"Error al modificar el producto: {str(e)}"}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)



