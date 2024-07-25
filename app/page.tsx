import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-between p-24">
            <div className="container hero">
                <div className="love flex gap-2 w-full justify-center items-center mb-8">
                    <div className="grow-1">
                        <Image
                            className="scalingo-logo"
                            alt="Scalingo"
                            src="https://scalingo.com/logo-lightgrey.svg"
                            width={330}
                            height={80}
                            priority
                        /></div>
                    <div>
                        <Image
                            className="heart-logo"
                            alt="love"
                            src="https://cdn.scalingo.com/documentation/heart.png"
                            width={80}
                            height={80}
                            priority
                        /></div>
                    <div  className="grow-1">
                        <Image
                            className="mt-[4px]"
                            alt="nextjs-logo"
                            src="/next.svg"
                            width={170}
                            height={140}
                            priority
                        />
                    </div>
                </div>
                <h1>Greetings from a sample Next.js app!</h1>
                <h2 className="mt-16 mb-12">
                    <span>Deploying your own Next.js app on Scalingo is as easy as pie. </span>
                    <div className="my-4">
                        <span>Click to deploy:</span>
                        <a className="btn"
                           href="https://my.osc-fr1.scalingo.com/deploy?source=https://github.com/Scalingo/sample-nextjs-standalone">
                            <Image
                                src="/click-to-deploy.svg"
                                alt="Scalingo click to deploy icon"
                                width={178}
                                height={40}
                                priority
                            />
                        </a>
                    </div>
                    <span className="block">It will be up in less than 2 minutes!</span>
                </h2>
                <p>The code of this sample lives <a
                    href="https://github.com/Scalingo/sample-nextjs-standalone">on GitHub</a>. You
                    can find <a href="https://samples.scalingo.com">more samples here</a>.</p>
            </div>
        </main>
    );
}
