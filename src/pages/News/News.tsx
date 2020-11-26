import React, { FC, ReactElement } from 'react';
import RelatedArticles from '../../containers/RelatedArticles';

import styles from './News.module.scss';

const News: FC = (): ReactElement => {
    return (
        <div className={styles.page}>
            <h1>News</h1>
            <RelatedArticles />
        </div>
    );
};

export default News;
