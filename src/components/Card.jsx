const Card = ({ id, title, description, info, price, discount, image, handleAddToBasket }) => {

    return (
        <div className="border d-flex flex-column align-items-center justify-content-between p-2 shadow rounded h-100 m-2">
            <div className="d-flex flex-column align-items-center">
                <img style={{ width: "200px" }} src={image} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="accordion accordion-flush w-100" id={`accordion-${id}`}>
                    <div className="accordion-item w-100">
                        <h2 className="accordion-header w-100" id={`heading-${id}`}>
                            <button className="accordion-button bg-white border-0 shadow-none w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${id}`} aria-expanded="false" aria-controls="collapseOne">
                                See Information
                            </button>
                        </h2>
                        <div id={`collapse-${id}`} className="accordion-collapse collapse show" aria-labelledby={`heading-${id}`} data-bs-parent={`#accordion-${id}`}>
                            <div className="accordion-body">
                                <p>{info}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-100 d-flex flex-column">
                <div className="d-flex align-self-start w-100">
                    <p className="text-danger fw-bold">{price}</p>
                    <p className="text-danger mx-1">:-</p>
                    {discount > 0 && <p style={{ textDecorationLine: "line-through" }}>{discount}</p>}
                </div>

                <button className="btn btn-primary mx-auto" onClick={() => handleAddToBasket(id)}>Add to list</button>
            </div>
        </div>
    );
}

export default Card;