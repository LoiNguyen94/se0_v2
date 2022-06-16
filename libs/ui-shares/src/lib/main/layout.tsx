import styles from './layout.module.scss';

/* eslint-disable-next-line */
import React, { ReactNode } from 'react';
import TabBottom from './tab_bottom';
import { useWindowSize } from '@monorepo/function-shares';

export interface LayoutProps {
  children?: ReactNode;
  title?: string;
  description?: string;
  photo?: string;
  showTab?: boolean;
}

export function MainLayout({
  children,
  title = 'Mio',
  description,
  photo,
  showTab = false,
}: LayoutProps) {
  const { height, widthFixed } = useWindowSize();

  return (
    <>
      <div style={{ height: height }} className={styles['container']}>
        <div style={{ width: widthFixed }} className={styles['frame']}>
          {children}
        </div>
        {showTab && <TabBottom width={widthFixed} />}
      </div>
    </>
  );
}

export default MainLayout;
