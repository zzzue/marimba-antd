import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';
import classNames from 'classnames';
import styles from './Footer.less';

const { Footer } = Layout;

const FooterView = ({ theme }) => {
  const footerClassName = classNames({
    [styles.dark]: theme === 'dark',
  });
  return (
    <Footer className={footerClassName} style={{ padding: 0 }}>
      <GlobalFooter
        theme={theme}
        links={[
          {
            key: 'Pro 首页',
            title: 'Pro 首页',
            href: 'https://pro.ant.design',
            blankTarget: true,
          },
          {
            key: 'github',
            title: <Icon type="github" />,
            href: 'https://github.com/ant-design/ant-design-pro',
            blankTarget: true,
          },
          {
            key: 'Ant Design',
            title: 'Ant Design',
            href: 'https://ant.design',
            blankTarget: true,
          },
        ]}
        copyright={
          <Fragment>
            Copyright <Icon type="copyright" /> 2019 蚂蚁金服体验技术部出品
          </Fragment>
        }
      />
    </Footer>
  );
};
export default FooterView;
