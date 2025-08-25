import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Card from '../components/Card';
import Button from '../components/Button';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAppContext();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock login
        login({ name: email.split('@')[0] });
        navigate('/');
    };

    return (
        <div className="container mx-auto px-4 py-16 flex justify-center items-center">
            <div className="max-w-md w-full">
                <h2 className="text-3xl font-bold text-center text-neutral-800 mb-8">Iniciar Sesión</h2>
                <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="font-semibold text-gray-700 block mb-2">Correo Electrónico</label>
                            <input 
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@correo.com" 
                                className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:border-primary"
                                required
                            />
                        </div>
                        <div>
                            <label className="font-semibold text-gray-700 block mb-2">Contraseña</label>
                            <input 
                                type="password" 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="********" 
                                className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:border-primary"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full text-lg py-3">Entrar</Button>
                    </form>
                    <p className="text-center text-gray-600 mt-6">
                        ¿No tienes una cuenta? <Link to="/register" className="font-semibold text-primary hover:underline">Regístrate aquí</Link>
                    </p>
                </Card>
            </div>
        </div>
    );
};

export default LoginPage;
