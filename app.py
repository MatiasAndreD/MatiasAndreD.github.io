from flask import Flask, render_template

# Crea una instancia de la aplicación Flask
app = Flask(__name__)

# Define la ruta raíz '/'
@app.route('/')
def index():
    # Renderiza la plantilla 'index.html'
    return render_template('index.html')

# Define la ruta '/about'
@app.route('/about')
def about():
    # Renderiza la plantilla 'about.html'
    return render_template('about.html')

# Inicia el servidor de desarrollo
if __name__ == '__main__':
    app.run(debug=True)