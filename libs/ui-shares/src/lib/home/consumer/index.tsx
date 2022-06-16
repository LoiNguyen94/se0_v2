import { ICategory } from '@monorepo/model';
import { TabMio, TabPartner, TransitionLayout } from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';
import { useSelector } from 'react-redux';

interface HomeConsumerProps {
  data?: any;
  position?: number;
  list_category: ICategory[];
}

export function HomeConsumer({
  position = 1,
  data,
  list_category,
}: HomeConsumerProps) {
  const Tabs = [
    {
      id: 1,
      page: () => <TabMio data={data} list_category={list_category} />,
    },
    {
      id: 2,
      page: () => <TabPartner />,
    },
  ];

  return (
    <>
      {Tabs.map((item) => position === item.id && <item.page key={item.id} />)}
    </>
  );
}

export default dynamic(() => Promise.resolve(HomeConsumer), { ssr: false });
