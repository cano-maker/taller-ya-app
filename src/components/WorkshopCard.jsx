import { useNavigate } from 'react-router-dom';
import Card from "./Card";
import StarRating from "./StarRating";
import Icon from "./Icon";
import Button from "./Button";

const WorkshopCard = ({ workshop }) => {
    const navigate = useNavigate();
    return (
        <Card className="hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img className="h-48 w-full object-cover" src={workshop.image} alt={workshop.name} />
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-800">{workshop.name}</h3>
                <div className="my-2">
                    <StarRating rating={workshop.rating} />
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                    <Icon name="MapPin" className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span>{workshop.address}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {workshop.services.slice(0, 3).map(service => (
                        <span key={service} className="text-xs font-semibold bg-neutral-100 text-neutral-800 px-2 py-1 rounded-full">{service}</span>
                    ))}
                </div>
                <div className="mt-auto">
                    <Button onClick={() => navigate(`/workshop/${workshop.id}`)} className="w-full">Ver Detalles</Button>
                </div>
            </div>
        </Card>
    );
};

export default WorkshopCard;
