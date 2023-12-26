import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-xl lg:flex">
        <h1
          className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b
         from-zinc-200 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 
         lg:p-4 dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:dark:bg-zinc-800/30"
        >
          Create <Link href="https://www.beto.dev.br">Bdev</Link> App
        </h1>
      </div>
    </div>
  )
}
