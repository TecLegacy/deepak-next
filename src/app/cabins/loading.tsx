import Spinner from '@/components/Spinner';

export default function Loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <p>Cabins are being loaded 🛖</p>
      <Spinner />
    </div>
  );
}
