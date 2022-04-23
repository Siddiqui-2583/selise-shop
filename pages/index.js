import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout/Layout';
import Navbar from '../components/Navbar/Navbar';
import styles from '../styles/Home.module.css'
import Product from './shop/product';

export default function Home() {
  return (
      <Product />
  );
}
