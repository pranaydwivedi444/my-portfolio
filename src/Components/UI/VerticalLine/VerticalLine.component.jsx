import { Chrono } from "react-chrono";
const VerticalLine = () => {
  const experienceObj = [
    {
      title: "May 2020 - Present",
      cardTitle: "FAUJI TALKS",
      url: "https://www.youtube.com/@LtCdrBijayNair",

      cardSubtitle: "Producer , Video Editor",
      media: {
        name: "dunkirk beach",
        source: {
          url: "https://i.ytimg.com/vi/KoTZ-io-Grs/maxresdefault.jpg",
        },
        type: "IMAGE",
      },
      cardDetailedText: `as producer of  the popular 
      Fauji Talks podcast  with naval war veteran Lt Cdr Bijay Nair, 
      I contributed  in launching and building the podcast brand from scratch, resulting in over 50K subscribers and 
      high viewer engagement. I managed all aspects of production,
       from website design to video editing, and collaborated with 
       Lt Cdr Bijay Nair to produce high-quality podcast episodes 
       featuring high-profile guests, including diplomats, celebrities, and ex-special forces. 
       Through my expertise in podcast production ,cordination , networking, 
       we grew Fauji Talks into a recognized brand with a loyal following and a thriving community
        of over 50K subscribers.
      `,
    },
    {
      title: "April 2021 - May 2021",
      cardTitle: "Bharata First ",
      cardSubtitle: `Social Media Manager , Video Editor`,
      cardDetailedText: `As an intern at Bharata First, a digital platform launched by Rajya Sabha TV host Frank Rausan Pereira with the vision to 'Make Bharata Great Again,' I worked as a video editor and social media manager. I collaborated with Frank Rausan Pereira to produce high-quality videos for the platform and managed its social media accounts to increase brand awareness and engagement. My work at Bharata First allowed me to gain valuable experience in digital media production and marketing, and contributed to the platform's success in informing, educating, and empowering the youth.`,
    },
    {
      title: "MAY 2022",
      cardTitle: "Education",
      cardSubtitle: `B.TECH ,PSIT KANPUR`,
      cardDetailedText: ` I hold a degree in Bachelor of Technology in Electronics and Communication, from PSIT Kanpur, affiliated with APJ Abdul Kalam Technical University, which has provided me with a strong foundation in technical skills and problem-solving abilities.`,
    },
  ];
  const icons = [
    <div key="icons__timeline" className="chrono-icons">
      <img
        src="https://img.icons8.com/officel/40/000000/browse-podcasts.png"
        alt="podcast"
      />
      <img
        src="https://img.icons8.com/fluency/40/null/youtube-play.png"
        alt="youtube"
      />

      <img
        src="https://img.icons8.com/ios/50/null/student-center.png"
        alt="education"
      />
    </div>,
  ];
  return (
    <>
      <Chrono
        items={experienceObj}
        mode="VERTICAL_ALTERNATING"
        focusActiveItemOnLoad
        enableDarkToggle
        // fontSizes={{
        //   cardSubtitle: "0.85rem",
        //   cardText: "0.8rem",
        //   cardTitle: "1rem",
        //   title: "1rem",
        // }}
        theme={{
          //   primary: "red",
          secondary: "#F0F8FF",
          //   cardBgColor: "yellow",
          //   cardForeColor: "violet",
          //   titleColor: "black",
          //   titleColorActive: "red",
        }}
        activeItemIndex={0}
        allowDynamicUpdate
      >
        {icons}
      </Chrono>
    </>
  );
};

export default VerticalLine;
