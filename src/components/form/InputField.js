import {storyblokEditable} from "@storyblok/react";

const InputField = ({ blok }) => {
  return (
    <div {...storyblokEditable(blok)}>
      <label>{blok.label}</label>
      <input
        type={blok.type}
        name={blok.name}
        required={blok.required}
      />
    </div>
  );
};
export default InputField;