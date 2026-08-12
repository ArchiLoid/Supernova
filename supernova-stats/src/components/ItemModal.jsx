
   function ItemModal({ item, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="item-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>

        <div className="item-modal-header">
          <img
            className="item-modal-image"
            src={`https://cdn.cloudflare.steamstatic.com${item.img}`}
            alt={`Image of ${item.dname}`}
          />

          <div className="item-modal-title">
            <h2>{item.dname}</h2>

            <span className="item-modal-cost">
              {item.cost?.toLocaleString()} gold
            </span>
          </div>
        </div>

        <div className="item-modal-content">
          <h3>Description</h3>
          <p>{item.lore ? item.lore : "No info about this item"}</p>
        </div>
      </div>
    </div>
  )
}

    export default ItemModal