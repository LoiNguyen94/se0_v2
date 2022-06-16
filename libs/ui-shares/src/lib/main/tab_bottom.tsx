import { useState, useEffect } from 'react';
import styles from './layout.module.scss';
import { SvgList, Buttons } from '@monorepo/ui-shares';
import { setTabPosition, useAppSelector } from '@monorepo/function-shares';
import { useDispatch } from 'react-redux';
import { Storage } from '@capacitor/storage';
import { useRouter } from 'next/router';

export interface TabBottomProps {
  title?: string;
  description?: string;
  photo?: string;
  width?: number;
}

export function TabBottom({ width }: TabBottomProps) {
  const [focusTab, setFocusTab] = useState(1);
  const [auth, setAuth] = useState(false);
  const dispatch = useDispatch();
  const token = useAppSelector(state => state.auth.token)
  const router = useRouter();

  useEffect(() => {
    if(token) {
      setAuth(true)
    }else {
      setAuth(false)
    }
  }, [token]);

  const Items = [
    {
      id: 1,
      title: 'Mio',
      icon: <SvgList.SvgTabMioIcon keyFocus={focusTab} colorFocus="#F0224F" />,
    },
    {
      id: 2,
      title: 'Partners',
      icon: (
        <SvgList.SvgTabPartnerIcon keyFocus={focusTab} colorFocus="#F0224F" />
      ),
    },
    {
      id: 3,
      title: 'Đơn hàng',
      icon: (
        <SvgList.SvgTabOrderIcon keyFocus={focusTab} colorFocus="#F0224F" />
      ),
    },
    {
      id: 4,
      title: 'Trợ lý',
      icon: (
        <SvgList.SvgTabAssistantIcon keyFocus={focusTab} colorFocus="#F0224F" />
      ),
    },
    {
      id: 5,
      title: 'Tài khoản',
      icon: (
        <SvgList.SvgTabProfileIcon keyFocus={focusTab} colorFocus="#F0224F" />
      ),
    },
  ];

  const setTab = (id: number) => {
    setFocusTab(id);
    dispatch(setTabPosition(id));
  };

  const goToLogin = () => {
    router.push('./login');
  };

  return (
    <div
      style={{ position: 'absolute', bottom: 0, width: width }}
      className={`${styles['container_tab']} ${styles['p_12_20_0_20']}`}
    >
      {!auth ? (
        <Buttons
          title="Đăng nhập ngay"
          handleClick={goToLogin}
          bgColor={'#EC4261'}
          titleColor={'#FFFFFF'}
        />
      ) : (
        Items.map((item) => (
          <div
            onClick={() => setTab(item.id)}
            key={item.id}
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              cursor: 'pointer',
              width: 60,
            }}
          >
            {item.icon}
            <div
              style={
                item.id === focusTab
                  ? { fontSize: 12, color: '#F0224F', fontWeight: 700 }
                  : { fontSize: 12, color: '#9CA5B4', fontWeight: 400 }
              }
            >
              {item.title}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TabBottom;
