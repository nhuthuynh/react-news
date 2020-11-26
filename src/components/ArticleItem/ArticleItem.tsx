import React, { FC, ReactElement } from 'react';

import styles from './ArticleItem.module.scss';

export interface IArticleItem {
    date: string;
    title: string;
    description: string;
    url: string;
}

type Props = {
    item: IArticleItem;
};

const ArticleItem: FC<Props> = ({ item: { date, title, description, url } }: Props): ReactElement => {
    return (
        <div className={styles.container}>
            <p className="article-item-date">{date}</p>
            <h3 className="article-item-title">{title}</h3>
            <p className="article-item-desc">{description}</p>
            <a className="btn btn-outline-info" href={url}>
                Read more
            </a>
        </div>
    );
};

export default ArticleItem;
