import "./css/Order.css";
import LoginBackground from "../components/LoginBackground";
import NavigationHeader from "../components/NavigationHeader";

const Order = () => {
  return (
    <div className="order-container">
      {/* Background Image */}
      <LoginBackground />
      {/* Navigation Header */}
      <NavigationHeader />
      <div className="content">
        <div className="content-title">
          <div>
            <h1 className="order-title">
              ORDER LIGHT INVOICE <p className="sub-text-title">and</p>
            </h1>
          </div>
        </div>
        <div>
          <h1 className="order-title-2">experience easier invoicing</h1>
        </div>

        <div className="order-content-root">
          <div className="card">
            <div className="card-content">
              <h1 className="card-title">Order</h1>
              <div className="card-body">
                <input type="text" placeholder="Company name" />
                <input type="text" placeholder="Contact person" />
                <input type="text" placeholder="Address" />
                <input type="text" placeholder="Post number" />
                <input type="text" placeholder="City" />
                <input type="text" placeholder="Email address" />
                <input type="text" placeholder="Mobile" />

                <p>Order of:</p>
                <input
                  type="checkbox"
                  id="customCheckbox"
                  className="custom-checkbox"
                />
                <label htmlFor="customCheckbox">
                  EasyInvoice - per month (word. price 129:-)
                </label>

                <p>
                  The special price SEK 99 applies to new customers/contacts.
                  Price is excl. VAT.
                </p>
              </div>

              <div className="footer-message">
                <p>
                  Click Order Now to order and approve the conditions, and your
                  first invoice is normally ready to ship within 5-10 minutes
                </p>
              </div>
              <button type="button" className="order-button">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
