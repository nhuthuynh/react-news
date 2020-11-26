import React, { FC, ReactElement } from 'react';

import styles from './ArticleList.module.scss';
import ArticleItem from '../ArticleItem';
import { IArticleItem } from '../ArticleItem/ArticleItem';

type Props = {
    items: IArticleItem[];
};

const ArticleList: FC<Props> = ({ items }: Props): ReactElement => {
    const newsList = items.map((item: IArticleItem): ReactElement => <ArticleItem item={item} />);
    return <div className={styles.container}>{newsList}</div>;
};

export default ArticleList;
