import { ICategory } from '@monorepo/model';
import { TransitionLayout, Header } from '@monorepo/ui-shares';
import Banner from './banner';
import Category from './category';
import FlashSale from './flashsale';

export interface TabMioProps {
  id?: string;
  data?: any;
  list_category: ICategory[]
}

export function TabMio({ data,list_category }: TabMioProps) {
  return (
    <>
      <Header title="" type="TabMio" />
      <div
        style={{
          // backgroundColor: '#E5E5E5',
          paddingTop: 21,
          paddingBottom: 120,
        }}
      >
        <Banner />
        <Category data={list_category} />
        <FlashSale data={data} />
      </div>
    </>
  );
}

export default TabMio;
