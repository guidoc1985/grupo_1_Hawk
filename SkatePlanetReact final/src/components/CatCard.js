import PropTypes from "prop-types";

function CatCard(props) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card bg-dark text-white shadow">
        <div className="card-body">{props.categorias}</div>
      </div>
    </div>
  );
}

CatCard.propTypes = {
  categorias: PropTypes.string.isRequired,
};

CatCard.defaultProps = {
  categorias: "Sin datos",
};

export default CatCard;
