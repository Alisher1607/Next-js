import Head from "next/head";

const Reviews = ({ reviews }) => (
  <>
    <Head>
      <title>Жирные бургеры | Отзывы</title>
      <meta name="title" content="Жирные бургеры" />
    </Head>
    <div>
      <h1>Oтзывы клиентов</h1>

      <div className="reviews">
        {!!reviews.length &&
          reviews.map((res) => (
            <div key={res.id} className="review">
              {res.id} {`${res.body.slice(0, 90)}...`}
            </div>
          ))}
      </div>
    </div>
  </>
);

export async function getServerSideProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");

  const data = await response.json();

  return {
    props: {
      reviews: data.slice(0, 20),
    },
  };
}

export default Reviews;
