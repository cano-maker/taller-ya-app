import { workshops } from '../data/mockData';
import WorkshopCard from '../components/WorkshopCard';

const WorkshopListPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-neutral-800 mb-6">Talleres en Medellín</h2>
            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-lg shadow-sm">
                <select className="p-2 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Por Servicio</option>
                    <option>Mecánica General</option>
                    <option>Frenos</option>
                    <option>Servicio a Domicilio</option>
                </select>
                <select className="p-2 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary">
                    <option>Por Calificación</option>
                    <option>5 estrellas</option>
                    <option>4+ estrellas</option>
                    <option>3+ estrellas</option>
                </select>
                <input type="text" placeholder="Ubicación" className="p-2 border rounded-lg bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            {/* Workshop Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {workshops.map(workshop => <WorkshopCard key={workshop.id} workshop={workshop} />)}
            </div>
        </div>
    );
};

export default WorkshopListPage;
