import Image from "next/image";
import styles from "../../styles/Burger.module.css";

export const getStaticPaths = async () => {
  const response = await fetch("http://localhost:5000/items");

  const data = await response.json();

  const paths = data.map((burger) => {
    return {
      params: { id: burger.id },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  const response = await fetch(`http://localhost:5000/items/${id}`);

  const data = await response.json();

  return {
    props: {
      burger: data,
    },
  };
};

const Details = ({ burger }) => (
  <div className={styles.singleBurger}>
    <h1>{burger.name}</h1>

    <div className={styles.imageContainer}>
      <Image src={burger.image} alt={burger.name} width={150} height={150} />
    </div>

    <div>
      <p>{burger.desc}</p>
    </div>
  </div>
);

export default Details;