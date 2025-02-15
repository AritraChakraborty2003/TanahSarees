const SliderArea = () => {
  return (
    <div
      style={{
        marginTop: `${screen.width > 1000 ? "24%" : ""}`, // Adjust based on header height
        zIndex: 10, // Keep content below the header
      }}
    >
      Slider
    </div>
  );
};

export default SliderArea;
