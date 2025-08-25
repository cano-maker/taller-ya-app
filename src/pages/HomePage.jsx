import { useNavigate } from 'react-router-dom';
import { workshops, featuredServices } from '../data/mockData';
import WorkshopCard from '../components/WorkshopCard';
import Button from '../components/Button';
import Icon from '../components/Icon';

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="space-y-12 py-8 px-4 container mx-auto">
            {/* Hero Section */}
            <section className="text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-neutral-800 mb-4">Encuentra el taller ideal en Medellín</h2>
                <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">La forma más rápida y confiable de cuidar tu vehículo.</p>
                <div className="max-w-xl mx-auto relative">
                    <input type="text" placeholder="Busca por servicio, nombre o ubicación..." className="w-full py-3 pl-12 pr-4 rounded-full border-2 border-neutral-200 focus:outline-none focus:border-primary" />
                    <Icon name="Search" className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                </div>
            </section>

            {/* Featured Services */}
            <section>
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Servicios Destacados</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {featuredServices.map(service => (
                        <div key={service.name} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer" onClick={() => navigate('/workshops')}>
                            <div className="p-3 bg-primary-dark rounded-full mb-3">
                                <Icon name={service.icon} className="w-8 h-8 text-white" />
                            </div>
                            <span className="font-semibold text-center">{service.name}</span>
                        </div>
                    ))}
                </div>
                 <div className="text-center mt-6">
                    <Button onClick={() => navigate('/onsite-service')}>Solicitar Servicio a Domicilio</Button>
                </div>
            </section>

            {/* Nearby Workshops */}
            <section>
                <h3 className="text-2xl font-bold text-neutral-800 mb-6 text-center">Talleres Populares</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {workshops.slice(0, 4).map(workshop => <WorkshopCard key={workshop.id} workshop={workshop} />)}
                </div>
                <div className="text-center mt-8">
                    <Button onClick={() => navigate('/workshops')}>Ver todos los talleres</Button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
