import Icon from "./Icon";

const StarRating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
        <div className="flex items-center">
            {[...Array(fullStars)].map((_, i) => <Icon key={`full-${i}`} name="Star" className="w-5 h-5 text-yellow-400" />)}
            {[...Array(emptyStars)].map((_, i) => <Icon key={`empty-${i}`} name="Star" className="w-5 h-5 text-gray-300" />)}
            <span className="ml-2 text-sm font-medium text-gray-600">{rating.toFixed(1)}</span>
        </div>
    );
};

export default StarRating;
