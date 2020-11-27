import React, { FC, ReactElement } from 'react';
import RelatedArticles from '../../containers/RelatedArticles';

import styles from './News.module.scss';

const News: FC = (): ReactElement => {
    return (
        <div className={styles.page}>
            <RelatedArticles />
        </div>
    );
};

export default News;
