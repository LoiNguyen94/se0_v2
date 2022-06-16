import {
  TransitionLayout,
  Header,
  FillNewAddressScreen,
} from '@monorepo/ui-shares';
import dynamic from 'next/dynamic';

export interface FillAddressProps {
  id?: number;
}

function FillAddressScreen(props: FillAddressProps) {
  return (
    <div>
      <TransitionLayout
        title="Danh sách địa chỉ"
        description="Địa chỉ giao hàng"
        photo=""
      >
        <Header title={'Danh sách địa chỉ'} />
        <FillNewAddressScreen />
      </TransitionLayout>
    </div>
  );
}

// export default FillAddressScreen
export default dynamic(() => Promise.resolve(FillAddressScreen), {
  ssr: false,
});
