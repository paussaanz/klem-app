import FormCard from "../components/FormCard";

const HomePage = () => {



  return (
    <>
      <section className="forma-corp container">
            <h1 className="text-center">Descubre todas las formaciones disponibles sobre tu empresa o mercado</h1>
            <div className="row pb-5">
                <div className="col-12 pb-5">
                    <FormCard
                        imageSrc="./src/assets/dist/img/klem-logo.png"
                        imageAlt="Klem Logo"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imageClass="aspect-formacorp"
                        buttonText="Go somewhere"
                        buttonHref="/form-detail"
                    />
                </div>
                <div className="col-3">
                    <FormCard
                        imageSrc="./src/assets/dist/img/klem-logo.png"
                        imageAlt="Klem Logo"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imageClass="aspect-imagen"
                        buttonText="Go somewhere"
                        buttonHref="#"
                    />
                </div>
                <div className="col-3">
                    <FormCard
                        imageSrc="./src/assets/dist/img/klem-logo.png"
                        imageAlt="Klem Logo"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imageClass="aspect-imagen"
                        buttonText="Go somewhere"
                        buttonHref="#"
                    />
                </div>
                <div className="col-3">
                    <FormCard
                        imageSrc="./src/assets/dist/img/klem-logo.png"
                        imageAlt="Klem Logo"
                        title="Card Title 2"
                        text="Some  the card title and make up the bulk of the card's content."
                        imageClass="aspect-imagen"
                        buttonText="Go somewhere"
                        buttonHref="#"
                    />
                </div>
                <div className="col-3">
                    <FormCard
                        imageSrc="./src/assets/dist/img/klem-logo.png"
                        imageAlt="Klem Logo"
                        title="Card Title 2"
                        text="Some quick example text to build on the card title and make up the bulk of the card's content."
                        imageClass="aspect-imagen"
                        buttonText="Go somewhere"
                        buttonHref="#"
                    />
                </div>
            </div>
        </section>
    </>
  );
};

export default HomePage;