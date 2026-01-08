

export const Image = (props) => {
    const {img,title} = props;
  return (
    <div className="bg-[#1a1d3c] p-4 rounded-2xl customHover flex items-center justify-center">
      <img src={img} alt={title} />
    </div>
  );
};