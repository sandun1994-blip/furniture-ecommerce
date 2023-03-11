
import { useState } from 'react';
import Layout from '../../components/Layout'
import Pagination from '../../components/Pagination'
import ProductItem from '../../components/ProductItem'
import { data } from '../../utils/data'





export default function Home() {


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const totalPosts =[...data?.products,...data?.products,...data?.products,...data?.products]?.length

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = [...data?.products,...data?.products,...data?.products,...data?.products].slice(firstPostIndex, lastPostIndex);

  return (
    <Layout title={'Furniture Home'}>
      
      <div className='grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4'>

        {currentPosts.map((product,index)=>(<ProductItem key={index} product={product}/>))}

       
      </div>
      <div className='m-10'> <Pagination totalPosts={totalPosts} 
                                        postsPerPage={postsPerPage}
                                       setCurrentPage={setCurrentPage}
                                        currentPage={currentPage}  /></div>
    </Layout>
  )
}