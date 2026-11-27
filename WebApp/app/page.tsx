'use client';

import Search from '../dashboard/components/Search';
import Header from '../dashboard/components/Header';
import AppNavbar from '@/dashboard/components/AppNavbar';
import CustomDatePicker from '@/dashboard/components/CustomDatePicker';
export default function SimpleContainer() {
  return (
    <>
      <Header />
      <h1>Willkommen im Research Hub!</h1>
      <Search />
      
      <CustomDatePicker/>
      
    </>
  );
}
