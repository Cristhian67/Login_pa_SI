import axios from 'axios';

const apiUrl = 'http://localhost:3001'; // Reemplaza con la URL de tu servidor backend

const api = axios.create({
  baseURL: apiUrl,
});

//Con esta funcion se registra el usuario en la base de datos (recibe email y contraseña)
export const registerUser = async (userData) => {
  console.log(userData.email +" "+ userData.password);
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
//con esta funcion revisamos si el usuario existe en la base de datos (recibe email y contraseña)
export const loginUser = async (userData) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await api.post('/login', userData);
    return response;
  } catch (error) {
    console.error(error.response.data);
    throw error;
  }
};

//con esta funcion comparamos los datos de login y el codigo de verificacion para iniciar sesion, regresa un objeto donde si 'login' es true se logueo con exito
export const confirmCode = async (userData) => {
  try {
    const response = await api.post('/verification', userData);
    return {login: true, message: response};
  } catch (error) {
    console.error(error.response.data);
  }
}