import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Footer = () => {
  const popularSearches = [
    "Mansoor Silk",
    "Chinia Silk",
    "Soft Silk Sarees",
    "South Silk Sarees",
    "Sequince Sarees",
    "Sangeet Saree",
    "Tissue Sarees",
    "Brocade Sarees",
    "Floral saree",
  ];

  const rulesLinks = [
    "Privacy Policy",
    "Shipping & Delivery",
    "Return Policy",
    "Terms & Conditions",
    "Refund Policy",
  ];

  return (
    <footer className="bg-[#EDE5DA] text-black font-Poppins px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-10 justify-between w-full">
        <div className="flex flex-col gap-4 lg:w-1/2">
          <h3 className="text-lg font-medium">CUSTOMER SERVICE</h3>
          <nav className="flex flex-col gap-2 text-sm font-light">
            <Link to="/sizechart">SIZE CHART</Link>
            <Link to="/shipping">SHIPPING & DELIVERY</Link>
            <Link to="/trackorder">TRACK YOUR ORDER</Link>
            <Link to="/reviews">CUSTOMER REVIEWS</Link>
            <Link to="/return">RETURNS</Link>
            <Link to="/contactus">CONTACT US</Link>
            <Link to="/faq">FAQ&apos;s</Link>
          </nav>
        </div>

        <div className="flex flex-col gap-4 lg:w-1/2">
          <h3 className="text-lg font-medium">Sign up and save</h3>
          <p className="text-sm font-light">
            Subscribe to get special offers, free giveaways, and
            once-in-a-lifetime deals.
          </p>
          <div className="flex border-b border-black w-full max-w-sm">
            <input
              placeholder="Enter your email"
              id="email"
              className="flex-grow p-2 text-sm bg-transparent focus:outline-none"
            />

            <i
              className="ri-mail-line"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={() => {
                const email = document.getElementById("email").value;

                if (!email) {
                  toast.error("Please enter an email");
                } else {
                  const isValidEmail = (email) =>
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
                  if (!isValidEmail(email)) {
                    toast.error("Please enter a valid email");
                    document.getElementById("email").value = "";
                    return;
                  }
                  document.getElementById("email").value = "";
                  toast.success("Subscribed Successfully");
                }
              }}
            ></i>
          </div>

          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/tanahsarees?igsh=bGRmOW4wamVobXpo&utm_source=qr">
              <i className="ri-instagram-line text-[2rem]"></i>
            </a>
            <a href="https://www.facebook.com/share/1EELi25ZRw/">
              <i className="ri-facebook-circle-fill text-[2rem]"></i>
            </a>
            <a href="https://www.youtube.com/channel/UC9Z-9sqp4jPHl7hrY65EPkg">
              <i className="ri-youtube-fill text-[2rem]"></i>
            </a>
            <a href="https://www.pinterest.com/anup91700/">
              <i className="ri-pinterest-fill text-[2rem]"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-sm font-medium mb-2">Popular Searches:</h4>
        <div className="flex flex-wrap gap-2 text-sm">
          {popularSearches.map((item, index) => (
            <Link
              to="/products"
              key={index}
              className="underline underline-offset-2"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-sm font-medium mb-2">Our Rules and Regulations:</h4>
        <div className="flex flex-wrap gap-4 text-sm">
          {rulesLinks.map((item, index) => (
            <a
              key={index}
              href={`/${item.split(" ")[0]}`}
              className="underline underline-offset-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <div className="mt-10 text-center text-xs">
        <p>© Tanah Sarees 2024. All Rights Reserved.</p>
        <p className="mt-1">Powered By Codemap.</p>
      </div>
    </footer>
  );
};

export default Footer;
