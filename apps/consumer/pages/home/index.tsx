import {
  TabMio,
  TabPartner,
  TransitionLayout,
  HomeConsumer,
} from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';
import {
  getListFlashSaleApi,
  getListProduct,
  getProfileApi,
  getRegionApi,
  handleResponse,
  listCategoryApi,
} from '@monorepo/function-shares';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { ICategory, IProduct } from '@monorepo/model';

interface HomeIndex {
  items?: IProduct[];
  list_category?: ICategory[]
}
function HomeIndex(props: HomeIndex) {
  const { items, list_category } = props;
  const positionTab = useSelector((state) => state['TabPositionSlice']);
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await getProfileApi();
        handleResponse({ res, success: (res) => {}, error: (res) => {} });
      } catch (error) {}
    };
    getProfile();
  }, []);
  // const itemss = [
  //   {
  //     id: 1,
  //     page: <TabMio data={items} />,
  //   },
  //   {
  //     id: 2,
  //     page: <TabPartner />,
  //   },
  // ];

  return (
    <TransitionLayout
      title="Tất cả sản phẩm"
      description="Mua mọi thứ"
      photo=""
      showTab={true}
    >
      <HomeConsumer data={items} position={positionTab} list_category={list_category}/>
    </TransitionLayout>
  );
}

export async function getStaticProps(context) {
  // Fetch data from external API
  const data = await getListProduct();
  const flash_sale_data = await getListFlashSaleApi()
  const size = 4;
  const items = data.slice(0, size);
  const list_category =  await listCategoryApi()
  // // Pass data to the page via props
  return { props: { items: items, flash_sale_data:flash_sale_data, list_category } };
}

// export default HomeIndex;
export default dynamic(() => Promise.resolve(HomeIndex), { ssr: false });
