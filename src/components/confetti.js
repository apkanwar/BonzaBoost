import { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import Link from 'next/link';
import Image from 'next/image';

export default function Confetti() {
  const canvasRef = useRef(null);

  const fireConfetti = (options) => {
    if (canvasRef.current) {
      const myConfetti = confetti.create(canvasRef.current, {
        resize: true,
        useWorker: true,
      });

      myConfetti(options);
    }
  };

  useEffect(() => {
    let toggle = true;

    const interval = setInterval(() => {
      if (toggle) {
        fireConfetti({
          particleCount: 100,
          spread: 60,
          origin: { x: 0.25, y: 0.7 },
        });
      } else {
        fireConfetti({
          particleCount: 100,
          spread: 60,
          origin: { x: 0.75, y: 0.7 },
        });
      }
      toggle = !toggle;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="absolute flex flex-col items-center justify-center w-full h-full gap-4">
        <h1 className="text-5xl text-center font-bold text-white bg-opacity-50 px-4 py-2 rounded-md font-headings">
          Congrats on your Successful Purchase!
        </h1>
        <Link href={'https://discord.gg/Bonzaboost'} target='_blank' className="p-2 hover:bg-artic-blue rounded-md mx-2 cursor-pointer transition ease-in duration-200">
          <Image src={'/discord.svg'} width={'56'} height={'56'} className='my-2.5' alt='Discord Icon' />
        </Link>
      </div>
    </div>
  );
}
