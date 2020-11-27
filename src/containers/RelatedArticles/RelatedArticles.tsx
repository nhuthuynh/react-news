import React, { FC, ReactElement, useState } from 'react';

import styles from './RelatedArticles.module.scss';

import ArticleList from '../../components/ArticleList';
import { IArticleItem } from '../../components/ArticleItem/ArticleItem';

const fakeDate: IArticleItem[] = [
    {
        date: '12 Sep, 2018',
        title: 'Love of learning, art keys to a great year for Gwen',
        description:
            'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enum, pulvinar lobortis nibh lacinia at. Vestibulum nec ert ut mi so',
        url: 'https://google.com.au'
    },
    {
        date: '28 Sep, 2018',
        title: 'Curious mind leads the way for career Jill',
        description:
            'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enum, pulvinar lobortis nibh lacinia at. Vestibulum nec ert ut mi so . Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enum, pulvinar lobortis nibh lacinia at. Vestibulum nec ert ut mi so. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enum, pulvinar lobortis nibh lacinia at. Vestibulum nec ert ut mi so',
        url: 'https://google.com.au'
    },
    {
        date: '10 Oct, 2018',
        title: 'Celebrating our volunteers',
        description:
            'Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enum, pulvinar lobortis nibh lacinia at. Vestibulum nec ert ut mi so. Curabitur lobortis id lorem id bibendum. Ut id consectetur magna.',
        url: 'https://google.com.au'
    }
];

const RelatedArticles: FC = (): ReactElement => {
    const [relatedArticles, setRelatedArticles] = useState<IArticleItem[]>(fakeDate);

    const showMoreArticles = () => {
        const newRelatedArticles: IArticleItem[] = [...relatedArticles, ...fakeDate];

        setRelatedArticles(newRelatedArticles);
    };

    return (
        <>
            <h3 className={`${styles.heading}`}>Related Articles</h3>
            <p>
                Lorem ipsum dolor sit amet, quo dolore constituam ea. Sed et fieent consulatu rationibus, aliquid sensibus ea sed.
                Et alterum dolorem eos, id usu audire accusamus uliamcorper.
            </p>
            <ArticleList items={relatedArticles} />
            <button type="button" className={`btn btn-outline-info ${styles.btn_readmore}`} onClick={showMoreArticles}>
                view more
            </button>
        </>
    );
};

export default RelatedArticles;
