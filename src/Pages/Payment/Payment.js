import "./Payment.scss";
import { BiStore } from "react-icons/bi";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../store/CartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// ToastContainer configuration for notifications
<ToastContainer
  position="top-right"
  autoClose={3000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>;
function Payment() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const pay = document.querySelector(".pay");
    pay.innerText = "Paying...";
    pay.classList.add("active");
    setTimeout(() => {
      pay.innerText = "Pay";
      pay.classList.remove("active");
      dispatch(resetCart());
      toast.success("Your order has been placed successfully.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }, 1100);
    setTimeout(() => {
      navigate("/");
    }, 6000);
  };

  return (
    <div className="payment">
      <ToastContainer />
      <div className="amountDetail">
        <span className="top">
          <span className="arrow">
            <AiOutlineArrowLeft onClick={() => navigate("/")} />
          </span>
          <span className="store-icon">
            <BiStore />
          </span>
          <span className="mode">TEST MODE</span>
        </span>
      </div>
      <div className="personDetails">
        <form onSubmit={handleSubmit} className="form">
          <h4>Shipping information</h4>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" required placeholder="Email" />
          </div>
          <div className="item">
            <label htmlFor="address">Shipping address</label>
            <input type="text" id="address" required placeholder="Address" />
            <input type="text" required placeholder="Name" />
          </div>
          <h4>Payment Details</h4>
          <div className="item">
            <label htmlFor="card">Card information</label>
            <input
              type="number"
              id="card"
              required
              placeholder="1234 1234 1234 1234"
              className="card-input"
            />
            <img src="/payment.png" alt="" />
            <span className="flex-input">
              <input type="text" placeholder="MM/YY" required />
              <input type="number" placeholder="CVC" required />
            </span>
          </div>
          <div className="item">
            <button type="submit" className="pay">
              Pay
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
