import { useRouter } from "next/router";

function DetailPage() {
  const router = useRouter();
  return (
    <>
      <h1>The Detail Page</h1>
      <p>{router.query.newId}</p>
    </>
  );
}

export default DetailPage;
