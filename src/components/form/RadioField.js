import {storyblokEditable} from "@storyblok/react";

const RadioField = ({ blok }) => {
  const options = blok.options?.split('\n').filter(Boolean);
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.label}</label>
      {options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name={blok.name}
            value={option.trim()}
            required={blok.required}
          />
          {option.trim()}
        </div>
      ))}
    </div>
  );
};
export default RadioField;