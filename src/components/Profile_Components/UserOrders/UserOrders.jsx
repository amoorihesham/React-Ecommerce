const UserOrderCard = ({ order }) => {
  return (
    <div className="col-md-6">
      <div className="box bg-body-tertiary p-3 d-flex align-items-center justify-content-between">
        <div className="info">
          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">Created At: </span>
            {order.createdAt.slice(0, 10)}
          </div>
          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">Deliverd: </span>
            {order.isDelivered ? "Yes" : "No"}
          </div>

          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">payment Method: </span>
            {order.paymentMethodType}
          </div>
          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">Total Price: </span>
            {order.totalOrderPrice}
          </div>
          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">Phone Number: </span>
            {order.shippingAddress.phone}
          </div>
          <div className="text-main fs-6 mb-2">
            <span className="fw-bold text-black">Order Number: </span>
            {order.id}
          </div>
        </div>

        <img
          src={order.cartItems[0].product?.imageCover}
          alt={order.cartItems[0].product.title}
          className="w-128p"
        />
      </div>
    </div>
  );
};

export default UserOrderCard;
