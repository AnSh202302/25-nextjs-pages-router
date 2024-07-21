import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://www.infobuildenergia.it/wp-content/uploads/2023/07/legge-ripristino-natura-1.jpg",
    address: "Some Address 5, 12345, Some City ",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://media-assets.vanityfair.it/photos/614d7df013ac682df5bc56c9/4:3/w_1144,h_858,c_limit/GettyImages-11405750042.jpg",
    address: "Some Address 5, 12345, Some City ",
    description: "This is a second meetup",
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}
export default HomePage;
