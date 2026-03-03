export const Image = (props) => {
  const { img, title } = props;
  return (
    <div className="bg-(--surfaceColor) p-4 rounded-2xl customHover flex items-center justify-center">
      <img src={img} alt={title} />
    </div>
  );
};
