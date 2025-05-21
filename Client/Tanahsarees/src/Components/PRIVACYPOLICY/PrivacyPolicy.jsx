// import { AppContext } from "../../AppContext/AppContext";
// import { useContext } from "react";
const PrivacyPolicy = () => {
  // const { change } = useContext(AppContext);
  return (
    <>
      <div
        className="w-[100vw] mt-5 flex flex-col items-center "
        // style={{
        //   marginTop: `${
        //     !change
        //       ? screen.width > 1000
        //         ? "20%"
        //         : ""
        //       : screen.width > 1000
        //       ? "12%"
        //       : ""
        //   }`, // Adjust based on header height
        //   zIndex: 10, // Keep content below the header
        // }}
      >
        <div className="w-[90vw] pb-10 text-sm mt-10 lg:mt-0">
          <p>
            <span className="font-bold text-4xl">Privacy Policy</span>
            <span className="font-bold text-xl">
              <br />
              Introduction
            </span>
            <br />
            <br />
            This Privacy Policy explains how Silk of Banaras and its affiliates
            (collectively Silk of Banaras, we, our, us) collect, use, share, and
            protect your personal data on our website tanahsarees.com
            (Platform). You may browse parts of the Platform without
            registering. Our services are limited to India, and your data will
            be stored and processed in India. By using this Platform or sharing
            your information, you agree to our Privacy Policy, Terms of Use, and
            applicable service terms. If you disagree, please avoid using our
            Platform.
            <br />
            <br />
            <span className="font-bold text-xl">Collection of Data</span>
            <br />
            We collect personal data when you use our services or interact with
            us. This includes your name, contact details, date of birth, and
            payment information. Sensitive data like payment details or
            biometric data is collected with your consent. You may choose not to
            share certain data, but that may limit your access to features. We
            also collect behavioral and transactional data to improve your
            experience and for analytics. Some data may be collected by
            third-party partners, governed by their own privacy policies.
            <br />
            <br />
            <span className="font-bold text-xl">Usage & Sharing</span>
            <br />
            We use your data to provide services, process orders, improve
            experiences, resolve issues, send updates and offers, prevent fraud,
            and comply with laws. Your data may be shared with our affiliates,
            partners, logistics providers, and payment processors to fulfill
            services. We may disclose data to government or legal authorities
            when required by law. We strongly advise against sharing personal
            banking details with unverified sources. Report any suspicious
            activity immediately.
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
