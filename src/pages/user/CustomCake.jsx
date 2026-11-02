import { useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  customCakeDefaults,
  customCakeOptions,
  customCakePriceByLayers,
  customCakePriceBySize,
  customCakeThemeCharge,
} from "../../data/customCake";
import { AuthContext } from "../../contextapi/AuthContext";
import "./CustomCake.css";

const CustomCake = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [details, setDetails] = useState(customCakeDefaults);
  const [referenceImage, setReferenceImage] = useState("");

  const estimate = useMemo(() => {
    const themeCharge = details.theme.trim() ? customCakeThemeCharge : 0;
    return (
      customCakePriceBySize[details.size] +
      customCakePriceByLayers[details.layers] +
      themeCharge
    );
  }, [details.layers, details.size, details.theme]);

  const updateDetail = (event) => {
    const { name, value } = event.target;
    setDetails((current) => ({ ...current, [name]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    setReferenceImage(file ? file.name : "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!user) {
      toast.info("Please login before sending a cake request.");
      navigate("/login");
      return;
    }

    const existingOrders = JSON.parse(localStorage.getItem("orderItems")) || [];
    const customCakeOrder = {
      orderId: Date.now(),
      userName: details.name,
      userEmail: user.email,
      userAddress: details.address,
      userMobile: details.phone,
      orderDate: new Date().toISOString(),
      orderStatus: "Requested",
      customCake: {
        ...details,
        referenceImage,
      },
      items: [
        {
          img: "/images/Bakery Logo.png",
          desc: `Custom cake for ${details.occasion} with ${details.flavor} flavor, ${details.size}, ${details.layers}, ${details.shape}, and ${details.frosting} frosting.`,
          title: `${details.flavor} Custom Cake`,
          price: estimate,
          quantity: 1,
        },
      ],
    };

    localStorage.setItem(
      "orderItems",
      JSON.stringify([customCakeOrder, ...existingOrders]),
    );
    toast.success("Your cake request has been added to your orders.");
    setDetails(customCakeDefaults);
    setReferenceImage("");
    event.target.reset();
    navigate("/orders");
  };

  return (
    <main className="custom-cake-page">
      <section className="container custom-cake-content">
        <div className="custom-cake-intro">
          <p className="custom-cake-eyebrow">YOUR CAKE, YOUR WAY</p>
          <h2>Bring your sweetest idea to life.</h2>
          <p>
            Share your preferences below. Our bakers will review your request
            and call you to confirm the final design, availability, and delivery
            details.
          </p>
        </div>

        <div className="custom-cake-layout">
          <form className="custom-cake-form" onSubmit={handleSubmit}>
            <div className="custom-cake-form-section">
              <h3>1. Choose your cake</h3>
              <div className="custom-cake-fields">
                <label>
                  Occasion
                  <select
                    name="occasion"
                    value={details.occasion}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.occasions.map((occasion) => (
                      <option key={occasion}>{occasion}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Flavour
                  <select
                    name="flavor"
                    value={details.flavor}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.flavors.map((flavor) => (
                      <option key={flavor}>{flavor}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Size
                  <select
                    name="size"
                    value={details.size}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.sizes.map((size) => (
                      <option key={size}>{size}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Layers
                  <select
                    name="layers"
                    value={details.layers}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.layers.map((layers) => (
                      <option key={layers}>{layers}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Shape
                  <select
                    name="shape"
                    value={details.shape}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.shapes.map((shape) => (
                      <option key={shape}>{shape}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Frosting
                  <select
                    name="frosting"
                    value={details.frosting}
                    onChange={updateDetail}
                  >
                    {customCakeOptions.frostings.map((frosting) => (
                      <option key={frosting}>{frosting}</option>
                    ))}
                  </select>
                </label>
                <label>
                  Theme or colours
                  <input
                    name="theme"
                    value={details.theme}
                    onChange={updateDetail}
                    placeholder="e.g. pastel flowers"
                  />
                </label>
              </div>
            </div>

            <div className="custom-cake-form-section">
              <h3>2. Add the finishing touches</h3>
              <label>
                Message on the cake
                <input
                  name="message"
                  value={details.message}
                  onChange={updateDetail}
                  maxLength="45"
                  placeholder="e.g. Happy Birthday, Aanya!"
                />
              </label>
              <label className="custom-cake-upload">
                Reference image <span>(optional)</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <span className="custom-cake-file-name">
                  <i className="bi bi-cloud-arrow-up"></i>
                  {referenceImage || "Upload an inspiration image"}
                </span>
              </label>
            </div>

            <div className="custom-cake-form-section">
              <h3>3. Tell us where to reach you</h3>
              <div className="custom-cake-fields">
                <label>
                  Your name
                  <input
                    name="name"
                    value={details.name}
                    onChange={updateDetail}
                    required
                  />
                </label>
                <label>
                  Phone number
                  <input
                    name="phone"
                    type="tel"
                    value={details.phone}
                    onChange={updateDetail}
                    pattern="[0-9+() -]{7,}"
                    required
                  />
                </label>
                <label>
                  Delivery address
                  <textarea
                    name="address"
                    value={details.address}
                    onChange={updateDetail}
                    rows="3"
                    placeholder="Enter your complete delivery address"
                    required
                  />
                </label>
                <label>
                  Preferred date
                  <input
                    name="date"
                    type="date"
                    value={details.date}
                    onChange={updateDetail}
                    required
                  />
                </label>
              </div>
            </div>

            <button type="submit" className="custom-cake-submit">
              Send cake request <i className="bi bi-arrow-right"></i>
            </button>
          </form>

          <aside className="custom-cake-summary">
            <div className="custom-cake-summary-icon">
              <i className="bi bi-cake2"></i>
            </div>
            <p className="custom-cake-eyebrow">YOUR CREATION</p>
            <h2>{details.occasion} cake</h2>
            <div className="custom-cake-summary-details">
              <span>
                <strong>Flavour</strong>
                {details.flavor}
              </span>
              <span>
                <strong>Size</strong>
                {details.size}
              </span>
              <span>
                <strong>Layers</strong>
                {details.layers}
              </span>
              <span>
                <strong>Shape</strong>
                {details.shape}
              </span>
              <span>
                <strong>Frosting</strong>
                {details.frosting}
              </span>
              {details.theme && (
                <span>
                  <strong>Theme</strong>
                  {details.theme}
                </span>
              )}
            </div>
            <div className="custom-cake-estimate">
              <span>Estimated starting price</span>
              <strong>₹{estimate.toLocaleString("en-IN")}</strong>
            </div>
            <p className="custom-cake-note">
              Final pricing may change based on design complexity. We will
              confirm everything with you before baking.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default CustomCake;
