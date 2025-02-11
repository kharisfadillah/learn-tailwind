import PropTypes from "prop-types";

const ServiceCard = ({ label, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg border text-center">
      <div className="bg-blue-500 text-white p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center text-2xl">
        🎨
      </div>
      <h3 className="mt-4 text-xl font-bold">{label}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
