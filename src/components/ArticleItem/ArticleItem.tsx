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
        <div className={`${styles.container} col-12 col-sm-6 col-md-3`}>
            <div className={`${styles.wrapper} px-2 py-2`}>
                <div className={styles.top}>
                    <p className="article-item-date">{date}</p>
                    <h3 className="article-item-title">{title}</h3>
                    <p className="article-item-desc">{description}</p>
                </div>
                <div className={styles.bottom}>
                    <a className={`btn btn-outline-white ${styles.btn_readmore}`} href={url}>
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;
