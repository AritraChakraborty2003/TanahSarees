/* eslint-disable react/prop-types */
import Faq from "react-faq-component";

const Faqcomponent = (props) => {
  const data = {
    rows: [
      {
        title: "What is the package version",
        content: <p>current version is 1.2.1</p>,
      },
      {
        title: "Introduction to JavaScript",
        content:
          "JavaScript is a versatile programming language used for web development.",
      },
      {
        title: "React.js Basics",
        content:
          "React is a popular JavaScript library for building user interfaces.",
      },
      {
        title: "Node.js Overview",
        content:
          "Node.js allows JavaScript to run on the server-side, enabling backend development.",
      },
      {
        title: "MongoDB Fundamentals",
        content:
          "MongoDB is a NoSQL database that stores data in JSON-like documents.",
      },
      {
        title: "TypeScript Advantages",
        content:
          "TypeScript adds static typing to JavaScript, improving code quality and maintainability.",
      },
      {
        title: "Understanding Redux",
        content:
          "Redux is a state management library often used with React applications.",
      },
      {
        title: "AWS for Beginners",
        content:
          "Amazon Web Services (AWS) provides scalable cloud computing solutions.",
      },
      {
        title: "Version Control with Git",
        content:
          "Git is a distributed version control system for tracking changes in code.",
      },
    ],
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "grey",
    rowTitleColor: "#262424",
    rowContentColor: "grey",
    titleTextSize: "3.5vmin",
    titleTextAlign: "center",
    rowTitleTextSize: "18px",
    rowContentTextSize: "15px",
  };

  const stylesLarge = {
    titleTextColor: "grey",
    rowTitleColor: "#c97366",
    rowContentColor: "grey",
    titleTextSize: "3.5vmin",
    titleTextAlign: "center",
    rowTitleTextSize: "25px",
    rowContentTextSize: "24px",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true,
  };

  return (
    <>
      <div
        className="flex justify-center flex-col items-center p-[10vmin]"
        style={{
          marginTop: `${screen.width > 1000 ? "20%" : ""}`, // Adjust based on header height
          zIndex: 10, // Keep content below the header
        }}
      >
        {(screen.width < 2048 && (
          <>
            {!props?.type && (
              <>
                <p className="text-center font-Montserrat darktxt font-extralight  text-xs lg:text-sm">
                  Home / Frequently Asked Questions - India
                </p>
                <p className="text-center font-Montserrat darktxt font-medium text-2xl overflow-hidden lg:text-4xl mt-2 lg:mt-5 ">
                  Frequently Asked Questions
                </p>
              </>
            )}
            <div className="w-[90vw] lg:w-[65vw] 2xl:w-[55vw] mt-15  ">
              <Faq data={data} styles={styles} config={config} />
            </div>
          </>
        )) || (
          <>
            {!props?.type && (
              <>
                <p className="text-center font-Montserrat darktxt font-extralight  text-xl">
                  Home / Frequently Asked Questions - India
                </p>
                <p className="text-center font-Montserrat darktxt overflow-hidden  font-medium text-2xl lg:text-4xl mt-2 lg:mt-5 ">
                  Frequently Asked Questions
                </p>
              </>
            )}
            <div className="w-[90vw] lg:w-[65vw] 2xl:w-[55vw] mt-20  ">
              <Faq data={data} styles={stylesLarge} config={config} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Faqcomponent;
