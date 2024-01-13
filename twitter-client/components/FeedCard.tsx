import Image from 'next/image';
import { BiMessageRounded, BiUpload } from 'react-icons/bi';
import { FaRetweet } from 'react-icons/fa6';
import { AiOutlineHeart } from 'react-icons/ai';

const FeedCard = () => {
  return (
    <div className="border border-l-0 border-r-0 border-b-0 border-gray-600 p-5 hover:bg-slate-900 transition-all cursor-pointer">
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-1">
          <Image
            src="https://avatars.githubusercontent.com/u/81709725?v=4"
            alt="user-icon"
            height={50}
            width={50}
          />
        </div>
        <div className="col-span-11">
          <h5>Saket Kothari</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis modi
            nulla natus. Veniam nam, quasi obcaecati nemo nulla deserunt beatae?
          </p>

          <div className="flex justify-between items-center p-2 mt-5 w-[90%]">
            <div>
              <BiMessageRounded />
            </div>
            <div>
              <FaRetweet />
            </div>
            <div>
              <AiOutlineHeart />
            </div>
            <div>
              <BiUpload />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
