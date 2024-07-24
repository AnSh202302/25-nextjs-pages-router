import MeeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetailPage(props) {
  return (
    <MeeetupDetail
      image="https://www.infobuildenergia.it/wp-content/uploads/2023/07/legge-ripristino-natura-1.jpg"
      title="A First Meetup"
      address="Some Address 5, Some City"
      description="The Meetup Description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  // fetch data for a single meetup
  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://www.infobuildenergia.it/wp-content/uploads/2023/07/legge-ripristino-natura-1.jpg",
        title: "A First Meetup",
        address: "Some Address 5, Some City",
        description: "The Meetup Description",
      },
    },
  };
}

export default MeetupDetailPage;
