import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Icon from './Icon';

const Header = () => {
    const { isAuthenticated, user, logout } = useAppContext();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-primary-dark cursor-pointer">TallerYa</Link>
                
                <div className="flex items-center gap-4">
                    {isAuthenticated ? (
                        <>
                            <span className="hidden sm:inline">Hola, {user.name}</span>
                            <Icon name="Bell" className="text-gray-600 hover:text-primary cursor-pointer" />
                            <button onClick={handleLogout} title="Cerrar Sesión">
                                <Icon name="LogOut" className="text-gray-600 hover:text-primary cursor-pointer" />
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="font-semibold text-gray-600 hover:text-primary">Iniciar Sesión</Link>
                            <Link to="/register" className="hidden sm:inline px-4 py-2 font-semibold text-white bg-primary hover:bg-primary-dark rounded-lg shadow-sm transition-colors">Registrarse</Link>
                        </>
                    )}
                     <Icon name="Menu" className="text-gray-600 hover:text-primary cursor-pointer md:hidden" />
                </div>
            </div>
        </header>
    );
};

export default Header;
