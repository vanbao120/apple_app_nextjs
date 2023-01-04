import { GetServerSideProps } from 'next'
import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import ListProduct from '../components/ListProduct'
import { fetchCategories } from '../utils/fetchCategories'
import { fetchProducts } from '../utils/fetchProducts'

type Props = {
    categories: Category[],
    products: Product[],
}

const product = ({ categories, products }: Props) => {
    return (
        <>
            <Head>
                <title>Apple Redesign</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className='relative bg-[#E7ECEE]'>
                <ListProduct categories={categories} products={products} />
            </main>
        </>
    )
}

export default product

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories = await fetchCategories()
    const products = await fetchProducts();

    return {
        props: {
            categories,
            products,
        },
    }
}