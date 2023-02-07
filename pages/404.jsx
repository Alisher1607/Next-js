import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

const NotFoundPage = () => {
  const { push } = useRouter();

  useEffect(() => {
    setTimeout(() => {
      push("about");
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Жирные бургеры | Not Found</title>
        <meta name="title" content="Жирные бургеры" />
      </Head>
      <div className="not-found">
        <h1>Ой...</h1>
        <h2>Такой страницы здесь нет!</h2>
        <p>
          Перехожу на <Link href="about">главную страницу</Link> через 3
          секунды...
        </p>
      </div>
    </>
  );
};

export default NotFoundPage;
