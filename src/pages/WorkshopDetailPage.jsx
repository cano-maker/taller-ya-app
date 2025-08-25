import { useParams, useNavigate } from 'react-router-dom';
import { workshops, featuredServices } from '../data/mockData';
import Button from '../components/Button';
import Card from '../components/Card';
import Icon from '../components/Icon';
import StarRating from '../components/StarRating';

const WorkshopDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const workshop = workshops.find(w => w.id === parseInt(id));

    if (!workshop) return (
        <div className="text-center py-10">
            <p>Taller no encontrado.</p>
            <Button onClick={() => navigate('/')} className="mt-4">Volver al Inicio</Button>
        </div>
    );

    return (
        <div className="bg-white">
            <div className="container mx-auto">
                {/* Back Button */}
                <div className="p-4">
                    <button onClick={() => navigate('/workshops')} className="flex items-center font-semibold text-primary hover:underline">
                        <Icon name="ChevronLeft" className="w-5 h-5" /> Volver a la lista
                    </button>
                </div>
                
                {/* Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-96 px-4">
                    <div className="col-span-2 row-span-2">
                        <img src={workshop.gallery[0] || workshop.image} alt="Taller" className="w-full h-full object-cover rounded-lg"/>
                    </div>
                    <img src={workshop.gallery[1] || 'https://images.unsplash.com/photo-1599493343693-ef4973c1519b?auto=format&fit=crop&w=600'} alt="Taller" className="w-full h-full object-cover rounded-lg"/>
                    <img src={workshop.gallery[2] || 'https://images.unsplash.com/photo-1617170185353-7b01243414d3?auto=format&fit=crop&w=600'} alt="Taller" className="w-full h-full object-cover rounded-lg"/>
                </div>

                <div className="p-4 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="md:col-span-2">
                        <h2 className="text-4xl font-bold text-neutral-800">{workshop.name}</h2>
                        <div className="flex items-center text-gray-600 my-3">
                            <Icon name="MapPin" className="w-5 h-5 mr-2" />
                            <span>{workshop.address}</span>
                        </div>
                        <StarRating rating={workshop.rating} />
                        <p className="mt-6 text-gray-700 leading-relaxed">{workshop.description}</p>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Servicios Ofrecidos</h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {featuredServices.map(service => (
                                <div key={service.name} className="flex items-center p-3 bg-neutral-100 rounded-lg">
                                    <Icon name={service.icon} className="w-6 h-6 text-primary mr-3" />
                                    <span className="font-medium">{service.name}</span>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold mt-8 mb-4">Reseñas de Usuarios</h3>
                        <div className="space-y-4">
                            {workshop.reviews.length > 0 ? workshop.reviews.map((review, i) => (
                                <div key={i} className="border-b pb-4">
                                    <div className="flex justify-between items-center">
                                        <p className="font-bold">{review.user}</p>
                                        <StarRating rating={review.rating} />
                                    </div>
                                    <p className="text-gray-600 mt-1">{review.comment}</p>
                                </div>
                            )) : <p>Aún no hay reseñas para este taller.</p>}
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div>
                        <div className="sticky top-24">
                            <Card className="p-6">
                                <h3 className="text-xl font-bold mb-4">Ubicación</h3>
                                <div className="h-48 bg-neutral-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <p>Mapa de Google</p>
                                </div>
                                <Button onClick={() => navigate(`/book/${workshop.id}`)} className="w-full mt-6 text-lg">Agendar Cita</Button>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkshopDetailPage;
