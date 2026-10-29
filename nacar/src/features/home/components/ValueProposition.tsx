import "./ValueProposition.css";

const ValueProposition = () => {
  return (
    <section className="value-proposition">
      <div className="container value-proposition__inner">
        <header className="value-proposition__head reveal">
          <p className="eyebrow">Por qué Nácar</p>
          <h2>
            Todo para encontrar <em>su apartamento</em>
          </h2>
        </header>

        <ol className="value-proposition__list">
          <li>Búsqueda por texto y filtros</li>
          <li>Favoritos guardados en su navegador</li>
          <li>Solicitud de visita desde cada ficha</li>
        </ol>
      </div>
    </section>
  );
};

export default ValueProposition;
