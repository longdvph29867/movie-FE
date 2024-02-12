const Rating: React.FC<{ rating: string }> = ({ rating }) => {
  return (
    <p className="text-xl font-medium text-white">
      <i className="fa-solid fa-star text-[#f4b508]" />
      <span>{rating}</span>
      <span className="text-sm font-light">/10</span>
    </p>
  );
};

export default Rating;