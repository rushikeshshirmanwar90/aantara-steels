export default function Map() {
  return (
    <section className="section map-section" id="map" aria-label="location">
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3741.5880496074756!2d75.65384357528212!3d20.317311681159893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbd39aba0baca7%3A0x7a00706789407cb6!2sAANTARA%20STEEL%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1772208030739!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Aantara Steel Location"
        />
      </div>
    </section>
  );
}