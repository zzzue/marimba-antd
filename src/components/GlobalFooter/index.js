import React from 'react';
import classNames from 'classnames';
import styles from './index.less';

const GlobalFooter = ({ theme, className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className, {
    [styles.dark]: theme === 'dark',
  });
  return (
    <footer className={clsString}>
      {links && (
        <div className={styles.links}>
          {links.map(link => (
            <a
              key={link.key}
              title={link.key}
              target={link.blankTarget ? '_blank' : '_self'}
              href={link.href}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
      {copyright && <div className={styles.copyright}>{copyright}</div>}
    </footer>
  );
};

export default GlobalFooter;
