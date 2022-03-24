import styles from '../styles/Home.module.css'
import {useMutation, gql} from '@apollo/client';

export default function Home() {

  const CREATE_PRODUCT = gql`
    mutation{createProduct(title:"test product", price:20, description:"blabl"){id,title,description,price}}
  `

  const [createProduct] = useMutation(CREATE_PRODUCT);

  const testMutation = (e) => {
    e.preventDefault();
    createProduct().then(data => console.log(data)).catch(err => console.log(err));
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <button onClick={(e) => testMutation(e)}>
          Create product
        </button>       
      </main>
    </div>
  )
}
