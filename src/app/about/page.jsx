import React from 'react';

const page = () => {
    return (
        <div className="bg-black text-white h-screen py-12 ">
          <div className="flex items-center justify-around">
            <h1 className="text-4xl font-bold mb-12">This is About page</h1>

          </div>

          <div className="grid grid-cols-4 gap-6">
            <div className="w-96 h-52 bg-red-400"></div>
            <div className="w-96 h-52 bg-red-400"></div>
            <div className="w-96 h-52 bg-red-400"></div>
            <div className="w-96 h-52 bg-red-400"></div>
            <div className="w-96 h-52 bg-red-400"></div>
          </div>
        </div>
    );
};

export default page;