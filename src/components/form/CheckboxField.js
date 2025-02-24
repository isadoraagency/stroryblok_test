import {storyblokEditable} from "@storyblok/react";

const CheckboxField = ({ blok }) => {
  const options = blok.options?.split('\n').filter(Boolean);
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="checkbox"
            name={`${blok.name}[]`}
            value={option.trim()}
          />
          {option.trim()}
        </div>
      ))}
    </div>
  );
};
export default CheckboxField;