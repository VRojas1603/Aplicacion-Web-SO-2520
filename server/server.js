const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server/db.json');
const middlewares = jsonServer.defaults();

// Usar middlewares por defecto (logger, static, cors y no-cache)
server.use(middlewares);

// Para parsear JSON en el body
server.use(jsonServer.bodyParser);

// Función para generar token simple
function generateToken() {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
}

// Middleware personalizado para manejar autenticación
server.post('/api/v1/authentication/sign-in', (req, res) => {
  const db = router.db; // Obtener la base de datos
  const { username, password } = req.body;

  console.log('Sign-in attempt:', { username, password });

  // Buscar usuario en la base de datos
  const user = db.get('users')
    .find({ username: username, password: password })
    .value();

  if (user) {
    // Usuario encontrado - login exitoso
    const token = generateToken();
    console.log('Login successful for user:', username);
    res.json({
      id: user.id,
      username: user.username,
      token: token
    });
  } else {
    // Usuario no encontrado o credenciales incorrectas
    console.log('Login failed for user:', username);
    res.status(401).json({
      error: 'Invalid credentials'
    });
  }
});

server.post('/api/v1/authentication/sign-up', (req, res) => {
  const db = router.db; // Obtener la base de datos
  const { username, password } = req.body;

  console.log('Sign-up attempt:', { username });

  // Verificar si el usuario ya existe
  const existingUser = db.get('users')
    .find({ username: username })
    .value();

  if (existingUser) {
    console.log('Username already exists:', username);
    res.status(409).json({
      error: 'Username already exists'
    });
    return;
  }

  // Crear nuevo usuario
  const newUser = {
    id: Date.now(),
    username: username,
    password: password
  };

  // Agregar usuario a la base de datos
  db.get('users')
    .push(newUser)
    .write();

  console.log('User created successfully:', username);
  res.json({
    id: newUser.id,
    username: newUser.username,
    message: 'User created successfully'
  });
});

// Usar las rutas por defecto para el resto de endpoints
server.use('/api/v1', router);

// Iniciar servidor
const port = 3000;
server.listen(port, () => {
  console.log(`JSON Server is running on http://localhost:${port}`);
  console.log('Authentication endpoints:');
  console.log('- POST http://localhost:3000/api/v1/authentication/sign-in');
  console.log('- POST http://localhost:3000/api/v1/authentication/sign-up');
  console.log('');
  console.log('Example users for testing:');
  console.log('- Username: admin, Password: admin123');
  console.log('- Username: user1, Password: password123');
  console.log('- Username: demo, Password: demo123');
});
