
import Header from '../components/Header'
import Dashboard from '../components/Dashboard'
// import Footer from '../components/Footer'


export default function Home() {
  return (
    <div>
    
  </div>
  )
}



export async function getServerSideProps(context) {

    return {
      redirect: {
        destination: "/auth/login",
        permanent: true,
      },
    
  }

  

  return {
    props: {
      
    },
  };
}
