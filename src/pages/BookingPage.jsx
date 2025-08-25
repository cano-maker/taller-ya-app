import { useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';

const BookingPage = () => {
    const { id } = useParams();
    // You can use the 'id' to fetch workshop details if needed

    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">Agendar Cita</h2>
            <p className="text-gray-600 mb-8">Completa los siguientes pasos para confirmar tu cita.</p>
            
            <Card className="p-8">
                <form className="space-y-6">
                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">1. Selecciona el Servicio</label>
                        <select className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Mecánica General</option>
                            <option>Cambio de Aceite</option>
                            <option>Revisión de Frenos</option>
                            <option>Diagnóstico Electrónico</option>
                        </select>
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">2. Elige Fecha y Hora</label>
                        <input type="date" className="w-full p-3 border rounded-lg bg-neutral-100 mb-3 focus:outline-none focus:ring-2 focus:ring-primary" defaultValue={new Date().toISOString().split('T')[0]} />
                        <div className="grid grid-cols-3 gap-2">
                            {['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM', '04:00 PM'].map(time => (
                                <button type="button" key={time} className="p-2 border rounded-lg text-center hover:bg-primary hover:text-white focus:bg-primary focus:text-white transition-colors">{time}</button>
                            ))}
                        </div>
                    </div>
                     <div>
                        <label className="font-semibold text-gray-700 block mb-2">3. Datos del Vehículo y Contacto</label>
                        <input type="text" placeholder="Marca y Modelo (Ej: Mazda 3)" className="w-full p-3 border rounded-lg bg-neutral-100 mb-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="text" placeholder="Placa" className="w-full p-3 border rounded-lg bg-neutral-100 mb-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="text" placeholder="Tu Nombre" className="w-full p-3 border rounded-lg bg-neutral-100 mb-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="tel" placeholder="Tu Teléfono" className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <Button type="button" onClick={() => alert('Cita Confirmada!')} className="w-full text-lg py-3 bg-secondary hover:bg-green-700">Confirmar Cita</Button>
                </form>
            </Card>
        </div>
    );
};

export default BookingPage;
