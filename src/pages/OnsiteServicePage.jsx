import Card from '../components/Card';
import Button from '../components/Button';

const OnsiteServicePage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-2xl">
            <h2 className="text-3xl font-bold text-neutral-800 mb-2">Solicitar Servicio a Domicilio</h2>
            <p className="text-gray-600 mb-8">Llevamos el taller a donde estés. Describe tu necesidad.</p>
            
            <Card className="p-8">
                <form className="space-y-6">
                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">Dirección de Recogida</label>
                        <input type="text" placeholder="Ej: Calle 10 # 43A-30, El Poblado" className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div>
                        <label className="font-semibold text-gray-700 block mb-2">Información del Vehículo</label>
                        <input type="text" placeholder="Marca, Modelo y Año" className="w-full p-3 border rounded-lg bg-neutral-100 mb-3 focus:outline-none focus:ring-2 focus:ring-primary" />
                        <input type="text" placeholder="Placa" className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                     <div>
                        <label className="font-semibold text-gray-700 block mb-2">Descripción del Problema</label>
                        <textarea placeholder="Describe el problema que presenta tu vehículo..." rows="4" className="w-full p-3 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
                    </div>
                    <Button type="button" onClick={() => alert('Solicitud Enviada!')} className="w-full text-lg py-3">Solicitar Servicio</Button>
                </form>
            </Card>
        </div>
    );
};

export default OnsiteServicePage;
