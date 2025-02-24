import {storyblokEditable} from "@storyblok/react";

const SelectField = ({ blok }) => {
  const options = blok.options?.split('\n').filter(Boolean);
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.label}</label>
      <select name={blok.name} required={blok.required}>
        <option value="">Choose</option>
        {options.map((option, index) => (
          <option key={index} value={option.trim()}>
            {option.trim()}
          </option>
        ))}
      </select>
    </div>
  );
};
export default  SelectField;