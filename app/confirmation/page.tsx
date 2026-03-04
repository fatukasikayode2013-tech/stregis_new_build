import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Suspense } from 'react';
import ConfirmationContent from './ConfirmationContent';

export const metadata = {
  title: 'Booking Confirmation - St. Regis',
  description: 'Your booking has been confirmed at St. Regis Hotel & Resort',
};

export default function ConfirmationPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <ConfirmationContent />
      </Suspense>
      <Footer />
    </>
  );
}