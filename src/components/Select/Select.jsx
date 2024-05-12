import Select from "react-select";

export function MainSelect({
  options,
  selectObj,
  SetselectObj,
  classNamePrefix,
}) {
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : null,
      transition: "transform 0.2s ease-in-out",
    }),
    input: (provided, state) => ({
      ...provided,
    }),
  };

  return (
    <Select
      options={options}
      defaultValue={selectObj}
      onChange={SetselectObj}
      classNamePrefix={classNamePrefix}
      styles={customStyles}
      className="selectInput"
    />
  );
}
