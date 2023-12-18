import image from '@assets/background.jpg';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col justify-center">
      <div className="grid items-center justify-items-center lg:grid-cols-2 lg:justify-items-end 2xl:mx-32">
        <div className="flex justify-center lg:col-start-2">
          <img src={image} className="w-3/5 md:w-2/5 lg:w-2/3" alt="wolf-background" width={737} height={678} />
        </div>

        <div className="mt-16 flex w-5/6 flex-col items-center text-center lg:col-start-1 lg:row-start-1 lg:items-start lg:text-left">
          <div className="text-5xl font-bold text-white lg:text-6xl xl:text-7xl">
            Chat with&nbsp;
            <p className="inline-block bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text  text-transparent">
              Wolfy
            </p>
          </div>
          <div className="mt-4 w-3/4  xl:w-3/5">
            <p className=" text-md font-semibold text-gray-400 lg:text-lg">
              Immerse yourself in lively conversations and connect with people from around the world.
            </p>
          </div>
          <div className="mt-10">
            <button
              onClick={() => navigate('/posts')}
              className="w-36 rounded-3xl bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] p-0.5 text-center font-semibold text-white lg:w-56"
            >
              <div className="rounded-3xl bg-black transition duration-200 ease-in-out hover:shadow-md hover:shadow-[#FB9D1F]">
                <span className="inline-block rounded-3xl bg-gradient-to-r from-[#FB9D1F] to-[#1C5C75] bg-clip-text p-2.5 text-transparent">
                  Lunch app
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
