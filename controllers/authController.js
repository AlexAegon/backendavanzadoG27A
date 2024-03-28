import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jwt-simple';


const register = async (req, res) => {
    try {

        if (!req.body.email || !req.body.password) {
            return res.status(400).json({
                msg: 'Correo o contraseña faltantes',
            });

        }

        const newPassword = await bcrypt.hash(req.body.password, 10);
        req.body.password = newPassword;
        const newUser = await User.create(req.body);
        return res.json({
            msg: 'Usuario Creado',
            user: newUser,
        })
    } catch (error) {
        res.status(500).json({
            msg: 'Error al registrar el usuario',
            error,
        });

    }

}

const login = async (req, res) => {

    // Pedimos Password  y Correo

    if (!req.body.password || !req.body.email) {
        return res.status(400).json({
            msg: 'Bad login'
        });
    }
    try {
        //buscamos user con ese correo 
        const user = await User.findOne({
            email: req.body.email,
        });

        // si no hay user usamos 404
        if (!user) {
            return res.status(404).json({
                msg: 'usrio no encontrado'
            })
        }
        // comparar contraseñas
        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)

        if (isPasswordCorrect) {
            //crear un token
            //regresar un token 
            const payload = {
                email: user.email,
                role: user.role,
            };
            const token = jwt.encode(payload, process.env.SECRET);
            // regresar el token 
            return res.json({
                msg: 'Login correcto',
                token,
            });

        } else {
            return res.status(401).json({
                msg: 'Datos incorrectos',

            });
        }

    } catch (error) {
        res.status(500).json({
            msg: 'error al hacer Login  ',
            error,
        })

    }

    //regresar un token

};
export { register, login };