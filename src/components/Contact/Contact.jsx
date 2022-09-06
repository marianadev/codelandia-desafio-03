const Contact = () => {
  return (
    <div className="contactContainer">
      <h1 className="contactFormTitle">Contact Us</h1>
      <form className="contactForm">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="E-mail" />
        <input type="text" placeholder="Phone" />
        <textarea rows={5} placeholder="Message..." />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
