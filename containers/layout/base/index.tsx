import { PropsWithChildren } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export default function LayoutBase(props: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className='my-5 flex flex-col items-center flex-1'>{props.children}</main>
      <Footer />
    </>
  );
}
