import React from 'react';

const FormDetailPage = () => {
    return (
        <div className="detail-page row">
            <div className="col-8 offset-md-2 text-center">
                <h1>Herramientas de IA y cómo aplicarlas</h1>
                <h2 className="fs-6">
                    Todo el mundo habla de IA y en general más o menos todos somos conocedores de algunas de las cosas
                    que es capaz de hacer, sin embargo, ¿Sabrías tú conseguir que la Inteligencia Artificial hiciera lo que quieres?
                </h2>
                <a href="/retos" className="btn btn-primary">Retar sobre esta formación</a>
            </div>
            <div className="row py-5">
                <div className="col-6">
                    <h3>¿Qué vamos a ver?</h3>
                    <p>
                        Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que también ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenían pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
                    </p>
                    <p>
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                    </p>
                </div>
                <div className="col-6">
                    <div className="ratio aspect-16-9 pb-5">
                        <img src="./src/assets/dist/img/klem-logo.png" alt="Klem Logo" className='pb-5'/>
                    </div>
                    <a href="/descargar-formacion" className="btn btn-primary">Descargar formación</a>
                </div>
            </div>
        </div>
    );
};

export default FormDetailPage;
