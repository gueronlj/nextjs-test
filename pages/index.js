import Head from 'next/head'
import styles from '../styles/Home.module.css';
import SSR from '../components/ssr';
import axios from 'axios';

// export async function getServerSideProps(){ 
//   const URL = `https://hangrypanda-backend.herokuapp.com/checklist`

//   try {
//       const res = await axios.get(`${URL}`);
//       console.log(res);
//       const data = res.data;
//       console.log(data);
//       return { props: { data } }
//   } catch (error) {
//       console.error(error);
//   }
// }

export default function Home( {data} ) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <SSR data={data}/>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>
    </div>
  )
}