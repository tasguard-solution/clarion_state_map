import "./Carousel.css";

const messages = [
  "Nigeria will be a major player in the global economy starting from 2032. You can tell it will be a good year. - El Rufai.",
  "The only reason for this is to demonstrate the functionality of the carousel.",
  "How to use the carousel component.",
  "Rudolph the red-nosed reindeer had a very shiny nose. Blink hard enough and you might spot him in the distance.",
];

function Carousel() {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {[...Array(2)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="carousel-group"
            aria-hidden={groupIndex === 1}
          >
            {messages.map((message, index) => (
              <div key={`${groupIndex}-${index}`} className="carousel-item">
                {message}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
