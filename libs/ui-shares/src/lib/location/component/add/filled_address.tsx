import styles from './../../add/add.module.scss';
import { PageMap, ErrorOneLine } from '@monorepo/ui-shares';
import { ChooseItemAddessState } from '@monorepo/function-shares';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

export interface FilledAddressProps {
  id?: number;
  data?: ChooseItemAddessState;
}

export function FilledAddress(props: FilledAddressProps) {
  const { data } = props;
  const router = useRouter();
  // const address = useSelector((state: any) => state['ItemAddress']);
  if (!data) return <></>;
  return data['city'] && data['ward'] && data['dist'] && data['other'] ? (
    <>
      <div className={`${styles['title_item']}`}>
        <div
          onClick={() => router.push('/location/add/fill')}
          style={{ marginBottom: 8, color: '#0F172A' }}
        >
          {data['other'] +
            ', ' +
            data['ward']?.name +
            ', ' +
            data['dist']?.name +
            ', ' +
            data['city']?.name}
        </div>
        <PageMap
          defaultMarker={{
            latitude: data['lat'],
            longitude: data['lng'],
          }}
          height="120px"
        />
      </div>
      <ErrorOneLine
        content={data['confirmLocation'] ? '' : 'Địa chỉ chưa được xác nhận'}
      />
    </>
  ) : (
    <div
      onClick={() => router.push('/location/add/fill')}
      className={`${styles['title_item']}`}
    >
      Nhập địa chỉ của bạn
    </div>
  );
}
export default FilledAddress;
