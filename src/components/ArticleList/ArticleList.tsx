/* eslint-disable react/no-array-index-key */
import React, { FC, ReactElement } from 'react';

import ArticleItem from '../ArticleItem';
import { IArticleItem } from '../ArticleItem/ArticleItem';

type Props = {
    items: IArticleItem[];
};

const ArticleList: FC<Props> = ({ items }: Props): ReactElement => {
    const newsList = items.map(
        (item: IArticleItem, index: number): ReactElement => <ArticleItem item={item} key={`item-${index}`} />
    );
    return <div className="row no-gutters">{newsList}</div>;
};

export default ArticleList;
