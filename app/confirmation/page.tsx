import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ConfirmationContent from './ConfirmationContent';

export const metadata = {
  title: 'Booking Confirmation - St. Regis',
  description: 'Your booking has been confirmed at St. Regis Hotel & Resort',
};

export default function ConfirmationPage() {
  return (
    <>
      <Navbar />
      <ConfirmationContent />
      <Footer />
    </>
  );
}