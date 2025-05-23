"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [showHeart, setShowHeart] = useState(false);
  const [showSurprise, setShowSurprise] = useState(false);
  const [showingHearts, setShowingHearts] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);

  useEffect(() => {
    // Show heart animation after page loads
    const timer = setTimeout(() => {
      setShowHeart(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSurpriseClick = () => {
    setShowSurprise(true);

    // Hide floating hearts after animation
    setTimeout(() => {
      setShowingHearts(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)] text-pink-800 relative overflow-hidden">
      {/* Floating hearts background */}
      <div className="hearts-container absolute inset-0 pointer-events-none"></div>

      {/* Animated floating hearts that appear after clicking surprise */}
      {showingHearts && (
        <div className="floating-hearts-animation absolute inset-0 z-20 pointer-events-none"></div>
      )}

      <main className="max-w-6xl mx-auto h-auto md:h-[44rem] w-full flex flex-col md:flex-row items-center px-6 md:px-16 py-12 rounded-2xl shadow-lg backdrop-blur-sm bg-white/60 border border-pink-200 relative overflow-hidden z-10">
        {/* Animated flower */}
        <div className="flower absolute -bottom-10 -left-10 opacity-70"></div>
        <div className="flower absolute -top-10 -right-10 opacity-70"></div>

        {/* Flower bouquet that appears on surprise */}
        {showFlowers && (
          <div className="flower-bouquet absolute z-30 pointer-events-none"></div>
        )}

        <div className="h-64 w-64 md:h-[24rem] md:w-[24rem] rounded-full overflow-hidden relative border-8 border-pink-200 shadow-lg mb-8 md:mb-0 transition-all duration-700 hover:scale-105">
          <Image
            src={"/rishu.jpeg"}
            alt="Rishu Mandal"
            fill
            className="object-cover w-full h-full"
            priority
          />
        </div>

        <div className="h-auto md:h-[32rem] my-auto mx-auto md:ml-12 space-y-8 flex justify-center flex-col text-center md:text-left max-w-lg relative">
          <div
            className={`transition-opacity duration-1000 ${
              showHeart ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="heart-beat mx-auto md:mx-0 mb-6"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 drop-shadow-sm">
            Dear Rishu Mandal
          </h1>

          <p className="text-xl text-pink-700 italic">
            I wanted to make something special just for you...
          </p>

          <div className="prose prose-pink max-w-none">
            <p>
              Nothing I make, nothing I do can express how much you mean to me.
              You're my puku, meri pyari Rishu.
            </p>
            <p className="font-semibold mt-4">
              I love you more than words can express! ❤️
            </p>
          </div>

          {showSurprise ? (
            <div className="surprise-message bg-pink-100 border border-pink-300 p-6 rounded-xl shadow-inner animate-fadeIn absolute w-full duration-400">
              <div className="relative grid aspect-square w-[20rem]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative z-10 grid origin-center animate-spin-slow justify-self-center-safe duration-[4s,10s]">
                    <div className="mx-auto my-auto grid aspect-square grid-cols-3">
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] translate-y-12 -rotate-45 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] translate-y-9 rotate-0 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] translate-y-12 rotate-45 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] -translate-x-2 rotate-90 rounded-3xl bg-pink-400"></div>
                      <div className="z-10 aspect-square w-[2rem] place-self-center rounded-full bg-yellow-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] translate-x-2 rotate-90 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] -translate-y-[3rem] rotate-45 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] -translate-y-[2.5rem] rotate-0 rounded-3xl bg-pink-400"></div>
                      <div className="bottom-0 z-0 h-[5rem] w-[2rem] -translate-y-[3rem] -rotate-45 rounded-3xl bg-pink-400"></div>
                    </div>
                  </div>
                </div>
                <div className="mx-auto mt-auto h-[10rem] w-[8px] self-end bg-green-400"></div>
              </div>

              <h3 className="text-2xl font-bold text-pink-600 mb-4">
                My Special Message
              </h3>
              <p className="text-pink-700 mb-4">
                You make every day brighter just by being in it. Your smile,
                your laugh, your everything - you're the most precious gift in
                my life. Thank you for being my partner, my best friend, and my
                love.
              </p>
              <p>
                Sorry puku, I was really occupied so it never occured to me to
                give you chocolate or flowers but not anymore. Please accept
                this as my gift.
              </p>
              <p className="text-pink-700 font-bold">
                I promise to cherish every moment with you, Rishu. You are my
                everything. ❤️
              </p>
              <button
                className="bg-pink-600 mx-auto px-4 py-2 text-center text-white rounded-md mt-4"
                onClick={() => setShowSurprise(false)}
              >
                Close
              </button>
            </div>
          ) : (
            <button
              onClick={handleSurpriseClick}
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full shadow-md transition-all hover:scale-105 mx-auto md:mx-0 mt-4"
            >
              Click For A Surprise
            </button>
          )}
        </div>
      </main>

      <style jsx>{`
        .hearts-container {
          background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 17.9999C9.71527 17.9999 9.44077 17.8945 9.22682 17.7075C8.41574 16.9776 7.63763 16.2885 6.95805 15.674L6.94925 15.666C5.93123 14.7387 5.0925 13.9147 4.50418 13.1043C3.84991 12.1959 3.5 11.3418 3.5 10.4249C3.5 9.5372 3.80956 8.7177 4.36724 8.11884C4.93451 7.50633 5.70848 7.16667 6.54982 7.16667C7.16338 7.16667 7.70682 7.35663 8.17327 7.73354C8.41018 7.92769 8.62403 8.16382 8.81178 8.43553C8.90647 8.56793 9.04881 8.64584 9.20037 8.64584H10.7996C10.9512 8.64584 11.0935 8.56793 11.1882 8.43553C11.376 8.16382 11.5898 7.92769 11.8267 7.73354C12.2932 7.35663 12.8366 7.16667 13.4502 7.16667C14.2915 7.16667 15.0655 7.50633 15.6328 8.11884C16.1904 8.7177 16.5 9.5372 16.5 10.4249C16.5 11.3417 16.1501 12.1959 15.4958 13.1043C14.9075 13.9147 14.0688 14.7387 13.0509 15.6657L13.042 15.674C12.3624 16.2884 11.5843 16.9774 10.7732 17.7074C10.5592 17.8944 10.2847 17.9999 10 17.9999Z' fill='%23EC4899' fill-opacity='0.15'/%3E%3C/svg%3E");
          background-repeat: space;
          opacity: 0.7;
        }

        .heart-beat {
          width: 60px;
          height: 60px;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 17.9999C9.71527 17.9999 9.44077 17.8945 9.22682 17.7075C8.41574 16.9776 7.63763 16.2885 6.95805 15.674L6.94925 15.666C5.93123 14.7387 5.0925 13.9147 4.50418 13.1043C3.84991 12.1959 3.5 11.3418 3.5 10.4249C3.5 9.5372 3.80956 8.7177 4.36724 8.11884C4.93451 7.50633 5.70848 7.16667 6.54982 7.16667C7.16338 7.16667 7.70682 7.35663 8.17327 7.73354C8.41018 7.92769 8.62403 8.16382 8.81178 8.43553C8.90647 8.56793 9.04881 8.64584 9.20037 8.64584H10.7996C10.9512 8.64584 11.0935 8.56793 11.1882 8.43553C11.376 8.16382 11.5898 7.92769 11.8267 7.73354C12.2932 7.35663 12.8366 7.16667 13.4502 7.16667C14.2915 7.16667 15.0655 7.50633 15.6328 8.11884C16.1904 8.7177 16.5 9.5372 16.5 10.4249C16.5 11.3417 16.1501 12.1959 15.4958 13.1043C14.9075 13.9147 14.0688 14.7387 13.0509 15.6657L13.042 15.674C12.3624 16.2884 11.5843 16.9774 10.7732 17.7074C10.5592 17.8944 10.2847 17.9999 10 17.9999Z' fill='%23EC4899'/%3E%3C/svg%3E");
          animation: beat 1s ease infinite alternate;
        }

        @keyframes beat {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.2);
          }
        }

        .flower {
          width: 150px;
          height: 150px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150' viewBox='0 0 100 100'%3E%3Cg fill='%23EC4899'%3E%3Ccircle cx='50' cy='30' r='20' /%3E%3Ccircle cx='70' cy='50' r='20' /%3E%3Ccircle cx='50' cy='70' r='20' /%3E%3Ccircle cx='30' cy='50' r='20' /%3E%3Ccircle cx='50' cy='50' r='10' fill='%23FEF3C7' /%3E%3C/g%3E%3C/svg%3E");
          background-size: contain;
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .mini-heart {
          width: 30px;
          height: 30px;
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 17.9999C9.71527 17.9999 9.44077 17.8945 9.22682 17.7075C8.41574 16.9776 7.63763 16.2885 6.95805 15.674L6.94925 15.666C5.93123 14.7387 5.0925 13.9147 4.50418 13.1043C3.84991 12.1959 3.5 11.3418 3.5 10.4249C3.5 9.5372 3.80956 8.7177 4.36724 8.11884C4.93451 7.50633 5.70848 7.16667 6.54982 7.16667C7.16338 7.16667 7.70682 7.35663 8.17327 7.73354C8.41018 7.92769 8.62403 8.16382 8.81178 8.43553C8.90647 8.56793 9.04881 8.64584 9.20037 8.64584H10.7996C10.9512 8.64584 11.0935 8.56793 11.1882 8.43553C11.376 8.16382 11.5898 7.92769 11.8267 7.73354C12.2932 7.35663 12.8366 7.16667 13.4502 7.16667C14.2915 7.16667 15.0655 7.50633 15.6328 8.11884C16.1904 8.7177 16.5 9.5372 16.5 10.4249C16.5 11.3417 16.1501 12.1959 15.4958 13.1043C14.9075 13.9147 14.0688 14.7387 13.0509 15.6657L13.042 15.674C12.3624 16.2884 11.5843 16.9774 10.7732 17.7074C10.5592 17.8944 10.2847 17.9999 10 17.9999Z' fill='%23EC4899'/%3E%3C/svg%3E");
          animation: pulse 1s ease infinite alternate;
        }

        @keyframes pulse {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.3);
          }
        }

        .floating-hearts-animation {
          background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M10 17.9999C9.71527 17.9999 9.44077 17.8945 9.22682 17.7075C8.41574 16.9776 7.63763 16.2885 6.95805 15.674L6.94925 15.666C5.93123 14.7387 5.0925 13.9147 4.50418 13.1043C3.84991 12.1959 3.5 11.3418 3.5 10.4249C3.5 9.5372 3.80956 8.7177 4.36724 8.11884C4.93451 7.50633 5.70848 7.16667 6.54982 7.16667C7.16338 7.16667 7.70682 7.35663 8.17327 7.73354C8.41018 7.92769 8.62403 8.16382 8.81178 8.43553C8.90647 8.56793 9.04881 8.64584 9.20037 8.64584H10.7996C10.9512 8.64584 11.0935 8.56793 11.1882 8.43553C11.376 8.16382 11.5898 7.92769 11.8267 7.73354C12.2932 7.35663 12.8366 7.16667 13.4502 7.16667C14.2915 7.16667 15.0655 7.50633 15.6328 8.11884C16.1904 8.7177 16.5 9.5372 16.5 10.4249C16.5 11.3417 16.1501 12.1959 15.4958 13.1043C14.9075 13.9147 14.0688 14.7387 13.0509 15.6657L13.042 15.674C12.3624 16.2884 11.5843 16.9774 10.7732 17.7074C10.5592 17.8944 10.2847 17.9999 10 17.9999Z' fill='%23EC4899'/%3E%3C/svg%3E");
          animation: float-hearts 5s linear;
        }

        @keyframes float-hearts {
          0% {
            background-position: 0% 0%;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            background-position: 0% 100%;
            opacity: 0;
          }
        }

        /* Add animation for surprise message appearance */
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease forwards;
        }

        /* Flower bouquet animations */
        .flower-bouquet {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(0);
          width: 300px;
          height: 300px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 100 100'%3E%3Cg%3E%3Ccircle cx='50' cy='30' r='15' fill='%23EC4899' /%3E%3Ccircle cx='30' cy='40' r='15' fill='%23EC4899' /%3E%3Ccircle cx='70' cy='40' r='15' fill='%23EC4899' /%3E%3Ccircle cx='40' cy='55' r='15' fill='%23EC4899' /%3E%3Ccircle cx='60' cy='55' r='15' fill='%23EC4899' /%3E%3Crect x='45' y='65' width='10' height='30' fill='%2374AA50' /%3E%3C/g%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          animation: bouquet-appear 1s ease forwards;
          opacity: 0.9;
        }

        @keyframes bouquet-appear {
          0% {
            transform: translate(-50%, -50%) scale(0) rotate(-20deg);
            opacity: 0;
          }
          60% {
            transform: translate(-50%, -50%) scale(1.2) rotate(10deg);
          }
          100% {
            transform: translate(-50%, -50%) scale(1) rotate(0);
            opacity: 0.9;
          }
        }

        .flower-petals {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 20 20'%3E%3Ccircle cx='10' cy='10' r='5' fill='%23EC4899' fill-opacity='0.3' /%3E%3C/svg%3E");
          animation: petals-fall 7s linear infinite;
          opacity: 0.6;
        }

        @keyframes petals-fall {
          0% {
            background-position: 0px 0px;
            opacity: 0.6;
          }
          100% {
            background-position: 100px 100px;
            opacity: 0.2;
          }
        }

        .bouquet-flower {
          width: 40px;
          margin: 0 3px;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='100' viewBox='0 0 40 100'%3E%3Cg%3E%3Ccircle cx='20' cy='20' r='15' fill='%23EC4899' /%3E%3Crect x='18' y='30' width='4' height='70' fill='%2374AA50' /%3E%3C/g%3E%3C/svg%3E");
          background-size: contain;
          background-repeat: no-repeat;
          animation: grow-flower 1s ease forwards;
          transform-origin: bottom center;
          opacity: 0;
        }

        @keyframes grow-flower {
          0% {
            transform: scaleY(0);
            opacity: 0;
          }
          60% {
            transform: scaleY(1.2);
          }
          100% {
            transform: scaleY(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
