import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_mysqldb import MySQL

app = Flask(__name__)
CORS(app)

app.config['MYSQL_USER'] = 'root'
#app.config['MYSQL_DATABASE_PORT'] = '3306'
app.config['MYSQL_PASSWORD'] = '1234'
app.config['MYSQL_DB'] = 'ac4'
app.config['MYSQL_HOST'] = 'localhost'

mysql = MySQL(app)
# mysql.init_app(app)

@app.route('/api/say_name5', methods=['GET','POST'])
def say_name5():
    json = request.get_json()
    nome = json['txtNome']
    print(nome)

    return jsonify(first_name=nome)

@app.route('/api/cadastro', methods=['GET','POST'])
def cadastro():
    json = request.get_json()
    nome = json['txtNome']
    endereco = json['txtEnd']
    telefone = json['txtTel']

    conn = mysql.connection
    cursor = conn.cursor()

    cursor.execute("insert into tbl_ac4 (Nome, Endereco, Telefone) VALUES (%s, %s, %s)", (nome, endereco, telefone))
    conn.commit()
    return jsonify(first_name=f'{nome} - {telefone} - {endereco}')

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)