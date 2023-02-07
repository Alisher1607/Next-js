import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Burger.module.css";

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:5000/items");

  const data = await response.json();

  return {
    props: {
      burgers: data,
    },
  };
};

const Burgers = ({ burgers }) => (
  <>
    <Head>
      <title>Жирные бургеры | Бургеры</title>
      <meta name="title" content="Жирные бургеры" />
    </Head>
    <div>
      <h1>Наши Бургеры</h1>

      {burgers.map((burger) => (
        <Link
          href={`burgers/${burger.id}`}
          key={burger.id}
          className={styles.burgerCard}
        >
          <div className={styles.imageContainer}>
            <Image
              src={burger.image}
              alt={burger.name}
              width={150}
              height={150}
            />
          </div>

          <div>
            <h3>{burger.name}</h3>

            <p>{burger.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  </>
);

export default Burgers;
