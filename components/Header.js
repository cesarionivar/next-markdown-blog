import Link from 'next/link';

export const Header = () => {
  return (
    <header>
      <div className='container'>
        <Link href='/' passHref>
          <h2>Dev Blog</h2>
        </Link>
      </div>
    </header>
  );
};
