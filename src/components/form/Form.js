import {StoryblokComponent, storyblokEditable} from '@storyblok/react';

const Form = ({ blok }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(blok.action_url, { method: 'POST', body: formData })
      .then(() => alert('Thank you!'))
      .catch((error) => alert(`Error: ${error.message}`));
  };

  return (
    <div className="ia-container">
      <form onSubmit={handleSubmit} {...storyblokEditable(blok)}>

        {blok.fields.map((field) => (
          <StoryblokComponent blok={field} key={field._uid}/>
        ))}
        <button className="ia-btn ia-btn--primary ia-btn--md" type="submit">{blok.submit_text || 'Submit'}</button>
      </form>
    </div>
  );
};

export default Form;