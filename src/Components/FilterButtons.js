const FilterButtons = ({ filter, setFilter }) => {
  const buttons = [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ];

  return (
    <div className="mb-4 flex justify-center space-x-4">
      {buttons.map((button) => (
        <button
          key={button.value}
          onClick={() => setFilter(button.value)}
          className={`px-3 py-1 rounded ${
            filter === button.value ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
